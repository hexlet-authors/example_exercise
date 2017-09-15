### fizzBuzz.js

Write and export as default a function that prints (`console.log`) numbers from `begin` to `end`. But:

* If the number is a multiple of `3`, print `Fizz` instead of the number
* If the number is a multiple of `5`, print `Buzz` instead of the number
* If the number is a multiple of both `3` and `5`, print `FizzBuzz` instead of the number
* Otherwise, print the number

The function accepts two parameters (`begin` and `end`). They define the range and are inclusive. If the range is empty (when `begin > end`), the function shouldn't print anything.

#### Example

```javascript
fizzBuzz(11, 20);
```

Output:

```
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```
