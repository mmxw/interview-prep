1. **Scope**: Consider the following code:

    ```js
    (function() {
      var a = b = 5;
    })();
    console.log(b);
 
What will be printed on the console?

2. **Create “native” methods**

Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified. For example:

    console.log('hello'.repeatify(3));
  
Should print hellohellohello.

