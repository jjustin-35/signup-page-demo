import "../Icon";
import "./style.css";

class LoginCheckbox extends HTMLElement {
  static observedAttributes = [
    "checked",
    "disabled",
    "name",
    "label",
    "required",
  ];

  constructor() {
    super();

    const checkboxField = document.createElement("div");
    checkboxField.classList.add("checkbox_field");

    const name = this.getAttribute("name");
    const label = this.getAttribute("label");
    const isDisabled = this.getAttribute("disabled") === "true";
    const isChecked = this.getAttribute("checked") === "true";
    const isRequired = this.getAttribute("required") === "true";

    checkboxField.innerHTML = `
      <div class="checkbox_wrapper">
        <custom-icon type="check" width="11px" height="auto" class="checkbox_icon" />
        <input type="checkbox" class="checkbox--hidden" name="${name}" id="checkbox_${name}" 
        ${isDisabled ? "disabled" : ""} ${isChecked ? "checked" : ""} ${
      isRequired ? "required" : ""
    } />
      </div>
      <label for="checkbox_${name}" class="checkbox_label">
        ${label}
      </label>
    `;

    this.appendChild(checkboxField);
  }

  private handleChange(e: MouseEvent) {
    const checkboxWrapper = e.currentTarget as HTMLDivElement;
    const checkbox = checkboxWrapper.querySelector(
      ".checkbox--hidden"
    ) as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
  }

  connectedCallback() {
    const checkbox = this.querySelector(".checkbox_wrapper") as HTMLDivElement;
    checkbox.addEventListener("click", this.handleChange);
  }

  disconnectedCallback() {
    const checkbox = this.querySelector(".checkbox_wrapper") as HTMLDivElement;
    checkbox.removeEventListener("click", this.handleChange);
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    const checkbox = this.querySelector(
      ".checkbox--hidden"
    ) as HTMLInputElement;

    switch (name) {
      case "checked":
        checkbox.checked = newValue === "true";
        break;
      case "disabled":
        checkbox.disabled = newValue === "true";
        break;
      case "required":
        checkbox.required = newValue === "true";
        break;
      default:
        break;
    }
  }
}

customElements.define("login-checkbox", LoginCheckbox);
