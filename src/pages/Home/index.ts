import "./style.css";

class HomePage extends HTMLElement {
  constructor() {
    super();

    const homePage = document.createElement("section");
    homePage.classList.add("page_wrapper");

    const homeSection = document.createElement("div");
    homeSection.classList.add("home_section");

    homeSection.innerHTML = `
      <h1>Home</h1>
      <div class="home_button_group">
        <a href="/signup" class="button">Sign Up</a>
      </div>
    `;

    homePage.appendChild(homeSection);
    this.appendChild(homePage);
  }
}

customElements.define("home-page", HomePage);
