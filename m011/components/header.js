class CustomHeader extends HTMLElement {
    constructor(){
        super()
    };

    connectedCallback(){
        const navListItems = ["Logo", "About", "Services", "News", "Contact", "Team"]

        const shadow = this.attachShadow({ mode: "open" });
        const headerContainer = document.createElement("div")
        headerContainer.setAttribute("class", "headerNav")
        const headerNav = document.createElement("nav")
        const navList = document.createElement("ul")

        headerNav.appendChild(navList)
        headerContainer.appendChild(headerNav)

        for(let i = 0; i < navListItems.length; i++){
            let navItem = document.createElement('li')
            let navLink = document.createElement('a')
            navLink.href = `${navListItems[i].toLowerCase()}.html`
            navItem.appendChild(navLink)
            navLink.innerText = navListItems[i]
            navList.appendChild(navItem)
        }
        
        const style = document.createElement("style")
        style.textContent = `
            .headerNav {
                display: flex;
                justify-content: center;
                margin-left: auto;
                margin-right: auto;
                padding-left: 16px;
                padding-right: 16px;
                width: 100%;
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