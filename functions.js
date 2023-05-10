// function sayHello (name) {
//     return `Hello World! ${name}`
// }

// var phrase= sayHello("Stuart")
// console.log("msg:", phrase)


// var add = function (firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// console.log ('1 + 3 =', add(1,3))

// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

// var add = function (firstNumber, secondNumber, thirdNumber, fourthnumber){
//     return firstNumber + secondNumber + thirdNumber + fourthnumber
// }

// console.log ('1+2+3+4=', add(1,2,3,4))


var sum = calculateTotal([25, 25, 50]);

function calculateTotal(numbers) {
    var total = 0;
    for (var number of numbers) {
        total += number;
    }
    return total;
}

var sum = calculateTotal([10, 40, 200, 50]);
console.log('sum of array numbers:', sum)

// function ( )



// Define an anonymous function expression that takes two arguments:

// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.