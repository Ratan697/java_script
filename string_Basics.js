const name="Ratan"
let age = 19
console.log(name + age) //very old method to concatenate two variables

console.log(`My name is ${name}, i am ${age} years old`)    //name of this method is string interpolation and this is modern method 

const newName = new String('Piyali')    //This is also create string and the type is object
console.log(newName[0]) //print p

//Accessing th emethods
console.log(newName.length) //print 6
console.log(newName.toUpperCase())  //convert to PIYALI but original string does not change
console.log(newName)
console.log(newName.charAt(2))  //at index 2 the character is y.

console.log(newName.indexOf('l'))   //the letter l is present at index 4