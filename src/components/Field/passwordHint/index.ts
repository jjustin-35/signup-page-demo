import "../../Icon";
import hint from "./data";
import "../style.css";

class PasswordHint extends HTMLElement {
  static observedAttributes = ["valid", "type"];

  constructor() {
    super();

    const isValid = this.getAttribute("valid") === "true";
    const type = this.getAttribute("type") as keyof typeof hint;

    const passwordHint = document.createElement("div");
    passwordHint.classList.add("password_hint");
    passwordHint.innerHTML = `
      <custom-icon type="${
        isValid ? "checkRoundGreen" : "checkRoundGray"
      }" width="12px" height="12px"></custom-icon>
      <span>${hint[type]}</span>
    `;

    this.appendChild(passwordHint);
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    const passwordHint = this.querySelector(".password_hint") as HTMLDivElement;
    
    switch (name) {
      case "valid":
        const isValid = newValue === "true";
        const icon = passwordHint.querySelector(
          "custom-icon"
        ) as HTMLImageElement;
        icon.setAttribute(
          "type",
          isValid ? "checkRoundGreen" : "checkRoundGray"
        );
        break;
      case "type":
        const type = newValue as keyof typeof hint;
        const span = passwordHint.querySelector("span") as HTMLSpanElement;
        span.textContent = hint[type];
        break;
    }
  }
}

customElements.define("password-hint", PasswordHint);
