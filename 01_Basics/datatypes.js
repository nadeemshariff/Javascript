// Primitive

// 7 types : Strings , Number , Boolean, null , undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 123456789123456789n


//Reference (Non-Premitive)

//Arrays, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "doga"]
let muObj = {
    name: "Nadeem",
    age: 22,
    city: "VIZAG"
}

const myFunction = function() {
    console.log("HWEWHWEWHHE");
}

console.log(typeof anotherId)