import data, { type IconType } from "./data";

class Icon extends HTMLElement {
  static observedAttributes = ["type", "width", "height", "color"];

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const icon = document.createElement("img");
    icon.style.display = "block";

    const type = this.getAttribute("type") as IconType;
    const width = this.getAttribute("width");
    const height = this.getAttribute("height");

    icon.src = data[type]?.src ?? "";
    icon.alt = data[type]?.alt ?? "";
    icon.width = width ? Number(width) : 24;
    icon.height = height ? Number(height) : 24;

    shadow.appendChild(icon);
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    const icon = this.shadowRoot?.querySelector("img") as HTMLImageElement;
    switch (name) {
      case "type":
        icon.src = data[newValue as IconType]?.src ?? "";
        icon.alt = data[newValue as IconType]?.alt ?? "";
        break;
      case "width":
        icon.width = Number(newValue);
        break;
      case "height":
        icon.height = Number(newValue);
        break;
    }
  }
}

customElements.define("custom-icon", Icon);
