var name = 'Jill'

var secretsFunction = function () {
    var pinCode = [0, 0, 0, 0]
    // console.log('pinCode inside secretsFunction:', pinCode)
    // console.log(name)
    // lexical scope is being able to see outside of your scope 
}

secretsFunction()
// console.log('pinCode outside secretsFunction:', pinCode)

// var filterNamesByFirstLetter = function (names, letter) {
//     let filteredNames = [];
//     for (let name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name);
//         }
//         console.log(name)
//     }

//     return filteredNames
// // }

// let students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
// let filteredStudents = filterNamesByFirstLetter(students, 'A');
// console.log('filteredStudents:', filteredStudents);


// let isItFive = function (number) {
//     let result = false
//     if (number === 5) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }
// console.log(isItFive(5))

// let calculateEnergy = function (mass) {
//     const speedOfLight = 299792458;
//     return mass * speedOfLight ** 2;
// }

// let energyOfMe = calculateEnergy(75);
// console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe);
//   // -> energyOfMe (if I had a mass of 75kg) 6740663840526132000

