import{r as o,a as r,g as i,s as m,b as u,T as s}from"./assets/remove-elements-49de1c05.js";import{n as c}from"./assets/vendor-342e672c.js";const{form:l,list:a}=u;l.addEventListener("submit",d);o(s,a);r(s,a);function d(t){t.preventDefault();const e=t.target.elements.taskName.value.trim();if(e==="")return;const n=c();f(e,n),b(e,n),t.target.reset()}function f(t,e){const n=`<li id='${e}'>${t} <button type='button'>X</button></li>`;a.insertAdjacentHTML("beforeend",n)}function b(t,e){const n=i(s)||[];n.push({text:t,id:e}),m(s,n)}
//# sourceMappingURL=commonHelpers.js.map
