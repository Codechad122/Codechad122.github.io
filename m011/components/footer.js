class CustomFooter extends HTMLElement {
    constructor(){
        super()
    };

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });
        const footerContainer = document.createElement("div")
        footerContainer.setAttribute("class", "footer")

        const footerTextContainer = document.createElement("p")
        footerTextContainer.innerText = "azenner@art.edu" 

        footerContainer.appendChild(footerTextContainer)

        const style = document.createElement("style");
        style.textContent = `
            .footer {
                display: flex;
                flex-direction: column;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                padding-left: 16px;
                padding-right: 16px;
                width: 100%;
            }
        `
        shadow.appendChild(style)
        shadow.appendChild(footerContainer)
    }
}

customElements.define('custom-footer', CustomFooter)