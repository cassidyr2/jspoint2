//string manipulation functions

//Reversed a string

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverseString("hello")); // Output: "olleh"


  //count characters

  function countCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
    }
    return count;
  }
  
  console.log(countCharacters("hello")); // Output: 5

  
  //Capitalize words 

  function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  console.log(capitalizeWords("hello world")); // Output: "Hello World"

  
  //Array functions

  //Find Maximum and Minimum

  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
  console.log(findMin([1, 2, 3, 4, 5])); // Output: 1

  
  //Sum of arrays

  function sumArray(arr) {
    let sum = 0;
    arr.forEach(num => {
      sum += num;
    });
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

  //filter Array

  function filterArray(arr, condition) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const isEven = num => num % 2 === 0;
  
  console.log(filterArray(numbers, isEven)); // Output: [2, 4]

  //mathematical functions

  //factorial 
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); // Output: 120

  //prime number check 

  function isPrime(num) {
    if (num <= 1) return false;
    let i = 2;
    while (i <= Math.sqrt(num)) {
      if (num % i === 0) return false;
      i++;
    }
    return true;
  }
  
  console.log(isPrime(2)); // Output: true
  console.log(isPrime(4)); // Output: false

  //Fibonacci Sequence


  function generateFibonacci(n) {
    let fib = [0, 1];
    let i = 2;
    while (i < n) {
      fib.push(fib[i - 1] + fib[i - 2]);
      i++;
    }
    return fib.slice(0, n);
  }
  
  console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  






  
