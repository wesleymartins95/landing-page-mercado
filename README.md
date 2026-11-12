# Mercado da Vila — Versão 3.0

Landing page demonstrativa responsiva, inspirada no mockup aprovado, feita com HTML5, CSS3 e JavaScript puro. Não há frameworks, backend ou dependências de instalação.

## Visualizar
Abra `index.html` no navegador. Para testes mais fiéis, use um servidor HTTP local simples, como `python -m http.server 8000`, e acesse `http://localhost:8000`.

## Personalizar
- **Produtos, preços, ofertas, nome, endereço, horário, pagamentos e WhatsApp:** edite `js/data.js`. Preços são inteiros em centavos. `offer:true` coloca um produto nas ofertas.
- **Imagens:** substitua os SVGs em `assets/images/` por imagens autorizadas e otimizadas, preservando nomes ou ajustando os caminhos em `js/script.js`. Os SVGs fornecidos são ilustrações, não fotografias reais.
- **Cores e tipografia:** altere as variáveis em `css/style.css`.
- **Textos de apresentação e SEO:** edite `index.html`.
- **Privacidade:** revise `privacidade.html` para o negócio real.

## WhatsApp
Preencha `whatsapp` em `js/data.js` com DDI + DDD + número verdadeiro, apenas dígitos, ex. `5511999999999` (exemplo de formato, não contato real). Enquanto vazio, os botões mostram aviso e não enviam mensagens. O pedido é uma consulta, sem pagamento online.

## Publicar no GitHub Pages
1. Extraia o ZIP.
2. Envie **o conteúdo interno** da pasta para a raiz do repositório (substitua `index.html`, `css/style.css`, `js/script.js`, `js/data.js` e `assets/images`).
3. Confirme o commit na branch `main`.
4. Em Settings → Pages, selecione Deploy from a branch, `main`, `/ (root)`.
5. Aguarde o workflow de Pages concluir e abra o site em janela privada.

## Checklist antes de uso comercial
- [ ] Substituir nome, endereço, horário, meios de pagamento e contato por dados reais.
- [ ] Substituir preços, descontos e produtos fictícios e confirmar disponibilidade.
- [ ] Confirmar entregas, áreas atendidas e eventuais taxas.
- [ ] Substituir ilustrações por fotos autorizadas e otimizadas, se desejado.
- [ ] Remover o aviso demonstrativo **somente após** substituir todos os dados fictícios.
- [ ] Remover `noindex,nofollow` somente após revisar conteúdo e SEO local.
- [ ] Configurar URL canônica, Open Graph com URL e imagem reais, e eventual JSON-LD LocalBusiness com dados verificados.
- [ ] Revisar privacidade e LGPD conforme uso real.
- [ ] Testar navegação por teclado, menu móvel, filtros, busca, carrinho, checkout e compartilhamento.
- [ ] Rodar Lighthouse em dispositivos móveis e desktop. Não há pontuação garantida.

## Limitações
O carrinho é mantido apenas na memória da aba e reinicia ao recarregar. Não há estoque, pagamento, pedido persistido ou confirmação de venda. As imagens são SVGs ilustrativos originais; a referência visual gerada anteriormente não era um layout funcional nem fornecia fotografias individuais.
