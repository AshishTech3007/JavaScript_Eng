// same as call method only difference is how we pass arguments 
//in apply argument is passed as a list of arguments i.e arraylist

const printfullName=function(hometown=''){
    if(hometown!='')
    {
        console.log(`${this.firstname} ${this.lastname} ${hometown}`)
    }
    
}
const name={
    firstname:'Ashish',
    lastname:'Kumar'
}
printfullName.apply(name,['Patna']);

// function borrowing call method 
const name2={
    firstname:'Ram',
    lastname:'Lakhan',
}
printfullName.call(name2,['Rameshwarama'])

// Array of numbers
// var numbers = [2, 8, 5, 12, 3];
// Ask the user to input a list of numbers separated by commas
// var userInput = prompt("Enter a list of numbers separated by commas:");

// // Split the user input into an array of numbers in browser
// var numbers = userInput.split(',').map(function(item) {
//     return parseFloat(item.trim());
// });


// Using apply to find the maximum value in the array
// var maxNumber = Math.max.apply(null, numbers);

// console.log("Maximum number:", maxNumber);


// // modern js uses spread operator
// var maxNumber2 = Math.max(null, ...numbers);
// console.log("Maximum number:", maxNumber2);

// Import the 'readline' module to read user input
const readline = require('readline');

// Create an interface to read from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to input a list of numbers separated by commas
rl.question("Enter a list of numbers separated by commas: ", function(userInput) {
  // Split the user input into an array of numbers
  const numbers = userInput.split(',').map(item => parseFloat(item.trim()));

  // Using apply to find the maximum value in the array
  const maxNumber = Math.max.apply(null, numbers);

  console.log("Input Array:", numbers);
  console.log("Maximum number:", maxNumber);

  // Close the interface
  rl.close();
});
