/* CONFIGURAÇÃO CENTRAL — SOMENTE INFORMAÇÕES DEMONSTRATIVAS.
   Preencha com dados verdadeiros e revise todas as páginas antes de comercializar.
   Preços em centavos para evitar erros de ponto flutuante. */
window.MERCADO_CONFIG = Object.freeze({
  nome: 'Mercado da Vila',
  whatsapp: '', // DDD + número, somente dígitos. Exemplo de formato: 11999999999. Nunca use número inventado.
  endereco: '', // Endereço real e público do comércio
  mapsUrl: '', // URL verdadeira do Google Maps, https://...
  horario: 'Segunda a sábado: [confirmar horário] • Domingo: [confirmar horário]',
  pagamentos: 'Pix, débito e crédito [exemplos: confirme as formas aceitas]',
  moeda: 'BRL',
  demo: true,
  categories: ['Todos','Hortifruti','Padaria','Laticínios','Mercearia','Bebidas'],
  products: [
    {id:'banana',name:'Banana nanica',unit:'kg',category:'Hortifruti',cents:599,oldCents:749,image:'banana.svg',offer:true},
    {id:'tomate',name:'Tomate selecionado',unit:'kg',category:'Hortifruti',cents:649,oldCents:799,image:'tomate.svg',offer:true},
    {id:'leite',name:'Leite integral',unit:'1 L',category:'Laticínios',cents:529,oldCents:649,image:'leite.svg',offer:true},
    {id:'pao',name:'Pão francês',unit:'kg',category:'Padaria',cents:1590,image:'pao.svg',offer:false},
    {id:'maca',name:'Maçã gala',unit:'kg',category:'Hortifruti',cents:999,image:'maca.svg',offer:false},
    {id:'ovos',name:'Ovos brancos',unit:'dúzia',category:'Laticínios',cents:1390,image:'ovos.svg',offer:false},
    {id:'arroz',name:'Arroz branco',unit:'5 kg',category:'Mercearia',cents:2790,image:'arroz.svg',offer:false},
    {id:'feijao',name:'Feijão carioca',unit:'1 kg',category:'Mercearia',cents:849,image:'feijao.svg',offer:false},
    {id:'oleo',name:'Óleo de soja',unit:'900 ml',category:'Mercearia',cents:749,image:'oleo.svg',offer:false},
    {id:'cafe',name:'Café torrado e moído',unit:'500 g',category:'Mercearia',cents:2190,oldCents:2490,image:'cafe.svg',offer:true},
    {id:'queijo',name:'Queijo muçarela',unit:'100 g',category:'Laticínios',cents:599,image:'queijo.svg',offer:false},
    {id:'cenoura',name:'Cenoura',unit:'kg',category:'Hortifruti',cents:459,image:'cenoura.svg',offer:false}
  ]
});
