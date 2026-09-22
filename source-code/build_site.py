"""Update the supplied JournoPulse templates without changing their design.
Requires Python 3.10+ and lxml. Output HTML needs no Python or dependencies.
"""
from pathlib import Path
from lxml import html as H
from copy import deepcopy
import json,re,shutil,html,os,hashlib
from urllib.parse import urlsplit,unquote
from datetime import datetime, timezone
import xml.etree.ElementTree as ET
from collections import Counter

BASE=Path(__file__).resolve().parent
SOURCE=BASE/'source'
SITE=BASE.parent/'site' if BASE.name=='source-code' else BASE/'restored-site'
ARTS=json.loads((BASE/'articles.json').read_text(encoding='utf-8'))
ARTS.sort(key=lambda a:(a['date'],a['path']),reverse=True)
CATS={'world':'World','us':'U.S.','politics':'Politics','business':'Business','technology':'Technology','sports':'Sports','fashion':'Fashion','puertorico':'Puerto Rico','bancredito':'Bancrédito'}
assert len(ARTS)==54 and set(Counter(a['group'] for a in ARTS).values())=={6}
DOMAIN='https://www.journopulse.com'
BLOG_DESC='A blog of explainers, context and perspectives across business, technology, culture and public affairs.'
BLOG_DATE='2026-09-21'
TOOLS_VERSION=hashlib.sha256((BASE/'original-article-tools.js').read_bytes()).hexdigest()[:12]
CATEGORY_INTROS={
 'world':'Explore international affairs through source-based explainers and historical context.',
 'us':'Explore U.S. public life, institutions and events through source-based posts.',
 'politics':'Understand political decisions, election results and public policy in context.',
 'business':'Explore companies, markets and economic developments through practical explainers.',
 'technology':'Explore technology, space and AI through accessible explanations and context.',
 'sports':'Read reflections and background on sporting events, achievements and the business of sport.',
 'fashion':'Explore runway collections, exhibitions and the ideas behind what we wear.',
 'puertorico':'Explore Puerto Rico\u2019s public life, culture and institutions through source-based posts.',
 'bancredito':'Understand Bancr\u00e9dito\u2019s history and the banking, regulatory and legal context around it.'
}
e=lambda s:html.escape(str(s),quote=True)
def cl(node,name):return node.xpath('.//*[contains(concat(" ",normalize-space(@class)," ")," '+name+' ")]')
def remove(node):
 if node.getparent() is not None:node.getparent().remove(node)
def content(node,text):
 for child in list(node):node.remove(child)
 node.text=text
def inner(node,markup):
 content(node,'')
 for part in H.fragments_fromstring(markup):
  if isinstance(part,str):node.text=(node.text or '')+part
  else:node.append(part)
def read(path):return H.fromstring((SOURCE/path).read_text(encoding='utf-8-sig'))
def write(path,doc):
 p=SITE/path;p.parent.mkdir(parents=True,exist_ok=True)
 p.write_text('<!DOCTYPE html>\n'+H.tostring(doc,encoding='unicode',method='html'),encoding='utf-8')
def d(date):return datetime.fromisoformat(date[:10]).strftime('%B %d, %Y').replace(' 0',' ')
def cp(g):return f'{g}/{g}.html' if g!='puertorico' else 'puertorico/puerto-rico.html'
def rel(path,page):return os.path.relpath(path or 'index.html',str(Path(page).parent)).replace('\\','/')
def norm(url):return unquote(urlsplit(url).path).strip('/').removesuffix('.html')
def bodymarkup(body):return ''.join('<h2>'+e(line[3:])+'</h2>' if line.startswith('## ') else '<p>'+e(line)+'</p>' for line in body.splitlines() if line.strip())
BY={a['path'].removesuffix('.html'):a for a in ARTS}
INVENTORY=json.loads((BASE/'classified.json').read_text(encoding='utf-8')) if (BASE/'classified.json').exists() else []
OLD={a['path'].removesuffix('.html'):a for a in INVENTORY}
GROUPED={g:[a for a in ARTS if a['group']==g] for g in CATS}
ILLUSTRATIONS=json.loads((BASE/'illustrations/manifest.json').read_text(encoding='utf-8'))
ARTWORK={x['article_path']:x for x in ILLUSTRATIONS}
assert len(ARTWORK)==54 and set(ARTWORK)=={a['path'] for a in ARTS}
for a in ARTS:
 artwork=ARTWORK[a['path']]
 assert (BASE/'illustrations'/artwork['filename']).is_file(),artwork['filename']
 a['photo']='img/illustrations/'+artwork['filename']
 a['image_alt']=artwork['alt']

SITE.mkdir(parents=True,exist_ok=True)
shutil.copy2(BASE/'original-article-tools.css',SITE/'article-tools.css')
shutil.copy2(BASE/'original-article-tools.js',SITE/'article-tools.js')
shutil.copytree(SOURCE/'img',SITE/'img',dirs_exist_ok=True)
(SITE/'img/illustrations').mkdir(parents=True,exist_ok=True)
for artwork in ILLUSTRATIONS:shutil.copy2(BASE/'illustrations'/artwork['filename'],SITE/'img/illustrations'/artwork['filename'])
for name in ['style.css','detail.css','custom.js','detail.js','google590f22f1e6cb3e44.html']:
 if (SOURCE/name).exists():shutil.copy2(SOURCE/name,SITE/name)
(SITE/'img/journopulse-editorial.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="1200" height="800" fill="#191919"/><text x="80" y="440" font-family="Arial,sans-serif" font-weight="bold" font-size="130" fill="white">JournoPulse</text><rect x="80" y="500" width="150" height="10" fill="#dd3030"/></svg>',encoding='utf-8')
counter=Counter()
def pick(url,group=''):
 key=norm(url)
 if key in BY:return BY[key]
 g=OLD.get(key,{}).get('group') or group or 'world'
 if g not in GROUPED:g='world'
 a=GROUPED[g][counter[g]%6];counter[g]+=1;return a
def fill_card(node,a):
 for x in cl(node,'p-url')+[a for title in cl(node,'entry-title') for a in title.xpath('.//a')]:
  x.set('href','/'+a['path']);x.set('title',a['title']);content(x,a['title'])
 for x in cl(node,'p-flink'):x.set('href','/'+a['path']);x.set('title',a['title'])
 for x in cl(node,'entry-summary'):content(x,a['description'])
 for x in cl(node,'p-category'):content(x,CATS[a['group']]);x.set('href','/'+cp(a['group']))
 for x in cl(node,'meta-author')+cl(node,'meta-author-url'):content(x,'JournoPulse');x.set('href','/about/about-us.html')
 for x in cl(node,'meta-job'):remove(x)
 for x in node.xpath('.//time'):content(x,d(a['date']));x.set('datetime',a['date'])
 for x in node.xpath('.//img'):
  if 'avatar' in x.get('class','') or 'author' in x.get('src','') or 'sponsor-brand-logo' in x.get('class',''):x.set('src','/img/Group8%20(1).svg');x.set('alt','JournoPulse')
  else:
   x.set('src','/'+a['photo']);x.set('alt',a['image_alt']);x.attrib.pop('srcset',None);x.attrib.pop('data-srcset',None)
 for x in cl(node,'bookmark-trigger'):remove(x)

POLICY_PATHS={}
for p in SOURCE.rglob('*.html'):
 relative=p.relative_to(SOURCE).as_posix()
 if relative.split('/')[0] in ['about','contact','privacy','terms','our-team','ownership','editorial-policy','corrections-policy','advertising-policy','right-of-reply','source-methodology','legal']:
  POLICY_PATHS[relative.split('/')[0]]=relative
ROUTES={g:cp(g) for g in CATS}|POLICY_PATHS|{'search':'search.html','author/author':'our-team/our-team.html','journo':'index.html'}
ROUTES.update({p.removesuffix('.html'):p for p in POLICY_PATHS.values()})
ROUTES.update({'contact/contact-us':'contact/contact.html','ownership/ownership-funding':'ownership/ownership.html','corrections-policy/correction-policy':POLICY_PATHS.get('corrections-policy','corrections-policy/corrections-policy.html')})
ROUTES.update({'puerto-rico':cp('puertorico'),'puerto-rico/puerto-rico':cp('puertorico'),'puertorico/puertorico':cp('puertorico')})

def blog_language(doc):
 # Change editorial positioning in existing text nodes; retain every theme container.
 labels={'Top News':'Featured Posts','Latest News':'Explore the Blog','Popular News':'More to Read',
  'Most Read':'More to Read','POPULAR':'EXPLORE',"EDITOR'S PICK":'FEATURED POSTS',
  'U.S News':'U.S.','World News':'World','News room':'About the Blog','LIVE':'BLOG',
  'Our Team':'Behind the Blog','Editorial Policy':'Publishing Standards',
  'BREAKING NEWS UPDATES':'EXPLAINERS & PERSPECTIVES',
  'Your Source for Business & Technology News':'Ideas, Context & Perspectives',
  'JournoPulse delivers the latest business, technology, and global news to a growing audience, providing reliable insights and stories that matter.':
  'JournoPulse is a blog exploring business, technology, culture and public affairs through explainers, context and source-based perspectives.'}
 for node in doc.find('body').iter():
  if not isinstance(node.tag,str) or node.tag in ['script','style']:continue
  for attr in ['text','tail']:
   value=getattr(node,attr)
   if not value:continue
   compact=' '.join(value.split())
   if compact in labels:setattr(node,attr,value.replace(compact,labels[compact]) if compact in value else labels[compact])
   elif 'Your Source for Business & Technology News' in value:
    setattr(node,attr,value.replace('Your Source for Business & Technology News','Ideas, Context & Perspectives'))
 for node in cl(doc,'enterly-news-diff-all'):content(node,'TOPICS')
 for node in cl(doc,'newsletter-title'):content(node,'Follow the Blog')
 for node in cl(doc,'newsletter-description'):content(node,'Read the latest posts in your preferred RSS reader.')
 for form in cl(doc,'mc4wp-form'):
  if not form.xpath('.//input[@type="email"]'):continue
  form.set('action','/rss.xml');form.set('method','get')
  for ip in form.xpath('.//input[@type="email"]'):
   ip.set('type','text');ip.set('value',DOMAIN+'/rss.xml');ip.set('readonly','readonly');ip.set('aria-label','RSS feed URL')
   for attr in ['name','required','placeholder']:ip.attrib.pop(attr,None)
  for ip in form.xpath('.//input[@type="submit"]'):ip.set('value','Open RSS Feed')
  for node in cl(form,'agree-to-terms'):content(node,'Copy this address into your feed reader. No email signup is required.')
def replace_placeholder_artwork(doc,page,group='',article=None):
 # Reuse the finished illustrations in every template image slot, in both themes.
 # Keep each slot's original dimensions so the supplied layout does not change.
 pool=GROUPED[group or (article['group'] if article else 'technology')]
 by_id={a['illustration_id']:a for a in ARTS}
 defaults={'banner-bg':'13','newsletter-box-bg':'18','newsletter-featured':'18','ad-image':'11'}
 for slot,default_id in defaults.items():
  for i,node in enumerate(cl(doc,slot)):
   a=article or (pool[i%len(pool)] if group else by_id[default_id])
   if slot=='ad-image' and article:
    a=pool[(pool.index(article)+1+i)%len(pool)]
   for im in node.xpath('.//img'):
    width=im.get('width','1536');height=im.get('height','1024')
    im.set('src','/'+a['photo']);im.set('alt',a['image_alt'])
    im.set('data-illustration-slot',slot);im.set('data-illustration-article',a['path'])
    im.set('style',im.get('style','').rstrip(';')+f';aspect-ratio:{width}/{height};object-fit:cover;object-position:center')
    for attr in ['srcset','data-srcset','data-src']:im.attrib.pop(attr,None)
   if slot=='ad-image':
    node.tag='a';node.set('href','/'+a['path']);node.set('title',a['title']);node.set('aria-label','Read: '+a['title'])
    for wrap in node.iterancestors():
     if 'ad-wrap' in wrap.get('class','').split():
      for label in cl(wrap,'ad-description'):content(label,'Illustrated blog post')
      break
 if cl(doc,'search-header'):
  artwork=article or pool[0]
  style=H.Element('style',id='jp-search-illustration')
  style.text='.search-header:before,[data-theme="dark"] .search-header:before{background-image:url("'+rel(artwork['photo'],page)+'")}'
  doc.find('head').append(style)

def common(doc,page,title,desc,group='',article=None):
 # Preserve the supplied theme, containers, layout classes and CSS files.
 doc.find('body').set('data-theme','default')
 for menu in cl(doc,'mobile-menu'):
  inner(menu,'<li class="menu-item"><a href="/">Home</a></li>'+''.join(f'<li class="menu-item"><a href="/{cp(g)}">{e(n)}</a></li>' for g,n in CATS.items())+'<li class="menu-item"><a href="/about/about-us.html">About us</a></li>')
 for menu in doc.xpath('//*[@id="menu-main"]'):
  present={norm(a.get('href','')).split('/')[0] for a in menu.xpath('./li/a')}
  for g in ['sports','fashion']:
   if g not in present:
    item=H.fromstring(f'<li class="menu-item"><a href="/{cp(g)}"><span>{CATS[g]}</span></a></li>');menu.insert(max(0,len(menu)-1),item)
 for card in cl(doc,'p-wrap'):
  urls=cl(card,'p-url')+[a for title in cl(card,'entry-title') for a in title.xpath('.//a')]
  if urls:fill_card(card,pick(urls[0].get('href',''),group))
 # Original secondary grids use a separate card template. Keep their content in sync too.
 for i,card in enumerate(cl(doc,'cat-sec-grid-layout-card')):
  if card.get('data-active-article') or card.get('data-search'):continue
  links=card.xpath('.//a[@href]')
  if not links:continue
  a=GROUPED[group][i%6] if group else pick(links[0].get('href',''))
  for link in links:link.set('href','/'+a['path']);link.set('title',a['title'])
  for link in card.xpath('./a'):content(link,a['title'])
  for cls,value in [('cat-sec-grid-layout-title',a['title']),('cat-sec-grid-layout-desc',a['description']),('cat-sec-grid-layout-category',CATS[a['group']]),('cat-sec-grid-layout-name','JournoPulse'),('cat-sec-grid-layout-date','| '+d(a['date']))]:
   for node in cl(card,cls):content(node,value)
  for im in card.xpath('.//img'):
   avatar='avatar' in im.get('class','')
   im.set('src','/img/Group8%20(1).svg' if avatar else '/'+a['photo']);im.set('alt','JournoPulse' if avatar else a['image_alt'])
  for node in cl(card,'cat-sec-grid-layout-rating-text'):content(node,'Source-linked blog post')
 for node in cl(doc,'meta-author')+cl(doc,'meta-author-url'):content(node,'JournoPulse');node.set('href','/about/about-us.html')
 for node in cl(doc,'meta-job'):remove(node)
 for node in cl(doc,'meta-avatar'):
  node.set('href','/about/about-us.html');node.set('aria-label','JournoPulse')
  for im in node.xpath('.//img'):im.set('src','/img/Group8%20(1).svg');im.set('alt','JournoPulse')
 for im in doc.xpath('//img[contains(concat(" ",normalize-space(@class)," ")," avatar ")]'):
  im.set('src','/img/Group8%20(1).svg');im.set('alt','JournoPulse')
 for card in cl(doc,'category-hero-item'):
  a=next(a for a in ARTS if a.get('illustration_id')=='45')
  for im in card.xpath('.//img'):im.set('src','/'+a['photo']);im.set('alt',a['image_alt'])
 for node in cl(doc,'sponsor-link'):
  node.set('href','/about/about-us.html');node.set('aria-label','JournoPulse')
  for label in cl(node,'sponsor-label'):content(label,'Published by')
  for im in node.xpath('.//img'):im.set('src','/img/Group8%20(1).svg');im.set('alt','JournoPulse')
 for node in cl(doc,'fntotal'):content(node,'')
 for x in doc.xpath('//a[@href]'):
  href=x.get('href');key=norm(href)
  if x.text_content().strip()=='Terms & Conditions':x.set('href','/terms/terms-and-condition.html');continue
  if key in BY or key in OLD:
   a=pick(href,group);x.set('href','/'+a['path'])
   if not x.xpath('.//img') and len(x.text_content().strip())>20:content(x,a['title'])
 for form in doc.xpath('//form'):
  if form.xpath('.//input[@name="s"]'):
   form.set('action','/search.html');form.set('method','get')
   for ip in form.xpath('.//input[@name="s"]'):ip.set('name','q');ip.set('aria-label','Search blog posts')
  elif 'wp-login' in form.get('action',''):remove(form)
 # Remove false pagination and obsolete login/bookmark plumbing, not the visual theme.
 for name in ['pagination-wrap','pagination','post-comments','comment-respond','login-form-wrap']:
  for x in cl(doc,name):remove(x)
 for x in doc.xpath('//script'):remove(x)
 replace_placeholder_artwork(doc,page,group,article)
 for x in doc.xpath('//meta[@property] | //meta[@name="description"] | //link[@rel="canonical"] | //link[@hreflang] | //title'):remove(x)
 head=doc.find('head');url=DOMAIN+('/' if page=='index.html' else '/'+page.removesuffix('.html'))
 for x in head.xpath('.//meta[@charset]'):remove(x)
 head.insert(0,H.Element('meta',charset='utf-8'))
 t=H.Element('title');t.text=title+' | JournoPulse';head.append(t)
 for attrs in [{'name':'description','content':desc},{'property':'og:title','content':title},{'property':'og:description','content':desc},{'property':'og:type','content':'article' if article else 'website'},{'property':'og:url','content':url},{'property':'og:site_name','content':'JournoPulse'}]:head.append(H.Element('meta',**attrs))
 head.append(H.Element('link',rel='canonical',href=url))
 schema={'@context':'https://schema.org','@type':'Blog' if page=='index.html' else 'CollectionPage' if group else 'WebPage','name':title,'description':desc,'url':url}
 if page=='index.html':schema.update({'@id':DOMAIN+'/#blog','publisher':{'@type':'Organization','name':'JournoPulse'}})
 if article:
  schema={'@context':'https://schema.org','@type':'BlogPosting','headline':title,'description':desc,'url':url,'mainEntityOfPage':url,'datePublished':article['date'],'dateModified':BLOG_DATE+'T00:00:00+00:00','articleSection':CATS[article['group']],'author':{'@type':'Organization','name':'JournoPulse'},'publisher':{'@type':'Organization','name':'JournoPulse'},'isPartOf':{'@type':'Blog','@id':DOMAIN+'/#blog','name':'JournoPulse','url':DOMAIN+'/'},'citation':[s['url'] for s in article['sources']]}
  head.append(H.Element('meta',property='article:published_time',content=article['date']))
  head.append(H.Element('meta',property='article:modified_time',content=BLOG_DATE+'T00:00:00+00:00'))
  schema['image']={'@type':'ImageObject','url':DOMAIN+'/'+article['photo'],'width':1536,'height':1024,'caption':'AI-generated conceptual editorial illustration.'}
  for key,value in [('og:image',DOMAIN+'/'+article['photo']),('og:image:alt',article['image_alt']),('og:image:width','1536'),('og:image:height','1024')]:head.append(H.Element('meta',property=key,content=value))
  head.append(H.Element('meta',name='twitter:card',content='summary_large_image'))
 sc=H.Element('script',type='application/ld+json');sc.text=json.dumps(schema,ensure_ascii=False).replace('</','<\\/');head.append(sc)
 head.append(H.Element('link',rel='stylesheet',href='/article-tools.css'))
 for node in head.xpath('.//link[@rel="alternate"]'):remove(node)
 head.append(H.Element('link',rel='alternate',type='application/rss+xml',title='JournoPulse Blog',href='/rss.xml'))
 script=H.Element('script',src='/article-tools.js?v='+TOOLS_VERSION,defer='defer');doc.find('body').append(script)
 blog_language(doc)
 # Keep all original navigation destinations, with local static-file equivalents.
 known={a['path'] for a in ARTS}|set(POLICY_PATHS.values())|{cp(g) for g in CATS}|{'index.html','search.html','rss.xml','sitemap.xml'}
 for x in doc.xpath('//*[@href or @src or @action]'):
  for attr in ['href','src','action']:
   value=x.get(attr)
   if value is None:continue
   sp=urlsplit(value)
   if sp.scheme in ['mailto','tel','data','javascript']:continue
   local=not sp.netloc or sp.netloc in ['www.journopulse.com','journopulse.com']
   if not local:continue
   if value.startswith('#'):
    if value!='#' and doc.xpath('//*[@id="'+value[1:]+'"]'):continue
    x.set(attr,rel('search.html' if 'search' in x.get('class','') else 'index.html',page));continue
   path=unquote(sp.path).strip('/')
   if not path:path='index.html'
   key=path.removesuffix('.html')
   if key in ROUTES:path=ROUTES[key]
   elif path not in known and key+'.html' in known:path=key+'.html'
   if attr=='href' and path not in known and not (SITE/path).is_file():path='search.html'
   if attr=='src' and not (SITE/path).is_file():
    if x.tag=='script':remove(x);continue
    if x.tag=='img':path='img/Group8 (1).svg'
   x.set(attr,rel(path,page)+(('?'+sp.query) if sp.query else '')+(('#'+sp.fragment) if sp.fragment else ''))
 for x in doc.xpath('//*[@class]'):
  # Exported animation markers otherwise hide entire original sections offline.
  x.set('class',x.get('class').replace('elementor-invisible','').replace('is-p-protected','').strip())
 for im in doc.xpath('//img[contains(@src,"img/illustrations/")]'):
  if not im.get('data-illustration-slot'):im.set('width','1536');im.set('height','1024')
  im.set('decoding','async')
  im.attrib.pop('srcset',None);im.attrib.pop('data-srcset',None);im.attrib.pop('data-src',None)
  if any('featured-lightbox-trigger' in p.get('class','') for p in im.iterancestors()):im.set('loading','eager')
  else:im.set('loading','lazy')
 return doc

for a in ARTS:
 template=a['path'] if (SOURCE/a['path']).exists() else 'fashion/fashion-week-siriano-inaugural-collection-fantasy-surrealism.html'
 doc=read(template)
 content(cl(doc,'s-title')[0],a['title']);content(cl(doc,'s-tagline')[0],a['description'])
 for x in cl(doc,'s-cats'):
  for y in x.xpath('.//a'):content(y,CATS[a['group']]);y.set('href','/'+cp(a['group']))
 for x in cl(doc,'breadcrumb-inner'):
  inner(x,f'<a href="/">JournoPulse</a> &gt; <a href="/{cp(a["group"])}">{e(CATS[a["group"]])}</a> &gt; <span>{e(a["title"])}</span>')
 for x in cl(doc,'featured-lightbox-trigger'):
  x.attrib.pop('data-caption',None);x.attrib.pop('data-attribution',None);x.attrib.pop('data-source',None)
  for im in x.xpath('.//img'):im.set('src','/'+a['photo']);im.set('alt',a['image_alt']);im.attrib.pop('srcset',None)
 for x in cl(doc,'feat-caption'):content(x,'AI-generated editorial illustration. Conceptual depiction; not a photograph or evidence of the event.')
 for x in cl(doc,'updated-date'):content(x,'Updated: September 21, 2026');x.set('datetime',BLOG_DATE)
 for x in cl(doc,'single-meta'):
  for time in cl(x,'published'):content(time,'Originally published: '+d(a['date']) if not a['new'] else 'Published: '+d(a['date']));time.set('datetime',a['date'])
 source='<section class="jp-sources" id="article-sources"><h2>Sources and further reading</h2><ol>'+''.join(f'<li><a href="{e(s["url"])}" rel="noopener noreferrer">{e(s["label"])}</a><br><small>{e(s["type"])}</small></li>' for s in a['sources'])+'</ol></section>'
 note='<aside class="jp-revision"><strong>'+('Publication note' if a['new'] else 'Revision note')+' · September 17, 2026</strong><p>'+e(a['note'])+'</p><strong>Content and illustration update · September 21, 2026</strong><p>'+e(a['content_pass_note'])+'</p><p>Historical accounts retain their dated context. This update does not establish later developments beyond those explicitly described.</p></aside><p><small>A JournoPulse blog post, prepared with AI assistance from the linked sources. <a href="/source-methodology">Our methodology</a> · <a href="/corrections-policy">Suggest a correction</a>.</small></p>'
 inner(cl(doc,'entry-content')[0],bodymarkup(a['body'])+source+note)
 # Do not retain invented biographical assertions from the old byline box.
 for x in cl(doc,'author-box')+cl(doc,'author-bio')+cl(doc,'author-description'):remove(x)
 common(doc,a['path'],a['title'],a['description'],a['group'],a)
 write(a['path'],doc)

for g,n in CATS.items():
 path=cp(g);doc=read(path if (SOURCE/path).exists() else 'puertorico/puertorico.html');aa=GROUPED[g]
 heroes=cl(doc,'cate-sec-long-time-grid')
 if not heroes:raise ValueError('Missing original category layout '+g)
 templates=[x for x in heroes[0] if isinstance(x.tag,str)];hero_count=min(3,len(templates));content(heroes[0],'')
 for i,a in enumerate(aa[:hero_count]):
  card=deepcopy(templates[min(i,len(templates)-1)])
  card.set('data-active-article',a['path'])
  card.set('style',"background-image:linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,.05)),url('../"+a['photo']+"');background-size:cover;background-position:center")
  for x in card.xpath('.//h2|.//h3'):content(x,a['title'])
  for x in card.xpath('.//a'):x.set('href','/'+a['path'])
  for x in cl(card,'cate-sec-long-time-badge'):content(x,n)
  ps=card.xpath('.//p');metas=cl(card,'cate-sec-long-time-meta')
  if ps:content(ps[0],a['description'])
  if len(metas)>1:content(metas[0],a['description'])
  if metas:content(metas[-1],'JournoPulse | '+d(a['date']))
  heroes[0].append(card)
 grid=cl(doc,'cat-sec-grid-layout-grid')[0];template=deepcopy(next(x for x in grid if x.tag=='article'));content(grid,'')
 for a in aa[hero_count:]:
  card=deepcopy(template);card.set('data-active-article',a['path'])
  for x in card.xpath('.//a'):x.set('href','/'+a['path']);x.set('title',a['title'])
  for x in cl(card,'cat-sec-grid-layout-title'):content(x,a['title'])
  for x in cl(card,'cat-sec-grid-layout-desc'):content(x,a['description'])
  for x in cl(card,'cat-sec-grid-layout-category'):content(x,n)
  for x in cl(card,'cat-sec-grid-layout-name'):content(x,'JournoPulse')
  for x in cl(card,'cat-sec-grid-layout-date'):content(x,'| '+d(a['date']))
  for x in card.xpath('.//img'):
   x.set('src','/img/Group8%20(1).svg' if 'avatar' in x.get('class','') else '/'+a['photo']);x.set('alt','JournoPulse' if 'avatar' in x.get('class','') else a['image_alt'])
  grid.append(card)
 for x in cl(doc,'cate-sec-long-time-title'):content(x,n)
 for x in cl(doc,'cat-sec-grid-layout-header-title'):content(x,'More '+n+' Posts')
 for x in cl(doc,'cate-sec-long-time-breadcrumb'):inner(x,f'<a href="/">JournoPulse Blog</a> &gt; {e(n)}')
 intro=cl(doc,'cate-sec-long-time-intro')
 if intro:content(intro[0],CATEGORY_INTROS[g]+' Six posts, ordered by original publication date.')
 for x in cl(doc,'cate-sec-long-time-header-img'):
  illustration=next((a['photo'] for a in aa if not a['photo'].endswith('.svg')),'img/journopulse-editorial.svg')
  x.set('style',"background-image:url('../"+illustration+"')")
 if intro:intro[0].text=intro[0].text.replace('\ufffd','—')
 write(path,common(doc,path,n+' Blog',CATEGORY_INTROS[g],g))

doc=read('index.html');write('index.html',common(doc,'index.html','Blog: ideas, context and perspectives',BLOG_DESC))

# Keep the original policy-page shells and typography, replacing only their text.
policy_data=json.loads((BASE/'policy-content.json').read_text(encoding='utf-8'))
for folder,path in POLICY_PATHS.items():
 doc=read(path)
 match=next((v for k,v in policy_data.items() if k.split('/')[0]==folder),None)
 if match:
  title,body=match
  main=cl(doc,'content-area')
  if main:
   markup=f'<div class="page-title-bar"><h1>{e(title)}</h1><div class="meta">Updated September 21, 2026 · JournoPulse Blog</div></div>'+bodymarkup(body)
   markup=markup.replace('editorial@journopulse.com','<a href="mailto:editorial@journopulse.com">editorial@journopulse.com</a>')
   inner(main[0],markup)
  write(path,common(doc,path,title,title+' — JournoPulse.'))

doc=read(cp('fashion'))
for x in cl(doc,'cat-sec-grid-layout-header-title'):content(x,'Search results')
for x in cl(doc,'cate-sec-long-time-breadcrumb'):inner(x,'<a href="/">JournoPulse</a> &gt; Search')
for x in cl(doc,'cate-sec-long-time-grid'):remove(x)
for x in cl(doc,'cate-sec-long-time-title'):content(x,'Search blog posts')
for x in cl(doc,'cate-sec-long-time-intro'):content(x,'Explore 54 posts across nine blog categories.')
grid=cl(doc,'cat-sec-grid-layout-grid')[0];template=deepcopy(next(x for x in grid if x.tag=='article'));content(grid,'')
for a in ARTS:
 card=deepcopy(template);card.set('data-search',(a['title']+' '+a['description']+' '+CATS[a['group']]+' '+a['body']).lower());card.set('data-group',a['group'])
 for x in cl(card,'cat-sec-grid-layout-title'):content(x,a['title'])
 for x in cl(card,'cat-sec-grid-layout-desc'):content(x,a['description'])
 for x in cl(card,'cat-sec-grid-layout-category'):content(x,CATS[a['group']])
 for x in cl(card,'cat-sec-grid-layout-name'):content(x,'JournoPulse')
 for x in cl(card,'cat-sec-grid-layout-date'):content(x,'| '+d(a['date']))
 for x in card.xpath('.//a'):x.set('href','/'+a['path']);x.set('title',a['title'])
 for x in card.xpath('.//img'):x.set('src','/img/Group8%20(1).svg' if 'avatar' in x.get('class','') else '/'+a['photo']);x.set('alt','JournoPulse' if 'avatar' in x.get('class','') else a['image_alt'])
 grid.append(card)
 form=H.fromstring('<form id="jp-search" role="search"><label for="jp-query">Search blog posts</label><input id="jp-query" name="q" type="search" placeholder="Search topics or titles"><label for="jp-category">Category</label><select id="jp-category"><option value="">All categories</option>'+''.join(f'<option value="{g}">{e(n)}</option>' for g,n in CATS.items())+'</select><button type="reset">Clear</button><p id="jp-results" role="status" aria-live="polite">54 posts</p></form>')
grid.addprevious(form)
write('search.html',common(doc,'search.html','Search the blog','Find a post in the JournoPulse blog.'))

# Feeds contain only the active collection; retain compatible hosting routes.
for name in ['robots.txt','vercel.json']:
 shutil.copy2(BASE/'feeds'/name,SITE/name)
# Regenerate normal blog discovery feeds from the same data as the pages.
def public_url(path):return DOMAIN+('/' if path=='index.html' else '/'+path.removesuffix('.html'))
def rss_date(value):
 dt=datetime.fromisoformat(value)
 if dt.tzinfo is None:dt=dt.replace(tzinfo=timezone.utc)
 return dt.astimezone(timezone.utc).strftime('%a, %d %b %Y %H:%M:%S +0000')
def xml_write(name,root):ET.ElementTree(root).write(SITE/name,encoding='utf-8',xml_declaration=True)
ns='http://www.sitemaps.org/schemas/sitemap/0.9';ET.register_namespace('',ns)
for name,paths in [('sitemap.xml',['index.html']+[cp(g) for g in CATS]+list(POLICY_PATHS.values())+[a['path'] for a in ARTS]),('sitemap-articles.xml',[a['path'] for a in ARTS])]:
 root=ET.Element('{'+ns+'}urlset')
 for path in paths:
  node=ET.SubElement(root,'{'+ns+'}url');ET.SubElement(node,'{'+ns+'}loc').text=public_url(path);ET.SubElement(node,'{'+ns+'}lastmod').text=BLOG_DATE
 xml_write(name,root)
rss=ET.Element('rss',version='2.0');channel=ET.SubElement(rss,'channel')
for key,value in [('title','JournoPulse Blog'),('link',DOMAIN+'/'),('description',BLOG_DESC),('language','en-US')]:ET.SubElement(channel,key).text=value
for a in ARTS:
 item=ET.SubElement(channel,'item')
 for key,value in [('title',a['title']),('link',public_url(a['path'])),('guid',public_url(a['path'])),('description',a['description']),('pubDate',rss_date(a['date'])),('category',CATS[a['group']])]:ET.SubElement(item,key).text=value
xml_write('rss.xml',rss)
# Retire the generated news-only feed, including when updating an existing local build.
(SITE/'sitemap-news.xml').unlink(missing_ok=True)
config=json.loads((SITE/'vercel.json').read_text())
config['rewrites']=[{'source':'/'+key,'destination':'/'+value} for key,value in (CATS and {g:cp(g) for g in CATS}|POLICY_PATHS).items()]
(SITE/'vercel.json').write_text(json.dumps(config,indent=2),encoding='utf-8')
for g in CATS:
 target=cp(g);path=g+'/index.html';write(path,H.fromstring(f'<html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url={rel(target,path)}"><title>{e(CATS[g])}</title></head><body><a href="{rel(target,path)}">{e(CATS[g])}</a></body></html>'))
alias='puertorico/puertorico.html';target=cp('puertorico')
write(alias,H.fromstring(f'<html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url={rel(target,alias)}"><title>Puerto Rico</title></head><body><a href="{rel(target,alias)}">Puerto Rico</a></body></html>'))
for folder,path in POLICY_PATHS.items():
 alias=folder+'/index.html';write(alias,H.fromstring(f'<html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url={rel(path,alias)}"><title>JournoPulse</title></head><body><a href="{rel(path,alias)}">Continue</a></body></html>'))
shutil.copy2(BASE/'original-article-tools.css',SITE/'article-tools.css');shutil.copy2(BASE/'original-article-tools.js',SITE/'article-tools.js')
print('Original design retained. Built 54 blog posts with six per category:',SITE)
