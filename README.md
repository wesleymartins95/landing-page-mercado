# Mercado da Vila — Landing Page v2.0 (DEMONSTRAÇÃO)

Site comercial estático, responsivo e acessível, desenvolvido com **HTML5, CSS3 e JavaScript puro**. Sem frameworks, Node.js, bibliotecas externas, serviços pagos ou backend.

> **IMPORTANTE:** Mercado da Vila é uma marca demonstrativa. **Todos os produtos, preços, preços anteriores, ofertas, ilustrações, meios de pagamento, horários e mensagens comerciais são fictícios.** Não publique como comércio real sem substituir e confirmar cada informação. Nenhuma compra ou pagamento ocorre no site. O WhatsApp está **deliberadamente sem número** e só funcionará após a configuração de um contato verdadeiro.

## Estrutura

```
mercado-da-vila-v2/
├── index.html                    # Seções, SEO e acessibilidade
├── privacidade.html              # Modelo de informações de privacidade
├── css/style.css                 # Layout mobile-first/responsivo
├── js/data.js                    # DADOS EDITÁVEIS: contatos, produtos, preços, ofertas
├── js/script.js                  # Catálogo, filtros, carrinho e interações
├── assets/images/               # 12 ilustrações de produto + hero + compartilhamento
├── assets/icons/favicon.svg
└── README.md
```

## Funcionalidades

- Header fixo, menu responsivo e hero acolhedor.
- Ofertas em cards geradas a partir do catálogo (`offer: true`).
- Catálogo com filtros por categoria e busca local.
- Carrinho (lista de compras) com quantidade, remoção e total **estimado fictício**.
- Persistência da lista em `localStorage`, quando disponível; funciona também sem armazenamento.
- Pedido por WhatsApp: prepara texto contendo itens, quantidades e total. Abre o WhatsApp **somente se houver número verdadeiro configurado**. O visitante ainda precisa enviar a mensagem.
- CTA e botão flutuante para WhatsApp, com feedback caso não esteja configurado.
- Endereço, horário, pagamento, link de mapa e compartilhamento via Web Share API ou copiar endereço.
- FAQ expansível nativo, navegação por teclado, rótulos para leitores de tela e movimento reduzido.
- `robots=noindex,nofollow` por padrão para evitar indexação de informações fictícias.

## Personalizar (passo a passo)

Edite **`js/data.js`**:

1. `nome`: nome comercial verdadeiro.
2. `whatsapp`: número do comércio com DDD, só dígitos, sem `+`, espaços ou traços, por exemplo o formato `11999999999` (exemplo **de formato**, NÃO é um contato real). Teste manualmente com a equipe antes de divulgar.
3. `endereco`: endereço comercial completo e verificável, se houver atendimento presencial.
4. `mapsUrl`: endereço HTTPS real do local no mapa.
5. `horario`: expediente atualizado e exceções quando aplicáveis.
6. `pagamentos`: formas **realmente aceitas**. O site não processa pagamento.
7. `products`: cada produto contém `id` (único e estável), `name`, `unit`, `category`, `cents` (preço em **centavos**), `oldCents` (opcional, só quando verdadeiro), `image` e `offer`.
8. Para preço de R$ 6,49, escreva `cents: 649`. Para habilitar oferta, marque `offer: true`. Remova `oldCents` se não houver preço anterior comprovável.
9. Adicione fotos reais próprias, autorizadas e otimizadas em `assets/images`. Modifique `image` para o nome do arquivo; se usar arquivos com formato diferente, mantenha extensões corretas. Ilustrações SVG desta demonstração **não são fotos reais**.
10. Atualize os textos do `index.html`, inclusive hero, FAQ, depoimentos (somente se reais/autorizados), avisos de demonstração e rodapé. O nome no HTML não é atualizado automaticamente pelo campo `nome` em data.js.
11. Atualize a política em `privacidade.html` para o tratamento realmente realizado e informações do responsável.

**Atenção ao estoque:** o carrinho é uma lista local. Não verifica estoque, não reserva produtos, não calcula frete ou disponibilidade e não processa dinheiro. O total é estimado e o cliente deve confirmar tudo com o mercado.

### Edição semanal das ofertas

Em `js/data.js`, altere os produtos que terão `offer: true` e seus `cents`. A seção Ofertas é gerada automaticamente. **Não há expiração automática**: remova as ofertas vencidas manualmente e inclua datas de validade reais no conteúdo se o estabelecimento fornecer.

## SEO local e redes

1. Em `index.html`, altere `title` e `meta description` para nome, bairro/cidade e serviços **confirmados**.
2. **Somente após remover o conteúdo fictício**, remova `<meta name="robots" content="noindex,nofollow">` de `index.html` e `privacidade.html`, se quiser indexar ambos.
3. Configure URLs **absolutas** (`https://seu-dominio/...`) para `og:image` e, se quiser, `og:url` e `link rel="canonical"`, após definir o endereço final. A imagem `compartilhamento.jpg` foi criada para demonstração; substitua conforme a marca.
4. Atualize o compartilhamento textual em `js/script.js` (`initShare`).
5. Após verificar CNPJ/endereço/horários/contato, considere JSON-LD `GroceryStore` com informações **verdadeiras**. O projeto não insere schema local fictício.
6. Caso crie Google Business Profile, utilize as mesmas informações oficiais do site.
7. O GitHub Pages usa HTTPS; não inclua scripts de rastreamento sem revisar privacidade e consentimento aplicável.

## Executar localmente

- Método simples: extraia o ZIP e abra `index.html` no navegador.
- Opcional para comportamento semelhante à hospedagem: no diretório do projeto, execute `python -m http.server 8000` (se Python já estiver instalado) e abra `http://localhost:8000/`. Não é obrigatório para o site funcionar.

## Publicar gratuitamente no GitHub Pages

1. Crie ou abra um repositório **Public** no GitHub.
2. Envie **o conteúdo desta pasta**, preservando `index.html` na raiz e as pastas `css`, `js`, `assets`. **Não envie só o ZIP.**
3. Faça o commit dos arquivos.
4. Vá a **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**, branch **main**, folder **/(root)**; clique **Save**.
6. A URL padrão será `https://USUARIO.github.io/REPOSITORIO/`; aguarde a implantação e abra em janela anônima.
7. Se estiver substituindo o repositório `landing-page-mercado`, remova arquivos antigos que não são mais usados, preservando somente o novo projeto.
8. Teste os links, imagens e a lista de compras no endereço público antes de divulgar.

## Checklist funcional (execução manual)

- [ ] Navegar em 360px, 390px, 768px, 1024px e desktop largo sem rolagem horizontal.
- [ ] Abrir/fechar menu móvel e navegar por todas as âncoras.
- [ ] Filtrar categorias e buscar produto sem erros no console.
- [ ] Adicionar 3 itens, modificar quantidade, remover item e limpar a lista.
- [ ] Recarregar a página e conferir recuperação da lista quando armazenamento estiver disponível.
- [ ] Confirmar total = soma de preço unitário × quantidade.
- [ ] Com WhatsApp vazio, clicar nos botões e verificar mensagem de configuração (sem redirecionamento para número fictício).
- [ ] Com WhatsApp verdadeiro, testar a abertura da mensagem com a equipe, sem envio automático.
- [ ] Testar mapa real após configurado; sem mapa deve mostrar aviso.
- [ ] Compartilhar site em celular compatível e usar fallback de link copiado em desktop HTTPS.
- [ ] Validar FAQ, rodapé, política de privacidade e textos reais.

## Checklist de acessibilidade / SEO / desempenho

- [ ] Testar teclado: Tab, Shift+Tab, Enter, Escape; foco preso no carrinho aberto.
- [ ] Testar com leitor de tela (NVDA, VoiceOver) e ampliação 200%.
- [ ] Verificar contraste e preferência de movimento reduzido.
- [ ] Conferir alt das fotos reais e dimensões das imagens.
- [ ] Verificar títulos, metadescription, Open Graph com URL absoluta e imagem real.
- [ ] Remover `noindex` apenas depois da troca de dados demonstrativos.
- [ ] Rodar Lighthouse/Pagespeed em mobile e desktop **após implantação**. Meta: >=90 em categorias relevantes; **nenhuma pontuação foi medida ou garantida**.
- [ ] Confirmar ausência de erros de console e links quebrados.
- [ ] Revisar imagem hero para LCP, cache, formatos e tamanho de assets na hospedagem final.

## Limitações e decisões técnicas

- Carrinho salvo localmente no navegador; não sincroniza entre dispositivos.
- Não há banco de dados, checkout, cobrança, frete, estoque, login ou painel administrativo. Os arquivos são editáveis manualmente.
- Não coletamos informações pessoais via formulários, não há analytics instalados.
- Arquivos de imagem dos produtos são **ilustrações vetoriais fictícias** (não imagens fotográficas de marcas ou produtos reais).
- Nenhuma afirmação de horário, preço, promoção ou localização deve ser considerada verdadeira.

## Testes automatizados de estrutura

Execute `python tests/check_project.py` na pasta do projeto, com Python instalado. Verifica arquivos, links internos, dados principais e preços. **Não substitui testes visuais, Lighthouse ou navegação real.**
