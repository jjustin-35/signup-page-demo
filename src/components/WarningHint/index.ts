import "@/components/Icon";
import "./style.css";

class WarningHint extends HTMLElement {
  static observedAttributes = ["message", "error"];
  constructor() {
    super();

    const message = this.getAttribute("message");

    const warningHint = document.createElement("div");
    warningHint.classList.add("warning_hint");
    warningHint.innerHTML = `
      <custom-icon type="warning" width="24px" height="24px"></custom-icon>
      <span>${message}</span>
    `;

    this.appendChild(warningHint);
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (name === "message") {
      const warningHint = this.querySelector(".warning_hint") as HTMLDivElement;
      const span = warningHint.querySelector("span") as HTMLSpanElement;
      span.textContent = newValue;
    }

    if (name === "error") {
      const warningHint = this.querySelector(".warning_hint") as HTMLDivElement;
      warningHint.classList.toggle("warning_hint--error", newValue === "true");
    }
  }
}

customElements.define("warning-hint", WarningHint);
