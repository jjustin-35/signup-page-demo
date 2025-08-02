import "@/components/Icon";

class Field extends HTMLElement {
  static observedAttributes = ["label", "type", "name"];
  private isHide = true;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const field = document.createElement("div");
    const style = document.createElement("style");

    style.textContent = `@import url('/src/components/Field/style.css');`;
    shadow.appendChild(style);

    const label = this.getAttribute("label");
    const type = this.getAttribute("type");
    const name = this.getAttribute("name");

    field.classList.add("field");
    field.setAttribute("tabindex", "0");
    field.innerHTML = `
          ${
            label
              ? `<label class="field_label" for="${this.id}">${label}</label>`
              : ""
          }
      <input id="${
        this.id ?? name
      }" type="${type}" name="${name}" class="field_input" placeholder="" />
      ${
        name === "password"
          ? `<custom-icon type=${
              this.isHide ? "viewOff" : "view"
            } class="field_icon" width="18" height="18" />`
          : ""
      }
    `;

    shadow.appendChild(field);
  }

  private focusField(e: MouseEvent) {
    e.preventDefault();

    const field = e.currentTarget as HTMLDivElement;
    const input = field.querySelector(".field_input") as HTMLInputElement;
    input.focus();
  }

  private togglePasswordDisplay(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    const field = this.shadowRoot?.querySelector(".field") as HTMLDivElement;
    const input = field.querySelector(".field_input") as HTMLInputElement;
    const name = input.getAttribute("name");

    if (name !== "password") return;

    this.isHide = !this.isHide;
    console.log(this.isHide);
    input.type = this.isHide ? "password" : "text";
    const icon = field.querySelector("custom-icon") as HTMLImageElement;
    icon.setAttribute("type", this.isHide ? "viewOff" : "view");
  }

  connectedCallback() {
    const field = this.shadowRoot?.querySelector(".field") as HTMLDivElement;
    const icon = field.querySelector("custom-icon") as HTMLImageElement;
    field.addEventListener("click", this.focusField);

    if (icon) {
      icon.addEventListener("click", this.togglePasswordDisplay.bind(this));
    }
  }

  disconnectedCallback() {
    const field = this.shadowRoot?.querySelector(".field") as HTMLDivElement;
    field.removeEventListener("click", this.focusField);
    const icon = field.querySelector("custom-icon") as HTMLImageElement;
    if (icon) {
      icon.removeEventListener("click", this.togglePasswordDisplay.bind(this));
    }
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (name === "label") {
      const field = this.shadowRoot?.querySelector(".field") as HTMLDivElement;
      const label = field.querySelector(".field_label") as HTMLLabelElement;
      label.textContent = newValue;
    }
  }
}

customElements.define("form-field", Field);
