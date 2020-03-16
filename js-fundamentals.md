1. Explain event delegation.

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
        - Methods like call(), and apply() can refer `this` to any object.
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
      ``` 
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
      ```
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
    ```
    (function() {
      eat()
      sleep()
      repeat()
     })() // inspired by one of Adrian's T-shirt :D
    ```
  - make code simpler (esp for callback functions): 
    ```
    const outputArr = inputArr.map(() => doSomething)
    ```
11. What's the difference between host objects and native objects?

12. **Explain the difference between: `function Person(){}, const person = Person()`, and `const person = new Person()`?**

  - ***constructor functions*** vs. ***classes***


13. Explain the differences on the usage of foo between function foo() {} and var foo = function() {}

14. Can you explain what Function.call and Function.apply do? What's the notable difference between the two?

15. Explain Function.prototype.bind.
16. What's the difference between feature detection, feature inference, and using the UA string?
17. Explain "hoisting".
18. Describe event bubbling.
19. Describe event capturing.
20. What's the difference between an "attribute" and a "property"?
21. What are the pros and cons of extending built-in JavaScript objects?
22. What is the difference between == and ===?
23. Explain the same-origin policy with regards to JavaScript.
24. Why is it called a Ternary operator, what does the word "Ternary" indicate?
25. What is strict mode? What are some of the advantages/disadvantages of using it?
26. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
27. What tools and techniques do you use debugging JavaScript code?



28. Explain the difference between mutable and immutable objects.
  - A **mutable** object is an object whose state can be modified after it is created. e.g. arrays and objects. 
  - **Immutables** are the objects whose state cannot be changed once the object is created. e.g. primitive data types (strings, numbers, boolean)
  
29. What is an example of an immutable object in JavaScript?
    ```
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