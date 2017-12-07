# Lesson 2.5
## Lists and The Accumulator Pattern
---
In this lesson, we'll cover lists, and the accumulator pattern.
******************************************
## List

A list in Python is an ordered sequence of values
where each value can be accessed or modified by their index,
new values can be added, and old values can be deleted.

---
******************************************
## Lists

```python
[1, 5, 2, 3, 4]
```
---
This is how to write a list of numbers in Python.
******************************************

![List Representation](lessons/python/lesson-3/list-repr-python-tutor.png)

---
This is how you would see a list represented inside of Python Tutor.
First there's the label that says "list", that tells you this is a
list, to differentiate it from other things that we'll learn later.

Then we have something that looks like like a row of cells,
and each cell has a little index number -
that's the gray number on the top left corner of each cell. Here
the index numbers are 0, 1, 2, 3, 4 - they always go in order, starting
from 0 - if you hear the term zero-based indexing, that is referring to
lists, or other things whose index number sequence start from zero.

Then, the numbers in black in each cell are the contents of each cell. A cell
is like a variable that stores something, and a list is like a row of variables.
But a list can grow and shrink, so it could hold any number of cells.
*****************************************
## Lists
```python
a_list = [1, 5, 2, 3, 4]
```
---
You can store a list into a variable like so,
as you can with any other kind of value in Python.
*****************************************

![List Variable](lessons/python/lesson-3/list-variable.png)

---
When you have a list variable, what you would see
in Python Tutor is this - a variable slot inside
the frame in the "Frames" section pointing to a
representation of the list in the "Objects" section
like so.

"What is the Frames section and what is the
Objects section?" - you might be wondering.

The Frames
section is like the short-term memory of the brain,
whereas the Objects section is like the long-term
memory of the brain - we'll revisit this later
when we get to functions.

At this point, notice
that the value of a list variable is not the contents
of the list, but merely a pointer to a "list object"
in the Objects area. This has profound implications,
which we'll discover later.
*****************************************
## Accessing an item
```python
a_list[1]
```
---
To access an individual item inside a list, tell the
list the index number you want to access by using the subscript notation.

The way to say this expression is:

    a_list subscript 1

Another way to say this is:

    Access a_list at index 1
*****************************************
## Accessing an item

![List Variable](lessons/python/lesson-3/list-variable.png)

```python
a_list[1]
```
Result:
```
5
```
---
This expression - `a_list[1]` returns the content of cell number
1, which as you can see in the diagram, is 5.
******************************************
## What will this print?
```python
a_list = [1, 5, 2, 3, 4]
print (a_list[1])
print (a_list[3])
print (a_list[4])
print (a_list[2])
print (a_list[0])
```
---
It's time for a challenge! What will this program print?
Write out your prediction, on a piece or paper or
a text editor. Then run this program to verify it.
******************************************
## Loop Counter Pattern

A pattern used for iterating through a collection of values.
It uses a counter variable containing a number --- which is
used to keep track of how many times a loop has executed
and how many more times it has to go. Each time through the
loop, the counter variable is changed. The loop condition
is setup in such a way that it will eventually become false
and therefore the loop will stop.

---
Okay, now...remember the loop counter pattern?
******************************************
## Iterating a list: Loop Counter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < 5:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
If we want to go through every number in a list of numbers and do something
with each number, we can use the loop counter pattern to do that!!!
******************************************
## Iterating a list: Loop Counter Pattern

```python
a_list = [1, 5, 2, 3, 4]
[[i = 0]][[Initialization statement]]
while i < 5:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
First, we have the initialization statement, in which we set the `i` variable ---
which we'll will soon use as the index number to the list --- to 0, because
the zeroth position is where we begin in computer science terms - not one.
******************************************
## Iterating a list: Loop Counter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
[[while i < 5:]][[Continuing condition]]
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
The next part of the loop counter pattern is the continuing condition.
Here, the condition is `i < 5`, because we want to get to the last item
in the list - which is the 4-th one. See, with `i < 5`, i = 4 would get
through, but i = 5 would not - which is good, because the 5-th item does not
exist.
******************************************
## Iterating a list: Loop Counter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < 5:
  [[number = a_list[i]]][[List index lookup]]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
The first statement in the body of the while loop is to look up the
list based on the value of `i` as the index. So now, `number` would
contain the i-th number in the list.
******************************************
## Iterating a list: Loop Counter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < 5:
  number = a_list[i]
  [[print("The %d-th number is %d" % (i, number))]][[Print out]]
  i = i + 1
```

---
The next statement in the loop body prints the index number `i` as well
as the item number `number`.
******************************************
## Iterating a list: Loop Counter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < 5:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  [[i = i + 1]][[Incrementer statement]]
```

---
The last piece of the loop counter pattern is the incrementer statement.
This increases `i` by 1, so that the next time through the loop, we get
to the next number in the list.

******************************************
## Iterating a list: Loop Counter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < 5:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
Now, run it in Python Tutor to understand
how it works.
******************************************
## Hard-Code 5

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < [[5]][[Hard-coded 5]]:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
You might have been uncomfortable with the "hard-coded" number 5 in this
example.
******************************************
## Hard-Code 5

```python
a_list = [1, 5, 2, 3, 4, [[7, 9]][[Added a couple of numbers]]]
i = 0
while i < 5:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
Because what if the list grew in size?
******************************************
## Hard-Code 5

```python
a_list = [1, 5, 2, 3, 4, 7, 9]
i = 0
while i < [[5]][[Need to update to 7]]:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
Then we'd have to update this number to match the new size of the list.
This is annoying at best, but it's unworkable at worst - when the size
of the list isn't pre-determined. What are we to do???
******************************************
## The len Function

```python
len(a_list)
```

---
The `len` function to the rescue!!! `len` is short for length. It takes a
list (or sequence, more on that later) as its argument and returns the
length of of the list.
******************************************
## The len Function

```python
a_list = [1, 5, 2, 3, 4, 7, 9]
i = 0
list_length = len(a_list)
while i < list_length:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
Now instead of hard-coding the number 5, we can...
******************************************
## The len Function

```python
a_list = [1, 5, 2, 3, 4, 7, 9]
i = 0
[[list_length = len(a_list)]][[Get the length of a_list]]
while i < list_length:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---

simply ask for the length
of `a_list`, ...
******************************************
## The len Function

```python
a_list = [1, 5, 2, 3, 4, 7, 9]
i = 0
list_length = len(a_list)
while i < [[list_length]][[Use the length here]]:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
and use that for the continuing condition of the loop.

Run this through Python Tutor to see how it works step by step.
******************************************
## The len Function

```python
a_list = [1, 5, 2, 3, 4, 7, 9]
i = 0
while i < [[len(a_list)]][[Get len and use it]]:
  number = a_list[i]
  print("The %d-th number is %d" % (i, number))
  i = i + 1
```

---
You can optionally inline the call to the `len` function like
this.

So, this is the loop counter pattern for lists. Remember it,
you'll use it a lot.
******************************************
## Challenge

```python
names = ['Paul', 'Anita', 'Scarlett']
```
---
You are given a list of names. Use the loop counter pattern to go through
each name in the list and print out a greeting for them.
******************************************
## The Loop-And-Filter Pattern

A pattern used to conditionally apply statements to a collection of values.
It is based on the loop counter pattern where there is a conditional if
statement within the loop body determining whether or not a certain set
of statements are executed or not.

---
Here is another pattern for working with loops, the loop-and-filter pattern.
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  number = a_list[i]
  if number % 2 == 0:
    print(number)
  i = i + 1
```

---
This is an example of the loop then filter pattern. As you can see, the
regular loop counter pattern is employed.
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  number = a_list[i]
  if number % 2 == 0:
    print(number)
  i = i + 1
```

---
You can see that by the presence of...
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
[[i = 0]][[Initialization]]
while i < len(a_list):
  number = a_list[i]
  if number % 2 == 0:
    print(number)
  i = i + 1
```

---
The initialization statement.
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while [[i < len(a_list)]][[Continuing condition]]:
  number = a_list[i]
  if number % 2 == 0:
    print(number)
  i = i + 1
```

---
The continuing condition, and
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  number = a_list[i]
  if number % 2 == 0:
    print(number)
  [[i = i + 1]][[Incrementor statement]]
```

---
the incrementor statement.
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  [[number = a_list[i]]][[Lookup an item by index]]
  if number % 2 == 0:
    print(number)
  i = i + 1
```

---
Similar to before, this line looks up an item in the list by its index.
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  number = a_list[i]
[[  if number % 2 == 0:
    print(number)]][[If statement]]
  i = i + 1
```

---
The key part of this pattern is this if statement, which acts as the "filter".
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  number = a_list[i]
  if number % 2 == 0:
    [[print(number)]][[Statements conditionally executed]]
  i = i + 1
```

---
The statement(s) inside the consequent clause of the if statement is/are only
conditionally executed. Based on
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  number = a_list[i]
  if [[number % 2 == 0]][[Conditional clause]]:
    print(number)
  i = i + 1
```

---
The conditional clause - which is the filter. This condition filters out
all numbers in the list that aren't even numbers. The result is that this
loop will print only each number in the list that *is* an even number.
******************************************
## The Loop-And-Filter Pattern

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  number = a_list[i]
  if number % 2 == 0:
    print(number)
  i = i + 1
```

---
Run this in Python Tutor now to see how it works in action.
******************************************
## Time for a Challenge!!!

```python
a_list = [1, 5, 2, 3, 4]
i = 0
while i < len(a_list):
  number = a_list[i]
  if number % 2 == 0:
    print(number)
  i = i + 1
```

---
Now change this program to print only numbers that are odd.

Then change it to print only numbers that are greater than 3.
******************************************
## The Accumulator Pattern

A pattern used to reduce a collection of values down to a single value.
This pattern repeatedly adding to a variable - the accumulator
variable - to incrementally arrive at the final desired value.

---
Now we'll cover the accumulator pattern - another fundamental pattern in
programming. You'll use it to solve a variety of coding challenges, so
pay attention!
******************************************
## The Accumulator Pattern

1. Accumulator variable
2. Loop
3. Accumulator statement

---
The accumulator pattern has 3 key parts. An accumulator variable --- used to
keep the current running value to be accumulated to and eventually come to
the final value; a loop --- to go through a set of values; and the accumulator
statement which actually accumulates a value to the accumulator variable.
******************************************
## The Accumulator Pattern

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
i = 0
while i < len(numbers):
  number = numbers[i]
  total = total + number
  i = i + 1
```

---
This is an example of the accumulator pattern. This program sums all of the
number in a list of numbers and stores it in a variable `total`. Please read
through it once and try to follow it in your mind.
******************************************
## The Accumulator Pattern

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
[[i = 0]][[Loop counter initialization]]
while i < len(numbers):
  number = numbers[i]
  total = total + number
  i = i + 1
```

---
This accumulator pattern, is again built on top of the loop counter pattern.
With its loop counter initialization statement, ...
******************************************
## The Accumulator Pattern

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
i = 0
while [[i < len(numbers)]][[Continuing condition]]:
  number = numbers[i]
  total = total + number
  i = i + 1
```

---
Continuing condition,...
******************************************
## The Accumulator Pattern

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
i = 0
while i < len(numbers):
  number = numbers[i]
  total = total + number
  [[i = i + 1]][[incrementor statement]]
```

---
And the loop counter incrementer statement.
******************************************
## The Accumulator Pattern

```python
numbers = [3, 6, 1, 4, 2, 5]
[[total = 0]][[Accumulator variable]]
i = 0
while i < len(numbers):
  number = numbers[i]
  total = total + number
  i = i + 1
```

---
It also has an accumulator variable: `total`, which has been initialized to 0.
******************************************
## The Accumulator Pattern

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
i = 0
while i < len(numbers):
  number = numbers[i]
  [[total = total + number]][[Accumulator statement]]
  i = i + 1
```

---
and an *accumulator statement* --- which adds the current number being visited
to the total.
******************************************
## The Accumulator Pattern

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
i = 0
while i < len(numbers):
  number = numbers[i]
  total = total + number
  i = i + 1
```

---
The end effect of this pattern is it will add up each number in the list
into the `total` variable.

Run this program in Python Tutor step by step to understand how it works.
******************************************
## Time for a Challenge!!!

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
i = 0
while i < len(numbers):
  number = numbers[i]
  total = total + number
  i = i + 1
```

---
Oops! Time for a challenge again!!!

Change this program to total the *square* of each number in the list.
**Hints** 
-You should use the Accumulator plus Loop-and-Filter
-You should get 91 as the answer.
******************************************
## Problem:

```python
numbers = [3, 6, 1, 4, 2, 5]
```

---
Now, here is a problem. What if I wanted to sum every other number in this list?

Think about this for a minute or so, before you go to the next slide.
******************************************
## Accumulator plus Loop-And-Filter

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
i = 0
while i < len(numbers):
  number = numbers[i]
  if i % 2 == 0:
    total = total + number
  i = i + 1
```

---
The answer is to combine the accumulator pattern with the
loop-and-filter pattern.
******************************************
## Accumulator plus Loop-And-Filter

```python
numbers = [3, 6, 1, 4, 2, 5]
total = 0
i = 0
while i < len(numbers):
  number = numbers[i]
  [[if i % 2 == 0:]][[If statement acts as filter]]
    total = total + number
  i = i + 1
```

---
This if statement filters out numbers whose index position `i` is odd ---
it only allows evens. So those are 3 at the 0-th index, 1 at the 2-nd index,
and 2 at the 4-th index.

Change this to only sum the numbers with the odd indices.
******************************************
## Summary

1. List Basics
2. Iterating Lists with the Loop Counter Pattern
3. The Loop-And-Filter Pattern
4. The Accumulator Pattern

---
You've learned the basics of lists, how to use the loop counter pattern that
you've learned previously to iterate through the values of a list. The
Loop-And-Filter pattern to perform operations only on selected items of a list.
And finally the accumulator pattern to accumulate a list of values into a single
value.
