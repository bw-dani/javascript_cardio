// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('')
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  //reverse the str first 
  const reverseString = str.split('').reverse().join('');
  //then see is the reverse str is a palindrome or not 
  return reverseString === str
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  //turn the integer into a string then split, reverse and join
  const revString = int.toString().split('').reverse().join('');

  //turn string into integer back and Math.sign in case it's a negative number
  return parseInt(revString) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
   return str
    .toLowerCase() // change everything to lower case
    .split(' ') //split the words (have a space between the ' ' so it split the word and not each letter)
       //map through the words and inside the arrow fctn take the param of word
       //look for the index 0 of each word and turn it to upper case
       //and add the rest of the word by substring
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' '); //join all the words back
} 



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};   //map a empty object 
  let maxNum = 0;  //added variables | // the num of char occoruncies
  let maxChar = ''; //the char that have the most numbers

  //take the string and split |||||   then loop through each of it
  str.split('').forEach(function(char) { 
    if(charMap[char]) {  
      charMap[char]++; // if exist add 1 
    } else {
      charMap[char] = 1; // if dont have another one just keep the 1 
    }
  });

  //for in loop is used to go through an obj rather than an array
  for(let char in charMap) {  //
    // debugger;  // to use the debugger on node js | node index.js | c to continue and it will stop at the debg| then type repl and u can see the "char" "charMap"
    if(charMap[char] > maxNum) { // if its greater than 0 
      maxNum = charMap[char];  //set the num to that value
      maxChar = char; // set the char to what char is it 
    }
  }

  return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, 
//instead of the number, print "Fizz", for multiples of 5 print "Buzz".For numbers which are 
//multiples of both 3 and 5, print "FizzBuzz".


function fizzBuzz() {
  //for loop set i =1; as long i is less or equal to 100 you want to increment
  for(let i = 1; i <= 100; i++) { //then you console.log(i)(it went to line 103 on the else)
        //if it is multiple of 3 and 5 we want fizzbuzz
        // if(i % 3 === 0 && i % 5 === 0)
        if (i % 15 === 0) {  // if the num(i) modulus of 3 is equal to 0 
          console.log('FizzBuzz');
          //every multiple of 3 we want to print Fizz
        } else if(i % 3 === 0) {  // if the num(i) modulus of 3 is equal to 0 | modulus gives us the remeinder and if there is no remainder its a multiple of 3 or 5 
          console.log('Fizz'); 
          //every multiple of 5 we want to print Buzz
        } else if(i % 5 === 0) {  // if the num(i) modulus of 5 is equal to 0 
          console.log('Buzz');
        } else {
          console.log(i); //counts 1 - 100
        }
      }
}



// Call Function

// const output = reverseString('hello');
// const output = isPalindrome('racecar');
// const output = reverseInt('54321');
// const output = capitalizeLetters('I love jaVaScript');
// const output = maxCharacter('javascript');
const output = fizzBuzz();


console.log(output);
