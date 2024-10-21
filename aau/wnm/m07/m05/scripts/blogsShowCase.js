function createBlogCards(altTxt, imgSrc, id, link) {
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
    document.getElementById("blog-grid").appendChild(card)

}

const images = ["images/bungie_blog (1).jpg", "images/elder_scrolls_blog (1).jpg"]
const imgAlts = ["img-1", "img-2"]
const blogLinks = [
    "/blog-page-1.html", 
    "/blog-page-2.html",
    
]

let pointer = 0
while (pointer < images.length){
    createBlogCards(imgAlts[pointer], images[pointer], `blog-post-${pointer}`, blogLinks[pointer])
    pointer += 1
}