
function createGalleryCards(altTxt, imgSrc, id) {
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
        const modal = document.getElementById("dialog")
        let modalText = document.createElement('p')
        modalText.innerText = id 
        const modalClose = document.createElement("button")
        modalClose.innerText = "Close"
        modalClose.addEventListener("click", () => {
            while (modal.firstChild){
                modal.removeChild(modal.firstChild)
            }
            modal.close()
        })
        modal.appendChild(modalText)
        modal.appendChild(modalClose)
        modal.show()
    })
    
    card.appendChild(modalButton)
    document.getElementById("gallery-images").appendChild(card)

}

const images = [
    "images/gallery-image-1.jpg", "images/gallery-image-2.jpg", "images/gallery-image-3.jpg", "images/gallery-image-4.jpg", "images/gallery-image-5.jpg", "images/gallery-image-6.jpg",
    "images/gallery-image-7.jpg", "images/gallery-image-8.jpg", "images/gallery-image-9.jpg", "images/gallery-image-10.jpg", "images/gallery-image-11.jpg", "images/gallery-image-12.jpg"
]
const imageAlts = ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6", "img-7", "img-8", "img-9", "img-10", "img-11", "img-12"]

let pointer = 0
while (pointer < images.length) {
    createGalleryCards(imageAlts[pointer], images[pointer], `gallery-modal-${pointer}`)
    pointer += 1
}