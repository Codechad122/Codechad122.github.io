function createInterviewCards(altTxt, imgSrc) {
    const card = document.createElement("div")
    card.className = "card"

    const cardImg = document.createElement("img")
    cardImg.src = imgSrc
    cardImg.alt = altTxt
    card.appendChild(cardImg)
    document.getElementById("image-grid").appendChild(card)
    // will append image to card when I have them
    // document.getElementById("card-id-here").append(cardImg)

}

const images = ["images/Valkyrie-home-resized.jpg", "images/Valkyrie-home-resized.jpg", "images/Valkyrie-home-resized.jpg", "images/Valkyrie-home-resized.jpg", "images/Valkyrie-home-resized.jpg", "images/Valkyrie-home-resized.jpg"]
const imgAlts = ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6"]

let pointer = 0
while (pointer < images.length){
    createInterviewCards(imgAlts[pointer], images[pointer])
    pointer += 1
}
for (const imageAlt of imgAlts) {
}