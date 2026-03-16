//Stack(primitive memory) , Heap(Non-Premitive memory)
let myName="Ratan"                      //Stack memory
let anotherName=myName
anotherName="Piyali"
console.log(myName)
console.log(anotherName)
let userOne={                           //Heap memory
    email:"ratanjana7600@gmail.com"
}
let userTwo=userOne


userTwo.email="ratan460jana@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)