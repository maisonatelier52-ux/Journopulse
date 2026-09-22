'use strict';
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('.mobile-menu-trigger').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const open=document.documentElement.classList.toggle('collapse-activated');a.setAttribute('aria-expanded',String(open));}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.documentElement.classList.remove('collapse-activated');document.querySelectorAll('.mobile-menu-trigger').forEach(a=>a.setAttribute('aria-expanded','false'))}});
 document.querySelectorAll('.dark-mode-toggle').forEach(a=>{a.setAttribute('role','button');a.setAttribute('tabindex','0');a.setAttribute('aria-label','Toggle color theme');const toggle=()=>document.body.setAttribute('data-theme',document.body.getAttribute('data-theme')==='dark'?'default':'dark');a.addEventListener('click',toggle);a.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}})});
 const form=document.querySelector('#jp-search');
 if(form){
  const q=document.querySelector('#jp-query'),category=document.querySelector('#jp-category');
  const cards=[...document.querySelectorAll('.cat-sec-grid-layout-card[data-search][data-group]')];
  q.value=new URLSearchParams(location.search).get('q')||'';
  const normalize=v=>v.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  function filter(){
   const words=normalize(q.value.trim()).split(/\s+/).filter(Boolean);let count=0;
   cards.forEach(c=>{const show=(!category.value||category.value===c.dataset.group)&&words.every(w=>normalize(c.dataset.search).includes(w));c.hidden=!show;if(show)count++});
   document.querySelector('#jp-results').textContent=count+' '+(count===1?'post':'posts')+(count===0?' - try a broader search or another category.':'');
  }
  q.addEventListener('input',filter);category.addEventListener('change',filter);form.addEventListener('submit',ev=>{ev.preventDefault();filter()});form.addEventListener('reset',()=>setTimeout(filter,0));filter();
 }
 document.querySelectorAll('.search-trigger').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();location.href=a.href;}));
 document.querySelectorAll('.icon-print').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();window.print()}));
});
