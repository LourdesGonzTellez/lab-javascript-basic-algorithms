// Iteration 1: Names and Input
let hacker1 = 'Lourdes'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Marvel'
console.log(`The navigator's name is ${hacker1}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let driverToUpperCase = ' ';
for (let i = 0; i < hacker1.length; i++, driverToUpperCase += ' ') {
    driverToUpperCase += hacker1[i].toUpperCase();
}

console.log(driverToUpperCase);

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let navitagorReverse = " "

for (let j = hacker2.length - 1; j >= 0; j--) {
    navitagorReverse += hacker2[j]
}
console.log(navitagorReverse)


//3.3 Depending on the lexicographic order of the strings, print:

const result = hacker1.localeCompare(hacker2)

if (result < 0) {
    console.log("The driver's name goes first.")
} else if (result > 0) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus 1:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Donec tincidunt odio eu porttitor lobortis. Aenean ut sapien eget odio 
imperdiet congue a eget libero. In dapibus mauris non dui pellentesque 
scelerisque. Ut in erat ultricies, viverra odio vel, imperdiet massa. 
Vivamus feugiat leo ut nulla ornare venenatis. Aenean ultricies lacus 
at libero porttitor, eget lobortis quam iaculis. Donec leo nulla, 
viverra sed est sed, mollis efficitur purus. Donec ut facilisis nulla. 
Aliquam id accumsan lorem, at suscipit purus. Nunc non blandit libero. 
Fusce id augue at lectus fermentum venenatis non vel turpis. 
Phasellus imperdiet risus in erat pharetra sagittis vitae ut massa. 
Integer non dui eu lectus pellentesque accumsan at sed nibh. In viverra 
tortor volutpat ligula semper malesuada. Nullam in mollis sapien, quis 
dignissim leo. Phasellus sapien nunc, auctor scelerisque nulla eget, 
pulvinar pharetra orci. Nam massa ligula, suscipit vitae nisl ac, 
dignissim commodo metus. Sed laoreet purus at justo venenatis ultrices.
Proin a elit eget lectus suscipit consequat. In a consectetur mi, sit 
amet pretium lectus. Fusce ullamcorper justo mauris.`.toLowerCase()

const words = longText.split(' ').length

console.log(words, "words")


let etWordCount = 0;
let etWords = longText.split(" ");

for (let i = 0; i < etWords.length; i++) {
    if (etWords[i] === "et") {
        etWordCount++;
    }
}
console.log(etWordCount);

