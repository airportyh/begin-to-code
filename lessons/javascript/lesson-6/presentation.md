# jQuery 301

---
Welcome back! Welcome back for me too! I've been out on vacation.

In this lesson, you'll learn when and why you'd want to prevent
certain default browser behaviors, how to work with forms using jQuery.
***************************************************************
## Prevent Default

```html
<h1>Useful Resources</h1>
<ul id="useful-links">
  <li><a href="http://google.com">Google</a></li>
  <li><a href="https://www.wikipedia.org/">Wikipedia</a></li>
  <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
</ul>
```

![Links](./lessons/javascript/lesson-6/images/links.png)

---
You have some useful links on your website, but rather than navigating
to the linked website immediately when your users click them, you want
to do something slightly different, or something *entirely*
different.
***************************************************************
## Prevent Default

```html
<h1>Useful Resources</h1>
<ul id="useful-links">
  <li><a href="http://google.com">Google</a></li>
  <li><a href="https://www.wikipedia.org/">Wikipedia</a></li>
  <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
</ul>
```

```js
$("#useful-links a").on("click", function() {
  // do some stuff
});
```

---
So, you add a jQuery event handler to listen for clicks on any of
these links.
***************************************************************
## Prevent Default

```html
<h1>Useful Resources</h1>
<ul id="useful-links">
  <li><a href="http://google.com">Google</a></li>
  <li><a href="https://www.wikipedia.org/">Wikipedia</a></li>
  <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
</ul>
```

```js
$("#useful-links a").on("click", function([[event]][[Event object]]) {
  // do some stuff
});
```

---
But now, you introduce an `event` parameter to the handler function.
This parameter will receive an *event object* which represents the click
event that happens. It contains information that is related to the click
event, such as its type name, which mouse button it was, the coordinate of
the pointer when the click happened, the element that was clicked, and more.
***************************************************************
## Prevent Default

```html
<h1>Useful Resources</h1>
<ul id="useful-links">
  <li><a href="http://google.com">Google</a></li>
  <li><a href="https://www.wikipedia.org/">Wikipedia</a></li>
  <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
</ul>
```

```js
$("#useful-links a").on("click", function(event) {
  [[event.preventDefault();]][[Prevent default browser behavior]];
  // do some stuff
});
```

---
It also has a method for preventing the default way in which the browser
responds to the click: `preventDefault()`.

In this case --- for a link --- the default behavior of the browser
in response to a click is to navigate to the URL of the link. This call
to `preventDefault()` prevents that, and as a result, the browser
remains on this page, and it is as if nothing happened. In effect,
we have broken the links.

What can you do with this?
***************************************************************
## Prevent Default

```html
<h1>Useful Resources</h1>
<ul id="useful-links">
  <li><a href="http://google.com">Google</a></li>
  <li><a href="https://www.wikipedia.org/">Wikipedia</a></li>
  <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
</ul>
```

```js
$("#useful-links a").on("click", function(event) {
  event.preventDefault();
  alert("You think you can leave my website that easily???");
});
```

---
Maybe you taunt them for wanting to leave your website.
***************************************************************
## Prevent Default

```html
<h1>Useful Resources</h1>
<ul id="useful-links">
  <li><a href="http://google.com">Google</a></li>
  <li><a href="https://www.wikipedia.org/">Wikipedia</a></li>
  <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
</ul>
```

```js
$("#useful-links a").on("click", function(event) {
  event.preventDefault();
  var really = confirm("Really leave my website?");
  if (really) {
    var url = $(this).attr("href");
    document.location = url;
  }
});
```

---
Or maybe you give them a chance to reconsider.

This piece of code:

1. Prevents the default behavior.
2. Asks the user to confirm by clicking either "Ok" or "Cancel".
3. If the user clicked "Ok"
    1. It gets the `href` attribute of the link that was clicked.
    2. Navigates to browser to that location by setting `document.location` to the `href`.
***************************************************************
## Prevent Default

```html
<h1>Useful Resources</h1>
<ul id="useful-links">
  <li><a href="http://google.com">Google</a></li>
  <li><a href="https://www.wikipedia.org/">Wikipedia</a></li>
  <li><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></li>
</ul>
```

```js
$("#useful-links a").on("click", function(event) {
  event.preventDefault();
  document.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
```

---
An even better idea is to send them to Rick Astley's video.

Try running one of these code examples and clicking on the links
for yourself to see what happens.
***************************************************************
## Events you can `preventDefault()`

* Links (a elements): `click` event to navigate
* Forms: `submit` event to submit and navigate
* Form inputs: `mousedown` event to focus

---
Here are some events for which there is a browser default behavior
that you can prevent, if you wanted to.
***************************************************************
## Forms

```html
<form action="submit.php">
  <!-- Put some form elements here -->
</form>
```

---
This is a form element. Within it, you can put any number of
form elements whose purpose is to take user input in some way.
***************************************************************
## Form Elements

* Text Input: `<input type="text">`
* Password Input: `<input type="password">`
* Text Area: `<textarea></textarea>`
* Select Box: `<select>...</select>`
* Checkbox: `<input type="checkbox">`
* Radio Button: `<input type="radio">`
* Submit Button: `<button type="submit">Submit</button>`

---
These are the form elements that you will commonly use.
***************************************************************
## Forms

```html
<form action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

---
Let's take this form as an example.
***************************************************************
## Forms

```html
<form [[action="submit.php"]][[What page to submit form to]]>
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

---
Notice that the form has an `action` attribute.
This action attribute is somewhat like the `href` attribute
of `<a>` elements. It contains an URL. When the form is submitted,
the browser will navigate to that URL while submitting the
data entered by the user.
***************************************************************
## Forms

```html
<form [[[id="name-form"]]] action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

---
Let's add an ID to this form.
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on("submit", function(event) {

});
```

---
Then we'll add an event handler to listen to the `submit` event
for this form.
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on([["submit"]][[Submit event]], function(event) {

});
```

---
The form element has a special `submit` event, which will
trigger when one of the following happens:

1. A submit button in the form has been clicked.
2. The ENTER key was typed within a text input in the form.
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on("submit", function(event) {
  [[[event.preventDefault();]]]
});
```

---
Within this event handler, the first thing we'll do is
 `preventDefault()`, which prevents the browser from
navigating away and submitting the form.

As with the links, we are turning off the default behavior
of the event, and then adding our own custom behavior.

Now, what should we do with it?
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=user_name]").val();
  alert("Hello, " + name + "!");
});
```

---
Let's say a greeting to the user.
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on("submit", function(event) {
  event.preventDefault();
  [[[var name = $("[name=user_name]").val();]]]
  alert("Hello, " + name + "!");
});
```

---
We'll start by getting his name.
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on("submit", function(event) {
  event.preventDefault();
  var name = [[[$("[name=user_name]")]]].val();
  alert("Hello, " + name + "!");
});
```

---
This CSS selector finds the input element we want. It uses
an attribute selector: `[attribute=value]`, which
matches an element where the value of the specified attribute
matches the provide attribute.
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  [[<input type="text" name="user_name">]][[This matches]]
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on("submit", function(event) {
  event.preventDefault();
  var name = [[[$("[name=user_name]")]]].val();
  alert("Hello, " + name + "!");
});
```

---
In this case, our attribute selector: `[name=user_name]` matches
this text input element.
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=user_name]")[[.val()]][[Get its value]];
  alert("Hello, " + name + "!");
});
```

---
Then we use the `.val()` method to get the text input's value,
and store it in a variable called `name`.
***************************************************************
## Forms

```html
<form id="name-form" action="submit.php">
  <label>What's your name?</label>
  <input type="text" name="user_name">
  <button type="submit">Submit</button>
</form>
```

```js
$("#name-form").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=user_name]").val();
  [[[alert("Hello, " + name + "!");]]]
});
```

---
Lastly, we use the `alert` function to show them a greeting.
***************************************************************
## Form submit vs Button click

* Form `submit` event
    * Handles ENTER to submit
* Button `click` event
    * No need to prevent default

---
Why did we use the `submit` event of the form? Wouldn't it
suffice to listen for `click` events on the submit button?

The advantage listening for submit button clicks is you
don't have to `preventDefault()`.
The disadvantage of that is it doesn't handle hitting
in a text input ENTER to submit.
***************************************************************
## Text Inputs

```html
<input type="text" name="your_name">
```

Read value:
```js
var value = $("[name=your_name]").val();
```

Set value:
```js
$("[name=your_name]").val("Ling");
```
---
Now, let's cover how to use the common form elements.

First, a text input. As we've already covered in a previous
lesson, you can get or set a text input's value by using
it's `.val()` method.

In the example, we are selecting the element again
using an attribute selector.
***************************************************************
## Password Inputs

```html
<input type="password" name="secret">
```

Read value:
```js
var superSecret = $("[name=secret]").val();
```

Set value:
```js
$("[name=secret]").val("open sesame");
```

---
The exact same treatment can be applied to the password input.
***************************************************************
## Text Areas

```html
<textarea name="comments"></textarea>
```

Read value:
```js
var comments = $("[name=comments]").val();
```

Set value:
```js
$("[name=comments]").val("jQuery is pretty sweet!");
```

---
The same is also true for text areas.
***************************************************************
## Text Areas

```html
<textarea name="comments">[[</textarea>]][[Closing tag required]]
```

Read value:
```js
var comments = $("[name=comments]").val();
```

Set value:
```js
$("[name=comments]").val("jQuery is pretty sweet!");
```

---
*Note: when you are using text areas, make sure you remember
to match a closing tag after the opening tag.*
***************************************************************
## Select Boxes

```html
<select name="flavor">
  <option value="1">Strawberry</option>
  <option value="2">Lemonade</option>
  <option value="3">Mango</option>
</select>
```

---
With a `select` element,
***************************************************************
```html
<select name="flavor">
  <option value="1">Strawberry</option>
  <option value="2">Lemonade</option>
  <option value="3">Mango</option>
</select>
```

Read value:
```js
var selectedFlavor = $("[name=flavor]").val();
```

Set value:
```js
$("[name=flavor]").val("3");
```

---
You still use the `.val()` method to either read or write
to the value of the element.
***************************************************************
```html
<select name="flavor">
  <option value="1">Strawberry</option>
  <option value="2">Lemonade</option>
  <option value="3">Mango</option>
</select>
```

![Select Box](./lessons/javascript/lesson-6/images/select-box.png)

Read value:
```js
var [[selectedFlavor]][["1"]] = $("[name=flavor]").val();
```

---
The value is equal to the `value` attribute
of the option that is currently selected.
***************************************************************
```html
<select name="flavor">
  <option value="1">Strawberry</option>
  <option value="2">Lemonade</option>
  <option value="3">Mango</option>
</select>
```

Set value:
```js
$("[name=flavor]").val([["4"]][[Non-existent option value]]);
```

![Unselected](./lessons/javascript/lesson-6/images/unselected.png)

---
Note that when setting the value of the select box, if
the supplied value is not the value of one of the
existing option elements within the select box, it will
put the select box in an "unselected" state, in which none
of the options are selected.
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
<input type="radio" name="gender" value="male">
<label>Male</label>
<input type="radio" name="gender" value="female">
<label>Female</label>
```

---
This is how you mark up basic radio buttons.

One thing to notice is that both of the male and female
radio buttons have the same "name" attribute: gender. This
puts them in the same *radio button group*. You can have
any number of radio buttons within a radio button group.
Only one radio button within a group can be selected at
at moment.
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
<input type="radio" name="gender" value="male">
<label>Male</label>
<input type="radio" name="gender" value="female">
<label>Female</label>
```

*Don't* do this:
```js
var gender = $("[name=gender]").val();
```

---
With radio buttons, you cannot simply use an attribute
selector and then `.val()` to get the value as with other
form elements.
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
[[[<input type="radio" name="gender" value="male">]]]
<label>Male</label>
[[[<input type="radio" name="gender" value="female">]]]
<label>Female</label>
```

*Don't* do this:
```js
var gender = $([["[name=gender]"]][[Attribute selector]]).val();
```

---
This is because this one attribute selector selects
both of the radio inputs.

If the jQuery selection contains multiple elements, as is
the case for this example, the [.val() method](http://api.jquery.com/val/) will only
return the value for the first element, and in this case,
it means it will always return "male", even if the female
checkbox is selected.
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
<input type="radio" name="gender" value="male">
<label>Male</label>
<input type="radio" name="gender" value="female">
<label>Female</label>
```

Read value for selected radio button:
```js
var gender = $("[name=gender]:checked").val();
```

---
Instead, this is how you need to read the value for the selected
radio button,
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
<input type="radio" name="gender" value="male">
<label>Male</label>
<input type="radio" name="gender" value="female">
<label>Female</label>
```

Read value for selected radio button:
```js
var gender = $("[name=gender][[:checked]][[Special selector]]").val();
```

---
by adding the special `:checked` pseudo-class selector.

[:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) is a special CSS selector which matches only the elements
that are currently checked --- it applies only to radio buttons and
checkboxes.

Thus, in this case, it will return
which ever of the gender radio buttons that is currently checked.
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
<input type="radio" name="gender" value="male">
<label>Male</label>
<input type="radio" name="gender" value="female">
<label>Female</label>
```

Read value for selected radio button:
```js
var gender = $("[name=gender]:checked")[[.val()]][[Gets value]];
```

---
Once the checked radio button has been fetched, the `.val()`
method then reads its value and returns it. In this example,
it will either be: "male", "female", or undefined --- in the
case that neither of the radio buttons have been selected.
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
<input type="radio" name="gender" value="male">
<label>Male</label>
<input type="radio" name="gender" value="female">
<label>Female</label>
```

Write value:
```js
$("[name=gender][value=male]").prop("checked", true);
```

---
To change the value of a group of radio buttons, you need
to do this: `$("[name=gender][value=male]").prop("checked", true);`.

Wait a minute! What is this craziness???
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
<input type="radio" name="gender" value="male">
<label>Male</label>
<input type="radio" name="gender" value="female">
<label>Female</label>
```

Write value:
```js
$([["[name=gender][value=male]"]][[Double attribute selector]]).prop("checked", true);
```

---
First, to find the radio button we want to check,
we need a CSS selector that selects that radio button without
selecting the other one.

Here, I've come up with the double attribute selector
`[name=gender][value=male]`. This says that the element
to be returned must both have the "name" attribute be
"gender" *and* the "value" attribute be "male".
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
[[<input type="radio" name="gender" value="male">]][[The male radio button]]
<label>Male</label>
<input type="radio" name="gender" value="female">
<label>Female</label>
```

Write value:
```js
$([["[name=gender][value=male]"]][[Double attribute selector]]).prop("checked", true);
```

---
The first radio button satisfies that.
***************************************************************
## Radio Buttons

```html
<label>Gender: </label>
<input [[[id="male-button"]]] type="radio" name="gender" value="male">
<label>Male</label>
<input [[[id="female-button"]]] type="radio" name="gender" value="female">
<label>Female</label>
```

Write value:
```js
$([["#male-button"]][[ID selector]]).prop("checked", true);
```

---
An alternative way of doing this is to simply give each
radio button its own ID, and then select the one we want
to change based on its ID.

Which scheme you want to use is up to you.
***************************************************************
## The prop method

Read a property:
```js
$(...).prop(propertyName)
```

Write a property:
```js
$(...).prop(propertyName, propertyValue);
```
---
Now we need to talk about the `prop` method.

The `.prop()` method either gets the value of a property
on a DOM element or sets a property of a
DOM element to the specified value.

It takes the property
name as the first argument. If the second argument
 `propertyValue` is not provided, it is a get, otherwise
 it is a set, and it sets value of the property to `propertyValue`.
***************************************************************
## The prop method

```js
$("#male-button").prop("checked", true);
```

---
This code sets the `checked` property on a radio
button to the value `true`. The `checked` property
is a boolean property specific to radio and checkbox inputs.
***************************************************************
## Checkboxes

```html
<label>Takeout</label>
<input type="checkbox" name="takeout">
```

---
Let's move on to checkboxes. This is a label and
a checkbox input. A checkbox represents a boolean value
which can either be `true` or `false`. This is exactly
the value in the `checked` property of the checkbox
input.
***************************************************************
## Checkboxes

```html
<label>Takeout</label>
<input type="checkbox" name="takeout">
```

```js
var takeout = $("[name=takeout]").prop("checked");
```

---
We can get the value of the checkbox in this way --- again
with the `.prop()` method like so.
***************************************************************
## Checkboxes

```html
<label>Takeout</label>
<input type="checkbox" name="takeout">
```

```js
$("[name=takeout]").prop("checked", true);
```

---
And we can set its value this way.
***************************************************************
![Math Quiz](./lessons/javascript/lesson-6/images/math-quiz.png)

---
As an example that puts all of this together, let's build this
math quiz.
***************************************************************
## Math Quiz Example

```html
<form id="math-quiz">

  <label>Your name</label><br>
  <input type="text" name="name"><br>

  <label>What is 4 + 5?</label><br>
  <input type="radio" name="question-2" value="5">
  <label>5</label><br>
  <input type="radio" name="question-2" value="7">
  <label>7</label><br>
  <input type="radio" name="question-2" value="9">
  <label>9</label><br>
  <input type="radio" name="question-2" value="12">
  <label>12</label><br>

  <label>What is 8 - 3?</label><br>
  <select name="question-3">
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
  </select><br>

  <label>6 - 4 = 2: Is this right?</label>
  <input type="checkbox" name="question-4"><br>

  <button type="submit">Submit</button>

</form>
```
---
This is the HTML code for the form (scroll to the bottom to
  see all of it.)

It has:

* a form
* a text input for the name of the quiz taker
* a question as a set of radio buttons
* a question as a select box
* a question as a checkbox
* a submit button

We will write the code necessary to grade this quiz when
the form is submitted.

Please give this a try on your own. When you are done,
go to the next slide for the solution.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1]:checked").val();
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]").prop("checked");
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
This is the solution.
***************************************************************
## JS Solution

```js
[[[$("#math-quiz").on("submit", function(event) {]]]
  event.preventDefault();
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1]:checked").val();
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]").prop("checked");
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
[[[});]]]
```

---
First we need to register an event handler to listen
to submit events on the form.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  [[event.preventDefault();]][[Prevent the browser from submitting]]
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1]:checked").val();
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]").prop("checked");
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
The first thing we need to do is to prevent the browser
from submitting the form, if we didn't do this, the browser
would refresh the page, and non of the following JavaScript
code would make any difference.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  [[var name = $("[name=name]").val();]][[Value from text input]]
  var answer1 = $("[name=question-1]:checked").val();
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]").prop("checked");
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
Next, we need to grab values out of the form elements.

First, we get the value from a text input using the `.val()` method.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=name]").val();
  [[var answer1 = $("[name=question-1]:checked").val();]][[From radio button]]
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]").prop("checked");
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
Then, we get the value of the currently selected radio button.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1][[:checked]][[Specifies the checked radio button]]").val();
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]").prop("checked");
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
Since this is from a radio button group, we need to use the
`:checked` pseudo class to specify the checked radio button, and
get the value from that button.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1]:checked").val();
  [[var answer2 = $("[name=question-2]").val();]][[From select box]]
  var answer3 = $("[name=question-3]").prop("checked");
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
Then, we get the selected value from a select box, which is
straight forward, using only the `.val()` method.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1]:checked").val();
  var answer2 = $("[name=question-2]").val();
  [[var answer3 = $("[name=question-3]").prop("checked");]][[Checked boolean from checkbox]]
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
Lastly, we get the "checked" value of the check box.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1]:checked").val();
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]")[[.prop("checked")]][[Get value of checked property]];
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
To do this we need to use the `.prop()` method to get the value
of its "checked" property.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1]:checked").val();
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]").prop("checked");
  [[var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }]][[Tally the score]]
  alert("Good job, " + name + "! You got " + score + " out of 3!");
});
```

---
After all of the answers have been gotten, we use an if statement
to check each answer, and tally the score.
***************************************************************
## JS Solution

```js
$("#math-quiz").on("submit", function(event) {
  event.preventDefault();
  var name = $("[name=name]").val();
  var answer1 = $("[name=question-1]:checked").val();
  var answer2 = $("[name=question-2]").val();
  var answer3 = $("[name=question-3]").prop("checked");
  var score = 0;
  if (answer1 === "9") {
    score++;
  }
  if (answer2 === "5") {
    score++;
  }
  if (answer3) {
    score++;
  }
  [[alert("Good job, " + name + "! You got " + score + " out of 3!");]][[Announce the score]]
});
```

---
And finally, announce the score.
***************************************************************
## Summary

* prevent default
* form submit event
* text input
* password input
* select boxes
* radio buttons
* checkboxes

---
This is what you've learned in this lesson.
***************************************************************
## Homework

[Homework](https://gist.github.com/airportyh/19147f8fd3ac3db07b860bfabe4752d6)

---
Enjoy your homework.
