var lessonIndex = 0;
var pageIndex = 0;
var lessons = [];
var slides = [];

$(function() {
  initialize();

  function initialize() {
    $.get('lessons/python/lessons.json')
      .then(function(data) {
        lessons = data;
        lessonIndex = 1;
        restoreHashLocation();
      });
  }

  function restoreHashLocation() {
    if (location.hash) {
      var path = location.hash.slice(1).split('/');
      if (path.length === 1) {
        lessonIndex = _.findIndex(lessons, function(l) { return l.path === path[0] });
        startLesson();
      } else if (path.length === 2) {
        lessonIndex = _.findIndex(lessons, function(l) { return l.path === path[0] });
        pageIndex = Number(path[1]);
        console.log('lessonIndex', lessonIndex, 'pageIndex', pageIndex);
        startLesson();
      } else {
        throw new Error('Invalid path: ' + location.hash);
      }
    } else {
      listLessons();
    }
  }

  $(window).on('hashchange', function() {
    restoreHashLocation();
  });

  function listLessons() {
    var markup = '<ul>' + lessons.map(function(lesson) {
      return '<li><a href="#' + lesson.path + '">' + lesson.title + '</a></li>';
    }).join('') + '</ul>';
    $('#lesson-list').html(markup);
  }

  function startLesson() {
    var lesson = lessons[lessonIndex];
    $.get('lessons/python/' + lesson.path + '/presentation.md')
      .then(function(md) {
        var html = markdownRender(md);
        slides = splitSlides(html);
        showCurrentSlide();
      });
  }

  $('#next-button').click(advanceSlide);
  $(window).on('keydown', function(evt) {
    if (evt.keyCode === 39 || evt.keyCode === 40) {
      advanceSlide();
    } else if (evt.keyCode === 37 || evt.keyCode === 38) {
      retreatSlide();
    }
  });
  $('#previous-button').click(retreatSlide);

  function advanceSlide() {
    if (pageIndex < slides.length - 1) {
      pageIndex++;
      updateSlide();
    }
  }

  function retreatSlide() {
    if (pageIndex > 0) {
      pageIndex--;
      updateSlide();
    }
  }

  function updateSlide() {
    var lesson = lessons[lessonIndex];
    location.hash = lesson.path + '/' + pageIndex;
  }

  function showCurrentSlide() {
    $('#slide-contents .tooltip').tooltipster('close');
    var page = slides[pageIndex];
    $('#slide-contents')
      .html(page.slide)
      .find('.tooltip')
        .tooltipster({
          delay: 0,
          animationDuration: 0
        })
        .tooltipster('open');
    $('#speaker-notes')
      .html(page.speakerNotes);
    $('#page-number').text(pageIndex + 1);
    $('#total-page-number').text(slides.length);
  }

  function markdownRender(md) {
    md = preprocess(md);
    var html = markdownit({
      html: true
    }).render(md);
    html = postprocess(html);
    return html;
  }

  function preprocess(md) {
    return md;
  }

  function postprocess(md) {
    md = md.replace(/\[\[((?:.|[\n])*?)\]\]\[\[(.*?)\]\]/g, '<span title="$2" class="tooltip">$1</span>');
    return md;
  }

  function splitSlides(html) {
    var parts = html.split(/\<hr\>/g);
    var pages = [];
    for (var i = 0; i < parts.length; i+=2) {
      pages.push({
        slide: parts[i],
        speakerNotes: parts[i + 1]
      });
    }
    return pages;
  }
});
