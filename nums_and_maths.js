const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(typeof(balance.toString()))

console.log(balance.toString().length)
console.log(balance.toFixed(2))         //helps to fixed the digits after 2 decimal only output: 100.00 (helps in e-commerce website)


const differentNumber = 27.7823782
console.log(differentNumber.toPrecision(2)) //Output: 28
console.log(differentNumber.toPrecision(3)) //Output: 27.8
console.log(differentNumber.toPrecision(1)) //Output: 3e+1 (use precision very carefully)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en'))  // Output: 1,000,000 (american standard)

console.log(hundreds.toLocaleString('en-IN'))   //Output: 10,00,000 (Indian standard)

// *****MATHS****

console.log(Math)   //Output: object[Math] {}
console.log(Math.abs(-2)) // 2(negative->positive)

console.log(Math.round(6.7))    //Round off to 7
console.log(Math.ceil(6.1))     //Output: 7 (If the value is greater than 6 then it print 7)
console.log(Math.floor(6.7))    //Output: 6 (If the value is upto 6.99999 then also it print 6)

console.log(Math.min(4,2,3,5))  //Output: 2 (Print the minimum value in the aray)
console.log(Math.max(4,2,3,5))  //Output: 5 (Print the minimum value in the aray)

// ************************

console.log(Math.random())  //Always give random number between 0 and 1

console.log((Math.random()*10) +1)   
console.log(Math.floor(Math.random()*10) + 1)   //Always gives numbers from 1-10 randomly

const min = 10
const max = 100

console.log(Math.floor(Math.random() * (max-min+1)) + min)  //print random values from 10-100