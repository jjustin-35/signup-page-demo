(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const k=r=>r.length>=8,v=r=>/\d/.test(r),p="/signup-page-demo/",_="#signup",b={view:{src:"icons/view.svg",alt:"icon-view"},viewOff:{src:"icons/view-off.svg",alt:"icon-view-off"},check:{src:"icons/check.svg",alt:"icon-check"},checkRoundGreen:{src:"icons/check-round-green.svg",alt:"icon-check-round-green"},checkRoundGray:{src:"icons/check-round-gray.svg",alt:"icon-check-round-gray"},arrowLeft:{src:"icons/arrow-left.svg",alt:"icon-arrow-left"},warning:{src:"icons/warning-circle.svg",alt:"icon-warning"},facebook:{src:"icons/facebook.svg",alt:"icon-facebook"},google:{src:"icons/google.svg",alt:"icon-google"}};class L extends HTMLElement{static observedAttributes=["type","width","height","color"];constructor(){super();const e=document.createElement("img");e.style.display="block";const t=this.getAttribute("type"),i=this.getAttribute("width"),s=this.getAttribute("height"),n=b[t];e.src=n?`${p}${n.src}`:"",e.alt=n?.alt??"",e.style.width=i??"100%",e.style.height=s??"100%",this.appendChild(e)}attributeChangedCallback(e,t,i){const s=this.querySelector("img");switch(e){case"type":const n=b[i];s.src=n?.src?`${p}${n.src}`:"",s.alt=n?.alt??"";break;case"width":s.style.width=i;break;case"height":s.style.height=i;break}}}customElements.define("custom-icon",L);const g={minLength:"8 Characters min.",number:"1 Number"};class S extends HTMLElement{static observedAttributes=["valid","type"];constructor(){super();const e=this.getAttribute("valid")==="true",t=this.getAttribute("type"),i=document.createElement("div");i.classList.add("password_hint"),i.innerHTML=`
      <custom-icon type="${e?"checkRoundGreen":"checkRoundGray"}" width="12px" height="12px"></custom-icon>
      <span>${g[t]}</span>
    `,this.appendChild(i)}attributeChangedCallback(e,t,i){const s=this.querySelector(".password_hint");switch(e){case"valid":const n=i==="true";s.querySelector("custom-icon").setAttribute("type",n?"checkRoundGreen":"checkRoundGray");break;case"type":const c=i,d=s.querySelector("span");d.textContent=g[c];break}}}customElements.define("password-hint",S);class q extends HTMLElement{static observedAttributes=["label","type","name","error"];isHide=!0;fieldType="text";constructor(){super();const e=document.createElement("div"),t=this.getAttribute("label"),i=this.getAttribute("type"),s=this.getAttribute("name"),n=this.getAttribute("id")??`input_${s}`,o=this.getAttribute("error")==="true",c=this.getAttribute("required"),d=this.getAttribute("isHalf")==="true",f=!(c===null||c==="false");if(this.fieldType=i,d&&this.classList.add("is-half"),e.classList.add("field"),o&&e.classList.add("field--error"),e.setAttribute("tabindex","0"),e.innerHTML=`
          ${t?`<label class="field_label" for="${this.id}">${t}</label>`:""}
      <input id="${n}" type="${i}" name="${s}" class="field_input" placeholder=""
      ${f?"required":""} />
      ${this.fieldType==="password"?`<custom-icon type=${this.isHide?"viewOff":"view"} class="field_icon" width="18px" height="18px" />`:""}
    `,this.appendChild(e),this.fieldType==="password"){const u=Object.keys(g).map(l=>`
          <password-hint type="${l}" valid="false"></password-hint>
        `).join(""),a=document.createElement("div");for(a.innerHTML=u;a.firstChild;)this.appendChild(a.firstChild)}}focusField(e){e.preventDefault(),e.currentTarget.querySelector(".field_input").focus()}togglePasswordDisplay(e){e.preventDefault(),e.stopPropagation();const t=this.querySelector(".field"),i=t.querySelector(".field_input");if(this.fieldType!=="password")return;this.isHide=!this.isHide,i.type=this.isHide?"password":"text",t.querySelector("custom-icon").setAttribute("type",this.isHide?"viewOff":"view")}onInput(e){const t=e.target?.value??"";this.fieldType==="password"&&this.querySelectorAll("password-hint").forEach(s=>{const n=s.getAttribute("type");if(n==="minLength"){const o=k(t).toString();s.setAttribute("valid",o)}else if(n==="number"){const o=v(t).toString();s.setAttribute("valid",o)}else s.setAttribute("valid","false")})}connectedCallback(){const e=this.querySelector(".field"),t=e.querySelector("custom-icon"),i=e.querySelector(".field_input");e.addEventListener("click",this.focusField),i.addEventListener("input",this.onInput.bind(this)),t&&t.addEventListener("click",this.togglePasswordDisplay.bind(this))}disconnectedCallback(){const e=this.querySelector(".field"),t=e.querySelector(".field_input"),i=e.querySelector("custom-icon");e.removeEventListener("click",this.focusField),t.removeEventListener("change",this.onInput.bind(this)),i&&i.removeEventListener("click",this.togglePasswordDisplay.bind(this))}attributeChangedCallback(e,t,i){if(e==="label"){const n=this.querySelector(".field").querySelector(".field_label");n.textContent=i}e==="error"&&this.querySelector(".field").classList.toggle("field--error",i==="true")}}customElements.define("form-field",q);class C extends HTMLElement{static observedAttributes=["checked","disabled","name","label","required"];constructor(){super();const e=document.createElement("div");e.classList.add("checkbox_field");const t=this.getAttribute("name"),i=this.getAttribute("label"),s=this.getAttribute("disabled")==="true",n=this.getAttribute("checked")==="true",o=this.getAttribute("required")==="true";e.innerHTML=`
      <div class="checkbox_wrapper">
        <custom-icon type="check" width="11px" height="auto" class="checkbox_icon" />
        <input type="checkbox" class="checkbox--hidden" name="${t}" id="checkbox_${t}" 
        ${s?"disabled":""} ${n?"checked":""} ${o?"required":""} />
      </div>
      <label for="checkbox_${t}" class="checkbox_label">
        ${i}
      </label>
    `,this.appendChild(e)}handleChange(e){const i=e.currentTarget.querySelector(".checkbox--hidden");i.checked=!i.checked}connectedCallback(){this.querySelector(".checkbox_wrapper").addEventListener("click",this.handleChange)}disconnectedCallback(){this.querySelector(".checkbox_wrapper").removeEventListener("click",this.handleChange)}attributeChangedCallback(e,t,i){const s=this.querySelector(".checkbox--hidden");switch(e){case"checked":s.checked=i==="true";break;case"disabled":s.disabled=i==="true";break;case"required":s.required=i==="true";break}}}customElements.define("login-checkbox",C);class H extends HTMLElement{constructor(){super();const e=document.createElement("section");e.classList.add("page_wrapper");const t=document.createElement("div");t.classList.add("home_section"),t.innerHTML=`
      <h1>Home</h1>
      <div class="home_button_group">
        <a href="${_}" class="button button--content_center">Sign Up</a>
      </div>
    `,e.appendChild(t),this.appendChild(e)}}customElements.define("home-page",H);const A={signup:r=>new Promise(e=>{setTimeout(()=>{e({data:r,isError:!1})},1e3)})},m={signup:[{label:"First Name",type:"text",name:"first_name",required:!0,isHalf:!0},{label:"Last Name",type:"text",name:"last_name",required:!0,isHalf:!0},{label:"Email",type:"email",name:"email",required:!0},{label:"Password",type:"password",name:"password",required:!0}]};class E extends HTMLElement{static observedAttributes=["form-type","loading"];buttonText="Create an Free Account!";constructor(){super();const e=document.createElement("form");e.classList.add("signup_form");const t=this.getAttribute("formType"),s=m[t].map(o=>`
        <form-field label="${o.label}" type="${o.type}" name="${o.name}" isHalf="${o.isHalf||!1}"  required></form-field>
      `).join(""),n="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.";e.innerHTML=`
      ${s}
      <login-checkbox label="${n}" name="accept_terms" required="true"></login-checkbox>
      <button class="button button--content_center" type="submit">
        <span>${this.buttonText}</span>
      </button>
    `,this.appendChild(e)}toggleButton(e,t){e.disabled=t;const i=e.querySelector("span"),s=this.buttonText;i.textContent=t?"Please wait...":s}attributeChangedCallback(e,t,i){if(e==="loading"){const s=this.querySelector("button[type='submit']");this.toggleButton.bind(this)(s,i==="true")}}}customElements.define("signup-form",E);class $ extends HTMLElement{static observedAttributes=["message","error"];constructor(){super();const e=this.getAttribute("message"),t=document.createElement("div");t.classList.add("warning_hint"),t.innerHTML=`
      <custom-icon type="warning" width="24px" height="24px"></custom-icon>
      <span>${e}</span>
    `,this.appendChild(t)}attributeChangedCallback(e,t,i){if(e==="message"){const n=this.querySelector(".warning_hint").querySelector("span");n.textContent=i}e==="error"&&this.querySelector(".warning_hint").classList.toggle("warning_hint--error",i==="true")}}customElements.define("warning-hint",$);class T extends HTMLElement{constructor(){super();const e=document.createElement("section");e.classList.add("page_wrapper");const t=document.createElement("div");t.classList.add("signup_section");const i="Please complete all the required fields to proceed.";t.innerHTML=`
      <a class="signup_backlink" href="${p}">
        <custom-icon type="arrowLeft" width="16px" height="16px"></custom-icon>
        <span>Back</span>
      </a>
      <div class="signup_section_content">
        <p class="signup_section_subtitle">Start from free</p>
        <h1 class="signup_section_title">Create an account</h1>
        <warning-hint message="${i}" error="false"></warning-hint>
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
        <p class="signup_form_footer">Already have an account? <a href="${p}">Login</a></p>
      </div>
    `,e.appendChild(t),this.appendChild(e)}async onSubmit(e){const t=this.querySelector("signup-form");t.setAttribute("loading","true");const i=m.signup,s=e.target,n=new FormData(s),o=Array.from(n.entries()).filter(([u,a])=>{const l=i.find(h=>h.name===u);if(!l||!l.required)return!1;if(l?.required&&!a)return!0;if(l.type==="password"){const h=a.toString();if(!k(h)||!v(h))return!0}return!1}),c=this.querySelector("warning-hint");if(o.length>0){c.setAttribute("error","true"),t.setAttribute("loading","false"),o.forEach(([u])=>{s.querySelector(`form-field[name="${u}"]`).setAttribute("error","true")});return}c.setAttribute("error","false");const d=JSON.stringify(m),f=await A.signup(d);t.setAttribute("loading","false"),f.isError?alert("Signup failed"):(alert("Signup successful"),s.reset())}connectedCallback(){this.querySelector("form").addEventListener("submit",t=>{t.preventDefault(),this.onSubmit.bind(this)(t)})}disconnectedCallback(){this.querySelector("form").removeEventListener("submit",t=>{t.preventDefault(),this.onSubmit.bind(this)(t)})}}customElements.define("signup-page",T);const y=document.getElementById("app"),w=r=>{y&&customElements.whenDefined(r).then(()=>{y.innerHTML=`<${r}></${r}>`})},x=()=>{const r=window.location.hash.slice(1);w(r==="signup"?"signup-page":"home-page")};window.addEventListener("hashchange",x);x();
