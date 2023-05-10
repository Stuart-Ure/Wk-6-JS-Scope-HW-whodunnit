//  to declare a variable use var 
//  strings need quotes
// intergers do not
// booleans start lowercase
// null returns nothing (maybe to use later) if a sesible statting value set it i.e 0 rather than null
// if an error saying undefined, it means that 

var name = "Dave"
var age = 30
var hungry = true
var something = null

// console.log () returns/prints

// console.log(name)
// .toUpperCase () will return all caps
// console.log(name.toUpperCase ())
// console.log(age)
// console.log(hungry)

// stating typeof will return the type of data
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof hungry)

//  can do math

// var sum = 1+2 
// var subtraction = 1 - 2 
// var multiply = 2 * 2 
// var divide = 4 / 2
// var exponentiation = 2 ** 3
// var remiander = 3 % 2

// console.log(sum)
// console.log(subtraction)
// console.log(multiply)
// console.log(divide)
// console.log(exponentiation)
// console.log(remiander)

// convert non string to a string
// note the capital S on String, this is defined like a class

// console.log(5)
// // console.log(String(5))  

// // contatination adding variables together like name and age. 

// console.log("Hello " + name)

// console.log (` Hello ${name}. you are ${ age} years old`)

// if statements (it will only run the the relevant statment) use triple = for javascript 

var number = 1

if (number > 0) {
    var message = `${number} is greater than 0`
} else if (number === 0)
{var message = ` ${number} is equal  to 0`
}else { 
    var message = `${number} is less than 0`
}

// console.log(message)

if (6) {
	var result = 'The expression evaluates to true.';
} else {
	var result = 'The expression evaluates to false.';
}

// console.log(result)
// the below is equal or greater to !==

if (2 !== "2") {
    console.log(true)
} else {
    console.log(false)
}
// the below is and && 

if ((1 + 1 ===2) && (1 + 1 ===4)){
    console.log(true)
}else {
    console.log(false)
}

// the below is or || 

if ((1 + 1 ===2) || (1 + 1 ===4)){
    console.log(true)
}else {
    console.log(false)
}