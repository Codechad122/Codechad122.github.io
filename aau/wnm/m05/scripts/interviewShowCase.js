function createInterviewCards(altTxt) {
    const card = document.createElement("div")
    card.className = "card"
    // const cardImg = document.createElement("img")
    document.getElementById("image-grid").appendChild(card)
    // will append image to card when I have them
    // document.getElementById("card-id-here").append(cardImg)

}

const imgAlts = ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6"]
for (const imageAlt of imgAlts) {
    createInterviewCards(imageAlt)
}