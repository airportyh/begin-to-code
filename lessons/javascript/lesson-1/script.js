var phrase = prompt("Type a phrase: ");

var words = phrase.split(" ");
var resultWords = [];
words.forEach(function(word) {
    var letters = word.split("");
    var reversed = "";
    letters.forEach(function(letter) {
        reversed = letter + reversed;
    });
    resultWords.push(reversed);
});

var result = resultWords.join(" ");
console.log(result);
