function createGalleryCards(altTxt) {
    const card = document.createElement("div")
    card.className = "card"
    // const cardImg = document.createElement("img")
    document.getElementById("gallery-images").appendChild(card)
    // will append image to card when I have them
    // document.getElementById("card-id-here").append(cardImg)


}


const imageAlts = ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6", "img-7", "img-8", "img-9", "img-10", "img-11", "img-12"]
for (const imageAlt of imageAlts) {
    createGalleryCards(imageAlt)
}