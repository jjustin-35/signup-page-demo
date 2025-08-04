import "../Icon";
import "../Field";
import "../Field/passwordHint";
import "../Checkbox";
import "./style.css";
import formData from "./data";

class SignupForm extends HTMLElement {
  static observedAttributes = ["form-type"];

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
        <form-field label="${field.label}" type="${field.type}" name="${field.name}" isHalf="${field.isHalf || false}"  required></form-field>
      `;
      })
      .join("");

    form.innerHTML = `
      ${formFieldsHTML}
      <login-checkbox label="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings." name="accept_terms"></login-checkbox>
      <button class="button" type="submit">Create an Free Account!</button>
    `;

    this.appendChild(form);
  }
}

customElements.define("signup-form", SignupForm);
