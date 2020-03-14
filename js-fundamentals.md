1. Explain event delegation.

2. Explain how `this` works in JavaScript.
  * runtime binding: 
      - the value of `this` is determined by how a function is called. 
      - it can't be set by assignment during execution, and could be different each time the function is called
      - bind() in ES5: set the value of a function's `this` regardless of how it is called
      - arrow function in ES5: doesn't have their own `this` binding, but retains the `this` value of the enclosing lexical context 
  * strict vs. non-strict mode: 
      - in non–strict mode, `this` is always a reference to an object 
      - in strict mode `this` can be any value
      - In the global execution context (outside of any function), `this` refers to the global object whether in strict mode or not.  


3. Can you give an example of one of the ways that working with `this` has changed in ES6?

4. Explain how prototypal inheritance works.

5. What's the difference between a variable that is: null, undefined or undeclared?
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

7. What is a closure, and how/why would you use one?

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
10. What's a typical use case for anonymous functions?
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
12. Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?
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
29. What is an example of an immutable object in JavaScript?
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