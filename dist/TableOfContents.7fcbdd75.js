import{A as o,y as c,s as a,o as t}from"./chunks/jsxRuntime.module.c23db753.js";import{p as d}from"./chunks/preact.module.4fb7b7f3.js";const f=({headings:n=[]})=>{const s=o([]),[r]=c("");return a(()=>{const e=()=>{const l=document.querySelectorAll("article :is(h1, h2, h3, h4)");s.current=Array.from(l).map(i=>({id:i.id,topOffset:i.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),t(d,{children:[t("h2",{className:"heading",children:"Sommaire"}),t("ul",{children:[t("li",{className:`heading-link depth-2 ${r==="overview"?"active":""}`.trim(),children:t("a",{href:"#overview",children:"D\xE9but"})}),n.filter(({depth:e})=>e>1&&e<4).map(e=>t("li",{className:`heading-link depth-${e.depth} ${r===e.slug?"active":""}`.trim(),children:t("a",{href:`#${e.slug}`,children:e.text})}))]})]})};export{f as default};
