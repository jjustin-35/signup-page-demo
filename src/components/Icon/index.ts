import { baseUrl } from "@/config";
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
    icon.style.width = width ?? "100%";
    icon.style.height = height ?? "100%";

    shadow.appendChild(icon);
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    const icon = this.shadowRoot?.querySelector("img") as HTMLImageElement;
    switch (name) {
      case "type":
        const newIcon = data[newValue as IconType];
        icon.src = newIcon?.src ? `${baseUrl}${newIcon.src}` : "";
        icon.alt = newIcon?.alt ?? "";
        break;
      case "width":
        icon.style.width = newValue;
        break;
      case "height":
        icon.style.height = newValue;
        break;
    }
  }
}

customElements.define("custom-icon", Icon);
