
function createGalleryCards(altTxt, imgSrc, description) {
    const card = document.createElement("div")
    card.className = "card"
    
    const cardImg = document.createElement("img")
    cardImg.src = imgSrc
    cardImg.alt = altTxt
    card.appendChild(cardImg)

    const cardDescription = document.createElement("p")
    cardDescription.innerText = description
    card.appendChild(cardDescription)
    
    document.getElementById("gallery-images").appendChild(card)

}

const images = [
    "images/bug_image.png", "images/c_language.jpg", "images/python_image.jpg", "images/first_programmer.jpg", "images/bootstrap_image.jpg"
]

const descriptions = [
    "the origin of the term bug in programming. The term originated in 1947 when a moth caused a computer malfunction. Grace Hopper and her team coined the term debugging when they removed the insect.",
    "Why was the C programming language created? The C programming language was created to implement the Unix operating system, providing low-level access to memory and kernel features.",
    "Why is Python named after Monty Python? Python, a programming language, is named after the British comedy group Monty Python. Its readability and simplicity make it popular among developers.",
    "Who was the first programmer? Ada Lovelace, a mathematician, is often credited as the first computer programmer for her work on Charles Babbage's Analytical Engine.",
    "How do CSS frameworks like Bootstrap simplify web development? CSS frameworks like Bootstrap provide pre-designed components and styles, streamlining the development of responsive and visually appealing websites.",
    "aknsd",
]

const imageAlts = ["img-1", "img-2", "img-3", "img-4", "img-5",]

let pointer = 0
while (pointer < images.length) {
    createGalleryCards(imageAlts[pointer], images[pointer], descriptions[pointer])
    pointer += 1
}