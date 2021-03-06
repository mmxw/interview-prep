*currently solved:* 1, 2, 5, 7, 10, 13, 14, 18, 19, 28, 29

1. **Explain event delegation.**
Attaching event listeners to parent node, instead of every child, present or newly created, is event delegation. It makes use of event bubbling (*see 18 & 19 for event bubbling and capturing*), where the event on a child bubbles up to the parent. So instead of adding an event listener to a child, and adding one every time a new child is added, we add the listener on parent.
example from [this blog post](https://davidwalsh.name/event-delegate):
    ```html
    <ul id="parent-list">
      <li id="post-1">Item 1</li>
      <li id="post-2">Item 2</li>
      <li id="post-3">Item 3</li>
      <li id="post-4">Item 4</li>
      <li id="post-5">Item 5</li>
      <li id="post-6">Item 6</li>
    </ul>
    ```

    ```js
    // Get the element, add a click listener...
    document.getElementById("parent-list").addEventListener("click", function(e) {
      // e.target is the clicked element!
      // If it was a list item
      if(e.target && e.target.nodeName == "li") {
        // List item found!  Output the ID!
        console.log("List item ", e.target.id.replace("post-", ""), " was clicked!")
      }
    })
    ```

2. **Explain how `this` works in JavaScript.**
  * runtime binding: 
      - It has different values depending on where it is used:

        - In a method, this refers to the owner object.
          ```js
          const test1 = {
            prop: 40, 
            func: function() {
              return this.prop
            } // `this` refers to the object `test1`
          }
          console.log(test1.func()) // returns 40
        - Alone, this refers to the global object.
        ```js
        console.log(this === window) // returns true in browser
        console.log(this === global) // returns true in node
        ```
        - In a function, this refers to the global object.
        ```js
        function globalObj() {
          return this
        } 
        console.log(globalObj()) // returns 'window' in browser, 'global' in node
        ```
        - In a function, in strict mode, this is undefined.
        ```js
        function globalObj() {
          "use strict"
          return this
        } 
        console.log(globalObj()) // returns undefined
        ```
        - In an event, this refers to the element that received - the event.
        ```html
          <button onclick="this.style.display='none'">
            Click to Remove Me!
          </button>
          ```
        - Methods like call(), and apply() can refer `this` to any object. (*see 14 for `call()` and `apply()`)
        ```js
        const person = {
          fullName: function() {
            return this.firstName + " " + this.lastName
          }
        }
        const person1 = {
          firstName:"John",
          lastName: "Doe"
        }
        const person2 = {
          firstName:"Mary",
          lastName: "Doe"
        }
        person.fullName.call(person1) // returns John Doe
        ```
      - arrow function: doesn't have their own `this` binding, but retains the `this` value of the enclosing lexical context 
        ```js
          const test = {
            name: 'test object',
            createArrowFunction: function() {
              return () => {
                console.log(this.name)
                console.log(arguments)
              }
            }
          } 
          test.createArrowFunction('hello', 'arrow function')
          // returns "test object" {0: 'hello', 1: 'arrow function'}
        ```
3. Can you give an example of one of the ways that working with `this` has changed in ES6?

4. Explain how prototypal inheritance works.

5. **What's the difference between a variable that is: null, undefined or undeclared?**
    - `null` is an empty or non-existent value. 
    - `undefined` means a variable has been declared but has not yet been assigned a value
    - "undeclared" is a variable that has not been declared. 
      ``` js
      let a = null
      let b = undefined 

      console.log(a) // returns null
      console.log(b) // returns undefined
      console.log(typeof a) // returns object
      console.log(typeof b) // returns undefined

      null === undefined // returns false
      null == undefined // returns true
      ```
6. How would you go about checking for any of these states?

7. **What is a closure, and how/why would you use one?**

  - a **closure** "is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function." [MDN]
    - in plain English: it is a function nested inside another function that closes over a variable declared in the outer function 
    - *example* (**an actual Q from a fintech company**)
      ```js
      function createNext() { 
            let a = 0
            return function successor() {
              a = a + 1
              return a
          }
        }

        const next = createNext()

        console.log(next()) // 1
        console.log(next()) // 2
        console.log(next()) // 3

        const next2 = createNext()

        console.log(next2()) // 1
        console.log(next()) // 4     
      ```
      - `createNext()`: outer function
      - `successor()`: inner function; also called a closure; closes over variable `a`, which is declared in the scope of the outer function but outside the scope of the inner function 
    - *why*: closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods. In JavaScript, any method defined within the closure scope is privileged (i.e., any method defined inside a closure `successor()` in the above example, can have access to the varaibles in the outer function `createNext()`)
8. What language constructions do you use for iterating over object properties and array items?


9. Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?

10. **What's a typical use case for anonymous functions?**
  - IIFE (Immediate Invoked Function Expression): 
    ```js
    (function() {
      eat()
      sleep()
      repeat()
     })() // inspired by one of Adrian's T-shirt :D
    ```
  - make code simpler (esp for callback functions): 
    ```js
    const outputArr = inputArr.map(() => doSomething)
    ```
11. What's the difference between host objects and native objects?

12. **Explain the difference between: `function Person(){}, const person = Person()`, and `const person = new Person()`?**

  - ***constructor functions*** vs. ***classes***


13. **Explain the differences on the usage of `foo` between `let foo1 = function() {}` and `function foo2() {}`**

  ```js
    let foo1 = function() {
      return 'function expression'
    } // gets evaluated second
    function foo2() {
      return 'function declaration'
    } //gets evaluated first
    console.log(foo1())
    console.log(foo2())
  ```
  - `let foo1 = function() {}`: Function expressions are evaluated as part of the step-by-step code, at the point where they appear (just like any other expression). That one creates a function with no name, which it assigns to the foo variable.
  - `function foo2() {}`: Function declarations are evaluated upon entry into the enclosing scope, before any step-by-step code is executed. The function's name (foo) is added to the enclosing scope (technically, the variable object for the execution context the function is defined in).
  
  [see visualization here for what gets evaluated first](http://pythontutor.com/javascript.html#code=let%20foo1%20%3D%20function%28%29%20%7B%0A%20%20return%20'function%20expression'%0A%7D%0A%0Afunction%20foo2%28%29%20%7B%0A%20%20return%20'function%20declaration'%0A%7D%0A%0Aconsole.log%28foo1%28%29%29%0Aconsole.log%28foo2%28%29%29%0A%0A&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)

14. **Can you explain what Function.call and Function.apply do? What's the notable difference between the two**
  - Both are used to set the value of this explicitly. 
    - While call takes a list of arguments in comma separated format
    - apply takes an array with list of arguments.
    ```js
      const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName
        }
      }
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      const person2 = ['Mary', 'Doe']

      person.fullName.call(person1) // returns John Doe
      person.fullName.apply(person2) // returns Mary Doe
    ```

15. Explain Function.prototype.bind.

16. What's the difference between feature detection, feature inference, and using the UA string?

17. Explain "hoisting".
18. **Describe event bubbling**. 
19. **Describe event capturing.**

*three phases of event propogation:* 
![](./3-phases-of-event-propogation.png)
- The standard DOM Events describes 3 phases of event propagation:
  - *Capturing phase* – the event goes down to the element. (top-down)
  - *Target phase* – the event reached the target element. (on target)
  - *Bubbling phase* – the event bubbles up from the element. (bottom-up)

example: 
```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
```
- If you click on `<p>`, then the sequence is:

  - `HTML` → `BODY` → `FORM` → `DIV` (capturing phase, the first listener); 4 pop-up alerts for capturing; 
  - `P` (target phrase, triggers two times, as we’ve set two listeners: capturing and bubbling)
  - `DIV` → `FORM` → `BODY` → `HTML` (bubbling phase, the second listener). 4 pop-up alerts for bubbling (in reverse order from the capturing)

20. What's the difference between an "attribute" and a "property"?
- Attributes – is what’s written in HTML.
- Properties – is what’s in DOM objects.

 -- | Properties |	Attributes
--- | --- | --- 
Type| Any value, standard properties have types described in the spec | A string
Name |	Name is case-sensitive	| Name is not case-sensitive

for example: 
- this HTML element: `<input type="text" value="Name:"> ` has two attributes: `type` and `value`
- 

`elem.hasAttribute(name)` – to check for existence.
`elem.getAttribute(name)` – to get the value.
`elem.setAttribute(name, value)` – to set the value.
`elem.removeAttribute(name)` – to remove the attribute.
`elem.attributes` is a collection of all attributes.




21. What are the pros and cons of extending built-in JavaScript objects?
22. What is the difference between == and ===?
23. Explain the same-origin policy with regards to JavaScript.
24. Why is it called a Ternary operator, what does the word "Ternary" indicate?
25. What is strict mode? What are some of the advantages/disadvantages of using it?
26. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
27. What tools and techniques do you use debugging JavaScript code?



28. **Explain the difference between mutable and immutable objects.**
  - A **mutable** object is an object whose state can be modified after it is created. e.g. arrays and objects. 
  - **Immutables** are the objects whose state cannot be changed once the object is created. e.g. primitive data types (strings, numbers, boolean)
  
29. **What is an example of an immutable object in JavaScript?**
    ```js
    let immutableString = "I am immutable"
    immutableString = immutableString + ", but I can be appended and form a new object"
    console.log(immutableString)
    // returns "I am immutable, but I can be appended and form a new object"
    ```
    On appending the `immutableString` with a string value, following events occur:

      - Existing value of `immutableString` is retrieved
      - ", but I can be appended and form a new object" is appended to the existing value of `immutableString`
      - The resultant value is then allocated to a new block of memory
      - `immutableString` object now points to the newly created memory space
      - Previously created memory space is now available for garbage collection.

30. What are the pros and cons of immutability?
31. How can you achieve immutability in your own code?
32. Explain the difference between synchronous and asynchronous functions.
33. What is event loop?

34. What is the difference between call stack and task queue?
35. What are the differences between variables created using let, var or const?
36. What are the differences between ES6 class and ES5 function constructors?
37. Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?
38. What advantage is there for using the arrow syntax for a method in a constructor?
39. What is the definition of a higher-order function?
40. Can you give an example for destructuring an object or an array?
41. Can you give an example of generating a string with ES6 Template Literals?
42. Can you give an example of a curry function and why this syntax offers an advantage?
43. What are the benefits of using spread syntax and how is it different from rest syntax?
44. How can you share code between files?
45. Why you might want to create static class members?
46. What is the difference between while and do-while loops in JavaScript?

47. Coding questions

* Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

* Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
What will be returned by each of these?

* console.log("hello" || "world")
* console.log("foo" && "bar")
* Write an immediately invoked function expression (IIFE)