import "@/components/Icon";
import "./style.css";

type FieldType = "text" | "email" | "password";

class Field extends HTMLElement {
  static observedAttributes = ["label", "type", "name"];
  private isHide = true;
  private fieldType: FieldType = "text";

  constructor() {
    super();

    const field = document.createElement("div");

    const label = this.getAttribute("label");
    const type = this.getAttribute("type") as FieldType;
    const name = this.getAttribute("name");
    const required = this.getAttribute("required");
    const isHalf = this.getAttribute("isHalf") === "true";
    const isRequired = (() => {
      if (required === null) return false;
      if (required === "false") return false;
      return true;
    })();
    const id = this.getAttribute("id") ?? `input_${name}`;

    this.fieldType = type;
    if (isHalf) this.classList.add("is-half");
    field.classList.add("field");
    field.setAttribute("tabindex", "0");
    field.innerHTML = `
          ${
            label
              ? `<label class="field_label" for="${this.id}">${label}</label>`
              : ""
          }
      <input id="${id}" type="${type}" name="${name}" class="field_input" placeholder=""
      ${isRequired ? "required" : ""} />
      ${
        this.fieldType === "password"
          ? `<custom-icon type=${
              this.isHide ? "viewOff" : "view"
            } class="field_icon" width="18px" height="18px" />`
          : ""
      }
    `;

    this.appendChild(field);
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

    const field = this.querySelector(".field") as HTMLDivElement;
    const input = field.querySelector(".field_input") as HTMLInputElement;

    if (this.fieldType !== "password") return;

    this.isHide = !this.isHide;
    input.type = this.isHide ? "password" : "text";
    const icon = field.querySelector("custom-icon") as HTMLImageElement;
    icon.setAttribute("type", this.isHide ? "viewOff" : "view");
  }

  connectedCallback() {
    const field = this.querySelector(".field") as HTMLDivElement;
    const icon = field.querySelector("custom-icon") as HTMLImageElement;
    field.addEventListener("click", this.focusField);

    if (icon) {
      icon.addEventListener("click", this.togglePasswordDisplay.bind(this));
    }
  }

  disconnectedCallback() {
    const field = this.querySelector(".field") as HTMLDivElement;
    field.removeEventListener("click", this.focusField);
    const icon = field.querySelector("custom-icon") as HTMLImageElement;
    if (icon) {
      icon.removeEventListener("click", this.togglePasswordDisplay.bind(this));
    }
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (name === "label") {
      const field = this.querySelector(".field") as HTMLDivElement;
      const label = field.querySelector(".field_label") as HTMLLabelElement;
      label.textContent = newValue;
    }
  }
}

customElements.define("form-field", Field);
