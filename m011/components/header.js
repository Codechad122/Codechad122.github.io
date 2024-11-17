class CustomHeader extends HTMLElement {
    constructor(){
        super()
    };

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });
        const tag = document.createElement("p")
        tag.innerText = "HELLO I AM TEST"
        shadow.appendChild(tag)
    }
}

customElements.define('custom-header', CustomHeader)