class CardNewsProf extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const componentCardLeft = document.createElement("div");
    componentCardLeft.setAttribute("class", "card-left");
    
    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitulo = document.createElement("a");
    linkTitulo.textContent = this.getAttribute("title");
    linkTitulo.href = this.getAttribute("link-url");

    const descricao = document.createElement("p");
    descricao.textContent = this.getAttribute("desc");

    componentCardLeft.appendChild(autor);
    componentCardLeft.appendChild(linkTitulo);
    componentCardLeft.appendChild(descricao);


    const componentCardRight = document.createElement("div");
    componentCardRight.setAttribute("class", "card-right");
    const img = document.createElement("img");
    img.src = this.getAttribute("src") || "assets/defaul.jpg";
    img.alt = this.getAttribute("alt");
    componentCardRight.appendChild(img);

    componentRoot.appendChild(componentCardLeft);
    componentRoot.appendChild(componentCardRight);

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `

    .card {
      width: 100%;
      -webkit-box-shadow: 7px 13px 21px -4px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 7px 13px 21px -4px rgba(0, 0, 0, 0.75);
      box-shadow: 7px 13px 21px -4px rgba(0, 0, 0, 0.75);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .card-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0.7rem;
    }

    .card-left > h1 {
      margin-top: 1rem;
      font-size: 2rem;
    }

    .card-left >  a {
      text-decoration: none;
      color: black;
    }

    .card-left > p {
      color: rgb(80, 80, 80);
    }

    .card-left > span {
      font-weight: 300;
    }

    img {
      width: 20rem;
    }
        `;
      
      return style;
    }
}

customElements.define("card-news", CardNewsProf);