(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function a(r,o){localStorage.setItem(r,JSON.stringify(o))}function c(r){return JSON.parse(localStorage.getItem(r))}const l={form:document.querySelector("#task-form"),list:document.querySelector(".task-list"),favoriteList:document.querySelector(".favorite-list")},u="taskKey";function f(r,o){const s=c(r);if(!s)return;const n=s.map(e=>`<li id='${e.id}'>${e.text} <button type='button'>X</button></li>`).join("");o.insertAdjacentHTML("beforeend",n)}function d(r,o){o.addEventListener("click",s);function s(n){if(n.target.nodeName!=="BUTTON")return;const t=c(r).filter(i=>n.target.parentNode.id!==i.id);a(r,t),n.target.parentNode.remove()}}export{u as T,d as a,l as b,c as g,f as r,a as s};
//# sourceMappingURL=remove-elements-49de1c05.js.map
