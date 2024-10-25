function createBlogCards(altTxt, imgSrc, id, blogText) {
    const card = document.createElement("div")
    card.className = "card"

    const cardImg = document.createElement("img")
    cardImg.src = imgSrc
    cardImg.alt = altTxt
    card.appendChild(cardImg)

    const modalButton = document.createElement("button")
    modalButton.innerText = "More Info"
    modalButton.id = id
    modalButton.addEventListener("click", () => {
        const modal = document.getElementById("blog-dialog")
        let modalText = document.createElement('p')
        modalText.innerText = blogText
        const modalClose = document.createElement("button")
        modalClose.className = 'dialog-close-button'
        modalClose.innerText = "Close"
        modalClose.addEventListener("click", () => {
            while (modal.firstChild){
                modal.removeChild(modal.firstChild)
            }
            modal.close()
        })
        modal.appendChild(modalText)
        modal.appendChild(modalClose)
        modal.showModal()
    })
    card.appendChild(modalButton)
    document.getElementById("blog-grid").appendChild(card)

}

const images = ["images/bungie_blog (1).jpg", "images/elder_scrolls_blog (1).jpg"]
const imgAlts = ["img-1", "img-2"]
const blogTexts = [
    "This blog post is about bungies new dlc frontiers coming in 2025.september 9th was the anniversary for the Destiny franchise back in 2014 Bungie had a goal to make something totally new and very different from all games. With the ending of the light and dark saga back in june of 2024 has concluded. Now the future is looking bright with the new dlc and rumors of a whole new saga in the works. It looks like bungie might be planning to turn this into the next world of warcraft game.",
    "This blog post has info on ESO;s new gold road dlc. A new area of the game has opened and is caled the west weald. It comes with three different biomes there are the colovian highlands which is a mountain region. Then there is the valenwood annexation it has jungles and lots of wildlife within the area.And the most dangerous of these areas is dawnwood and has dangerous beasts and animals.",
]

let pointer = 0
while (pointer < images.length){
    createBlogCards(imgAlts[pointer], images[pointer], `blog-post-${pointer}`, blogTexts[pointer])
    pointer += 1
}
for (const imageAlt of imgAlts) {
}