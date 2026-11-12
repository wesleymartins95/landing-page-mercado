# Mercado da Vila — landing page demonstrativa

Landing page comercial **100% estática**, construída com HTML5, CSS3 e JavaScript puro. Sem frameworks, build, bibliotecas, fontes externas ou serviços pagos obrigatórios.

> **ATENÇÃO:** todos os nomes, descrições comerciais, categorias, imagens e fluxos de atendimento são demonstrativos. Não publicar sem validar os dados reais. Nenhuma avaliação, preço, estoque ou resultado foi inventado.

## Arquivos

```text
landing-page-mercado/
├── index.html
├── privacidade.html
├── css/style.css
├── js/script.js
├── assets/images/*.svg
├── assets/icons/favicon.svg
└── README.md
```

## Visualizar localmente

Abra `index.html` diretamente no navegador. Opcionalmente, use um servidor HTTP local (`python -m http.server 8000`) e acesse `http://localhost:8000/`. Não precisa instalar pacotes Node.

## Personalização

1. **Nome, textos, horários e endereço:** edite `index.html`, inclusive `<title>`, descrição, rodapé e perguntas frequentes. O nome "Mercado da Vila" é fictício.
2. **WhatsApp:** edite `BUSINESS.whatsapp` em `js/script.js` para o número real em formato internacional, **apenas dígitos** (ex.: `5511999999999`). Sem número válido, os botões mostram um aviso e **não** abrem um contato falso. Altere também `BUSINESS.name`.
3. **Cores e estilo:** edite as variáveis em `:root` no início de `css/style.css`.
4. **Produtos:** edite os cards em `index.html`; para filtros, mantenha `data-category` no card e `data-filter` no botão. Para mensagens específicas, configure `data-product`.
5. **Imagens:** substitua os SVG em `assets/images/` por fotos autorizadas e otimizadas; ajuste `src`, `alt`, `width` e `height`. Prefira WebP/AVIF com dimensões adequadas. A ilustração hero é local e não bloqueia por serviços externos.
6. **SEO:** revise título, descrição, Open Graph, favicon, conteúdo e, quando houver domínio público, URL canônica e URL absoluta para `og:image`. Insira dados estruturados `LocalBusiness` **apenas com informações verificadas**.
7. **Política de privacidade:** `privacidade.html` é um texto explicativo demonstrativo e **não** substitui uma política jurídica específica do negócio. Atualize conforme a LGPD e integrações efetivamente utilizadas. Remova `noindex` quando estiver finalizada.
8. **Remova a faixa "MODELO DEMONSTRATIVO" somente após validar todo o conteúdo.**

## Como funciona o contato

O botão usa `https://wa.me/NUMERO?text=MENSAGEM` com `encodeURIComponent`. O WhatsApp é um serviço externo gratuito para abertura de conversa, mas não há garantia de atendimento ou envio automático de pedido. Não existe checkout, processamento de pagamentos ou armazenamento de leads.

## Publicar gratuitamente no GitHub Pages

1. Crie um repositório no GitHub e envie **o conteúdo desta pasta** para a raiz da branch `main` (incluindo `index.html`).
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`; salve.
3. Aguarde a publicação e abra o endereço fornecido pelo GitHub Pages. Se publicar em um subdiretório, os caminhos relativos já utilizados funcionarão.
4. Confirme os links e imagens no endereço público. Configure domínio personalizado se desejar.

## Checklist funcional

- [ ] Abrir em 320px, 375px, 768px e desktop; verificar ausência de rolagem horizontal.
- [ ] Abrir/fechar menu mobile, inclusive com tecla Escape; testar links de âncora.
- [ ] Filtrar as categorias e retornar para “Todos”.
- [ ] Confirmar aviso amigável sem WhatsApp configurado.
- [ ] Configurar um número real autorizado e verificar mensagem pré-preenchida de cada produto e CTA final.
- [ ] Abrir/fechar cada item de FAQ por mouse e teclado.
- [ ] Verificar console do navegador sem erros nos fluxos acima.
- [ ] Verificar navegação com Tab, foco visível e links do rodapé.

## Checklist SEO, acessibilidade e performance

- [ ] Revisar meta title, description e Open Graph com dados reais.
- [ ] Testar contraste WCAG, texto alternativo e hierarquia H1/H2/H3.
- [ ] Testar leitor de tela, teclado e preferência por movimento reduzido.
- [ ] Otimizar fotos reais, reservar dimensões e evitar imagens pesadas acima da dobra.
- [ ] Auditar com Lighthouse/PageSpeed Insights em URL publicada e corrigir os problemas reportados.
- [ ] Validar SEO local somente com endereço, horário e contato confirmados.
- [ ] Revisar política de privacidade e necessidade de consentimento antes de adicionar analytics/cookies.

**Nota sobre testes:** a estrutura foi inspecionada estaticamente, mas não há pontuação Lighthouse ou auditoria de navegador medida neste pacote. A meta de 90+ é um objetivo a verificar, não uma promessa.
