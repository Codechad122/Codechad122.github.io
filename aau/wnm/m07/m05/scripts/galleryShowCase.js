
function createGalleryCards(altTxt, imgSrc, id, link) {
    const card = document.createElement("div")
    card.className = "card"
    
    const cardImg = document.createElement("img")
    cardImg.src = imgSrc
    cardImg.alt = altTxt
    card.appendChild(cardImg)
    
    const blogLink = document.createElement("a")
    blogLink.className = "blogLink"
    blogLink.innerText = "More Info"
    blogLink.id = id
    blogLink.href = link
    card.appendChild(blogLink)
    document.getElementById("gallery-images").appendChild(card)

}

const images = [
    "images/gallery-image-1.jpg", "images/gallery-image-2.jpg", "images/gallery-image-3.jpg", "images/gallery-image-4.jpg", "images/gallery-image-5.jpg", "images/gallery-image-6.jpg",
    "images/gallery-image-7.jpg", "images/gallery-image-8.jpg", "images/gallery-image-9.jpg", "images/gallery-image-10.jpg", "images/gallery-image-11.jpg", "images/gallery-image-12.jpg"
]

const imageAlts = ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6", "img-7", "img-8", "img-9", "img-10", "img-11", "img-12"]

const blogLinks = [
    "/aau/wnm/m07/m05/gallery-image-1.html",
    "/aau/wnm/m07/m05/gallery-image-2.html",
    "/aau/wnm/m07/m05/gallery-image-3.html",
    "/aau/wnm/m07/m05/gallery-image-4.html",
    "/aau/wnm/m07/m05/gallery-image-5.html",
    "/aau/wnm/m07/m05/gallery-image-6.html",
    "/aau/wnm/m07/m05/gallery-image-7.html",
    "/aau/wnm/m07/m05/gallery-image-8.html",
    "/aau/wnm/m07/m05/gallery-image-9.html",
    "/aau/wnm/m07/m05/gallery-image-10.html",
    "/aau/wnm/m07/m05/gallery-image-11.html",
    "/aau/wnm/m07/m05/gallery-image-12.html",

]
let pointer = 0
while (pointer < images.length) {
    createGalleryCards(imageAlts[pointer], images[pointer], `gallery-modal-${pointer}`, blogLinks[pointer])
    pointer += 1
}