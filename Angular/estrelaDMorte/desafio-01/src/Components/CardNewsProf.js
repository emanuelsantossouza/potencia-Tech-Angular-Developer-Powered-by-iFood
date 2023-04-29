class CardNewsProf extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }
    
    build() { 
        const componentRoot = document.createElement("div")

        return componentRoot;
    }
    
    style(){}
    }


customElements.define("Card-News",CardNewsProf);