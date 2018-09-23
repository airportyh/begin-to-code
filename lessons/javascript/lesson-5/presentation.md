# jQuery 201

---
Welcome back! In this lesson you'll learn how to use
jQuery to work with text inputs, show and hide elements,
generate new elements, and event delegation.
***********************************************************
# Section 1
## Text Inputs, Hide and Show

---
***********************************************************
## Text Inputs

```html
<label>What's your name?</label>
<input id="name-input" name="your-name" type="text">
<button id="submit-button">Submit</button>
```

---
First, let's learn how to work with a text input.
***********************************************************
## Text Inputs

```html
<label>What's your name?</label>
[[<input id="name-input" type="text">]][[Text input]]
<button id="submit-button">Submit</button>
```

---
This is a text input element. It has an id of "name-input", so
that we can use an ID selector to grab it in jQuery. It also
has a type attribute with the value of "text", which tells
the browser that this is a type input, and not a
checkbox or radio button.
***********************************************************
## Text Inputs: Initial Value

```html
<label>What's your name?</label>
<input id="name-input" type="text" [[value="Beppo"]][[Initial value]]>
<button id="submit-button">Submit</button>
```

---
If you want to set the initial value of the text inside the text input,
we can also set the value attribute. Here we have written the name of
"Beppo" inside the text input.

But this only sets the initial value of the text input. This value can
be changed by the user.
***********************************************************
## Text Inputs: Get Current Value

```js
$("#name-input").val()
```

---
We can get the current value of the text input using this line of jQuery,
***********************************************************
## Text Inputs: Get Current Value

```js
[[$("#name-input")]][[Get text input by ID]].val()
```

---
which first gets the text input by its ID: "name-input", then...
***********************************************************
## Text Inputs: Get Current Value

```js
$("#name-input")[[.val()]][[Get value of text input]]
```

---
calls the `val` method --- which is short for value --- to get its
current value.
***********************************************************
## Text Inputs: Get Current Value

```html
<label>What's your name?</label>
<input id="name-input" type="text" value="Beppo">
<button id="submit-button">Submit</button>
```

---

Now, we'd like to say a greeting to the user using
the `alert` function when the submit button is clicked.
You can grab the name of the user from the value of the
 `#name-input` element.

Give this a try! When you are done, turn to the next slide
for the solution.
***********************************************************
## Solution

```html
<label>What's your name?</label>
<input id="name-input" type="text" value="Beppo">
<button id="submit-button">Submit</button>
```

```js
$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  alert("Hello, " + name + "!");
});
```

---
This is the solution.
***********************************************************
## Solution

```html
<label>What's your name?</label>
<input id="name-input" type="text" value="Beppo">
<button id="submit-button">Submit</button>
```

```js
[[[$("#submit-button").on("click", function() {]]]
  var name = $("#name-input").val();
  alert("Hello, " + name + "!");
[[[});]]]
```

---
We register an event handler to listen for click events
on the submit button.
***********************************************************
## Solution

```html
<label>What's your name?</label>
<input id="name-input" type="text" value="Beppo">
<button id="submit-button">Submit</button>
```

```js
$("#submit-button").on("click", function() {
  [[var name = $("#name-input").val();]][[Get current text input value]]
  alert("Hello, " + name + "!");
});
```

---
When the submit button is clicked, we first get the current value
of the text input and save it into the `name` variable.
***********************************************************
## Solution

```html
<label>What's your name?</label>
<input id="name-input" type="text" value="Beppo">
<button id="submit-button">Submit</button>
```

```js
$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  [[alert("Hello, " + name + "!");]][[Alerts "Hello, YOUR_NAME!"]]
});
```

---
Then we compose a greeting and use the alert function to show it to the
user.
***********************************************************
## Solution

```html
<label>What's your name?</label>
<input id="name-input" type="text" value="Beppo">
<button id="submit-button">Submit</button>
```

```js
$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  alert("Hello, " + name + "!");
});
```

---
This hello program works. However, in general, using the `alert`
function to popup a message in a web page is often considered bad form
because

1. It forces the user to click on something in order to continue, and
2. The popup dialog cannot be styled.
***********************************************************
## Hello Beppo: Version 2

1. Does not use alert popup
2. Displays greeting on page

---
So, we'd like to write version 2 of this program that does not
use an alert popup, and instead displays the greeting on the page.
***********************************************************
## Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>
```

---
We could use this HTML structure to to that.

We will simulate having 2 different pages with in this one web page.
***********************************************************
## Hello Beppo: Version 2

```html
[[<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>]][[Ask Name Page]]
<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>
```

---
Let's say this is the "Ask Name Page". A `div` element --- a division, as it were ---
is used to house the the `label`, `input`, and `button` elements
we had from the previous version of the program. And we give this `div`
element an ID of `ask-name-page`.
***********************************************************
## Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
[[<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>]][[Greeting Page]]
```

---
And we have the "Greeting Page". Which contains the greeting as well
as a "Play Again" button.
***********************************************************
## Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
<div id="greeting-page">
  Hello, [[<span id="name-display">Beppo</span>]][[Display Name]]!
  <button id="again-button">Play Again</button>
</div>
```

---
The name within the greeting is housed with in a `span` element. This
is for convenience --- so that when we update the name, we only need
to update the text within this element.
***********************************************************
## Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>
```

---
Now, how can we simulate having 2 pages? By always have one of the pages
hidden!
***********************************************************
## Hide and Show

To hide an element:
```js
$(...).hide();
```

To show a hidden element:
```js
$(...).show();
```

---
To hide and show an element, you first get the element out from the web page
using a CSS selector as you've done before, and then call either the `hide` or
the `show` method.

***********************************************************
## Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
[[<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>]][[Hide this element]]
```

```js
$("#greeting-page").hide();
```

---
To implement *Hello Beppo: Version 2*, we'll first hide the *greeting
page* initially, so that the *Ask Name Page* is the only page that is seen.
***********************************************************
## Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>
```

```js
$("#greeting-page").hide();

$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  alert("Hello, " + name + "!");
});
```

---
Let's put back the event handler code from version 1.
***********************************************************
## Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  [[<button id="submit-button">Submit</button>]][[Button to listen for clicks on]]
</div>
<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>
```

```js
$("#greeting-page").hide();

$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  alert("Hello, " + name + "!");
});
```

---
This code listens for clicks on the `#submit-button` element.
***********************************************************
## Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>
```

```js
$("#greeting-page").hide();

$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  [[[alert("Hello, " + name + "!");]]]
});
```

---
Now, instead of calling the `alert` function to generate an alert popup,
***********************************************************
### Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
<div id="greeting-page">
  Hello, <span id="name-display">[[Beppo]][[Text to update]]</span>!
  <button id="again-button">Play Again</button>
</div>
```

```js
$("#greeting-page").hide();

$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  [[[$("#name-display").text(name);]]]
});
```

---
we update the text within the `#name-display` element.
***********************************************************
### Hello Beppo: Version 2

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>
```

```js
$("#greeting-page").hide();

$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  $("#name-display").text(name);
  [[$("#ask-name-page").hide();
  $("#greeting-page").show();]][[Flip the page]]
});
```

---
Now, let's simulate flipping the page by:

1. hiding the *ask name page*, and then
2. showing the *greeting page*.
***********************************************************
## Challenge

```html
<div id="ask-name-page">
  <label>What's your name?</label>
  <input id="name-input" type="text" value="Beppo">
  <button id="submit-button">Submit</button>
</div>
<div id="greeting-page">
  Hello, <span id="name-display">Beppo</span>!
  <button id="again-button">Play Again</button>
</div>
```

```js
$("#greeting-page").hide();

$("#submit-button").on("click", function() {
  var name = $("#name-input").val();
  $("#name-display").text(name);
  $("#ask-name-page").hide();
  $("#greeting-page").show();
});
```

---
Now, as a challenge to you: add the code necessary to make the *Play Again*
button work. Which you click *Play Again*, the program should go back to the
*Ask Name Page*.

See next slide for the solution.
***********************************************************
## Challenge

```js
$("#again-button").on("click", function() {
  $("#ask-name-page").show();
  $("#greeting-page").hide();
});
```

---
This is the solution. We need to register a click event handler on the
again button by its ID, then show the *ask name page* and hide the
*greeting page* whenever a click occurs.

This is the end of section 1. You may choose to work on the
[homework for section 1](https://gist.github.com/airportyh/3e2a30649431e88e601c97035f9ade07) before continuing.
***********************************************************
# Section 2
## Generating Elements and Event Delegation

---
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```

![Fruits](lessons/javascript/lesson-5/images/fruits.png)

---
Say you have this list of fruits, and you want to add "kiwi" to
the list.

In order to do this, we'd have to create a new `li` element
and add it to the `#fruits` element.
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```

```js
var newLi = $("<li>kiwi</li>");
```

---
It turns out this is easily done with jQuery by using the `$` function.
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```

```js
var newLi = [[$("<li>kiwi</li>")]][[Calling $ function]];
```

---
We are calling the `$` function here, but instead of passing in a CSS selector
like before.
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```

```js
var newLi = $([["<li>kiwi</li>"]][[HTML string fragment]]);
```

---
We are passing in an HTML string fragment --- a string with an `<li>` tag
in it! jQuery is super smart: it will pick up on this,
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```

```js
var newLi = [[$("<li>kiwi</li>")]][[Returns the generated li element]];
```

---
and instead of
trying to use this as a CSS selector to find an element in the DOM, it will
instead generate and return a new `<li>` element.
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```

```js
var newLi = $("<li>kiwi</li>");
$("#fruits").append(newLi);
```

---
But, we are not done. Once the new `li` element has been generated, it
has to be appended to the `#fruits` element to have an effect.
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```

```js
var newLi = $("<li>kiwi</li>");
[[$("#fruits").append(newLi)]][[Append the new li into #fruits]];
```

---
That is done using the `append` method. This line gets the `#fruits` element
from the DOM, and then appends the newly generated `li` element to it.

This code will add kiwi to the list initially, but what if we want to add
fruits the list later? Let's put a text input in there, shall we?
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
[[<input id="new-fruit-input" type="text">]][[A text input for fruit]]
```

---
First, we'll add a new input for entering the name of a new fruit.
***********************************************************
## Generating Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
[[<button id="add-fruit-button">Add fruit</button>]][[Click here to add a fruit]]
```

---
Then, we'll add a button, which, when clicked, will take the text entered
into the text input, and add it as an item to the list.
***********************************************************
## Challange

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

---
Challenge time!

Add to this the JS code to make it so that when you type in the name
of a fruit into the `#new-fruit-input` element, and then click the
`#add-fruit-button` element, it takes the typed-in fruit name and adds it
as a new `li` element to the `#fruits` list.

Turn to the next slide for the solution.
***********************************************************
## Solution

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});
```

---
This is the solution.
***********************************************************
## Solution

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
[[$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});]][[Event handler]]
```

---
First, we register a new event handler to listen to clicks on
the `#add-fruit-button` element.
***********************************************************
## Solution

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  [[[var newFruit = $("#new-fruit-input").val();]]]
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});
```

---
Within the event handler, we say that, whenever the
button is clicked, we take the current value out of
the `#new-frunt-input` element, and save it in the
`newFruit` variable.
***********************************************************
## Solution

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  [[var newLi = $("<li>" + newFruit + "</li>");]][[Generate new li element]]
  $("#fruits").append(newLi);
});
```

---
Then, we generate a new `li` element containing the text
of the new fruit, and store it in the variable `newLi`.
***********************************************************
## Solution

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  [[$("#fruits").append(newLi);]][[Append new li to the list]]
});
```

---
Finally, we append the new `li` element to the `#fruits` element,
and we are done.
***********************************************************
## Removing Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});
```

---
Next, let's make it so that you can remove an element from the list
by double-clicking on it --- for which we use the `dblclick`
event.
***********************************************************
## Removing Elements

```js
$(...).remove()
```

---
To remove an element from the DOM is easy: use the `remove`
method.

Let's see this in action!
***********************************************************
## Removing Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

$("#fruits li").on("dblclick", function() {
  $(this).remove();
});
```

---
This code removes a fruit from the list when it is double-clicked.
***********************************************************
## Removing Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

$([["#fruits li"]][[get all li's within #fruits]]).on("dblclick", function() {
  $(this).remove();
});
```

---
First we use the `#fruits li` CSS selector to get all
`li` elements within the `#fruits` element.

This is called a descendant selector --- where if you have `A B`,
and both `A` and `B` are CSS selectors, it gives you all the descendant
elements of a parent element that matches `A` where each descendant
element matches the `B` selector.
***********************************************************
## Removing Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

$("#fruits li").on([["dblclick"]][[double click]], function() {
  $(this).remove();
});
```

---
We register an event handler for any double click events
on any of these `li` elements. The event name for double-clicks is
`dblclick`.
***********************************************************
### Removing Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

$("#fruits li").on("dblclick", function() {
  $([[this]][[the li clicked]]).remove();
});
```

---
When the click happens, we can get hold of the `li`
that was clicked by using the `this` variable.
***********************************************************
## Removing Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

$("#fruits li").on("dblclick", function() {
  [[$(this)]][[Rewrap]].remove();
});
```

---
We rewrap it to gain access to jQuery methods, and
***********************************************************
### Removing Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

$("#fruits li").on("dblclick", function() {
  $(this)[[.remove()]][[Remove it from the DOM]];
});
```

---
then call the `remove` method to remove it from the DOM.
***********************************************************
### Removing Elements

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

$("#fruits li").on("dblclick", function() {
  $(this).remove();
});
```

---

Voila! Done! But...

It doesn't work for newly added elements. To solve this problem,
we'll need to talk about event delegation.
***********************************************************
## Event Delegation

```js
$("#fruits li").on("dblclick", function() {
  $(this).remove();
});
```

---
When we register to listen to the events on a set of elements,
***********************************************************
## Event Delegation

```html
<ul id="fruits">
  [[[<li>apple</li>]]]
  [[[<li>banana</li>]]]
  [[[<li>orange</li>]]]
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

[[[$("#fruits li").on("dblclick", function() {
  $(this).remove();
});]]]
```

---
it goes into the DOM at that point in time, and grabs all
the elements, and attaches the event handlers to them.
***********************************************************
## Event Delegation

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
  [[<li>kiwi</li>]][[No event handler attached]]
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  [[[$("#fruits").append(newLi);]]]
});

$("#fruits li").on("dblclick", function() {
  $(this).remove();
});
```

---
However, an element that has been added afterwards does
not get the event handler attached to it, because it
didn't exist when the event handlers was attached.

How do we solve this problem?

One way is to attach an event handler to each new `li`
that is created. But there is an easier way than that ---
event delegation.
***********************************************************
## Event Delegation

![Click on child](lessons/javascript/lesson-5/images/click-child.png)

---
When you click on a DOM element on the page that is a child element
of another element, it turns out that the click event will bubble
up to its parent. So, you can listen for clicks on the parent
element, and will still get the events triggered from clicks on any of
its child elements.

Another way of thinking about this is: if you are clicking on an list item
within a list, then you are clicking on the list itself as well.
***********************************************************
## Event Delegation

![Listen on children](lessons/javascript/lesson-5/images/child-headphones.png)

---
This means that instead of setting up a listener on every single child
element like this,
(those are headphones, you might have to use your imagination)
***********************************************************
## Event Delegation

![Listen on parent](lessons/javascript/lesson-5/images/parent-headphones.png)

---
You can instead set up only one listener on the parent, and that would
suffice to listen on each child.
***********************************************************
## Event Delegation

![New element](lessons/javascript/lesson-5/images/new-element-headphones.png)

---
But what that also means is that when you add a new child element, there is
no need to add an additional listener to it.
***********************************************************
## Without event delegation

```js
$("#fruits li").on("dblclick", function() {
  $(this).remove();
});
```

---
So, this is the code we had before, the version without event delegation.
***********************************************************
## With event delegation

```js
$("#fruits").on("dblclick", "li", function() {
  $(this).remove();
});
```

---
This is the version of code with event delegation. Instead of registering
the event handler on the `li` elements,
***********************************************************
## With event delegation

```js
$([["#fruits"]][[Listen on the parent]]).on("dblclick", "li", function() {
  $(this).remove();
});
```

---
We will listen for events on their parent element: `#fruits`.
***********************************************************
## With event delegation

```js
$("#fruits").on("dblclick", [["li"]][[new argument: CSS selector for matching]], function() {
  $(this).remove();
});
```

---
Also, in the version, we have added an extra argument after the event name.
This argument is also a CSS selector, and it is used to match the element
that is clicked --- the source element of the event.

In this case, if the clicked element is a `li`, it will trigger
the event handler function. If, however, there is an `a` element
within `#fruits` that is clicked, that will not trigger this event handler
function.
***********************************************************
## With event delegation

```js
$("#fruits").on("dblclick", "li", function() {
  $(this).remove();
});
```

---

Functionally, this version works the same as the previous non-event-delegated
version, but we are now listening for events on the parent `#fruits` element
instead directly on the `li`s, and we don't have to worry about adding
event handlers to newly created `li`s.
***********************************************************
## Event Delegation

```html
<ul id="fruits">
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
<input id="new-fruit-input" type="text">
<button id="add-fruit-button">Add fruit</button>
```

```js
$("#add-fruit-button").on("click", function() {
  var newFruit = $("#new-fruit-input").val();
  var newLi = $("<li>" + newFruit + "</li>");
  $("#fruits").append(newLi);
});

$("#fruits").on("dblclick", "li", function() {
  $(this).remove();
});
```

---
With this version of the code --- with event delegation,
double-clicking to delete will work even for new fruits that have been
added by the user.
***********************************************************
## Summary

* Text inputs
* Showing and hiding elements
* Generating new elements
* Removing elements
* Event delegation

---
This is what you've learned.
***********************************************************
## Homework

[Enjoy your homework](https://gist.github.com/airportyh/3e2a30649431e88e601c97035f9ade07)
