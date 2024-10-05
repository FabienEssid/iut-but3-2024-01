class PokemonCard extends HTMLElement {
  constructor() {
    super();

    this.hp = this.getAttribute("hp");
    this.image = this.getAttribute("image");
    this.isLink = !!this.getAttribute("is-link");
    this.name = this.getAttribute("name");
    this.price = this.getAttribute("price");
    this.to = this.getAttribute("to");
    this.updatedDate = this.getAttribute("updated-date");

    this.cardId = `card-${this.name.toLowerCase().replaceAll(" ", "-")}`;
    this.buttonId = `cta-${this.name.toLowerCase().replaceAll(" ", "-")}`;

    this.innerHTML = `
      <div id="${this.cardId}" class="card">
        <div class="card__header">
          <h1 class="card__header__title">${this.name}</h1>
          <p class="card__header__subtitle">${this.hp} HP</p>
        </div>
        <div class="card__body">
          <div class="card__body__illustration">
            <a href="${this.isLink && !!this.to ? this.to : "#"}">
              <img src="${this.image}" />
            </a>
          </div>
        </div>
        <div class="card__footer">
          <div class="card__footer__prices-information">
            <p class="card__footer__prices-information__average-price">${this.price}</p>
            <p class="card__footer__prices-information__updated-date">${this.updatedDate}</p>
          </div>

          <button id="${this.buttonId}" role="button" type="button" class="card__footer__cta">Add to wishlist</button>
        </div>
      </div>
    `;

    document.querySelector(`#${this.buttonId}`).addEventListener("click",() =>  {
      const cardElement = document.querySelector(`#${this.cardId}`);
      const wishlistElement = document.querySelector(".wishlist__body");

      wishlistElement.appendChild(cardElement);
    });
  }
}

customElements.define("pokemon-card", PokemonCard);
