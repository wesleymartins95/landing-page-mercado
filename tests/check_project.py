from pathlib import Path
import re,sys
root=Path(__file__).resolve().parents[1]
files=['index.html','privacidade.html','css/style.css','js/data.js','js/script.js','README.md','assets/images/hero.svg','assets/images/compartilhamento.jpg','assets/icons/favicon.svg']
errors=[]
for name in files:
 if not (root/name).is_file(): errors.append('Arquivo ausente: '+name)
html=(root/'index.html').read_text(encoding='utf-8')
for ref in ['css/style.css','js/data.js','js/script.js','assets/images/hero.svg','assets/icons/favicon.svg','assets/images/compartilhamento.jpg','privacidade.html']:
 if ref not in html:errors.append('Referência HTML ausente: '+ref)
for id in ['offersGrid','productGrid','cartDrawer','checkoutWhatsapp','menuToggle','shareSite','mapLink']:
 if f'id="{id}"' not in html:errors.append('ID ausente: '+id)
js=(root/'js/data.js').read_text(encoding='utf-8')
for filename in re.findall(r"image:'([^']+)'",js):
 if not (root/'assets/images'/filename).is_file():errors.append('Imagem do catálogo ausente: '+filename)
if 'whatsapp: \'\'' not in js:errors.append('O telefone deve começar vazio na versão demonstrativa')
if 'noindex,nofollow' not in html:errors.append('Aviso de não indexação ausente')
if errors:
 print('\n'.join('ERRO: '+e for e in errors));sys.exit(1)
print('PASS: estrutura, recursos, IDs, demonstração e assets encontrados')
