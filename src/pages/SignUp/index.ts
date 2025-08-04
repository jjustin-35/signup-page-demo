import "../../components/Icon";
import "../../components/SignupForm";
import "./style.css";

class SignUpPage extends HTMLElement {
  constructor() {
    super();

    const signupPage = document.createElement("section");
    signupPage.classList.add("page_wrapper");

    const signupSection = document.createElement("div");
    signupSection.classList.add("signup_section");

    signupSection.innerHTML = `
      <a class="signup_backlink" href="/">
        <custom-icon type="arrowLeft" width="16px" height="16px"></custom-icon>
        <span>Back</span>
      </a>
      <div class="signup_section_content">
        <p class="signup_section_subtitle">Start from free</p>
        <h1 class="signup_section_title">Create an account</h1>
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
}

customElements.define("signup-page", SignUpPage);
