(function(){

  /* ================= DATA =================
     Add a new object to COLLECTIONS or SHOP to have it appear
     automatically on the homepage and get its own page — nothing
     else in this file needs to change.

     Images are picked up automatically from the /images folder
     based on each item's slug — see README.md for the exact file
     list. You don't need to add an "image" field here; just save
     the photo with the right filename. */

  var COLLECTIONS = [
    {
      slug:'patina-of-childhood',
      title:'The Patina of Childhood',
      years:'2023–2024',
      palette:'pal-a',
      teaser:'Childhood never truly disappears. It remains within us, changing and accumulating layers of experience as we grow older.',
      description:
        "Childhood never truly disappears. It remains within us, changing and accumulating layers of experience as we grow older. Memories gradually lose their clarity and become almost physical — like old toys marked by cracks, worn surfaces and traces of time.\n\n"+
        "In this series, Katya Krasnaya turns to toys as vessels of memory. Horses, dogs, bears and other familiar figures seem to have lived lives of their own. They have aged, yet they have not lost the essence of what they once were.\n\n"+
        "Their weathered surfaces become a metaphor for human memory and the passage of time. We change and grow older, gathering our own layers of experience, while continuing to carry within us the part of ourselves that once encountered these toys for the first time.\n\n"+
        "Childhood is not the past here. It is a state that continues to live within us, acquiring its own patina with time.",
      works:[
        {title:'Horse I', size:'80 × 60 cm', year:'2024', price:'€1,200', palette:'pal-a', note:'Oil on canvas. Part of the opening group of works for this series — draft note, replace with real text.'},
        {title:'Bear', size:'60 × 50 cm', year:'2024', price:'€950', palette:'pal-c'},
        {title:'Dog', size:'70 × 70 cm', year:'2023', price:null, palette:'pal-e'},
        {title:'Horse II', size:'50 × 40 cm', year:'2023', price:'€780', palette:'pal-f'},
        {title:'Rocking Horse', size:'90 × 70 cm', year:'2024', price:'€1,450', palette:'pal-a'},
        {title:'Old Toy', size:'40 × 40 cm', year:'2023', price:'€620', palette:'pal-c'}
      ]
    },
    {
      slug:'back-to-the-world',
      title:'Phenomenon to the World: Dialogue with the Wall',
      years:'2024–2025',
      palette:'pal-d',
      teaser:'The moment when a person becomes tired of constant communication with the outside world.',
      description:
        "In this series, the artist explores the moment when a person becomes tired of constant communication with the outside world and of seeing themselves through the eyes, reactions and expectations of others.\n\n"+
        "The figures turned away seem to choose a space of silence, where nothing needs to be explained or displayed. The wall becomes a boundary between the outer and inner worlds, the visible and the hidden.\n\n"+
        "What happens when a person stops being a reflection of the world around them and is left alone with themselves?",
      works:[
        {title:'Turned Away', size:'100 × 80 cm', year:'2025', price:'€1,600', palette:'pal-d'},
        {title:'The Wall', size:'70 × 90 cm', year:'2024', price:null, palette:'pal-f'},
        {title:'Silence I', size:'60 × 60 cm', year:'2025', price:'€980', palette:'pal-e'},
        {title:'Boundary', size:'80 × 60 cm', year:'2024', price:'€1,150', palette:'pal-d'},
        {title:'Alone', size:'50 × 70 cm', year:'2025', price:'€890', palette:'pal-a'}
      ]
    },
    {
      slug:'in-between',
      title:'In Between',
      years:'2024–2025',
      palette:'pal-f',
      teaser:'Not every piece belongs to a single story — smaller studies made in the space between larger bodies of work.',
      description:
        "Not every piece belongs to a single story. In Between brings together works that live outside of a fixed series — smaller studies, one-off ideas, and pieces made in the space between larger bodies of work.\n\n"+
        "Loosely connected by process rather than theme, they capture moments of experimentation: a form tested, a colour explored, an idea followed simply to see where it leads.\n\n"+
        "Together they form a quieter, more open kind of collection — one that keeps growing alongside the more defined series.",
      works:[
        {title:'Study I', size:'40 × 30 cm', year:'2025', price:'€480', palette:'pal-c'},
        {title:'Fragment', size:'30 × 30 cm', year:'2024', price:'€360', palette:'pal-b'},
        {title:'Sketch for a Larger Work', size:'50 × 40 cm', year:'2025', price:'€620', palette:'pal-a'},
        {title:'Untitled', size:'60 × 45 cm', year:'2024', price:null, palette:'pal-d'}
      ]
    }
  ];

  var SHOP = [
    {
      slug:'prints',
      name:'Prints',
      palette:'pal-b',
      teaser:'Archival giclée prints of original paintings, produced in small numbered editions.',
      description:'Archival giclée prints of original paintings, produced in small numbered editions on 300gsm cotton paper. Each print ships signed and rolled. Draft copy — replace with final text.',
      products:[
        {name:'Horse — Giclée Print, A3', price:'€45', edition:'Edition of 50', palette:'pal-a', note:'Archival giclée on 300gsm cotton paper, signed and numbered — draft note, replace with real text.'},
        {name:'The Wall — Giclée Print, A3', price:'€45', edition:'Edition of 50', palette:'pal-d'},
        {name:'Bear — Giclée Print, A2', price:'€65', edition:'Edition of 30', palette:'pal-c'}
      ]
    },
    {
      slug:'t-shirts',
      name:'T-shirts',
      palette:'pal-c',
      teaser:'Original artwork printed on heavyweight cotton — wearable pieces from the studio.',
      description:'Original artwork printed on heavyweight cotton, cut for an easy, everyday fit. Draft copy — replace with final text.',
      products:[
        {name:'Horse Tee', price:'€35', edition:null, palette:'pal-a'},
        {name:'Studio Tee', price:'€30', edition:null, palette:'pal-f'},
        {name:'Turned Away Tee', price:'€35', edition:null, palette:'pal-d'}
      ]
    },
    {
      slug:'vintage',
      name:'Vintage',
      palette:'pal-e',
      teaser:'One-of-a-kind vintage objects, hand-selected and occasionally reworked in the studio.',
      description:'One-of-a-kind vintage objects, hand-selected and occasionally reworked in the studio. Each piece is unique and sold once. Draft copy — replace with final text.',
      products:[
        {name:'Vintage Find No. 1', price:'€120', edition:'One of one', palette:'pal-b'},
        {name:'Vintage Find No. 2', price:'€95', edition:'One of one', palette:'pal-e'},
        {name:'Vintage Find No. 3', price:'€150', edition:'One of one', palette:'pal-c'}
      ]
    }
  ];

  var ABOUT = {
    lede:'b. 1985, Leningrad — lives and works in Lisbon',
    body:[
      "Katya Krasnaya is a self-taught artist born in 1985 in Leningrad, now Saint Petersburg, Russia. Her interest in art began early, growing out of a natural curiosity about objects, forms and visual expression.",
      "Her practice moves between painting, sculpture and object-making, exploring unexpected forms and visually striking characters that attract attention and invite closer looking.",
      "Over the past several years, Krasnaya has exhibited extensively in Moscow and Saint Petersburg and worked on projects across Europe. She has been based in Lisbon, Portugal, for the past five years, where she continues to develop her artistic practice from her own studio."
    ],
    tags:['Painting','Sculpture','Objects']
  };

  /* ================= HELPERS ================= */

  function paras(text){ return text.split('\n\n').map(function(p){ return '<p>'+p+'</p>'; }).join(''); }

  function slugify(s){
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')
      .trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  }

  // Where a real photo is expected to live for a given collection/
  // shop cover, or for one specific work/product — as a path with
  // no extension. See README.md for the base filenames; the exact
  // extension (.jpg / .JPG / .jpeg / .png …) doesn't matter, the
  // browser tries several automatically — see imgFallback() below.
  function coverImg(kind, slug){ return 'images/'+kind+'/'+slug+'/cover'; }
  function pieceImg(kind, parentSlug, pieceSlug){ return 'images/'+kind+'/'+parentSlug+'/'+pieceSlug; }

  // Tries each of these extensions in turn for a given base path,
  // so it doesn't matter whether a photo was saved as .jpg, .JPG,
  // .jpeg or .png — whichever one exists is used automatically.
  var IMG_EXTENSIONS = ['jpg','JPG','jpeg','JPEG','png','PNG'];
  window.imgFallback = function(img){
    var queue = (img.getAttribute('data-fallbacks') || '').split('|').filter(Boolean);
    if(queue.length){
      var next = queue.shift();
      img.setAttribute('data-fallbacks', queue.join('|'));
      img.src = next;
    } else {
      img.style.display = 'none'; // no matching file found — placeholder stays visible
    }
  };

  var arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';

  function swatch(paletteClass, ratio, caption, imgBasePath, animClass){
    var img = '';
    if(imgBasePath){
      var candidates = IMG_EXTENSIONS.map(function(ext){ return imgBasePath+'.'+ext; });
      var first = candidates[0];
      var rest = candidates.slice(1).join('|');
      img = '<img class="swatch-photo" src="'+first+'" data-fallbacks="'+rest+'" alt="" loading="lazy" '+
            'onload="this.classList.add(\'is-loaded\');this.parentElement.classList.add(\'has-photo\')" onerror="imgFallback(this)">';
    }
    return '<div class="swatch '+paletteClass+' '+ratio+' '+(animClass||'')+'">'+
      '<span class="blob"></span>'+
      img+
      (caption ? '<span class="swatch-caption">'+caption+'</span>' : '')+
      '</div>';
  }

  /* ================= VIEWS ================= */

  function viewHome(){
    var artRows = COLLECTIONS.map(function(c,i){
      return '<div class="checker-row'+(i===0?' enter':'')+'">'+
        '<a class="row-media" href="#/art/'+c.slug+'" aria-label="'+c.title+'">'+swatch(c.palette,'ratio-tall','Study, '+c.years, coverImg('art', c.slug))+'</a>'+
        '<div class="row-content">'+
          '<div class="eyebrow">Collection — '+c.works.length+' works, '+c.years+'</div>'+
          '<h3>'+c.title+'</h3>'+
          '<p class="row-teaser">'+c.teaser+'</p>'+
          '<a class="explore" href="#/art/'+c.slug+'">Explore '+arrowSvg+'</a>'+
        '</div>'+
      '</div>';
    }).join('');

    var shopRows = SHOP.map(function(s,i){
      return '<div class="checker-row">'+
        '<a class="row-media" href="#/shop/'+s.slug+'" aria-label="'+s.name+'">'+swatch(s.palette,'ratio-tall',s.name, coverImg('shop', s.slug))+'</a>'+
        '<div class="row-content">'+
          '<div class="eyebrow">Shop</div>'+
          '<h3>'+s.name+'</h3>'+
          '<p class="row-teaser">'+s.teaser+'</p>'+
          '<a class="explore" href="#/shop/'+s.slug+'">Explore '+arrowSvg+'</a>'+
        '</div>'+
      '</div>';
    }).join('');

    return ''+
    '<section class="section" id="art" style="padding-top:var(--sp-4)">'+
      '<div class="section-head">'+
        '<h2 class="enter">Art</h2>'+
        '<p class="section-note enter enter-2">Paintings, sculpture and objects, gathered into ongoing collections.</p>'+
      '</div>'+
      '<div class="checker">'+artRows+'</div>'+
    '</section>'+

    '<section class="section" id="shop">'+
      '<div class="section-head">'+
        '<h2>Shop</h2>'+
        '<p class="section-note">Prints, wearables and vintage finds from the studio.</p>'+
      '</div>'+
      '<div class="checker">'+shopRows+'</div>'+
    '</section>'+

    '<section class="section" id="about">'+
      '<div class="section-head"><h2>About</h2></div>'+
      '<div class="about-grid">'+
        '<div class="about-media">'+swatch('pal-d','ratio-square','Portrait, studio', 'images/about/portrait.jpg')+'</div>'+
        '<div class="about-body">'+
          '<div class="eyebrow" style="margin-bottom:.9rem">'+ABOUT.lede+'</div>'+
          paras(ABOUT.body.join('\n\n'))+
          '<div class="tags">'+ABOUT.tags.map(function(t){ return '<span class="tag">'+t+'</span>'; }).join('')+'</div>'+
        '</div>'+
      '</div>'+
    '</section>';
  }

  function viewCollection(slug){
    var c = COLLECTIONS.filter(function(x){ return x.slug===slug; })[0];
    if(!c) return notFound('art');
    var cards = c.works.map(function(w){
      var wSlug = slugify(w.title);
      return '<a class="card-link" href="#/art/'+c.slug+'/'+wSlug+'">'+
        swatch(w.palette,'ratio-tall', null, pieceImg('art', c.slug, wSlug))+
        '<div class="card-meta">'+
          '<span class="card-title">'+w.title+'</span>'+
          '<span class="card-price'+(w.price?'':' sold')+'">'+(w.price||'Sold')+'</span>'+
        '</div>'+
        '<div class="card-dims">'+w.size+' · '+w.year+'</div>'+
      '</a>';
    }).join('');

    return ''+
    '<div class="section" style="padding-top:var(--sp-4)">'+
      backLink('art','Art')+
      '<div class="detail-head enter">'+
        '<div class="eyebrow" style="margin-bottom:.9rem">Collection — '+c.works.length+' works, '+c.years+'</div>'+
        '<h1>'+c.title+'</h1>'+
      '</div>'+
      '<div class="detail-body enter enter-2">'+paras(c.description)+'</div>'+
      '<div class="grid">'+cards+'</div>'+
    '</div>';
  }

  function viewShop(slug){
    var s = SHOP.filter(function(x){ return x.slug===slug; })[0];
    if(!s) return notFound('shop');
    var cards = s.products.map(function(p){
      var pSlug = slugify(p.name);
      return '<a class="card-link" href="#/shop/'+s.slug+'/'+pSlug+'">'+
        swatch(p.palette,'ratio-square', null, pieceImg('shop', s.slug, pSlug))+
        '<div class="card-meta">'+
          '<span class="card-title">'+p.name+'</span>'+
          '<span class="card-price">'+p.price+'</span>'+
        '</div>'+
        (p.edition ? '<div class="card-edition">'+p.edition+'</div>' : '')+
      '</a>';
    }).join('');

    return ''+
    '<div class="section" style="padding-top:var(--sp-4)">'+
      backLink('shop','Shop')+
      '<div class="detail-head enter">'+
        '<div class="eyebrow" style="margin-bottom:.9rem">Shop</div>'+
        '<h1>'+s.name+'</h1>'+
      '</div>'+
      '<div class="detail-body enter enter-2">'+paras(s.description)+'</div>'+
      '<div class="grid">'+cards+'</div>'+
    '</div>';
  }

  function viewArtwork(collectionSlug, workSlug){
    var c = COLLECTIONS.filter(function(x){ return x.slug===collectionSlug; })[0];
    if(!c) return notFound('art');
    var w = c.works.filter(function(x){ return slugify(x.title)===workSlug; })[0];
    if(!w) return notFound('art');

    return ''+
    '<div class="section" style="padding-top:var(--sp-4)">'+
      '<a class="back-link" href="#/art/'+c.slug+'">'+
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12H5M11 6l-6 6 6 6"/></svg>'+
        c.title+
      '</a>'+
      '<div class="stage enter">'+swatch(w.palette,'ratio-hero',c.title, pieceImg('art', c.slug, workSlug))+'</div>'+
      '<div class="detail-head enter enter-2" style="margin-bottom:var(--sp-3)">'+
        '<div class="eyebrow" style="margin-bottom:.9rem">'+c.title+'</div>'+
        '<h1 style="font-size:clamp(2rem,4.5vw,3.2rem)">'+w.title+'</h1>'+
      '</div>'+
      '<div class="piece-meta enter enter-2">'+
        '<span class="dims">'+w.size+' · '+w.year+'</span>'+
        '<span class="price'+(w.price?'':' sold')+'">'+(w.price||'Sold')+'</span>'+
      '</div>'+
      (w.note ? '<p class="piece-note detail-body">'+w.note+'</p>' : '')+
    '</div>';
  }

  function viewProduct(categorySlug, productSlug){
    var s = SHOP.filter(function(x){ return x.slug===categorySlug; })[0];
    if(!s) return notFound('shop');
    var p = s.products.filter(function(x){ return slugify(x.name)===productSlug; })[0];
    if(!p) return notFound('shop');

    return ''+
    '<div class="section" style="padding-top:var(--sp-4)">'+
      '<a class="back-link" href="#/shop/'+s.slug+'">'+
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12H5M11 6l-6 6 6 6"/></svg>'+
        s.name+
      '</a>'+
      '<div class="stage enter">'+swatch(p.palette,'ratio-hero',s.name, pieceImg('shop', s.slug, productSlug))+'</div>'+
      '<div class="detail-head enter enter-2" style="margin-bottom:var(--sp-3)">'+
        '<div class="eyebrow" style="margin-bottom:.9rem">Shop — '+s.name+'</div>'+
        '<h1 style="font-size:clamp(2rem,4.5vw,3.2rem)">'+p.name+'</h1>'+
      '</div>'+
      '<div class="piece-meta enter enter-2">'+
        '<span class="dims">'+(p.edition||'')+'</span>'+
        '<span class="price">'+p.price+'</span>'+
      '</div>'+
      (p.note ? '<p class="piece-note detail-body">'+p.note+'</p>' : '')+
    '</div>';
  }

  function backLink(section,label){
    return '<button class="back-link" data-goto="'+section+'">'+
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12H5M11 6l-6 6 6 6"/></svg>'+
      label+
    '</button>';
  }

  function notFound(section){
    return '<div class="section" style="padding-top:var(--sp-4)">'+backLink(section,'Home')+'<p>That page could not be found.</p></div>';
  }

  /* ================= ROUTER ================= */

  var app = document.getElementById('app');

  function goHome(sectionId){
    var wasHome = (location.hash === '' || location.hash === '#/' );
    if(wasHome){
      var t = document.getElementById(sectionId);
      if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
    } else {
      window.__scrollTarget = sectionId;
      location.hash = '/';
    }
  }

  function render(){
    var hash = location.hash.replace(/^#/,'') || '/';
    var parts = hash.split('/').filter(Boolean);
    var html;
    if(parts.length === 0){
      html = viewHome();
    } else if(parts[0] === 'art' && parts[2]){
      html = viewArtwork(parts[1], parts[2]);
    } else if(parts[0] === 'art' && parts[1]){
      html = viewCollection(parts[1]);
    } else if(parts[0] === 'shop' && parts[2]){
      html = viewProduct(parts[1], parts[2]);
    } else if(parts[0] === 'shop' && parts[1]){
      html = viewShop(parts[1]);
    } else {
      html = viewHome();
    }
    app.innerHTML = html;

    if(window.__scrollTarget){
      var id = window.__scrollTarget; window.__scrollTarget = null;
      requestAnimationFrame(function(){
        var t = document.getElementById(id);
        if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
      });
    } else if(parts.length){
      window.scrollTo(0,0);
    }
  }

  document.addEventListener('click', function(e){
    var goto = e.target.closest('[data-goto]');
    if(goto){ e.preventDefault(); goHome(goto.getAttribute('data-goto')); }
  });

  function renderWithTransition(){
    app.classList.add('is-leaving');
    window.setTimeout(function(){
      render();
      app.classList.remove('is-leaving');
    }, 220);
  }

  window.addEventListener('hashchange', renderWithTransition);
  document.getElementById('year').textContent = new Date().getFullYear();
  render();

})();
