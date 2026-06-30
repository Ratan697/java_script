// // Immediately Invoked Function Expressions (IIFE)

// function name(){
//     console.log("My name is Ratan")
// }

// name()

// (function parenthesis)(execution parenthesis)

(() => {
    console.log("My name is Ratan")
})();       //My name is Ratan



((name) => {
    console.log(`My name is ${name}`)
})('Ratan');        //My name is Ratan