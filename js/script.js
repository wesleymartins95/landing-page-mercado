'use strict';
// Configure somente dados reais. Não coloque números fictícios aqui.
const BUSINESS = Object.freeze({
  name: 'Mercado da Vila',
  whatsapp: '', // DDI + DDD + número, apenas dígitos. Ex.: 5511999999999
  analyticsEnabled: false
});
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-principal');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}
menuButton.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));menuButton.setAttribute('aria-label',isOpen?'Fechar menu':'Abrir menu');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const filters=document.querySelectorAll('[data-filter]');
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='todos'&&card.dataset.category!==button.dataset.filter;});
}));
function trackConversion(kind){if(BUSINESS.analyticsEnabled&&typeof window.gtag==='function'){window.gtag('event','generate_lead',{method:'whatsapp',content_type:kind});}}
function openWhatsApp(product=''){
  const feedback=document.querySelector('#contact-feedback');
  if(!/^\d{12,15}$/.test(BUSINESS.whatsapp)){
    feedback.textContent='WhatsApp ainda não configurado. Este é um site demonstrativo.';
    feedback.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
    return;
  }
  feedback.textContent='';
  const message=product?`Olá! Gostaria de consultar a disponibilidade de ${product} no ${BUSINESS.name}.`:`Olá! Gostaria de conhecer os produtos disponíveis no ${BUSINESS.name}.`;
  const url=`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
  trackConversion(product?'produto':'contato');
  window.open(url,'_blank','noopener,noreferrer');
}
document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>openWhatsApp(button.dataset.product)));
document.querySelector('#contact-cta').addEventListener('click',()=>openWhatsApp());
document.querySelector('#year').textContent=String(new Date().getFullYear());
