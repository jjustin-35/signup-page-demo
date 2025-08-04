import { mockApi } from "@/helpers/mockApi";
import "../../components/Icon";
import "../../components/SignupForm";
import "../../components/WarningHint";
import data from "../../components/SignupForm/data";
import "./style.css";
import { hasNumber, isLongerThan8Characters } from "@/helpers/validation";

class SignUpPage extends HTMLElement {
  constructor() {
    super();

    const signupPage = document.createElement("section");
    signupPage.classList.add("page_wrapper");

    const signupSection = document.createElement("div");
    signupSection.classList.add("signup_section");

    const warningText = "Please complete all the required fields to proceed.";    

    signupSection.innerHTML = `
      <a class="signup_backlink" href="/">
        <custom-icon type="arrowLeft" width="16px" height="16px"></custom-icon>
        <span>Back</span>
      </a>
      <div class="signup_section_content">
        <p class="signup_section_subtitle">Start from free</p>
        <h1 class="signup_section_title">Create an account</h1>
        <warning-hint message="${warningText}" error="false"></warning-hint>
        <div class="signup_button_group">
          <a class="button button--outline" href="https://google.com" target="_blank">
            <custom-icon type="google" width="16px" height="16px"></custom-icon>
            <span>Sign up with Google</span>
          </a>
          <a class="button button--outline" href="https://facebook.com" target="_blank">
            <custom-icon type="facebook" width="16px" height="16px"></custom-icon>
            <span>Sign up with Facebook</span>
          </a>
        </div>
        <div class="signup_form_separator">
          <span>Or use your email for registration</span>
        </div>
        <signup-form formType="signup"></signup-form>
      </div>
    `;

    signupPage.appendChild(signupSection);
    this.appendChild(signupPage);
  }

  private async onSubmit(e: SubmitEvent) {
    // loading
    const signupForm = this.querySelector("signup-form") as HTMLElement;
    signupForm.setAttribute("loading", "true");

    // Validate form
    const fields = data.signup;
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const errorFields = Array.from(formData.entries()).filter(([key, value]) => {
      const currentField = fields.find((field) => field.name === key);
      if (!currentField) return false;
      if (!currentField.required) return false;
      if (currentField?.required && !value) return true;

      if (currentField.type === "password") {
        const password = value.toString();
        if (!isLongerThan8Characters(password) || !hasNumber(password))
          return true;
      }

      return false;
    });

    const warningHint = this.querySelector(
      "warning-hint"
    ) as HTMLElement;
    if (errorFields.length > 0) {
      warningHint.setAttribute("error", "true");
      signupForm.setAttribute("loading", "false");

      errorFields.forEach(([key]) => {
        const field = form.querySelector(`form-field[name="${key}"]`) as HTMLElement;
        field.setAttribute("error", "true");
      });
      return;
    }

    // Submit form
    warningHint.setAttribute("error", "false");
    const stringifyData = JSON.stringify(data);
    const response = await mockApi.signup(stringifyData);

    // end loading
    signupForm.setAttribute("loading", "false");

    if (!response.isError) {
      alert("Signup successful");
      form.reset();
    } else {
      alert("Signup failed");
    }
  };

  connectedCallback() {
    const form = this.querySelector("form") as HTMLFormElement;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const onSubmit = this.onSubmit.bind(this);
      onSubmit(e);
    });
  }

  disconnectedCallback() {
    const form = this.querySelector("form") as HTMLFormElement;
    form.removeEventListener("submit", (e) => {
      e.preventDefault();
      const onSubmit = this.onSubmit.bind(this);
      onSubmit(e);
    });
  }
}

customElements.define("signup-page", SignUpPage);
