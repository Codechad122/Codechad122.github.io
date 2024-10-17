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

const images = ["images/Valkyrie-home-resized.jpg", "images/Valkyrie-home-resized.jpg"]
const imgAlts = ["img-1", "img-2"]
const blogTexts = [
    "Blog post info 1",
    "Blog post info 2",
]

let pointer = 0
while (pointer < images.length){
    createBlogCards(imgAlts[pointer], images[pointer], `blog-post-${pointer}`, blogTexts[pointer])
    pointer += 1
}
for (const imageAlt of imgAlts) {
}