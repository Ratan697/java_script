//-----------ARRAY----------
const arr = [1,2,3,4,5]
const arr2 = [1,2,'Ratan','Piyali'] //We can add different datatypes inside array in JavaScript
const myArr = new Array(1,2,3,4,5,6,7,8,9,10,11,12)

console.log(arr[0]) //1(by arr[i] we can access the elements of the array at index i)
//-----------ARRAY METHODS---------------

arr.push(1)
console.log(arr)    //[ 1, 2, 3, 4, 5, 1 ](add the element at the end of the array)
arr.pop()
console.log(arr)    //[ 1, 2, 3, 4, 5 ](Remove the element from the end)

arr.unshift(7)
console.log(arr)    //[ 7, 1, 2, 3, 4, 5 ](Add the element in front by shifting all the other elements)

arr.shift()
console.log(arr)    //[ 1, 2, 3, 4, 5 ](Remove the the front element)

console.log(arr.includes(6))    //false (It checks that the element is present in the array or not and return boolean value)

console.log(arr.indexOf(4)) //3(the element 4 is in 3rd index)

const newArr = arr.join()
console.log(typeof(arr))    //object
console.log(typeof(newArr)) //string

//------SLICE & SPLICE-----
console.log("A ",arr)
const myn1 = arr.slice(1,3)
console.log(myn1)  //[ 2, 3 ](It prints the elemts from 1 upto less then three)
const myn2 = arr.splice(1,3)
console.log(arr)    //[ 1, 5 ](Splice convert the original array by deleting all the elements from 1 to 3)
console.log(myn2)   //[ 2, 3, 4 ](The elements from 1 to 3)
