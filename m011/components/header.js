class CustomHeader extends HTMLElement {
    constructor(){
        super()
    };

    connectedCallback(){
        const navListItems = ["About", "Services", "News", "Contact", "Team"]

        const shadow = this.attachShadow({ mode: "open" });
        const headerContainer = document.createElement("div")
        headerContainer.setAttribute("class", "headerNav")
        const logoLinkContainer = document.createElement('div')
        const logoLink = document.createElement('a')
        logoLink.innerHTML = `<svg width="48" height="48" viewBox="0 0 406 406" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M191.158 38.2319L89.6584 76.2944C76.4634 81.3694 67.6667 93.8877 67.6667 108.098V187.606C67.6667 269.314 120.616 346.115 193.358 369.46C199.617 371.49 206.383 371.49 212.643 369.46C285.384 346.115 338.333 269.483 338.333 187.606V108.098C338.321 101.214 336.21 94.497 332.28 88.8446C328.351 83.1922 322.79 78.873 316.342 76.4635L214.842 38.4011C207.229 35.3561 198.771 35.3561 191.158 38.2319Z" fill="#F5721F"/>
<path d="M316.388 357.4L269.344 310.758L233.96 346.141L222.702 334.883C216.537 328.718 213.454 321.078 213.454 311.964C213.454 302.85 216.537 295.211 222.702 289.046L290.654 221.094C296.82 214.928 304.459 211.846 313.573 211.846C322.687 211.846 330.326 214.928 336.492 221.094L347.75 232.352L312.367 267.735L359.008 314.779C362.225 317.996 363.833 321.748 363.833 326.037C363.833 330.326 362.225 334.079 359.008 337.296L338.904 357.4C335.688 360.616 331.935 362.225 327.646 362.225C323.357 362.225 319.604 360.616 316.388 357.4ZM363.833 104.891L181.288 287.437L183.298 289.046C189.463 295.211 192.546 302.85 192.546 311.964C192.546 321.078 189.463 328.718 183.298 334.883L172.04 346.141L136.656 310.758L89.6126 357.4C86.3959 360.616 82.6431 362.225 78.3542 362.225C74.0654 362.225 70.3126 360.616 67.0959 357.4L46.9917 337.296C43.7751 334.079 42.1667 330.326 42.1667 326.037C42.1667 321.748 43.7751 317.996 46.9917 314.779L93.6334 267.735L58.2501 232.352L69.5084 221.094C75.6737 214.928 83.3133 211.846 92.4272 211.846C101.541 211.846 109.181 214.928 115.346 221.094L116.954 223.104L299.5 40.5581H363.833V104.891ZM121.779 184.504L42.1667 104.891V40.5581H106.5L186.113 120.171L121.779 184.504Z" fill="#755948"/>
</svg>`
        logoLink.href = 'index.html'
        logoLinkContainer.appendChild(logoLink)
        headerContainer.appendChild(logoLinkContainer)
        const headerNav = document.createElement("nav")
        const navList = document.createElement("ul")

        headerNav.appendChild(navList)
        headerContainer.appendChild(headerNav)

        for(let i = 0; i < navListItems.length; i++){
            let navItem = document.createElement('li')
            let navLink = document.createElement('a')
            if (navListItems[i].toLocaleLowerCase() === "about"){
                navLink.href = `index.html`
            } else {
                navLink.href = `/m011/${navListItems[i].toLowerCase()}.html`
            }
            navItem.appendChild(navLink)
            navLink.innerText = navListItems[i]
            navList.appendChild(navItem)
        }
        
        const style = document.createElement("style")
        style.textContent = `
            .headerNav {
                display: flex;
                justify-content: space-between;
                margin-left: auto;
                margin-right: auto;
                padding-left: 16px;
                padding-right: 16px;
                align-items: center;
                width: 100%;
            }
            
            .headerNav div {
                width: 50%;
            }

            .headerNav nav {
                width: 50%;
                background-color: aqua;
            }

            .headerNav nav ul {
                list-style-type: none;
                display: flex;
                justify-content: center;
                gap: 16px;
            }

            .headerNav nav ul li a {
                color: black;
                text-decoration: none;
            }
        `
        shadow.appendChild(style)
        shadow.appendChild(headerContainer)
    }
}

customElements.define('custom-header', CustomHeader)