const a=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};a();const i=document.querySelector("#app");if(!i)throw new Error("No se encontr\xF3 el contenedor #app.");i.innerHTML=`
  <main style="padding: 2rem; font-family: Arial, sans-serif;">
    <h1>CleanCode y SOLID</h1>
    <p>La refactorizaci\xF3n est\xE1 lista para revisar la arquitectura y la resiliencia transaccional del sistema.</p>
  </main>
`;
