//Simple comparisions operators
console.log(2 > 1) //true
console.log(2 < 1) //false
console.log(2 >= 1) //true
console.log(2 <= 1) //false
console.log(2 == 1) //false
console.log(2 != 1) //true

//avoid these type of conversions
console.log("2" > 1) // this print true because its automatically convert string to number
console.log("02" > 1) // this print true because its automatically convert string to number

console.log(null > 0) //this print false
console.log( null == 0) // this print false because in equal comparision operator null is not treated as zero
console.log( null >= 0) // this print true because in comparision operator null is treated as zero

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false
console.log(undefined >= 0) //false

//**Important **//
console.log("2" === 2) // === strictly checks without any type conversion