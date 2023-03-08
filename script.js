// ROCK, PAPER, SCISSORS

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// function getHand() {
//     let randomIndex = Math.floor( Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log( getHand() )

let hand = hands[Math.floor(Math.random()*hands.length)]

console.log(hand)


// EMOJI FIGHTER

    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomFighter1Index = Math.floor(Math.random() * fighters.length)
    let randomFighter2Index = Math.floor(Math.random() * fighters.length)
    
    if (randomFighter1Index !== randomFighter2Index) {
       return stageEl.textContent = fighters[randomFighter1Index] + " VS " + fighters[randomFighter2Index]
    }
    

})

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")


function sortFruits() {
    for (let i = 0; i< fruit.length; i++) {
        
        if (fruit[i] === "🍎") {
           appleShelf.textContent += "🍎";
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊";
        }
    }
}

sortFruits()

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = false

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes






let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function allArray(arr) {
    for (let i=0; i< arr.length; i++) {
        console.log(arr[i])
    }
}

allArray(myCourses)







// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("name", "Diana")

let myName = localStorage.getItem("name")
console.log(myName)






// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]


const janesBtn = document.querySelector("#janes-btn")

janesBtn.addEventListener("click", function () {
    console.log(data[0].score)
})




// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i=0; i < arr.length; i++ ) {
        if (i === lastIndex) {
            baseString +=  arr[i] + "."
        } else {
            baseString +=  arr[i] + ", "  
        }               
    } 
    return baseString
}

const sentence = generateSentence("best doctors", ["Diana", "Agne", "Saule", "Audrone"])
console.log(sentence)



