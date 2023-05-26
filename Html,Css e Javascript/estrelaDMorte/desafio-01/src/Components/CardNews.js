class CardNews extends HTMLElement {
    constructor() {
        super(); //Inicia o Construtor

        const shadow = this.attachShadow({ mode: "open" }); // Estamos criando uma sobra, Aberta que os outro js pode interferir
        shadow.innerHTML = "<h1>Hello World</h1>";
    }
}

customElements.define('card-news', CardNews)