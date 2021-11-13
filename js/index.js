// Iteration 1: Names and Input
// 

let hacker1 = 'andres'

console.log (`the driver's name is ${hacker1}`)

let hacker2 = 'cristina'

console.log (`the navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

//2.1 

if (hacker1.length > hacker2.length) {

    console.log (`The drivers has the longest name, it has ${hacker1.length} characters`)

//2.2
  
} else if (hacker1.length < hacker2.length) {

    console.log (`It seems that the navigator has the longest name, ${hacker2.length} characters`)

//2.3
  
} else {

    console.log (`Wow, you both have equally long names, ${hacker1.lenght}`)
}

// Iteration 3: Loops

//3.1 Couldn't figure out how to add a space to it. 

let hacker1Capitalized = hacker1.toUpperCase(" ")

console.log (hacker1Capitalized)



//3.2 Couldn't figure out how to print it in a single line reversed.

for (let i= hacker1.length - 1; i = 0; i--) {
  
  console.log (hacker1.charAt())
}


// 3.3

// 3.3.1

 if (hacker1 > hacker2) {

    console.log (`The driver's name goes first.`)

//3.3.2
  
} else if (hacker1 < hacker2) {

    console.log (`Yo, the navigator goes first definitely.`)

//3.3.3
  
} else {

    console.log (`What?! You both have the same name?`)
}
