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
/* console.time("Timer");
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
console.timeEnd("Timer"); */
// 46.	Check if Two Numbers are Anagrams
/* console.time("Timer");
let isAnagrams = (num1, num2) => {
  let freq = {};
  while (num1 > 0) {
    digit = num1 % 10;
    freq[digit] = (freq[digit] || 0) + 1;
    num1 = Math.floor(num1 / 10);
  }
  while (num2 > 0) {
    digit = num2 % 10;
    freq[digit] = (freq[digit] || 0) - 1;
    num2 = Math.floor(num2 / 10);
  }
  console.log(freq);
  for (const key in freq) {
    if (freq[key] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagrams(234, 4325));
console.timeEnd("Timer"); */
// 47.	Find Intersection of Two Arrays
/* console.time("Timer");
const intersectionOfArrays = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result[result.length] = arr1[i];
    }
  }
  return result;
};
console.log(intersectionOfArrays([1, 2, 5, 2, 3, 4], [1, 2, 3, 4]));
console.timeEnd("Timer"); */
// 48.	Find All Pairs with Target Sum
/* console.time("Timer");
const targetSum = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
};
console.log(targetSum([2, 3, 4, 5, 6, 1, 7, 8, 9], 8));
console.timeEnd("Timer"); */
// 49.	Get All Keys from the Objects
/* console.time("Timer");
const getKeys = (obj) => {
  // return Object.keys(obj);
  let keys = [];
  for (const key in obj) {
    // keys.push(key);
    keys[keys.length] = key;
  }
  return keys;
};
console.log(getKeys({ a: 1, b: 2, c: 3 }));
console.timeEnd("Timer"); */

// 50.	Get All the Values from Object
/* console.time("Timer");
const getValues = (obj) => {
  // return Object.values(obj);
  let values = [];
  for (const key in obj) {
    // values.push(obj[key]);
    values[values.length] = obj[key];
  }
  return values;
};
console.log(getValues({ a: 1, b: 2, c: 3 }));
console.timeEnd("Timer"); */
// 51.	Get All the Entries from Object
/* console.time("Timer");
const getEntries = (obj) => {
  // return Object.entries(obj);
  let entries = [];
  for (const key in obj) {
    // entries.push([key, obj[key]]);
    entries[entries.length] = [key, obj[key]];
  }
  return entries;
};
console.log(getEntries({ a: 1, b: 2, c: 3 }));
console.timeEnd("Timer"); */
// 52.	Check if Object is Empty using 4 Methods
/* console.time("Timer");
const isObjectEmpty = (obj) => {
  // return Object.keys(obj).length === 0 ? true : false;
  // return Object.entries(obj).length === 0 ? true : false;
  return JSON.stringify(obj) === "{}";
  for (const key in obj) {
    return false;
  }
  return true; 
};
console.log(isObjectEmpty({ a: 1 }));
console.timeEnd("Timer"); */
// 53.	Merge Two Objects using 3 Methods
// console.time("Timer");
// const mergeObjects = (obj1, obj2) => {
//   let result = {};
//   return { ...obj1, ...obj2 };
//   return Object.assign({}, obj1, obj2);

//   for (const key in obj1) {
//     result[key] = obj1[key];
//   }
//   for (const key in obj2) {
//     result[key] = obj2[key];
//   }
//   for (const key in obj1) {
//     result = { ...result, ...{ [key]: obj1[key] } };
//   }
//   return result;
// };
// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
// console.timeEnd("Timer");
// 54.	Shallow Copy using 3 Methods=Only the first level is copied,nested objects shares the same reference
// console.time("Timer");
// const shallowCopy = (obj) => {
// let copy = { ...obj };
// let copy = {};
/*   for (const key in obj) {
    copy[key] = obj[key];
  }
  copy.b = 100; //Nested object still points to same reference i.e, obj
  console.log(obj, "Parent Object"); //100
  return copy; */
// let copy = Object.assign({}, obj);
// copy.b = 100;
// console.log(obj.b, "Parent Object property b");
// console.log(obj); //Parent remains same as there is no change is nested property c
// return copy;
// };
// console.log(shallowCopy({ a: 1, b: { c: 20 } }));
// console.timeEnd("Timer");
// 55.	Deep Copy of Object using 3 Methods-Nested object do not share same references so any change in them does not affect parent
// console.time("Timer");

// const deepCopy = (obj) => {
//Structured clone
/*   let copy = structuredClone(obj);
  copy.b.c = 100;
  console.log(obj);
  return copy; */
//JSON.stringify
/*  let copy = JSON.parse(JSON.stringify(obj));
  return copy; */
//For in loop
//   if (obj === null || typeof ob !== "object") {
//     return obj;
//   }
//   let copy = {};
//   for (const key in obj) {
//     copy[key] = deepCopy(obj);
//   }
//   return copy;
// };
// console.log(deepCopy({ a: 1, b: { c: 20 } }));
// console.timeEnd("Timer");

// 56.	Check if Property Exists in Object – 4 Methods

//For in loop and hasOwnProperty
// const isProperty = (obj, key) => {
// console.log(key in obj);
// console.log(obj.hasOwnProperty("b"));
// console.log(Object.hasOwn(obj, "b"));
// console.log(Object.keys(obj).includes("b"));
// };
// isProperty({ a: 1, b: 2, c: 3 }, "b");

// 57.	Remove Property from Object (3 Methods)
// const removeProperty = (obj) => {
//   // delete obj.a;
//   // console.log(obj);
//   let { b, ...rest } = obj;
//   console.log(rest);
//   console.log(
//     Object.fromEntries(Object.entries(obj).filter(([key]) => key !== "b")),
//   );
// };
// removeProperty({ a: 1, b: 2, c: 3 });
// 58.	Add New Property to an Object – 4 Methods
// let obj = { a: 1, b: 2, c: 3 };
// obj.d = 4;
// console.log(obj);
// obj["e"] = 5;
// console.log(obj);
// let obj2 = { ...obj, f: 6 };
// console.log(obj2);
// let obj3 = Object.assign({}, obj, { g: 7 });
// console.log(obj3);

// 59.	Updating an Existing Property in an Object
// let obj = { a: 1, b: 2, c: 3 };
// obj.b = 10;
// console.log(obj);
// obj["b"] = 20;
// console.log(obj);
// obj = { ...obj, b: 10 };
// console.log(obj);
// let obj2 = Object.assign({}, obj, { b: 15 });
// console.log(obj2);

// 60.	Swap Keys and Values in an Object
/* const swap = (obj) => {
  let obj2 = {};
  for (const key in obj) {
    obj2[obj[key]] = key;
  }
  return obj2;
};
console.log(swap({ a: 1, b: 2, c: 3 })); */

// 61.	Convert Object → Query String
//let obj = { name: "Naveen", age: 24 };
// let queryString = new URLSearchParams(obj).toString();
// console.log(queryString);
/* let queryString = Object.entries(obj)
  .map(([key, value]) => {
    return `${key}=${value}`;
  })
  .join("&");
console.log(queryString); */
// let queryString = "";
// for (const key in obj) {
//   queryString += `${key}=${obj[key]}&`;
// }
// console.log(queryString.slice(0, -1));

// 62.	Remove Duplicate Objects from an Array
//Using JSON.stringify(obj)
/* let arr = [
  { id: 1, name: "Kotlin" },
  { id: 2, name: "Java" },
  { id: 1, name: "Javacript" },
]; */
/* const unique = [...new Set(arr.map((obj) => JSON.stringify(obj)))].map((obj) =>
  JSON.parse(obj),
);
console.log(unique); */
//Using key
/* let seen = new Set();
const unique = arr.filter((obj) => {
  if (seen.has(obj.id)) {
    return false;
  }
  seen.add(obj.id);
  return true;
});
console.log(unique); */
// 63.	Group Objects by Property
/* let arr = [
  { id: 1, name: "Kotlin" },
  { id: 2, name: "Java" },
  { id: 1, name: "Javacript" },
]; */
//Using for loop
/* let grouped = {};
for (let i = 0; i < arr.length; i++) {
  let obj = arr[i];
  let id = obj.id;
  if (!grouped[id]) {
    grouped[id] = [];
  }
  grouped[id].push(obj);
}
console.log(grouped); */
//Using reduce
/* let grouped = arr.reduce((acc, curr) => {
  let key = curr.id;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});
console.log(grouped); */
//64.	Sort Array of Objects by Key
/* let arr = [
  { id: 3, name: "Kotlin" },
  { id: 1, name: "Java" },
  { id: 2, name: "Javacript" },
];

let sorted = [...arr].sort((a, b) => a.id - b.id);
console.log(sorted); */

// 65.	Add a Prefix to All Object Keys
/* let obj = {
  name: "Naveen",
  age: 21,
  lang: "English",
}; */
//Using for loop
/* const prefix = "website";
const result = {};
for (const key in obj) {
  result[prefix + key] = obj[key];
}
console.log(result); */
//Using object.entries
/* const prefix = "website";
const result = Object.entries(obj).map(([key, value]) => [
  `${prefix}${key}`,
  value,
]);
console.log(Object.fromEntries(result)); */
//Using reduce
/* const prefix = "website";
const result = Object.keys(obj).reduce((acc, key) => {
  acc[prefix + key] = obj[key];
  return acc;
}, {});
console.log(result); */
// 66.	Find Most Expensive Product
/* const products = [
  { name: "Laptop", price: 500 },
  { name: "Laptop1", price: 1200 },
  { name: "Laptop2", price: 5001 },
  { name: "Laptop3", price: 3000 },
]; */
//Using for loop
/* let maxProduct = products[0];
for (let i = 1; i < products.length; i++) {
  if (products[i].price > maxProduct.price) {
    maxProduct = products[i];
  }
} */
//Using reduce
/* const maxProduct = products.reduce((max, obj) => {
  if (obj.price > max.price) {
    max = obj;
  }
  return max;
});
console.log(maxProduct); */

//Using sort
/* const maxProduct = [...products].sort((a, b) => b.price - a.price)[0];
console.log(maxProduct); */

// 57.	Get Total Price of Cart
/* const cart = [
  { name: "Laptop", price: 5000, qty: 2 },
  { name: "Phone", price: 1500, qty: 3 },
  { name: "Mouse", price: 700, qty: 1 },
  { name: "Earbuds", price: 900, qty: 1 },
]; */
//Using for loop
/* let total = 0;
for (let i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].qty;
}
console.log(total); */
//Using reduce method
/* let total = cart.reduce((sum, obj) => {
  sum += obj.price * obj.qty;
  return sum;
}, 0);
console.log(total); */
//Using for of
/* let total = 0;
for (const item of cart) {
  total += item.price * item.qty;
}
console.log(total); */
// 68.	How to Calculate the Average Product Rating
// const ratings = [4, 5, 3, 2, 4, 1];
// using for loop
/* let sum = 0;
for (let i = 0; i < ratings.length; i++) {
  sum += ratings[i];
}
const avg = sum / ratings.length;
console.log(avg); */
//Using reduce
/* let avg =
  ratings.reduce((sum, rating) => {
    return (sum += rating);
  }, 0) / ratings.length;
console.log(avg); */

// 69.	Create Breadcrumbs from URL
/* const url = "/products/electronics/laptops";
const parts = url.split("/").filter(Boolean);
let breadcrumbs = [];
let currentPath = "";
for (let i = 0; i < parts.length; i++) {
  currentPath += "/" + parts[i];
  breadcrumbs.push({
    name: parts[i],
    path: currentPath,
  });
}
console.log(breadcrumbs); */

/*ASCII Values
Each character has numeric code
-Uppercase: 65-90
-Lowercase letters:97-122
-differnce:32  */

// 70.	Convert Uppercase → Lowercase (ASCII)
/* const toLowerCaseASCII = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else result += str[i];
  }
  return result;
};
console.log(toLowerCaseASCII("HeMantH")); */

// 71.	Convert Lowercase → Uppercase (ASCII)
/* const toUpperCaseASCII = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else result += str[i];
  }
  return result;
};
console.log(toUpperCaseASCII("HeMantH")); */
// 72.	Find the Longest Word in a Sentence
/* const longestWord = (str) => {
  let words = str.split(" ");
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};
console.log(longestWord("Hey my name is Raman Raghav")); */

// 73.	Print Square Pattern (5×5)
/* const squarePattern = () => {
  let n = 5;
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
};
squarePattern(5); */
// 74.	Print Right Triangle Star Pattern
/* const rightAngledTriangle = () => {
  let n = 5;
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
};
rightAngledTriangle(); */
//Using repeat method
/* let n = 5;
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
} */
// 75.	Print Inverted Triangle
/* const invertedRightTriangle = () => {
  let n = 5;
  let star = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
};
invertedRightTriangle(); */
// 76.	Print Hollow Square 5×5
/* const hollowSquare = (n) => {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === 1 || j === n || i === n) {
        star += "*";
      } else {
        star += " ";
      }
    }
    star += "\n";
  }
  console.log(star);
};
hollowSquare(4); */
// 77.	Print Number Triangle Pattern
/* const numberTriangle = (n) => {
  let count = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      count = count + j;
    }
    count += "\n";
  }
  console.log(count);
};
numberTriangle(5); */
// 78.	Print Hollow Left Triangle Pattern
/* const hollowLeftTriangle = (n) => {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j == i || i === n) {
        star += "*";
      } else {
        star += " ";
      }
    }
    star += "\n";
  }
  console.log(star);
};
hollowLeftTriangle(5); */
// 79.	Print Floyd’s Triangle
/* const floydTriangle = (n) => {
  let star = "";
  let num = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += num + " ";
      num++;
    }
    star += "\n";
  }
  console.log(star);
};
floydTriangle(5); */
// 80.	Print Alphabet Triangle Pattern
/* const alphabetTriangle = (n) => {
  let alpha = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      alpha += String.fromCharCode(64 + j);
    }
    alpha += "\n";
  }
  console.log(alpha);
};
alphabetTriangle(5); */
// 81.	Print Square with Main Diagonal Stars
/* const diagonalPattern = (n) => {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) {
        star += "*";
      } else {
        star += " ";
      }
    }
    star += "\n";
  }
  console.log(star);
};
diagonalPattern(5); */
// 82.	Print a 5×5 Square of Numbers (Same Number in Each Row)
/* const numberSquare = (n) => {
  let num = 1;
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += i;
    }
    pattern += "\n";
  }
  console.log(pattern);
};
numberSquare(5); */
// 83.	Print a 5×5 Square using Alphabets
/* const alphabetSquare = (n) => {
  let num = 1;
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += String.fromCharCode(64 + i);
    }
    pattern += "\n";
  }
  console.log(pattern);
};
alphabetSquare(5); */
// 84.	Find Transpose of a Matrix
/* const transposeMatrix = (matrix) => {
  let rows = matrix.length;
  let colums = matrix[0].length;
  let transpose = [];
  for (let i = 0; i < colums; i++) {
    transpose[i] = [];
    for (let j = 0; j < rows; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }
  console.log(transpose);
};
transposeMatrix([
  [1, 2, 3],
  [4, 5, 6],
]); */
// 85.	Add Two Matrices
/* const addMatrices = (matrix1, matrix2) => {
  let rows = matrix1.length;
  let columns = matrix1[0].length;
  let finalMatrix = [];
  for (let i = 0; i < rows; i++) {
    finalMatrix[i] = [];
    for (let j = 0; j < columns; j++) {
      finalMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  console.log(finalMatrix);
};
addMatrices(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [1, 2, 3],
  ],
); */
// 86.	Check if a Matrix is Symmetric
/* const isSymmetric = (matrix) => {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
};
console.log(
  isSymmetric([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);
 */
// 87.	Linear Search (Manual Implementation)
/* let arr = [10, 20, 30, 40];
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};
console.log(linearSearch(arr, 50)); */

// 88.	Binary Search (Iterative)
/* let arr = [10, 20, 30, 40, 50];
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};
console.log(binarySearch(arr, 40)); */
// 89.	Bubble Sort (Optimized)-Compare adjacent elements and swap if the order is incorrect, repeat until no swaps are needed
/* const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped;
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};
console.time("Timer");
console.log(bubbleSort([5, 3, 2, 4]));
console.timeEnd("Timer");
 */

// 90.	Selection Sort-Assume the first element is the minimum, compare it with the rest of the elements to find the actual minimum, and swap it with the first element. Repeat for the next position until the array is sorted.
/* const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};
console.time("Timer");
console.log(selectionSort([5, 2, 4, 8, 1]));
console.timeEnd("Timer"); */

// 91.	Insertion Sort-Sort the array by iterating through it and inserting each element into its correct position in the sorted portion of the array.
/* const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
};
console.time("Timer");
insertionSort([5, 2, 4, 8, 1]);
console.timeEnd("Timer"); */

// 92.	Quick Sort (Recursive)-quick sort is a divide-and-conquer algorithm that selects a pivot element, partitions the array into two sub-arrays based on the pivot, and recursively sorts the sub-arrays.
/* const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.time("Timer");
console.log(quickSort([5, 2, 4, 8, 1, 3, 7, 6]));
console.timeEnd("Timer"); */

// 93.	Find Subarray with Maximum Sum(Kadane's Algorithm)
// kadane Algorithm
/* const maxSubArraySum = (arr) => {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
    console.log("Iteration " + i + "= " + currentSum, maxSum);
  }
  return maxSum;
};
console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); */

// 94.	Custom map() Implementation
/* const myMap = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = cb(arr[i], i, arr);
  }
  return result;
  // return (result = arr.map(cb));
};
console.log(myMap([1, 2, 3, , 4, 5], (num) => num * 2)); */
// 95.	Custom filter() Implementation
/* const myFilter = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result = [...result, arr[i]];
    }
  }
  return result;
};
console.log(myFilter([1, 2, 3, , 4, 5], (num) => num % 2 === 0)); */
// 96.	Custom reduce() Implementation
/* const myReduce = (arr, cb, initialValue) => {
  let acc = initialValue;
  let startIndex = 0;
  if (acc === undefined) {
    acc = arr[0];
    console.log(acc);
    startIndex = 1;
  }
  for (let i = startIndex; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
    console.log(acc);
  }
  return acc;
};
console.log(myReduce([1, 2, 3, 4, 5], (acc, curr) => acc + curr)); */
// 97.	Two Sum (Using HashMap – Optimal)-The difference between the target and the current element is calculated, and if that difference exists in the map, it means we have found a pair that sums up to the target. The indices of the two elements are returned as an array.
/* const twoSum = (arr, target) => {
  let map = {}; //[number,index]
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[arr[i]] = i;
    console.log(map);
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 13)); */
// 98.	Freeze Object (Immutable)-shallow freeze, nested objects can still be modified. To make an object completely immutable, you can use a deep freeze function that recursively freezes all nested objects.
/* const obj = {
  name: "Arya",
  age: 21,
};
Object.freeze(obj);
obj.name = "Daya";
obj.age = 25;
delete obj.age;
console.log(obj); */
// 99.	Object.seal() Example
const obj = {
  name: "Arya",
  age: 21,
};
Object.seal(obj);
obj.name = "Daya";
obj.age = 25;
obj.city = "Delhi";
delete obj.age;
console.log(obj);
// 100.	Toggle Case in JavaScript
const toggleCase = (str) => {
  let result = "";
  for (let ch of str) {
    if (ch >= "A" && ch <= "Z") {
      result += ch.toLowerCase();
    } else if (ch >= "a" && ch <= "z") {
      result += ch.toUpperCase();
    } else {
      result += ch;
    }
  }
};
