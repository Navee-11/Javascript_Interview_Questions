//1.Print Numbers from 1 to 100 using loop

/* console.time("Timer");
for (let index = 1; index <= 100; index++) {
  console.log(index);
}
console.timeEnd("Timer"); */

//2.Print even numbers from 1 to 50
/* console.time("Timer");
for (let index = 0; index <= 50; index = index + 2) {
  console.log(index);
}
console.timeEnd("Timer"); */

//3.Print odd numbers from 1 to 50

// console.time("Timer");
/* for (let index = 1; index <= 50; index = index + 2) {
  console.log(index);
} */
/* let index = 0;
while (index < 50) {
  index = index + 2;
  console.log(index);
} */
// console.timeEnd("Timer");

//4.Sum of first 10 natural numbers

/* console.time("Timer");
let sum = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(sum(10));
console.timeEnd("Timer"); */

//5.Factorial of a number using loop

/* console.time("Timer");
const factorial = (n) => {
  if (n <= 0) return "Invalid Number";
  if (n === 1) return 1;
  if (n === 2) return 2;
  let fact = 1;
  for (let i = n; i > 1; i--) {
    fact = fact * i;
  }
  return fact;
};
console.log(factorial(5));

console.timeEnd("Timer"); */

//6.Factorial using recursion method

/* console.time("Timer");
let factorial = (n) => {
  if (n <= 0) {
    return "Invalid Number";
  }
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));
console.timeEnd("Timer"); */

//7.Factorial using reduce method

/* console.time("Timer");
let factorial = (n) => {
  if (!Number.isInteger(n)) {
    return "Please enter an integer";
  }
  if (n === 0) return 1;
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  console.log(arr);
  return arr.reduce((acc, curr) => acc * curr, 1);
};
console.log(factorial(5));
console.timeEnd("Timer"); */

//8.Find the largest of three numbers
/* console.time("Timer");
let greatThree = (a, b, c) => {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
};
console.log(greatThree(60, 5, 20));

console.timeEnd("Timer"); */
//9.Reverse a number using javascript
/* console.time("Timer");
const reverseNumber = (num) => {
  let isNegative = false;
  let rev = 0;
  let digit = 0;
  if (!Number.isInteger(num)) return "Please enter a number";
  if (num < 0) isNegative = true;
  while (num > 0) {
    digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
    // console.log(digit, rev, num);
  }
  return rev;
};
console.log(reverseNumber(123));

console.timeEnd("Timer"); */
//10.Check a palindrome using for loop
// console.time("Timer");
/* let palindrome = (str) => {
  if (typeof str !== "string") return "Please enter the string";
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  console.log(rev);
  if (rev === str) return "Given string is a palindrome";
  else return "Given string is not a palindrome";
}; */
/* let palindrome = (str) => {
  if (typeof str !== "string") return "Please enter the string";
  let rev = str.split("").reverse().join("");
  return rev === str
    ? "Given string is a palindrome"
    : "Given string is not a palindrome";
};
console.log(palindrome("level")); */
// console.timeEnd("Timer");

//11.Find if number is a palindrome
/* console.time("Timer");
let palindrome = (num) => {
  if (typeof num !== "number") {
    return "Please enter the number";
  }
  let digit = 0;
  let rev = 0;
  let actualNum = num;
  while (num > 0) {
    digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  return rev === actualNum
    ? "Given number is a palindrome"
    : "Given number is not a palindrome";
};
console.log(palindrome(101));
console.timeEnd("Timer"); */

//12.Check if the number is prime
/* console.time("Timer");
let isPrime = (n) => {
  if (n < 1) {
    return "Please enter a number greater than 2";
  }
  let prime = false;
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = true;
    }
  }
  return prime ? "Not a prime number" : "Prime number";
};
console.log(isPrime(23));
console.timeEnd("Timer"); */

//13.count the number of digits in a number
/* console.time("Timer");
let numOfDigits = (num) => {
  if (typeof num !== "number") {
    return "Please enter the number";
  }
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
};
console.log(numOfDigits(1230));
console.timeEnd("Timer"); */

//14.Find the sum of digits in a number
/* console.time("Timer");
let sumOfDigits = (num) => {
  if (typeof num !== "number") {
    return "Please enter the number";
  }
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(sumOfDigits(1230));
console.timeEnd("Timer"); */

//15.Find the fibonacci series upto N numbers
/* console.time("Timer");
let fibonacci = (n) => {
  if (n === 0) return;
  if (n === 1) return 0;
  let n1 = 0;
  let n2 = 1;
  let next = 0;
  for (let i = 1; n1 < n; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
};
fibonacci(10);
console.timeEnd("Timer"); */

// 16.	Power of a Number in JavaScript (Without Math.pow)
/* console.time("Timer");
let powerOfNum = (num, pow) => {
  let isNegative = false;
  let prod = 1;
  if (pow < 0) {
    isNegative = true;
    pow = pow * -1;
  }

  for (let i = 0; i < pow; i++) {
    prod = prod * num;
  }
  return isNegative ? 1 / prod : prod;
};
console.log(powerOfNum(2, 1));
console.timeEnd("Timer"); */
// 17.	Swap Two Numbers in JavaScript (3 Methods)
// console.time("Timer");
/* let swap = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}; */

/* let swap = (a, b) => {
  [a, b] = [b, a];
  console.log(a, b);
};
swap(2, 3); */

// console.timeEnd("Timer");
// 18.	Print multiplication table of a number
/* console.time("Timer");
let table = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n * i}`);
  }
};
table(7);
console.timeEnd("Timer"); */

// 19.	Find Maximum Number in an Array – 3 Methods
// console.time("Timer");
/* let maximum = (arr) => {
  return Math.max(...arr);
};
console.log(maximum([1, 2, 40, 23, 50])); */
/* let maximum = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};
console.log(maximum([60, 2, 40, 23, 50])); */
/* let maximum = (arr) => {
  return arr.reduce((max, curr) => {
    if (curr > max) {
      max = curr;
    }
    return max;
  }, arr[0]);
};
console.log(maximum([1, 2, 40, 23, 50]));
*/
// console.timeEnd("Timer");

// 20.	Find Minimum Number in an Array – 3 Methods
// console.time("Timer");
/* let minimum = (arr) => {
  return Math.min(...arr);
};
console.log(minimum([1, 2, 40, 23, 50])); */
/* let minimum = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
};
console.log(minimum([60, 2, 40, 23, 50])); */
/* let minimum = (arr) => {
  return arr.reduce((min, curr) => {
    if (curr < min) {
      min = curr;
    }
    return min;
  }, arr[0]);
};
console.log(minimum([1, 2, 40, 23, 50])); */
// console.timeEnd("Timer");
// 21.	Find Sum of All Array Elements – 3 Methods
// console.time("Timer");
/* let sumOfArray = (arr) => {
  let sum = 0;
  for (const ele of arr) {
    sum += ele;
  }
  return sum;
};
console.log(sumOfArray([2, 3, 45, 7, 3])); */
/* let sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfArray([2, 3, 45, 7, 3])); */
/* let sumOfArray = (arr) => {
  return arr.reduce((sum, curr) => {
    sum += curr;
    return sum;
  }, 0);
};
console.log(sumOfArray([2, 3, 45, 7, 3])); */

// console.timeEnd("Timer");
// 22.	Count Even and Odd Numbers in an Array
// console.time("Timer");
/* let countOfOddEven = (arr) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even++;
    else odd++;
  }
  console.log("Odd " + odd + ", Even " + even);
};
countOfOddEven([2, 3, 45, 7, 3]); */
/* let countOfOddEven = (arr) => {
  let even = arr.filter((item) => item % 2 === 0).length;
  let odd = arr.filter((item) => item % 2 !== 0).length;

  console.log("Odd " + odd + ", Even " + even);
};
countOfOddEven([2, 3, 45, 7, 3]); */
// console.timeEnd("Timer");
// 23.	Find the Reverse of an Array
// console.time("Timer");
/* let reverseArray = (arr) => {
  return arr.reverse();
};
console.log(reverseArray([2, 3, 45, 7, 3])); */
/* let reverseArray = (arr) => {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev = [...rev, arr[i]];
  }
  return rev;
};
console.log(reverseArray([2, 3, 45, 7, 3])); */
// console.timeEnd("Timer");
// 24.	Merge Two Arrays Manually
/* console.time("Timer");
let mergeTwoArray = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3[arr3.length] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3[arr3.length] = arr2[i];
  }
  return arr3;
};
console.log(mergeTwoArray([2, 3, 45, 7, 3], [1, 2, 4, 35, 5]));
console.timeEnd("Timer"); */
// 25.	Find Frequency of Each Element in an Array
/* console.time("Timer");
let frequency = (arr) => {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) freq[arr[i]] += 1;
    else freq[arr[i]] = 1;
  }
  return freq;
};
console.log(frequency([1, 2, 3, 4, 1, 2, 2, 4, 5]));
console.timeEnd("Timer"); */
// 26.	Insert an Element at Specific Position
/* console.time("Timer");
let insertEle = (arr, ele, target) => {
  for (let i = arr.length; i > target; i--) {
    arr[i] = arr[i - 1];
  }
  arr[target] = ele;
  console.log(arr);
};
insertEle([1, 3, 4, 5], 2, 2);
console.timeEnd("Timer"); */
// 27.	Delete an Element from a Specific Position in Array
/* console.time("Timer");
let deleteEle = (arr, target) => {
  for (let i = target; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length -= 1;
  return arr;
};
console.log(deleteEle([1, 3, 4, 5], 2));
console.timeEnd("Timer"); */
// 28.	Move All Zeros to the End of Array
/* console.time("Timer");
let moveAllZeros = (arr) => {
  let nonZero = arr.filter((item) => item !== 0);
  let zero = arr.filter((item) => item === 0);
  return [...nonZero, ...zero];
};
console.log(moveAllZeros([1, 2, 3, 4, 0, 6, 0, 8, 7]));
console.timeEnd("Timer"); */
// 29.	Remove Duplicates from an Array
/* console.time("Timer");
let distinctArray = (arr) => {
  let freq = {};
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
      freq[arr[i]] = 1;
      unique.push(arr[i]);
    }
  }
  return unique;
};
console.log(distinctArray([1, 2, 3, 4, 4, 5, 2, 1]));
console.timeEnd("Timer"); */
// 30.	Find Second Largest Element in Array
/* console.time("Timer");
let secondLargest = (arr) => {
  let secondLargest = -Infinity;
  let largest = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
};
console.log(secondLargest([1, 2, 3, 7, 6, 8]));
console.timeEnd("Timer"); */
// 31.	Check if an Array is Sorted in JavaScript (2 Methods)
/* console.time("Timer");
let sorted = (arr) => {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
    }
  }
  return isSorted;
};
console.log(sorted([1, 4, 3, 2, 4]));
console.timeEnd("Timer"); */
// 32.	Find the Missing Number in an Array
/* console.time("Timer");
let sorted = (arr) => {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
    }
  }
  return isSorted;
};
console.log(sorted([1, 4, 3, 2, 4]));
console.timeEnd("Timer"); */

// 33.	Check if a Number is a Perfect Number
/* console.time("Timer");
let perfectNumber = (num) => {
  let sum = 0;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
    console.log(sum);
  }
  if (sum === num) return "It is a Perfect Number";
  else return "Not a perfect number";
};
console.log(perfectNumber(6));
console.timeEnd("Timer"); */
// 34.	Reverse a String Manually
/* console.time("Timer");
let reverseString = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};
console.log(reverseString("Javascript"));
console.timeEnd("Timer"); */

// 35.	Check if a String is a Palindrome
/* console.time("Timer");
let palindrome = (str) => {
  return str === reverseString(str);
};
console.log(palindrome("leveli"));
console.timeEnd("Timer"); */

// 36.	Count Number of Words in a Sentence
/* console.time("Timer");
let countNoofWords = (sentence) => {
  let inWord = false;
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (!inWord && sentence[i] !== "") {
      count++;
      inWord = true;
    } else if (sentence[i] === " ") {
      inWord = false;
    }
  }
  return count;
};
console.log(countNoofWords("  My Name is Raman"));
console.timeEnd("Timer"); */
// 37.	Remove Spaces from a String
/* console.time("Timer");
let removeSpace = (sentence) => {
  return sentence.replaceAll(" ", "");
   let string = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      string += sentence[i];
    }

  return string; 
};
console.log(removeSpace("My Name is Raman"));
console.timeEnd("Timer"); */

// 38.	Find Frequency of Each Character in String
/* console.time("Timer");
let frequencyOfChar = (str) => {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (freq[str[i]]) {
        freq[str[i]] += 1;
      } else freq[str[i]] = 1;
    }
  }
  return freq;
};
console.log(frequencyOfChar("My Name is Raman"));
console.timeEnd("Timer"); */

// 39.	Find LCM of Two Numbers (Using Loop)
/* console.time("Timer");
let lcmOf2Num = (a, b) => {
  if (a === b) return a;
  else {
    let max = a > b ? a : b;
    let lcm = max;

    while (true) {
      if (lcm % a === 0 && lcm % b === 0) break;
      lcm++;
    }
    return lcm;
  }
};
console.log(lcmOf2Num(4, 6));
console.timeEnd("Timer"); */
// 40.	Replace Character in a String WITHOUT using replace()
/* console.time("Timer");
let replaceChar = (str, oldChar, newChar) => {
  str = str.toLowerCase();
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] === oldChar) newStr += newChar;
    else newStr += str[i];
  }
  return newStr;
};
console.log(replaceChar("Javascript", "j", "n"));
console.timeEnd("Timer"); */
// 41.	Find First Non-Repeating Character
/* console.time("Timer");
let firstNonRepeating = (str) => {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      freq[str[i]] += 1;
    } else {
      freq[str[i]] = 1;
    }
  }
  for (const key in freq) {
    if (freq[key] === 1) {
      return key;
    }
  }
};
console.log(firstNonRepeating("IJJavascript"));
console.timeEnd("Timer"); */
// 42.	Find the First Repeating Character in a String
// console.time("Timer");
/* let firstRepeating = (str) => {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      freq[str[i]] += 1;
    } else {
      freq[str[i]] = 1;
    }
  }
  for (const key in freq) {
    if (freq[key] > 1) {
      return key;
    }
  }
}; */
/* const firstRepeatingChar = (str) => {
  str = str.toLowerCase();
  let seen = {};
  for (let char of str) {
    if (seen[char]) return char;
    seen[char] = true;
  }
  return null;
};
console.log(firstRepeatingChar("Javascript")); */
// console.timeEnd("Timer");
// 43.	Check if Two Strings are Anagrams
/* console.time("Timer");
let isAnagams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return "Not anagrams";
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let freq = {};
  for (const char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (const char of str2) {
    if (!freq[char]) {
      return false;
    }
    freq[char]--;
  }
  
  return true;
};
console.log(isAnagams("Java", "Lemo"));
console.timeEnd("Timer"); */
//44.	Capitalize First Letter of Each Word (Without split)
// console.time("Timer");
/* let capitalize = (str) => {
  let inWord = false;
  let newStr = "";
  for (let char of str) {
    if (!inWord && char !== " ") {
      newStr += char.toUpperCase();
      inWord = true;
    } else if (char === " ") {
      inWord = false;
      newStr += char;
    } else {
      newStr += char;
    }
  }
  return newStr;
};
console.log(capitalize("i love javscript")); */
// console.timeEnd("Timer");
// 45.	Flatten Nested Array in JavaScript using Recursion and flat Method
console.time("Timer");
let flattenArray = (arr) => {
  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      finalArray = [...finalArray, ...flattenArray(arr[i])];
    } else {
      finalArray = [...finalArray, arr[i]];
    }
  }
  return finalArray;
};
console.log(flattenArray([1, 2, 3, [1, 2, [3, 4, 5], 2], 4]));
console.timeEnd("Timer");
// 33.	Check if Two Numbers are Anagrams
// 32.	Find Intersection of Two Arrays
// 33.	Find All Pairs with Target Sum
// 34.	Get All Keys from the Objects
// 35.	Get All the Values from Object
// 36.	Get All the Entries from Object
// 37.	Check if Object is Empty using 4 Methods
// 38.	Merge Two Objects using 2 Methods
// 39.	Shallow Copy using 3 Methods
// 40.	Deep Copy of Object using 3 Methods
// 41.	Check if Property Exists in Object – 4 Methods
// 42.	Remove Property from Object (3 Methods)
// 43.	Add New Property to an Object – 4 Methods
// 44.	Updating an Existing Property in an Object
// 45.	Swap Keys and Values in an Object
// 46.	Convert Object → Query String
// 47.	Remove Duplicate Objects from an Array
// 48.	Group Objects by Property
// 49.	Sort Array of Objects by Key
// 50.	Add a Prefix to All Object Keys
// 51.	Find Most Expensive Product
// 52.	Get Total Price of Cart
// 53.	How to Calculate the Average Product Rating
// 54.	How Event Loop Works!!
// 55.	Create Breadcrumbs from URL
// 56.	Convert Uppercase → Lowercase (ASCII)
// 57.	Convert Lowercase → Uppercase (ASCII)
// 58.	Find the Longest Word in a Sentence
// 59.	Print Square Pattern (5×5)
// 60.	Print Right Triangle Star Pattern
// 61.	Print Inverted Triangle
// 62.	Print Hollow Square 5×5
// 63.	Print Number Triangle Pattern
// 64.	Print Hollow Left Triangle Pattern
// 65.	Print Floyd’s Triangle
// 66.	Print Alphabet Triangle Pattern
// 67.	Print Square with Main Diagonal Stars
// 68.	Print a 5×5 Square of Numbers (Same Number in Each Row)
// 69.	Print a 5×5 Square using Alphabets
// 70.	Find Transpose of a Matrix
// 71.	Add Two Matrices
// 72.	Check if a Matrix is Symmetric
// 73.	Linear Search (Manual Implementation)
// 74.	Binary Search (Iterative)
// 75.	Bubble Sort (Optimized)
// 76.	Selection Sort
// 77.	Insertion Sort
// 78.	Quick Sort (Recursive)
// 79.	Find Subarray with Maximum Sum
// 80.	Custom map() Implementation
// 81.	Custom filter() Implementation
// 82.	Custom reduce() Implementation
// 83.	Two Sum (Using HashMap – Optimal)
// 84.	Freeze Object (Immutable)
// 85.	Object.seal() Example
// 86.	Toggle Case in JavaScript
