//sitas index2.html
// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.querySelector("#container");

function render(img) {
    let imgDOM = ""
    for (let i = 0; i < img.length; i++) {
        imgDOM += `<img alt="Employee in the company" class="team-img" src="${img[i]}">`
    }    
    container.innerHTML = imgDOM
}

render(imgs)


// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${totalPrice.toFixed(2)}`


// // Challenge:
// // The toFixed() method doesn't work anymore. Can you make it work?
// // Google the error message if you're unsure about how to do it

// const totalPrice = "420.69235632455"
// const btn = document.getElementById("buy-btn")
// btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`