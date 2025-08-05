(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const u="/signup-page-demo/",v=`${u}signup`,x=o=>o.length>=8,S=o=>/\d/.test(o),g={view:{src:"icons/view.svg",alt:"icon-view"},viewOff:{src:"icons/view-off.svg",alt:"icon-view-off"},check:{src:"icons/check.svg",alt:"icon-check"},checkRoundGreen:{src:"icons/check-round-green.svg",alt:"icon-check-round-green"},checkRoundGray:{src:"icons/check-round-gray.svg",alt:"icon-check-round-gray"},arrowLeft:{src:"icons/arrow-left.svg",alt:"icon-arrow-left"},warning:{src:"icons/warning-circle.svg",alt:"icon-warning"},facebook:{src:"icons/facebook.svg",alt:"icon-facebook"},google:{src:"icons/google.svg",alt:"icon-google"}};class _ extends HTMLElement{static observedAttributes=["type","width","height","color"];constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("img");t.style.display="block";const s=this.getAttribute("type"),i=this.getAttribute("width"),n=this.getAttribute("height");t.src=g[s]?.src??"",t.alt=g[s]?.alt??"",t.style.width=i??"100%",t.style.height=n??"100%",e.appendChild(t)}attributeChangedCallback(e,t,s){const i=this.shadowRoot?.querySelector("img");switch(e){case"type":const n=g[s];i.src=n?.src?`${u}${n.src}`:"",i.alt=n?.alt??"";break;case"width":i.style.width=s;break;case"height":i.style.height=s;break}}}customElements.define("custom-icon",_);const m={minLength:"8 Characters min.",number:"1 Number"};class L extends HTMLElement{static observedAttributes=["valid","type"];constructor(){super();const e=this.getAttribute("valid")==="true",t=this.getAttribute("type"),s=document.createElement("div");s.classList.add("password_hint"),s.innerHTML=`
      <custom-icon type="${e?"checkRoundGreen":"checkRoundGray"}" width="12px" height="12px"></custom-icon>
      <span>${m[t]}</span>
    `,this.appendChild(s)}attributeChangedCallback(e,t,s){const i=this.querySelector(".password_hint");switch(e){case"valid":const n=s==="true";i.querySelector("custom-icon").setAttribute("type",n?"checkRoundGreen":"checkRoundGray");break;case"type":const c=s,a=i.querySelector("span");a.textContent=m[c];break}}}customElements.define("password-hint",L);class q extends HTMLElement{static observedAttributes=["label","type","name","error"];isHide=!0;fieldType="text";constructor(){super();const e=document.createElement("div"),t=this.getAttribute("label"),s=this.getAttribute("type"),i=this.getAttribute("name"),n=this.getAttribute("id")??`input_${i}`,r=this.getAttribute("error")==="true",c=this.getAttribute("required"),a=this.getAttribute("isHalf")==="true",f=!(c===null||c==="false");if(this.fieldType=s,a&&this.classList.add("is-half"),e.classList.add("field"),r&&e.classList.add("field--error"),e.setAttribute("tabindex","0"),e.innerHTML=`
          ${t?`<label class="field_label" for="${this.id}">${t}</label>`:""}
      <input id="${n}" type="${s}" name="${i}" class="field_input" placeholder=""
      ${f?"required":""} />
      ${this.fieldType==="password"?`<custom-icon type=${this.isHide?"viewOff":"view"} class="field_icon" width="18px" height="18px" />`:""}
    `,this.appendChild(e),this.fieldType==="password"){const l=Object.keys(m).map(d=>`
          <password-hint type="${d}" valid="false"></password-hint>
        `).join("");this.innerHTML+=l}}focusField(e){e.preventDefault(),e.currentTarget.querySelector(".field_input").focus()}togglePasswordDisplay(e){e.preventDefault(),e.stopPropagation();const t=this.querySelector(".field"),s=t.querySelector(".field_input");if(this.fieldType!=="password")return;this.isHide=!this.isHide,s.type=this.isHide?"password":"text",t.querySelector("custom-icon").setAttribute("type",this.isHide?"viewOff":"view")}onInput(e){const t=e.target?.value??"";this.fieldType==="password"&&this.querySelectorAll("password-hint").forEach(i=>{const n=i.getAttribute("type");if(n==="minLength"){const r=x(t).toString();i.setAttribute("valid",r)}else if(n==="number"){const r=S(t).toString();i.setAttribute("valid",r)}else i.setAttribute("valid","false")})}connectedCallback(){const e=this.querySelector(".field"),t=e.querySelector("custom-icon"),s=e.querySelector(".field_input");e.addEventListener("click",this.focusField),s.addEventListener("input",this.onInput.bind(this)),t&&t.addEventListener("click",this.togglePasswordDisplay.bind(this))}disconnectedCallback(){const e=this.querySelector(".field"),t=e.querySelector(".field_input"),s=e.querySelector("custom-icon");e.removeEventListener("click",this.focusField),t.removeEventListener("change",this.onInput.bind(this)),s&&s.removeEventListener("click",this.togglePasswordDisplay.bind(this))}attributeChangedCallback(e,t,s){if(e==="label"){const n=this.querySelector(".field").querySelector(".field_label");n.textContent=s}e==="error"&&this.querySelector(".field").classList.toggle("field--error",s==="true")}}customElements.define("form-field",q);class H extends HTMLElement{static observedAttributes=["checked","disabled","name","label","required"];constructor(){super();const e=document.createElement("div");e.classList.add("checkbox_field");const t=this.getAttribute("name"),s=this.getAttribute("label"),i=this.getAttribute("disabled")==="true",n=this.getAttribute("checked")==="true",r=this.getAttribute("required")==="true";e.innerHTML=`
      <div class="checkbox_wrapper">
        <custom-icon type="check" width="11px" height="auto" class="checkbox_icon" />
        <input type="checkbox" class="checkbox--hidden" name="${t}" id="checkbox_${t}" 
        ${i?"disabled":""} ${n?"checked":""} ${r?"required":""} />
      </div>
      <label for="checkbox_${t}" class="checkbox_label">
        ${s}
      </label>
    `,this.appendChild(e)}handleChange(e){const s=e.currentTarget.querySelector(".checkbox--hidden");s.checked=!s.checked}connectedCallback(){this.querySelector(".checkbox_wrapper").addEventListener("click",this.handleChange)}disconnectedCallback(){this.querySelector(".checkbox_wrapper").removeEventListener("click",this.handleChange)}attributeChangedCallback(e,t,s){const i=this.querySelector(".checkbox--hidden");switch(e){case"checked":i.checked=s==="true";break;case"disabled":i.disabled=s==="true";break;case"required":i.required=s==="true";break}}}customElements.define("login-checkbox",H);class A extends HTMLElement{constructor(){super();const e=document.createElement("section");e.classList.add("page_wrapper");const t=document.createElement("div");t.classList.add("home_section"),t.innerHTML=`
      <h1>Home</h1>
      <div class="home_button_group">
        <a href="${v}" class="button button--content_center">Sign Up</a>
      </div>
    `,e.appendChild(t),this.appendChild(e)}}customElements.define("home-page",A);const E={signup:o=>new Promise(e=>{setTimeout(()=>{e({data:o,isError:!1})},1e3)})},b={signup:[{label:"First Name",type:"text",name:"first_name",required:!0,isHalf:!0},{label:"Last Name",type:"text",name:"last_name",required:!0,isHalf:!0},{label:"Email",type:"email",name:"email",required:!0},{label:"Password",type:"password",name:"password",required:!0}]};class C extends HTMLElement{static observedAttributes=["form-type","loading"];buttonText="Create an Free Account!";constructor(){super();const e=document.createElement("form");e.classList.add("signup_form");const t=this.getAttribute("formType"),i=b[t].map(r=>`
        <form-field label="${r.label}" type="${r.type}" name="${r.name}" isHalf="${r.isHalf||!1}"  required></form-field>
      `).join(""),n="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.";e.innerHTML=`
      ${i}
      <login-checkbox label="${n}" name="accept_terms" required="true"></login-checkbox>
      <button class="button button--content_center" type="submit">
        <span>${this.buttonText}</span>
      </button>
    `,this.appendChild(e)}toggleButton(e,t){e.disabled=t;const s=e.querySelector("span"),i=this.buttonText;s.textContent=t?"Please wait...":i}attributeChangedCallback(e,t,s){if(e==="loading"){const i=this.querySelector("button[type='submit']");this.toggleButton.bind(this)(i,s==="true")}}}customElements.define("signup-form",C);class $ extends HTMLElement{static observedAttributes=["message","error"];constructor(){super();const e=this.getAttribute("message"),t=document.createElement("div");t.classList.add("warning_hint"),t.innerHTML=`
      <custom-icon type="warning" width="24px" height="24px"></custom-icon>
      <span>${e}</span>
    `,this.appendChild(t)}attributeChangedCallback(e,t,s){if(e==="message"){const n=this.querySelector(".warning_hint").querySelector("span");n.textContent=s}e==="error"&&this.querySelector(".warning_hint").classList.toggle("warning_hint--error",s==="true")}}customElements.define("warning-hint",$);class T extends HTMLElement{constructor(){super();const e=document.createElement("section");e.classList.add("page_wrapper");const t=document.createElement("div");t.classList.add("signup_section");const s="Please complete all the required fields to proceed.";t.innerHTML=`
      <a class="signup_backlink" href="${u}">
        <custom-icon type="arrowLeft" width="16px" height="16px"></custom-icon>
        <span>Back</span>
      </a>
      <div class="signup_section_content">
        <p class="signup_section_subtitle">Start from free</p>
        <h1 class="signup_section_title">Create an account</h1>
        <warning-hint message="${s}" error="false"></warning-hint>
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
        <p class="signup_form_footer">Already have an account? <a href="${u}">Login</a></p>
      </div>
    `,e.appendChild(t),this.appendChild(e)}async onSubmit(e){const t=this.querySelector("signup-form");t.setAttribute("loading","true");const s=b.signup,i=e.target,n=new FormData(i),r=Array.from(n.entries()).filter(([l,d])=>{const h=s.find(p=>p.name===l);if(!h||!h.required)return!1;if(h?.required&&!d)return!0;if(h.type==="password"){const p=d.toString();if(!x(p)||!S(p))return!0}return!1}),c=this.querySelector("warning-hint");if(r.length>0){c.setAttribute("error","true"),t.setAttribute("loading","false"),r.forEach(([l])=>{i.querySelector(`form-field[name="${l}"]`).setAttribute("error","true")});return}c.setAttribute("error","false");const a=JSON.stringify(b),f=await E.signup(a);t.setAttribute("loading","false"),f.isError?alert("Signup failed"):(alert("Signup successful"),i.reset())}connectedCallback(){this.querySelector("form").addEventListener("submit",t=>{t.preventDefault(),this.onSubmit.bind(this)(t)})}disconnectedCallback(){this.querySelector("form").removeEventListener("submit",t=>{t.preventDefault(),this.onSubmit.bind(this)(t)})}}customElements.define("signup-page",T);const y=document.getElementById("app"),w=window.location.pathname,k=o=>{y&&customElements.whenDefined(o).then(()=>{y.innerHTML=`<${o}></${o}>`})};y&&(w===v&&k("signup-page"),w===u&&k("home-page"));
