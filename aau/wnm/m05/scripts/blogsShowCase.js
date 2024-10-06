function createBlogCards(altTxt){
    const card = document.createElement("div")
    card.className = "card"

    // const cardImg = document.createElement("img")
    
    // will append image to card when I have them
    // document.getElementById("card-id-here").append(cardImg)

    const cardTextContainer = document.createElement("div")
    cardTextContainer.className = "cardText"
    const cardText = document.createElement("p")
    cardText.innerText = "Lorem ipsum odor amet, consecteture"
    cardTextContainer.appendChild(cardText)

    card.appendChild(cardTextContainer)
    document.getElementById("blog-grid").appendChild(card)

}

const imgAlts = ["img-1", "img-2", "img-3", "img-4"]
for(const imgAlt of imgAlts){
    createBlogCards(imgAlt)
}