function createInterviewCards(altTxt, imgSrc) {
    const card = document.createElement("div")
    card.className = "card"

    const cardImg = document.createElement("img")
    cardImg.src = imgSrc
    cardImg.alt = altTxt
    card.appendChild(cardImg)
    document.getElementById("image-grid").appendChild(card)

}

const images = ["images/ryans-question-1.jpg", "images/ryans-question-2.jpg", "images/ryans-question-3.jpg", "images/ryans-question-4.jpg", "images/ryans-question-5.jpg", "images/ryans-question-6.jpg"]
const imgAlts = ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6"]

let pointer = 0
while (pointer < images.length){
    createInterviewCards(imgAlts[pointer], images[pointer])
    pointer += 1
}
for (const imageAlt of imgAlts) {
}