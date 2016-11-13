# Programmer's Idea List
A visualised list of portfolio ideas that programmers can work on. Programmers can view the ideas in list or table mode.

The idea list consists of two types of filter which are:
- Type (Web, Mobile, Game)
- Duration (Short, Medium, Long)

Ideas can have more that one "type" and "duration".
eg. Visual Novel can be a game and be on mobile, its' duration can also be from short to long.

## Adding more ideas
Navigate to the "index.html" file and commit the following to the file (Remember to check if the idea exists first before adding):

```html
  <li class="liList">
    <h3 class="name">Insert Idea Here</h3>
    <p class="type">Type: Web, Mobile, Game</p>
    <p class="duration"><span class="sDur">Duration:</span> <span class="sDir">Short, Medium, Long</span></p>
    <p class="addition">Addition(s): Add whatever you feel like here.</p>
  </li>
```

Example:
```html
  <li class="liList">
    <h3 class="name">Visual Novel</h3>
    <p class="type">Type: Game, App</p>
    <p class="duration"><span class="sDur">Duration:</span> <span class="sDir">Short, Medium, Long</span></p>
    <p class="addition">Addition(s): RPG</p>
  </li>
```
