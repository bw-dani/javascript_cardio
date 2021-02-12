// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  
// SOLUTION 1 - Return a single longest word
  //first we want to take the coma out, so get the array and turn to lower case | match the string to be only "a" to "z" and "0" to "9" + g(global) so it dont stop in the first match
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  // we want the longest word from the start 
  // will compare the current interation to the previous one by the length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // return sorted[0];  if i want just the first longest word it finds


// SOLUTION 2 cont. - Return an array and include multiple words if they have the same length

  // If multiple words, put into array
  const longestWordArr = sorted.filter( //filter = high function takes in a function
    //word is just the parameter for the iteration
    //compare the rest to the first longest word
    word => word.length === sorted[0].length
  );


// SOLUTION 3 cont. - Only return an array if multiple words, otherwise return a string

  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the first longest word only 
    return longestWordArr[0];
  } else {
    //if there is more than 1 long word will return all of them
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // Init chunked arr
  const chunkedArr = []; // equal to an empty array

  // Loop through arr
  arr.forEach(val => {  //value for each iteration
    // Get last element, take the chuncked array and passing the length - 1 it will give the last value 
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {  //if not last 
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
//each chunck will have 2 values
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
// SOLUTION 1
  //reduce always take a function  a is the starting point b is each iteration 
  //then we want to concate each time b pass
  // return arrays.reduce((a, b) => a.concat(b));


// SOLUTION 2
  // applies a function 
  // return an empty array. then  concat anything to an array. apply takes an single array and pass all the arrays into one
  // return [].concat.apply([], arrays);


// SOLUTION 3
  // return an empty array. then concat the spread operator to return all the arguments into one array
  // return [].concat(...arrays);


// SOLUTION 4
  //
  return arrays.flat(Infinity);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2); //check is they match or are a anagram
}

// Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '') //takes in a expression and strip out anything that is not a letter or a num and replace with a empty string
    .toLowerCase()
    .split('') // each char into its own array value
    .sort()
    .join(''); //turn back into a string
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {

  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  //capitalize any vowels "gi" global and case insensitive
  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return newStr;
}

// Call Function
// const output = longestWord('Hello, my name is Brad');
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
// const output = isAnagram('elbow', 'below');
const output = letterChanges('Hello There');

console.log(output);
