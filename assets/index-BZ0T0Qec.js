(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const k=r=>r.length>=8,v=r=>/\d/.test(r),f="/signup-page-demo/",S="#signup",g={view:{src:"icons/view.svg",alt:"icon-view"},viewOff:{src:"icons/view-off.svg",alt:"icon-view-off"},check:{src:"icons/check.svg",alt:"icon-check"},checkRoundGreen:{src:"icons/check-round-green.svg",alt:"icon-check-round-green"},checkRoundGray:{src:"icons/check-round-gray.svg",alt:"icon-check-round-gray"},arrowLeft:{src:"icons/arrow-left.svg",alt:"icon-arrow-left"},warning:{src:"icons/warning-circle.svg",alt:"icon-warning"},facebook:{src:"icons/facebook.svg",alt:"icon-facebook"},google:{src:"icons/google.svg",alt:"icon-google"}};class _ extends HTMLElement{static observedAttributes=["type","width","height","color"];constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("img");t.style.display="block";const s=this.getAttribute("type"),i=this.getAttribute("width"),n=this.getAttribute("height");t.src=g[s]?.src??"",t.alt=g[s]?.alt??"",t.style.width=i??"100%",t.style.height=n??"100%",e.appendChild(t)}attributeChangedCallback(e,t,s){const i=this.shadowRoot?.querySelector("img");switch(e){case"type":const n=g[s];i.src=n?.src?`${f}${n.src}`:"",i.alt=n?.alt??"";break;case"width":i.style.width=s;break;case"height":i.style.height=s;break}}}customElements.define("custom-icon",_);const b={minLength:"8 Characters min.",number:"1 Number"};class L extends HTMLElement{static observedAttributes=["valid","type"];constructor(){super();const e=this.getAttribute("valid")==="true",t=this.getAttribute("type"),s=document.createElement("div");s.classList.add("password_hint"),s.innerHTML=`
      <custom-icon type="${e?"checkRoundGreen":"checkRoundGray"}" width="12px" height="12px"></custom-icon>
      <span>${b[t]}</span>
    `,this.appendChild(s)}attributeChangedCallback(e,t,s){const i=this.querySelector(".password_hint");switch(e){case"valid":const n=s==="true";i.querySelector("custom-icon").setAttribute("type",n?"checkRoundGreen":"checkRoundGray");break;case"type":const c=s,a=i.querySelector("span");a.textContent=b[c];break}}}customElements.define("password-hint",L);class q extends HTMLElement{static observedAttributes=["label","type","name","error"];isHide=!0;fieldType="text";constructor(){super();const e=document.createElement("div"),t=this.getAttribute("label"),s=this.getAttribute("type"),i=this.getAttribute("name"),n=this.getAttribute("id")??`input_${i}`,o=this.getAttribute("error")==="true",c=this.getAttribute("required"),a=this.getAttribute("isHalf")==="true",p=!(c===null||c==="false");if(this.fieldType=s,a&&this.classList.add("is-half"),e.classList.add("field"),o&&e.classList.add("field--error"),e.setAttribute("tabindex","0"),e.innerHTML=`
          ${t?`<label class="field_label" for="${this.id}">${t}</label>`:""}
      <input id="${n}" type="${s}" name="${i}" class="field_input" placeholder=""
      ${p?"required":""} />
      ${this.fieldType==="password"?`<custom-icon type=${this.isHide?"viewOff":"view"} class="field_icon" width="18px" height="18px" />`:""}
    `,this.appendChild(e),this.fieldType==="password"){const l=Object.keys(b).map(d=>`
          <password-hint type="${d}" valid="false"></password-hint>
        `).join("");this.innerHTML+=l}}focusField(e){e.preventDefault(),e.currentTarget.querySelector(".field_input").focus()}togglePasswordDisplay(e){e.preventDefault(),e.stopPropagation();const t=this.querySelector(".field"),s=t.querySelector(".field_input");if(this.fieldType!=="password")return;this.isHide=!this.isHide,s.type=this.isHide?"password":"text",t.querySelector("custom-icon").setAttribute("type",this.isHide?"viewOff":"view")}onInput(e){const t=e.target?.value??"";this.fieldType==="password"&&this.querySelectorAll("password-hint").forEach(i=>{const n=i.getAttribute("type");if(n==="minLength"){const o=k(t).toString();i.setAttribute("valid",o)}else if(n==="number"){const o=v(t).toString();i.setAttribute("valid",o)}else i.setAttribute("valid","false")})}connectedCallback(){const e=this.querySelector(".field"),t=e.querySelector("custom-icon"),s=e.querySelector(".field_input");e.addEventListener("click",this.focusField),s.addEventListener("input",this.onInput.bind(this)),t&&t.addEventListener("click",this.togglePasswordDisplay.bind(this))}disconnectedCallback(){const e=this.querySelector(".field"),t=e.querySelector(".field_input"),s=e.querySelector("custom-icon");e.removeEventListener("click",this.focusField),t.removeEventListener("change",this.onInput.bind(this)),s&&s.removeEventListener("click",this.togglePasswordDisplay.bind(this))}attributeChangedCallback(e,t,s){if(e==="label"){const n=this.querySelector(".field").querySelector(".field_label");n.textContent=s}e==="error"&&this.querySelector(".field").classList.toggle("field--error",s==="true")}}customElements.define("form-field",q);class H extends HTMLElement{static observedAttributes=["checked","disabled","name","label","required"];constructor(){super();const e=document.createElement("div");e.classList.add("checkbox_field");const t=this.getAttribute("name"),s=this.getAttribute("label"),i=this.getAttribute("disabled")==="true",n=this.getAttribute("checked")==="true",o=this.getAttribute("required")==="true";e.innerHTML=`
      <div class="checkbox_wrapper">
        <custom-icon type="check" width="11px" height="auto" class="checkbox_icon" />
        <input type="checkbox" class="checkbox--hidden" name="${t}" id="checkbox_${t}" 
        ${i?"disabled":""} ${n?"checked":""} ${o?"required":""} />
      </div>
      <label for="checkbox_${t}" class="checkbox_label">
        ${s}
      </label>
    `,this.appendChild(e)}handleChange(e){const s=e.currentTarget.querySelector(".checkbox--hidden");s.checked=!s.checked}connectedCallback(){this.querySelector(".checkbox_wrapper").addEventListener("click",this.handleChange)}disconnectedCallback(){this.querySelector(".checkbox_wrapper").removeEventListener("click",this.handleChange)}attributeChangedCallback(e,t,s){const i=this.querySelector(".checkbox--hidden");switch(e){case"checked":i.checked=s==="true";break;case"disabled":i.disabled=s==="true";break;case"required":i.required=s==="true";break}}}customElements.define("login-checkbox",H);class A extends HTMLElement{constructor(){super();const e=document.createElement("section");e.classList.add("page_wrapper");const t=document.createElement("div");t.classList.add("home_section"),t.innerHTML=`
      <h1>Home</h1>
      <div class="home_button_group">
        <a href="${S}" class="button button--content_center">Sign Up</a>
      </div>
    `,e.appendChild(t),this.appendChild(e)}}customElements.define("home-page",A);const E={signup:r=>new Promise(e=>{setTimeout(()=>{e({data:r,isError:!1})},1e3)})},m={signup:[{label:"First Name",type:"text",name:"first_name",required:!0,isHalf:!0},{label:"Last Name",type:"text",name:"last_name",required:!0,isHalf:!0},{label:"Email",type:"email",name:"email",required:!0},{label:"Password",type:"password",name:"password",required:!0}]};class C extends HTMLElement{static observedAttributes=["form-type","loading"];buttonText="Create an Free Account!";constructor(){super();const e=document.createElement("form");e.classList.add("signup_form");const t=this.getAttribute("formType"),i=m[t].map(o=>`
        <form-field label="${o.label}" type="${o.type}" name="${o.name}" isHalf="${o.isHalf||!1}"  required></form-field>
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
      <a class="signup_backlink" href="${f}">
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
        <p class="signup_form_footer">Already have an account? <a href="${f}">Login</a></p>
      </div>
    `,e.appendChild(t),this.appendChild(e)}async onSubmit(e){const t=this.querySelector("signup-form");t.setAttribute("loading","true");const s=m.signup,i=e.target,n=new FormData(i),o=Array.from(n.entries()).filter(([l,d])=>{const u=s.find(h=>h.name===l);if(!u||!u.required)return!1;if(u?.required&&!d)return!0;if(u.type==="password"){const h=d.toString();if(!k(h)||!v(h))return!0}return!1}),c=this.querySelector("warning-hint");if(o.length>0){c.setAttribute("error","true"),t.setAttribute("loading","false"),o.forEach(([l])=>{i.querySelector(`form-field[name="${l}"]`).setAttribute("error","true")});return}c.setAttribute("error","false");const a=JSON.stringify(m),p=await E.signup(a);t.setAttribute("loading","false"),p.isError?alert("Signup failed"):(alert("Signup successful"),i.reset())}connectedCallback(){this.querySelector("form").addEventListener("submit",t=>{t.preventDefault(),this.onSubmit.bind(this)(t)})}disconnectedCallback(){this.querySelector("form").removeEventListener("submit",t=>{t.preventDefault(),this.onSubmit.bind(this)(t)})}}customElements.define("signup-page",T);const y=document.getElementById("app"),w=r=>{y&&customElements.whenDefined(r).then(()=>{y.innerHTML=`<${r}></${r}>`})},x=()=>{const r=window.location.hash.slice(1);w(r==="signup"?"signup-page":"home-page")};window.addEventListener("hashchange",x);x();
