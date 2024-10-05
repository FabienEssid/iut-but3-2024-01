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

    this.innerHTML = `
      <a href="${this.isLink && !!this.to ? this.to : "#"}">
        <div class="card">
          <div class="card__header">
            <h1 class="card__header__title">${this.name}</h1>
            <p class="card__header__subtitle">${this.hp} HP</p>
          </div>
          <div class="card__body">
            <div class="card__body__illustration">
              <img src="${this.image}" />
            </div>
          </div>
          <div class="card__footer">
            <div class="card__footer__prices-information">
              <p class="card__footer__prices-information__average-price">${this.price}</p>
              <p class="card__footer__prices-information__updated-date">${this.updatedDate}</p>
            </div>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define("pokemon-card", PokemonCard);
