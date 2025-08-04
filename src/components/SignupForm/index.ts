import "../Icon";
import "../Field";
import "../Field/passwordHint";
import "../Checkbox";
import "./style.css";
import formData from "./data";

class SignupForm extends HTMLElement {
  static observedAttributes = ["form-type", 'loading'];

  private buttonText = "Create an Free Account!";

  constructor() {
    super();

    const form = document.createElement("form");
    form.classList.add("signup_form");
    form.setAttribute("action", "/signup");
    form.setAttribute("method", "post");

    const formType = this.getAttribute("formType") as keyof typeof formData;
    const formFields = formData[formType];

    const formFieldsHTML = formFields
      .map((field) => {
        return `
        <form-field label="${field.label}" type="${field.type}" name="${
          field.name
        }" isHalf="${field.isHalf || false}"  required></form-field>
      `;
      })
      .join("");

    const checkboxLabel = "By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.";
    form.innerHTML = `
      ${formFieldsHTML}
      <login-checkbox label="${checkboxLabel}" name="accept_terms" required="true"></login-checkbox>
      <button class="button" type="submit">
        <span>${this.buttonText}</span>
      </button>
    `;

    this.appendChild(form);
  }

  private toggleButton(button: HTMLButtonElement, isLoading: boolean) {
    button.disabled = isLoading;
    const span = button.querySelector("span") as HTMLSpanElement;
    const originalText = this.buttonText;
    span.textContent = isLoading ? "Please wait..." : originalText;
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (name === "loading") {
      const button = this.querySelector("button[type='submit']") as HTMLButtonElement;
      const toggleButton = this.toggleButton.bind(this);
      toggleButton(button, newValue === "true");
    }
  }
}

customElements.define("signup-form", SignupForm);