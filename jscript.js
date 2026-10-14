(function(){
"use strict";

/* =====================================================================
   BANCO DE PALABRAS  [correcta, incorrecta, incorrecta]
   ===================================================================== */
var LEVELS = {
 facil:{ label:"Fácil", stars:"★", desc:"Palabras de todos los días", words:[
  ["huevo","uevo","huebo"],["hacer","acer","hazer"],["ahora","ahóra","aora"],["calle","caye","calye"],
  ["lluvia","yuvia","llubia"],["cielo","zielo","sielo"],["zapato","sapato","zapatto"],["ciudad","siudad","ciudat"],
  ["cabeza","cabesa","kabeza"],["queso","keso","quezo"],["guerra","gerra","guera"],["hueso","ueso","huezo"],
  ["hombre","ombre","hombré"],["hospital","ospital","hospitál"],["historia","istoria","hisotria"],["viaje","viage","biaje"],
  ["bruja","bruxa","brucha"],["jirafa","girafa","jirrafa"],["abeja","abexa","aveja"],["escribir","escrivir","esscribir"],
  ["recibir","recivir","resibir"],["ventana","bentana","ventanna"],["vecino","becino","vesino"],["llave","yave","llabe"],
  ["lleno","yeno","llenno"],["hielo","yelo","ielo"],["yate","llate","jate"],["yeso","lleso","jeso"],
  ["rey","rei","rrey"],["jersey","yersey","gersey"],["gigante","gijante","jigante"],["colegio","colejio","coleggio"],
  ["mensaje","mensage","menssaje"],["garaje","garage","garahe"],["avión","abión","avion"],["bienvenido","bienbenido","vienvenido"],
  ["zanahoria","sanahoria","zanaoria"],["almohada","almoada","almuhada"],["desayuno","desayúno","dessayuno"],["cohete","coete","cohette"],
  ["también","tambien","tanbién"],["árbol","arbol","árvol"],["lápiz","lapiz","lápis"],["rápido","rapido","rrápido"],
  ["canción","cancion","canzión"],["corazón","corazon","corasón"],["teléfono","telefono","teléfonó"],["médico","medico","mético"],
  ["fácil","facil","fácill"],["invierno","imbierno","inbierno"],["tobillo","tovillo","tobiyo"],["televisión","televición","telebisión"],
  ["decisión","desisión","decición"],["biblioteca","bibloteca","viblioteca"],["aprender","aprhender","aprenter"],["bolígrafo","boligrafo","volígrafo"],
  ["texto","testo","tecsto"],["sexto","sesto","sexito"],["examen","eczamen","exámen"],["éxito","exito","ésito"],
  ["explicar","esplicar","explikar"],["imposible","inposible","imposibel"],
  ["amarillo","amarrillo","hamarillo"],["lámpara","lampara","lanpara"],["caballo","cavallo","cabayo"],["escuela","eskuela","escuella"],
  ["bonito","vonito","bonitto"],["bicicleta","vicicleta","bicicletta"],["verano","berano","verrano"],["vestido","bestido","vestído"],
  ["abuelo","avuelo","abuello"],["hermano","ermano","hermmano"],["hormiga","ormiga","hormigga"],["hoja","oja","hoxa"],
  ["ojo","hojo","ogo"],["mariposa","maripossa","marriposa"],["mochila","mochilla","mojila"],["cocina","cosina","cozina"],
  ["cumpleaños","cumpleanios","cunpleaños"],["pizarra","pisarra","pizara"],["profesor","proffesor","profesór"],["zorro","sorro","zoro"],
  ["ratón","raton","rratón"],["tortuga","tortuca","tortuka"],["bailar","vailar","baylar"],["jardín","gardín","jardin"],
  ["pájaro","pajaro","páxaro"],["cuaderno","quaderno","cuadernno"],["sábado","sabado","sávado"],["miércoles","miercoles","miércolés"],
  ["octubre","octobre","otubre"],["noviembre","noviebre","novienbre"],["diciembre","diziembre","disiembre"],["bocadillo","vocadillo","bocadiyo"],
  ["ordenador","hordenador","ordenadór"],["botella","votella","boteya"],["estrella","estreya","estrela"],["cuchillo","cuchiyo","cuchilo"],
  ["gallina","gayina","galina"],["ardilla","ardiya","ardila"],["castillo","castiyo","castilo"],["tijeras","tigeras","tixeras"]
 ]},
 medio:{ label:"Medio", stars:"★★", desc:"Con h, g/j, x, tildes…", words:[
  ["hierba","ierba","yierba"],["hierro","ierro","hiero"],["exagerar","exajerar","esagerar"],["vehículo","vehiculo","behículo"],
  ["ingeniero","injeniero","ingeñiero"],["extraño","estraño","extrano"],["excursión","escursión","excurción"],["exterior","esterior","exterrior"],
  ["conserje","conserge","consserje"],["envolver","enbolver","envolber"],["campeón","canpeón","campeon"],["paraguas","paragüas","parahuas"],
  ["difícil","dificil","dificíl"],["humedad","umedad","humedat"],["alrededor","al rededor","alrrededor"],["rugir","rujir","rrugir"],
  ["dirigir","dirijir","dirigír"],["recoger","recojer","recoguer"],["elegir","elejir","elegír"],["proteger","protejer","protegér"],
  ["tragedia","trajedia","tragédia"],["exacto","esacto","exato"],["expresión","espresión","expreción"],["experiencia","esperiencia","experencia"],
  ["atención","atensión","atencion"],["comunicación","comunicasión","comunicazión"],["lección","leccion","lecsión"],["dirección","direción","dirrección"],
  ["origen","orijen","orígen"],["agencia","ajencia","agensia"],["biología","biolojía","biologia"],["religión","relijión","religion"],
  ["oxígeno","oxigeno","okígeno"],["gimnasio","jimnasio","gimnacio"],["exposición","exposicion","esposición"],["incendio","insendio","incéndio"],
  ["resbalar","resvalar","rresbalar"],["cerrojo","cerroxo","cerrogo"],["huérfano","uérfano","huerfano"],["ambulancia","anbulancia","ambulansia"],
  ["herramienta","erramienta","herramineta"],["química","quimica","kímica"],["búho","buho","buo"],["acción","acsión","ación"],
  ["exclamación","esclamación","exclamasión"],["exprimir","esprimir","exprimír"],["extender","estender","extendér"],["extranjero","estranjero","extrangero"],
  ["extraordinario","estraordinario","extraordinário"],["inventar","imbentar","inventár"],["trabajar","trabaxar","trabagar"],["gente","jente","gentte"],
  ["general","jeneral","generál"],["geografía","jeografía","geografia"],["energía","enerjía","energia"],["imagen","imájen","imagén"],
  ["magia","majia","magía"],["tejado","texado","tegado"],["ejercicio","ejersicio","egercicio"],["ejemplo","egemplo","ejenplo"],
  ["vegetal","vejetal","begetal"],["lógica","logica","lójica"],["pasajero","pasagero","pasaxero"],["tarjeta","targeta","tarxeta"],
  ["herencia","erencia","herensia"],["hélice","élice","helice"],["higiene","igiene","hijiene"],["hipopótamo","ipopótamo","hipopotamo"],
  ["horizonte","orizonte","horisonte"],["humano","umano","hummano"],["hazaña","azaña","hazana"],["ayuntamiento","hayuntamiento","ayuntamento"],
  ["llanto","yanto","llantto"],["bellota","beyota","belota"],["tobogán","tobogan","tovogán"],["devolver","debolver","devolvér"],
  ["servicio","cervicio","serbicio"],["voluntario","boluntario","voluntaro"],["cabello","cavello","cabeyo"],["calcetín","calcetin","calzetín"],
  ["cebolla","sebolla","cevolla"],["cereza","sereza","cerezza"],["delfín","delfin","delphín"],["gaviota","gabiota","gaviotta"],
  ["lavabo","lababo","labavo"],["rebaño","rebanio","revaño"],["abrigo","avrigo","abrigó"],["bandera","vandera","banndera"],
  ["biberón","viberón","biberon"],["camión","camion","kamión"],["cuidado","cuydado","cuidao"]
 ]},
 dificil:{ label:"Difícil", stars:"★★★", desc:"¡Solo para expertos!", words:[
  ["murciélago","murcielago","murciégalo"],["pingüino","pinguino","pingüíno"],["cigüeña","ciguena","cigueña"],["vergüenza","verguenza","berguenza"],
  ["antigüedad","antiguedad","antigüedat"],["ambigüedad","ambiguedad","ambigüedat"],["lingüística","linguística","lingüistica"],["bilingüe","bilingue","vilingüe"],
  ["desagüe","desague","desagúe"],["exuberante","exuverante","esuberante"],["exhausto","exausto","esausto"],["exhibir","exibir","esibir"],
  ["exhaustivo","exaustivo","exhaustibo"],["hipótesis","hipotesis","ipótesis"],["bóveda","bobeda","bóbeda"],["obvio","ovvio","obio"],
  ["subvención","subbención","suvención"],["abreviatura","abrebiatura","avreviatura"],["vaivén","vaiven","baibén"],["inmediato","immediato","inmediáto"],
  ["innecesario","inecesario","innesesario"],["ilegal","illegal","ilegál"],["irrompible","irompible","inrompible"],["adolescente","adolecente","adolesente"],
  ["aterrizaje","aterrisaje","aterrizage"],["subrayar","subrallar","suvrayar"],["reivindicar","reinvindicar","reibindicar"],["desahogo","desaogo","desahoo"],
  ["deshacer","desacer","dehacer"],["rehén","reén","rehen"],["prohibir","proibir","prohivir"],["alcohol","alcol","alchol"],
  ["búsqueda","busqueda","búskeda"],["quizás","quizas","kizás"],["dieciséis","dieciseis","diezisséis"],["veintiséis","veintiseis","veinticéis"],
  ["cónyuge","cónyugue","cónyuje"],["ejército","ejercito","exército"],["acertijo","acertigo","azertijo"],["exhalar","exalar","esalar"],
  ["transeúnte","transeunte","transehúnte"],["ahínco","ainco","ahinco"],["bahía","bahia","baía"],["albahaca","albaca","albahaka"],
  ["vahído","vaído","vahido"],["zigzag","zizzag","sigzag"],["abstracto","abtracto","abstrato"],["adquirir","aquirir","adkirir"],
  ["atmósfera","atmosfera","atmófera"],["catástrofe","catastrofe","catástrofé"],["colmillo","colmiyo","comillo"],["crónica","cronica","crónika"],
  ["cumbre","cunbre","cúmbre"],["inmenso","immenso","inmenzo"],["perspectiva","perspetiva","persepctiva"],["tranvía","tranvia","tramvía"],
  ["huésped","huesped","uésped"],["cohibido","coibido","cohivido"],["exigir","exijir","esigir"],["jeroglífico","geroglífico","jeroglifico"],
  ["magnífico","magnifico","magníphico"],["extravagante","estravagante","extrabagante"],["escasez","escasés","escaséz"],["superficie","superfície","superfisie"],
  ["inconsciente","inconsiente","inconciente"]
 ]}
};
var LEVEL_KEYS=["facil","medio","dificil"];

/* =====================================================================
   UTILIDADES
   ===================================================================== */
function $(id){return document.getElementById(id);}
function shuffle(a){
  a=a.slice();
  for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}
  return a;
}
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function lsSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}

var screens=["screenStart","screenGame","screenEnd","screenRevEnd","screenFallos","screenRank"];
var lastScreen="screenStart";
function show(id){
  screens.forEach(function(s){$(s).hidden=(s!==id);});
  if(id!=="screenRank" && id!=="screenFallos") lastScreen=id;
  window.scrollTo(0,0);
}
function chip(text,cls){
  var s=document.createElement("span"); s.className="chip "+(cls||""); s.textContent=text; return s;
}
function levelChip(k){return chip(LEVELS[k].stars+" "+LEVELS[k].label,k);}

/* =====================================================================
   JUGADOR Y FALLOS (se guardan en este dispositivo, por nombre)
   ===================================================================== */
function playerName(){ return $("inPlayer").value.trim().replace(/\s+/g," "); }

var memFallos={};
var Fallos={
  key:function(){ return "ort6_fallos_"+(playerName()||"invitado").toLowerCase(); },
  load:function(){
    var k=this.key(), raw=lsGet(k);
    if(raw===null) return (memFallos[k]||[]).slice();
    try{var a=JSON.parse(raw); return Array.isArray(a)?a:[];}catch(e){return [];}
  },
  save:function(a){
    var k=this.key(); memFallos[k]=a.slice(); lsSet(k,JSON.stringify(a));
  },
  count:function(){return this.load().length;},
  find:function(a,c){for(var i=0;i<a.length;i++){if(a[i].w[0]===c) return i;} return -1;},
  add:function(w,level){
    var a=this.load(), i=this.find(a,w[0]);
    if(i>=0){a[i].box=0;a[i].t=Date.now();}
    else a.push({w:w,l:level,box:0,t:Date.now()});
    this.save(a);
  },
  wrong:function(c){
    var a=this.load(), i=this.find(a,c);
    if(i>=0){a[i].box=0;a[i].t=Date.now();this.save(a);}
  },
  /* acierto en repaso: devuelve true si la palabra queda dominada (2 aciertos seguidos) */
  right:function(c){
    var a=this.load(), i=this.find(a,c);
    if(i<0) return false;
    a[i].box=(a[i].box||0)+1;
    var done=a[i].box>=2;
    if(done) a.splice(i,1);
    this.save(a);
    return done;
  }
};
function refreshFallosCount(){
  var n=Fallos.count(), c=$("fallosCount");
  c.textContent=String(n); c.hidden=n===0;
}

/* =====================================================================
   RANKING (uno por nivel; compartido si es posible, si no, en este dispositivo)
   ===================================================================== */
var Ranking={
  mode:"local", db:null, writeFailed:false,
  lists:{facil:[],medio:[],dificil:[]},
  localLists:{facil:[],medio:[],dificil:[]},
  onChange:function(){},
  sortTrim:function(arr){
    arr.sort(function(a,b){return (b.score-a.score)||((a.date||0)-(b.date||0));});
    return arr.slice(0,10);
  },
  readLocal:function(k){
    try{var a=JSON.parse(lsGet("ort6_records_"+k)||"[]"); return Array.isArray(a)?a:[];}catch(e){return [];}
  },
  qualifies:function(level,score){
    var l=this.lists[level];
    if(score<=0) return false;
    return l.length<10 || score>l[l.length-1].score;
  },
  add:function(level,entry){
    var self=this;
    function local(){
      var l=self.localLists[level]; l.push(entry);
      self.localLists[level]=self.sortTrim(l);
      lsSet("ort6_records_"+level,JSON.stringify(self.localLists[level]));
      self.lists[level]=self.localLists[level].slice();
      self.onChange();
    }
    if(self.mode==="shared" && self.db && !self.writeFailed){
      return self.db.collection("scores_"+level).add(entry).catch(function(){
        // Sin permiso para escribir en el ranking compartido: se guarda en este dispositivo
        self.writeFailed=true; self.mode="local";
        LEVEL_KEYS.forEach(function(k){self.lists[k]=self.localLists[k].slice();});
        local();
      });
    }
    local();
    return Promise.resolve();
  },
  init:function(){
    var self=this;
    LEVEL_KEYS.forEach(function(k){
      self.localLists[k]=self.sortTrim(self.readLocal(k));
      self.lists[k]=self.localLists[k].slice();
    });
    try{
      if(window.claude && typeof window.claude.use==="function"){
        window.claude.use("db").then(function(db){
          if(!db) return;
          self.db=db;
          LEVEL_KEYS.forEach(function(k){
            try{
              db.collection("scores_"+k).orderBy("score","desc").limit(10).onSnapshot(function(snap){
                if(self.writeFailed) return;
                var arr=[];
                snap.docs.forEach(function(d){
                  var v=typeof d.data==="function"?d.data():d.data;
                  if(v && typeof v.score==="number") arr.push(v);
                });
                self.mode="shared"; self.lists[k]=self.sortTrim(arr); self.onChange();
              },function(){ /* se mantiene el ranking local */ });
            }catch(e){}
          });
        }).catch(function(){});
      }
    }catch(e){}
  }
};

/* =====================================================================
   JUEGO
   ===================================================================== */
var G={mode:"game",level:"medio",pool:[],idx:0,score:0,locked:false,current:null,
       rev:{queue:[],total:0,done:0,mastered:0}};
var sessionBest={facil:0,medio:0,dificil:0};

function setHud(l1,v1,l2,v2){
  $("hudL1").textContent=l1; $("hudV1").textContent=String(v1);
  $("hudL2").textContent=l2; $("hudV2").textContent=String(v2);
}
function bestFor(level){
  var l=Ranking.lists[level];
  return Math.max(sessionBest[level], l.length?l[0].score:0);
}

function startGame(level){
  G.mode="game"; G.level=level; G.score=0; G.idx=0; G.locked=false;
  var pool=shuffle(LEVELS[level].words).map(function(w){return {w:w,review:false};});

  // Palabras de repaso: hasta 2 fallos pendientes se cuelan en las primeras preguntas
  var pend=shuffle(Fallos.load()).slice(0,2);
  pend.forEach(function(f){
    pool=pool.filter(function(p){return p.w[0]!==f.w[0];});
    var pos=Math.min(pool.length, 2+Math.floor(Math.random()*7));
    pool.splice(pos,0,{w:f.w,review:true});
  });
  G.pool=pool;
  setHud("Puntos",0,"Récord",bestFor(level));
  show("screenGame");
  nextQuestion();
}

function renderQuestion(item,isReview,showLevel){
  G.current=item; G.locked=false;
  $("feedback").textContent=""; $("feedback").className="feedback";
  var chips=$("chips"); chips.innerHTML="";
  if(showLevel) chips.appendChild(levelChip(G.level));
  if(isReview) chips.appendChild(chip("Palabra de repaso","rev"));
  var box=$("opts"); box.innerHTML="";
  shuffle(item.w).forEach(function(w){
    var b=document.createElement("button");
    b.type="button"; b.className="opt"; b.textContent=w;
    b.addEventListener("click",function(){answer(b,w);});
    box.appendChild(b);
  });
}

function nextQuestion(){
  if(G.idx>=G.pool.length){ endGame(null,true); return; }
  renderQuestion(G.pool[G.idx],G.pool[G.idx].review,true);
}

function lock(){
  Array.prototype.forEach.call($("opts").querySelectorAll(".opt"),function(b){b.disabled=true;});
}
function revealCorrect(correct){
  Array.prototype.forEach.call($("opts").querySelectorAll(".opt"),function(b){
    if(b.textContent===correct) b.classList.add("good");
  });
}

function answer(btn,w){
  if(G.locked) return;
  G.locked=true;
  var cur=G.current, correct=cur.w[0], ok=(w===correct);
  var fb=$("feedback");
  lock();
  if(ok) btn.classList.add("good","pop"); else { btn.classList.add("bad","shake"); revealCorrect(correct); }

  if(G.mode==="game"){
    if(ok){
      if(cur.review) Fallos.right(correct);
      G.score++; G.idx++;
      $("hudV1").textContent=String(G.score);
      fb.textContent="¡Muy bien! +1 punto"; fb.className="feedback ok";
      setTimeout(nextQuestion,900);
    }else{
      if(cur.review) Fallos.wrong(correct); else Fallos.add(cur.w,G.level);
      fb.textContent="¡Ups! Se acabó la partida"; fb.className="feedback ko";
      setTimeout(function(){endGame({wrong:w,right:correct},false);},1800);
    }
  }else{
    var r=G.rev; r.done++;
    if(ok){
      var m=Fallos.right(correct); if(m) r.mastered++;
      fb.textContent=m?"¡Dominada! Ya no te saldrá más":"¡Bien! Una más y la dominas"; fb.className="feedback ok";
    }else{
      Fallos.wrong(correct);
      if(!cur.retry){ r.queue.push({w:cur.w,retry:true}); r.total++; }
      fb.textContent="Fíjate bien: "+correct; fb.className="feedback ko";
    }
    setRevHud();
    setTimeout(nextReview,ok?1100:2000);
  }
}

/* ---------- Fin de partida ---------- */
function endGame(miss,completedAll){
  var lv=G.level, score=G.score;
  if(score>sessionBest[lv]) sessionBest[lv]=score;
  $("endChip").innerHTML=""; $("endChip").appendChild(levelChip(lv));
  $("endScore").textContent=String(score);
  $("endSub").textContent=score===1?"palabra bien escrita":"palabras bien escritas seguidas";
  $("endTitle").textContent=completedAll?"¡Increíble, las has acertado todas!":"¡Fin de la partida!";

  var rv=$("review");
  if(miss){
    rv.hidden=false; rv.innerHTML="";
    var t=document.createElement("div"); t.textContent="Para recordar:"; rv.appendChild(t);
    var s=document.createElement("s"); s.textContent=miss.wrong; rv.appendChild(s);
    rv.appendChild(document.createTextNode("  →  "));
    var b=document.createElement("b"); b.textContent=miss.right; rv.appendChild(b);
    var sm=document.createElement("small"); sm.textContent="Se ha guardado en «Mis fallos» para que la repases."; rv.appendChild(sm);
  }else{ rv.hidden=true; }

  var q=Ranking.qualifies(lv,score);
  $("nameForm").hidden=!q;
  $("noTop").hidden=q;
  $("formErr").textContent="";
  $("endBtns").hidden=q;
  $("btnEndRepaso").hidden=Fallos.count()===0;
  if(q){ $("inName").value=playerName(); }
  show("screenEnd");
  if(q) setTimeout(function(){$("inName").focus();},50);
}

$("nameForm").addEventListener("submit",function(e){
  e.preventDefault();
  var name=$("inName").value.trim().replace(/\s+/g," ");
  var cls=$("inClass").value.trim();
  if(name.length<2){ $("formErr").textContent="Escribe tu nombre para guardar la puntuación."; $("inName").focus(); return; }
  var entry={name:name, cls:cls, score:G.score, level:G.level, date:Date.now()};
  var btn=e.target.querySelector("button[type=submit]");
  btn.disabled=true;
  Ranking.add(G.level,entry).then(function(){
    btn.disabled=false;
    $("nameForm").hidden=true;
    $("endBtns").hidden=false;
    $("btnEndRepaso").hidden=Fallos.count()===0;
    highlight=entry;
    openRank(G.level);
  });
});

/* =====================================================================
   REPASO DE FALLOS
   ===================================================================== */
function setRevHud(){
  setHud("Repaso",Math.min(G.rev.done,G.rev.total)+"/"+G.rev.total,"Dominadas",G.rev.mastered);
}
function startReview(){
  var pend=Fallos.load();
  if(!pend.length){ openFallos(); return; }
  // Primero los que llevan más tiempo sin repasarse; máximo 10 por sesión
  pend.sort(function(a,b){return (a.t||0)-(b.t||0);});
  var pick=shuffle(pend.slice(0,10));
  G.mode="review";
  G.rev={queue:pick.map(function(f){return {w:f.w,retry:false};}),total:pick.length,done:0,mastered:0};
  setRevHud();
  show("screenGame");
  nextReview();
}
function nextReview(){
  if(!G.rev.queue.length){ endReview(); return; }
  renderQuestion(G.rev.queue.shift(),false,false);
  $("chips").appendChild(chip("Repaso","rev"));
}
function endReview(){
  var left=Fallos.count(), m=G.rev.mastered;
  $("revMastered").textContent=String(m);
  $("revLeft").textContent=String(left);
  var emoji="", title="¡Repaso terminado!", msg;
  if(left===0){ emoji=""; title="¡Lista de fallos vacía!"; msg="Has dominado todas tus palabras. ¡Enhorabuena!"; }
  else if(m>0){ msg="Las palabras que te quedan volverán a salir. Acierta cada una dos veces para dominarla."; }
  else { msg="Esas palabras son un poco traicioneras. ¡Repasa otra vez y verás cómo mejoras!"; }
  $("revTitle").textContent=title; $("revMsg").textContent=msg;
  $("btnRevAgain").hidden=left===0;
  show("screenRevEnd");
}

function openFallos(){
  var a=Fallos.load();
  a.sort(function(x,y){return (y.t||0)-(x.t||0);});
  var ul=$("flist"); ul.innerHTML="";
  a.forEach(function(f){
    var li=document.createElement("li");
    var w=document.createElement("span"); w.className="w"; w.textContent=f.w[0];
    var meta=document.createElement("span"); meta.className="meta";
    var lv=LEVELS[f.l]?LEVELS[f.l].stars:"";
    var dots=document.createElement("span"); dots.className="dots";
    dots.setAttribute("aria-label",(f.box||0)+" de 2 aciertos seguidos");
    dots.textContent=(f.box>=1?"●":"○")+(f.box>=2?"●":"○");
    meta.appendChild(document.createTextNode(lv+" ")); meta.appendChild(dots);
    li.appendChild(w); li.appendChild(meta); ul.appendChild(li);
  });
  var name=playerName();
  $("fallosIntro").textContent=a.length
    ? (name?name+", e":"E")+"stas son las palabras en las que te has equivocado. Acierta cada una 2 veces seguidas en el repaso y desaparecerá."
    : "";
  $("fallosEmpty").hidden=a.length>0;
  $("btnStartRepaso").hidden=a.length===0;
  show("screenFallos");
}

/* =====================================================================
   PANTALLA DE RANKING
   ===================================================================== */
var highlight=null, rankLevel="medio";
function renderRank(){
  Array.prototype.forEach.call($("tabs").querySelectorAll(".tab"),function(t){
    t.setAttribute("aria-pressed",t.getAttribute("data-level")===rankLevel?"true":"false");
  });
  var list=Ranking.lists[rankLevel], ol=$("rankList"); ol.innerHTML="";
  $("rankEmpty").hidden=list.length>0;
  list.forEach(function(r,i){
    var li=document.createElement("li");
    if(highlight && r.date===highlight.date && r.name===highlight.name && rankLevel===highlight.level) li.className="me";
    var pos=document.createElement("div"); pos.className="pos"; pos.textContent=String(i+1);
    var nm=document.createElement("div"); nm.className="rname"; nm.textContent=r.name+(r.cls?" ("+r.cls+")":"");
    var sc=document.createElement("div"); sc.className="rscore"; sc.textContent=String(r.score);
    li.appendChild(pos); li.appendChild(nm); li.appendChild(sc);
    ol.appendChild(li);
  });
  $("modeNote").textContent=Ranking.mode==="shared"
    ? "Ranking compartido entre todos los jugadores."
    : "Este ranking se guarda en este dispositivo.";
}
Ranking.onChange=function(){
  if(!$("screenRank").hidden) renderRank();
  if(!$("screenGame").hidden && G.mode==="game") $("hudV2").textContent=String(bestFor(G.level));
};
function openRank(level){
  rankLevel=level||G.level||"medio";
  renderRank(); show("screenRank");
}

/* =====================================================================
   INICIO Y EVENTOS
   ===================================================================== */
function buildLevels(){
  var box=$("levels");
  LEVEL_KEYS.forEach(function(k){
    var L=LEVELS[k];
    var b=document.createElement("button"); b.type="button"; b.className="lvl"; b.setAttribute("data-level",k);
    var left=document.createElement("span");
    left.appendChild(document.createTextNode(L.label));
    var sm=document.createElement("small"); sm.textContent=L.desc+" · "+L.words.length+" palabras"; left.appendChild(sm);
    var st=document.createElement("span"); st.className="st"; st.textContent=L.stars;
    b.appendChild(left); b.appendChild(st);
    b.addEventListener("click",function(){startGame(k);});
    box.appendChild(b);
  });
}
function goHome(){ refreshFallosCount(); show("screenStart"); }

$("logo").addEventListener("click",function(){
  if(!$("screenGame").hidden && !confirm("Si sales ahora, se pierde el progreso de esta partida. ¿Salir?")) return;
  goHome();
});
$("btnRankTop").addEventListener("click",function(){
  if(!$("screenGame").hidden && !confirm("Si sales ahora, se pierde el progreso de esta partida. ¿Salir?")) return;
  openRank(G.level);
});
$("btnRankStart").addEventListener("click",function(){openRank(G.level);});
$("btnEndRank").addEventListener("click",function(){openRank(G.level);});
$("btnAgain").addEventListener("click",function(){startGame(G.level);});
$("btnEndHome").addEventListener("click",goHome);
$("btnEndRepaso").addEventListener("click",startReview);
$("btnFallos").addEventListener("click",openFallos);
$("btnStartRepaso").addEventListener("click",startReview);
$("btnFallosBack").addEventListener("click",goHome);
$("btnRevAgain").addEventListener("click",startReview);
$("btnRevHome").addEventListener("click",goHome);
$("btnBack").addEventListener("click",function(){
  highlight=null;
  var t=lastScreen;
  if(t==="screenGame"||t==="screenRevEnd") t="screenStart";
  if(t==="screenStart") refreshFallosCount();
  show(t);
});
Array.prototype.forEach.call($("tabs").querySelectorAll(".tab"),function(t){
  t.addEventListener("click",function(){ rankLevel=t.getAttribute("data-level"); highlight=null; renderRank(); });
});
$("inPlayer").addEventListener("input",function(){
  lsSet("ort6_player",$("inPlayer").value);
  refreshFallosCount();
});

/* Teclado (ordenador): 1, 2, 3 eligen la opción */
document.addEventListener("keydown",function(e){
  if(e.ctrlKey||e.metaKey||e.altKey) return;
  if($("screenGame").hidden||G.locked) return;
  var n=parseInt(e.key,10);
  if(n>=1&&n<=3){
    var b=$("opts").querySelectorAll(".opt")[n-1];
    if(b&&!b.disabled){e.preventDefault();b.click();}
  }
});

/* Arranque */
buildLevels();
$("inPlayer").value=lsGet("ort6_player")||"";
refreshFallosCount();
Ranking.init();
})();