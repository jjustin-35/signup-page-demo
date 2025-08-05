import "./global.css";
import "./components/Field";
import "./components/Field/style.css";
import "./components/Field/passwordHint";
import "./components/Checkbox";
import "./components/Checkbox/style.css";
import "./components/Icon";
import "./pages/Home";
import "./pages/SignUp";

const app = document.getElementById("app");

const renderPage = (page: string) => {
  if (!app) return;

  customElements.whenDefined(page).then(() => {
    app.innerHTML = `<${page}></${page}>`;
  });
};

const handleRoute = () => {
  const hash = window.location.hash.slice(1);
  
  if (hash === "signup") {
    renderPage("signup-page");
  } else {
    renderPage("home-page");
  }
};

window.addEventListener("hashchange", handleRoute);

// 初始化路由
handleRoute();
