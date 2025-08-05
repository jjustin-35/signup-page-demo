import "./global.css";
import { baseUrl, signupUrl } from "./config";
import "./components/Field";
import "./components/Field/style.css";
import "./components/Field/passwordHint";
import "./components/Checkbox";
import "./components/Checkbox/style.css";
import "./components/Icon";
import "./pages/Home";
import "./pages/SignUp";

const app = document.getElementById("app");
const pathname = window.location.pathname;

const renderPage = (page: string) => {
  if (!app) return;

  customElements.whenDefined(page).then(() => {
    app.innerHTML = `<${page}></${page}>`;
  });
};

if (app) {
  if (pathname === signupUrl) {
    renderPage("signup-page");
  }

  if (pathname === baseUrl) {
    renderPage("home-page");
  }
}
