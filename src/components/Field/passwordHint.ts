import "../Icon";

class PasswordHint extends HTMLElement {
  static observedAttributes = ["isValid"];

  private isValid = false;

  constructor() {
    super();

    const isValid = this.getAttribute("isValid") === "true";
    const text = this.getAttribute("text");
    this.isValid = isValid;

    const passwordHint = document.createElement("div");
    passwordHint.classList.add("password_hint");
    passwordHint.innerHTML = `
      <custom-icon type="${
        this.isValid ? "checkRoundGreen" : "checkRoundGray"
      }" width="12px" height="12px"></custom-icon>
      <span>${text}</span>
    `;

    this.appendChild(passwordHint);
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    switch (name) {
      case "isValid":
        this.isValid = newValue === "true";
        break;
    }
  }
}

customElements.define("password-hint", PasswordHint);