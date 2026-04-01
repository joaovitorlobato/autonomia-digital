
/* ============================================================
   DATA
   ============================================================ */
const THEMES = [
  {
    id:1, title:"Como Criar sua Conta", sub:"Aprenda a se cadastrar no aplicativo",
    icon:"", color:"#1976D2", alwaysUnlocked:true, steps:5,
    content:[
      { emoji:"", title:"Bem-vindo ao Autonomia Digital!", text:"Este aplicativo foi criado para você aprender tecnologia de forma simples, no seu próprio ritmo, sem pressa. Vamos começar criando a sua conta!" },
      { emoji:"", title:"Onde fica o botão de cadastro?", text:'Na tela inicial você encontrará um botão grande escrito "Criar Conta". Toque nele para começar o seu cadastro.' },
      { emoji:"", title:"Preencha seu nome completo", text:"Digite o seu nome e sobrenome no campo indicado. Use letras maiúsculas e minúsculas normalmente, como você escreve no papel." },
      { emoji:"", title:"Digite seu e-mail", text:"O e-mail é como um endereço na internet. Exemplo: maria@gmail.com. Você usará ele para entrar no aplicativo toda vez que quiser aprender." },
      { emoji:"", title:"Crie uma senha segura", text:"A senha protege a sua conta. Use pelo menos 6 caracteres misturando letras e números. Exemplo: Maria123. Nunca compartilhe sua senha com ninguém!" }
    ],
    quiz:[
      { q:"O que você precisa para criar uma conta?", opts:["E-mail e senha","Cartão de crédito","Número de CPF","Só o nome"], ans:0, exp:"Para criar uma conta, você precisa apenas de um e-mail e uma senha. Simples!" },
      { q:"Uma boa senha deve ter:", opts:["Só números (ex: 123456)","Letras e números misturados","Só o seu nome","Menos de 4 caracteres"], ans:1, exp:"Uma senha com letras e números juntos é muito mais segura. Exemplo: Maria123." },
      { q:"Após criar sua conta, você pode:", opts:["Acessar todos os temas de aprendizado","Só fazer ligações","Pagar contas de outras pessoas","Nada muda"], ans:0, exp:"Com sua conta criada, você tem acesso a todos os temas educativos do aplicativo!" }
    ]
  },
  {
    id:2, title:"WhatsApp para Iniciantes", sub:"Troque mensagens com quem você ama",
    icon:"", color:"#25D366", alwaysUnlocked:false, steps:5,
    content:[
      { emoji:"", title:"O que é o WhatsApp?", text:"WhatsApp é um aplicativo gratuito para trocar mensagens de texto, fotos, áudios e fazer videochamadas. É o mais usado no Brasil!" },
      { emoji:"", title:"Como abrir o WhatsApp", text:"Procure o ícone verde com um telefone branco na tela do seu celular. Toque nele para abrir. Se não encontrar, verifique na Play Store." },
      { emoji:"", title:"Enviando uma mensagem de texto", text:"Toque no nome do contato que você quer falar. Depois, toque na caixa de texto na parte de baixo, escreva sua mensagem e toque na seta verde para enviar." },
      { emoji:"", title:"Enviando um áudio (sua voz)", text:"Em vez de digitar, você pode gravar sua voz! Toque e segure o ícone do microfone . Fale sua mensagem e solte o dedo para enviar." },
      { emoji:"", title:"Cuidado com golpes no WhatsApp!", text:"Nunca clique em links desconhecidos recebidos pelo WhatsApp. Se alguém pedir dinheiro urgente, ligue para confirmar com a própria pessoa antes de qualquer ação." }
    ],
    quiz:[
      { q:"Como você envia uma mensagem de voz no WhatsApp?", opts:["Tocando e segurando o microfone","Ligando para o contato","Enviando um e-mail","Tocando na seta verde"], ans:0, exp:"Para enviar áudio: toque e segure o ícone do microfone, fale e solte!" },
      { q:"Se um contato pedir dinheiro urgente no WhatsApp, o que você deve fazer?", opts:["Mandar imediatamente","Confirmar ligando para a pessoa","Ignorar para sempre","Compartilhar com amigos"], ans:1, exp:"Sempre confirme por telefone antes de enviar dinheiro. Golpistas imitam contatos conhecidos!" },
      { q:"O WhatsApp é:", opts:["Pago e complicado","Gratuito e muito popular no Brasil","Só para jovens","Só para computadores"], ans:1, exp:"O WhatsApp é gratuito e é o aplicativo de mensagens mais usado no Brasil!" }
    ]
  },
  {
    id:3, title:"Como Baixar Aplicativos", sub:"Instale apps seguros no seu celular",
    icon:"", color:"#FF6F00", alwaysUnlocked:false, steps:4,
    content:[
      { emoji:"", title:"O que é a Play Store?", text:"A Play Store é a loja oficial de aplicativos do Android. É segura, gratuita e tem milhares de apps para você baixar no celular." },
      { emoji:"", title:"Como encontrar a Play Store", text:'Procure o ícone colorido com um triângulo (▶) na tela do seu celular com as cores azul, verde, amarelo e vermelho. Toque nele para abrir.' },
      { emoji:"", title:"Buscando um aplicativo", text:'Na parte de cima da Play Store tem uma barra de busca. Toque nela, escreva o nome do aplicativo que você quer (exemplo: "WhatsApp") e toque na lupa.' },
      { emoji:"⬇", title:"Instalando o aplicativo", text:'Após encontrar o app desejado, toque no botão verde "Instalar". Aguarde o download terminar. O ícone do app aparecerá automaticamente na tela do celular!' }
    ],
    quiz:[
      { q:"Onde você encontra aplicativos seguros para baixar?", opts:["Em qualquer site da internet","Na Play Store","Por e-mail","Em mensagens do WhatsApp"], ans:1, exp:"A Play Store é a loja oficial e segura para baixar aplicativos no Android." },
      { q:"O que você toca para instalar um app na Play Store?", opts:["No nome do app","No botão 'Instalar'","Na imagem do app","No preço"], ans:1, exp:"O botão 'Instalar' (verde) é o que você toca para baixar e instalar!" },
      { q:"A Play Store é:", opts:["Paga e perigosa","Gratuita e segura","Só para músicas","Só para computadores"], ans:1, exp:"A Play Store é gratuita e segura — é a loja oficial do Android." }
    ]
  },
  {
    id:4, title:"Usar o Pix", sub:"Transfira dinheiro de forma rápida e segura",
    icon:"", color:"#00897B", alwaysUnlocked:false, steps:5,
    content:[
      { emoji:"", title:"O que é o Pix?", text:"Pix é uma forma de transferir dinheiro instantaneamente pelo celular, criado pelo Banco Central do Brasil. Funciona 24 horas por dia, todos os dias!" },
      { emoji:"", title:"Como acessar o Pix", text:"Abra o aplicativo do seu banco no celular. Procure o menu 'Pix' ou 'Transferir'. Cada banco tem visual diferente, mas o Pix está disponível em todos." },
      { emoji:"", title:"O que é uma chave Pix?", text:"A chave Pix é como o seu 'endereço' para receber dinheiro. Pode ser seu CPF, número de telefone ou e-mail. Você cadastra uma chave nas configurações do seu banco." },
      { emoji:"", title:"Fazendo uma transferência", text:"Toque em 'Pix > Transferir'. Digite a chave de quem vai receber. Confirme o nome completo da pessoa e o valor. Autentique com sua senha ou digital." },
      { emoji:"", title:"Atenção: golpes do Pix!", text:"NUNCA faça Pix para desconhecidos. Desconfie de promoções milagrosas. Antes de confirmar, verifique sempre o nome completo do destinatário na tela." }
    ],
    quiz:[
      { q:"O Pix funciona:", opts:["Só em dias úteis","24 horas por dia, todos os dias","Só pela manhã","Só em bancos grandes"], ans:1, exp:"O Pix funciona 24h por dia, 7 dias por semana, inclusive nos feriados!" },
      { q:"O que é uma chave Pix?", opts:["Uma senha especial do banco","Seu endereço para receber dinheiro","Um cartão físico","O nome do seu banco"], ans:1, exp:"A chave Pix é seu identificador para receber transferências (CPF, telefone ou e-mail)." },
      { q:"Antes de confirmar um Pix, você deve:", opts:["Fazer rápido sem verificar","Confirmar o nome completo do destinatário","Pedir ajuda a estranhos","Usar Wi-Fi público"], ans:1, exp:"Sempre confirme o nome completo antes de concluir o Pix!" }
    ]
  },
  {
    id:5, title:"Wi-Fi e Internet", sub:"Entenda e use a internet com segurança",
    icon:"", color:"#283593", alwaysUnlocked:false, steps:4,
    content:[
      { emoji:"", title:"O que é o Wi-Fi?", text:"Wi-Fi é uma conexão de internet sem fio. Quando você está em casa conectado ao Wi-Fi, não gasta os dados do seu celular. É mais rápido e mais barato!" },
      { emoji:"🔌", title:"Como conectar ao Wi-Fi em casa", text:'Abra as "Configurações" do celular (ícone de engrenagem ⚙️). Toque em "Wi-Fi". Encontre o nome da sua rede, toque nela e digite a senha da internet.' },
      { emoji:"", title:"Wi-Fi público: atenção!", text:"Wi-Fi gratuito em shoppings e restaurantes pode ser perigoso. Nunca acesse seu banco nem faça pagamentos em redes Wi-Fi públicas desconhecidas." },
      { emoji:"", title:"Usando os dados móveis", text:"Quando não há Wi-Fi disponível, seu celular usa a internet da operadora (dados móveis). Fique de olho no consumo para não ultrapassar seu plano." }
    ],
    quiz:[
      { q:"Qual a principal vantagem do Wi-Fi em casa?", opts:["É mais devagar","Não gasta os dados do celular","Funciona em qualquer lugar","Precisa de um cabo"], ans:1, exp:"Usando o Wi-Fi de casa, você não consome os dados do seu plano!" },
      { q:"O que você deve EVITAR no Wi-Fi público?", opts:["Ver fotos de família","Acessar o aplicativo do banco","Ouvir músicas","Ler notícias"], ans:1, exp:"Wi-Fi público pode ser perigoso para dados bancários. Use sua rede de casa ou dados móveis." },
      { q:"Como conectar ao Wi-Fi?", opts:["Reiniciando o celular","Configurações > Wi-Fi > escolher a rede","Ligando para a operadora","Não é possível"], ans:1, exp:"Em Configurações > Wi-Fi, você encontra as redes disponíveis e pode se conectar!" }
    ]
  },
  {
    id:6, title:"Segurança Digital", sub:"Proteja-se de golpes e fraudes",
    icon:"", color:"#6A1B9A", alwaysUnlocked:false, steps:5,
    content:[
      { emoji:"", title:"Por que a segurança digital importa?", text:"Existem pessoas mal-intencionadas na internet que tentam roubar dinheiro ou informações. Com conhecimento, você pode se proteger muito bem!" },
      { emoji:"", title:"O golpe da mensagem falsa", text:'Mensagens como "Você ganhou um prêmio! Clique aqui" são quase sempre golpes. Nunca clique em links suspeitos, mesmo que pareçam ser de empresas conhecidas.' },
      { emoji:"", title:"Protegendo suas senhas", text:"Nunca anote suas senhas em papel perto do celular. Não use datas de nascimento como senha. Não compartilhe suas senhas com ninguém, nem com familiares." },
      { emoji:"", title:"Cuidado com ligações falsas", text:'Bancos e operadoras NUNCA pedem sua senha por telefone. Se alguém ligar dizendo ser do banco e pedir sua senha, desligue imediatamente e ligue para o número oficial.' },
      { emoji:"", title:"O que fazer se cair em um golpe", text:"Não se envergonhe — pode acontecer com qualquer pessoa! Ligue imediatamente para o seu banco, registre um boletim de ocorrência e avise familiares de confiança." }
    ],
    quiz:[
      { q:'Você recebeu: "Parabéns! Você ganhou R$1.000! Clique aqui". O que você faz?', opts:["Clico imediatamente para receber","Ignoro e não clico no link","Compartilho com todos os amigos","Pago uma taxa para receber"], ans:1, exp:"Mensagens de prêmios não solicitados são quase sempre golpes. Nunca clique!" },
      { q:"Um banco pode pedir sua senha por telefone?", opts:["Sim, quando é urgente","Não! Bancos jamais pedem senha por telefone","Sim, se for funcionário","Às vezes sim"], ans:1, exp:"NUNCA! Bancos jamais pedem senha por telefone. Se pedirem, é golpe!" },
      { q:"Como criar uma senha segura?", opts:["Usar data de nascimento","Usar só números (123456)","Misturar letras e números sem dados pessoais","Usar o nome do banco"], ans:2, exp:"Senhas seguras misturam letras e números e não incluem dados pessoais óbvios." },
      { q:"Se você cair em um golpe, deve:", opts:["Não contar para ninguém","Ligar para o banco imediatamente","Esperar e ver o que acontece","Tentar resolver sozinho"], ans:1, exp:"Ligue imediatamente para o banco! Quanto mais rápido, maiores as chances de resolver." }
    ]
  }
];

/* ============================================================
   STATE
   ============================================================ */
let S = {
  screen: 'splash',
  user: null,          // null = guest
  tab: 0,              // 0=disponíveis 1=iniciados 2=concluídos
  navTab: 0,           // bottom nav: 0=home 1=perfil 2=config
  theme: null,         // current theme id (1-based)
  step: 0,             // current step index
  quizIdx: 0,          // current quiz question
  quizAnswers: [],     // array of true/false per question
  answered: false,     // did user answer current question
  audioPlaying: false,
  obSlide: 0,          // onboarding slide index
  settings: { fontSize: 'normal', contrast: false, audioOn: true, audioSpeed: '1x' },
  firstTime: true,
};

/* ============================================================
   STORAGE
   ============================================================ */
const STORAGE_KEY = 'autonomia_v2';
function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: S.user, settings: S.settings, firstTime: S.firstTime })); } catch(e){}
}
function load() {
  try {
    const d = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (d.user)     S.user     = d.user;
    if (d.settings) S.settings = { ...S.settings, ...d.settings };
    if (d.firstTime !== undefined) S.firstTime = d.firstTime;
  } catch(e){}
}
function getProgress() {
  if (!S.user) return {};
  try { return JSON.parse(localStorage.getItem('prog_' + S.user.email) || '{}'); } catch(e){ return {}; }
}
function saveProgress(prog) {
  if (!S.user) return;
  try { localStorage.setItem('prog_' + S.user.email, JSON.stringify(prog)); } catch(e){}
}
function markStep(themeId, stepIdx) {
  const p = getProgress();
  if (!p[themeId]) p[themeId] = { started: true, step: stepIdx, done: false, score: null, date: null };
  if (stepIdx > (p[themeId].step || 0)) p[themeId].step = stepIdx;
  saveProgress(p);
}
function markDone(themeId, score) {
  const p = getProgress();
  if (!p[themeId]) p[themeId] = {};
  p[themeId].done = true;
  p[themeId].score = score;
  p[themeId].date = new Date().toLocaleDateString('pt-BR');
  saveProgress(p);
}

/* ============================================================
   TEST USERS – pre-load if first visit
   ============================================================ */
function initTestUsers() {
  if (localStorage.getItem('test_users_init')) return;
  // Maria Silva: concluiu tema 1, está no tema 2 etapa 3, concluiu tema 3
  const mariaEmail = 'maria@teste.com';
  const mariaUsers = { email: mariaEmail, name: 'Maria Silva', pw: '123456' };
  const mariaProg = {
    1: { started:true, step:4, done:true, score:3, date:'01/03/2026' },
    2: { started:true, step:2, done:false, score:null, date:null },
    3: { started:true, step:3, done:true, score:3, date:'10/03/2026' }
  };
  localStorage.setItem('user_' + mariaEmail, JSON.stringify(mariaUsers));
  localStorage.setItem('prog_' + mariaEmail, JSON.stringify(mariaProg));
  // João Santos: recém cadastrado, sem progresso
  const joaoEmail = 'joao@teste.com';
  localStorage.setItem('user_' + joaoEmail, JSON.stringify({ email: joaoEmail, name: 'João Santos', pw: '123456' }));
  localStorage.setItem('test_users_init', '1');
}

/* ============================================================
   HELPERS
   ============================================================ */
function $(id) { return document.getElementById(id); }
function isUnlocked(themeId) {
  if (themeId === 1) return true;
  if (!S.user) return false;
  const p = getProgress();
  return !!p[1]?.done; // all unlock after theme 1 done
}
function themeStatus(themeId) {
  if (!S.user) return themeId === 1 ? 'available' : 'locked';
  const p = getProgress();
  const t = p[themeId];
  if (!isUnlocked(themeId)) return 'locked';
  if (t?.done) return 'done';
  if (t?.started) return 'started';
  return 'available';
}
function themeProgress(themeId) {
  const p = getProgress();
  const t = p[themeId];
  if (!t) return 0;
  if (t.done) return 100;
  const theme = THEMES.find(x => x.id === themeId);
  return Math.round(((t.step || 0) / theme.steps) * 100);
}
function stars(score, total) {
  const pct = score / total;
  if (pct >= 0.9) return '⭐⭐⭐';
  if (pct >= 0.6) return '⭐⭐';
  return '⭐';
}
function applySettings() {
  const app = document.getElementById('app');
  app.className = '';
  if (S.settings.fontSize === 'grande') app.classList.add('fs-grande');
  if (S.settings.fontSize === 'enorme') app.classList.add('fs-enorme');
  if (S.settings.contrast) app.classList.add('hc');
}
function navigate(screen, opts = {}) {
  Object.assign(S, opts);
  S.screen = screen;
  render();
}
function showModal(icon, title, text, btns) {
  const existing = document.querySelector('.modal-overlay');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'modal-overlay';
  el.innerHTML = `
    <div class="modal-box">
      <div class="mb-icon">${icon}</div>
      <div class="mb-title">${title}</div>
      <div class="mb-text">${text}</div>
      ${btns.map(b => `<button class="btn ${b.cls}" onclick="${b.fn}">${b.label}</button>`).join('')}
    </div>`;
  document.getElementById('app').appendChild(el);
}
function closeModal() { const m = document.querySelector('.modal-overlay'); if(m) m.remove(); }
function fmtDate() {
  return new Date().toLocaleDateString('pt-BR', { day:'2-digit', month:'long', year:'numeric' });
}

/* ============================================================
   RENDER
   ============================================================ */
function render() {
  applySettings();
  const app = $('app');
  const existing = app.querySelector('.screen');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'screen';
  el.innerHTML = screens[S.screen]();
  app.insertBefore(el, app.firstChild);
  afterRender();
}

/* ============================================================
   SCREENS
   ============================================================ */
const screens = {

  /* ---------- SPLASH ---------- */
  splash: () => `
    <div class="splash screen">
      <div class="splash-logo"></div>
      <div class="splash-app">Autonomia Digital</div>
      <div class="splash-tag">Aprenda Tecnologia!</div>
      <div class="splash-loader"></div>
    </div>`,

  /* ---------- ONBOARDING ---------- */
  onboarding: () => {
    const slides = [
      { emoji:'', title:'Bem-vindo!', text:'Este aplicativo foi criado especialmente para você aprender a usar a tecnologia com tranquilidade e segurança.' },
      { emoji:'', title:'Aprenda no seu ritmo', text:'Cada tema tem etapas simples, com textos curtos e áudio explicativo. Você pode avançar, voltar e repetir quantas vezes quiser.' },
      { emoji:'', title:'Conquiste certificados!', text:'Ao completar cada tema e passar no quiz, você ganha um certificado digital. Vamos começar?' }
    ];
    const s = slides[S.obSlide];
    const isLast = S.obSlide === slides.length - 1;
    return `
      <div class="onboarding screen">
        <div class="ob-slide">
          <div class="ob-emoji">${s.emoji}</div>
          <div class="ob-title">${s.title}</div>
          <div class="ob-text">${s.text}</div>
        </div>
        <div class="ob-dots">${slides.map((_,i)=>`<div class="dot${i===S.obSlide?' on':''}"></div>`).join('')}</div>
        <div class="ob-nav">
          <button class="btn-skip" onclick="navigate('welcome')">Pular</button>
          <button class="btn btn-green" style="width:auto;padding:14px 28px" onclick="nextObSlide(${isLast})">
            ${isLast ? 'Começar →' : 'Próximo →'}
          </button>
        </div>
      </div>`;
  },

  /* ---------- WELCOME ---------- */
  welcome: () => `
    <div class="welcome screen">
      <div class="welcome-logo"></div>
      <div class="welcome-title">Autonomia Digital</div>
      <div class="welcome-sub">Aprenda tecnologia no seu ritmo</div>
      <div class="welcome-btns">
        <button class="btn btn-white btn-lg" onclick="navigate('register')">✨ Criar Conta Grátis</button>
        <div class="welcome-sep">— já tenho conta —</div>
        <button class="btn btn-outline" onclick="navigate('login')">🔑 Entrar</button>
        <div class="welcome-sep">— ou —</div>
        <button class="btn btn-outline" style="opacity:.8" onclick="enterGuest()"> Entrar como Visitante</button>
      </div>
      <div style="color:rgba(255,255,255,.6);font-size:var(--fz-xs);margin-top:8px;text-align:center">
        Contas de teste: maria@teste.com / joao@teste.com (senha: 123456)
      </div>
    </div>`,

  /* ---------- LOGIN ---------- */
  login: () => `
    <div class="screen">
      <div class="hdr">
        <button class="hdr-back" onclick="navigate('welcome')">←</button>
        <div class="hdr-title">Entrar</div>
      </div>
      <div class="form-body">
        <div class="form-title">Olá! </div>
        <div class="form-sub">Digite seu e-mail e senha para continuar aprendendo.</div>
        <div id="login-err"></div>
        <div class="field">
          <label for="lemail">Seu e-mail</label>
          <input id="lemail" type="email" placeholder="exemplo@gmail.com" autocomplete="email">
        </div>
        <div class="field">
          <label for="lpw">Sua senha</label>
          <input id="lpw" type="password" placeholder="••••••">
        </div>
        <button class="btn-full-green" onclick="doLogin()">Entrar →</button>
        <div class="link-row"><a onclick="navigate('forgot')">Esqueci minha senha</a></div>
        <div class="link-row">Não tem conta? <a onclick="navigate('register')">Criar agora</a></div>
        <div class="hint-box">💡 Contas de teste:<br>maria@teste.com — senha: 123456<br>joao@teste.com — senha: 123456</div>
      </div>
    </div>`,

  /* ---------- REGISTER ---------- */
  register: () => `
    <div class="screen">
      <div class="hdr">
        <button class="hdr-back" onclick="navigate('welcome')">←</button>
        <div class="hdr-title">Criar Conta</div>
      </div>
      <div class="form-body">
        <div class="form-title">Vamos começar! </div>
        <div class="form-sub">Preencha seus dados para criar sua conta gratuita.</div>
        <div id="reg-err"></div>
        <div class="field">
          <label for="rname">Nome completo</label>
          <input id="rname" type="text" placeholder="Seu nome e sobrenome">
        </div>
        <div class="field">
          <label for="remail">E-mail</label>
          <input id="remail" type="email" placeholder="exemplo@gmail.com">
        </div>
        <div class="field">
          <label for="rpw">Senha (mínimo 6 caracteres)</label>
          <input id="rpw" type="password" placeholder="Crie uma senha segura">
        </div>
        <div class="field">
          <label for="rpw2">Confirmar senha</label>
          <input id="rpw2" type="password" placeholder="Repita a senha">
        </div>
        <button class="btn-full-green" onclick="doRegister()">Criar minha conta →</button>
        <div class="link-row">Já tem conta? <a onclick="navigate('login')">Entrar</a></div>
      </div>
    </div>`,

  /* ---------- FORGOT ---------- */
  forgot: () => `
    <div class="screen">
      <div class="hdr">
        <button class="hdr-back" onclick="navigate('login')">←</button>
        <div class="hdr-title">Recuperar Senha</div>
      </div>
      <div class="form-body">
        <div class="form-title">Sem problema! </div>
        <div class="form-sub">Digite seu e-mail e enviaremos instruções para redefinir sua senha.</div>
        <div id="forgot-msg"></div>
        <div class="field">
          <label for="femail">Seu e-mail cadastrado</label>
          <input id="femail" type="email" placeholder="exemplo@gmail.com">
        </div>
        <button class="btn-full-green" onclick="doForgot()">Enviar instruções →</button>
      </div>
    </div>`,

  /* ---------- HOME ---------- */
  home: () => {
    const user = S.user;
    const name = user ? user.name.split(' ')[0] : 'Visitante';
    const tabLabels = [' Disponíveis', ' Iniciados', ' Concluídos'];
    const themesByTab = getThemesByTab();
    return `
      <div class="screen" style="background:var(--gray-100)">
        <div class="home-hdr">
          <div class="home-top">
            <div>
              <div class="home-greeting">Olá, bem-vindo(a)!</div>
              <div class="home-name">${name} </div>
            </div>
            <div class="home-avatar" onclick="navigate('profile')" title="Perfil">
              ${user ? '' : ''}
            </div>
          </div>
          <div class="tabs">
            ${tabLabels.map((l,i)=>`<button class="tab${S.tab===i?' on':''}" onclick="setTab(${i})">${l}</button>`).join('')}
          </div>
        </div>
        <div class="themes-list">
          ${themesByTab.length === 0 ? emptyStateHTML() : themesByTab.map(t => themeCardHTML(t)).join('')}
        </div>
        ${bottomNavHTML()}
      </div>`;
  },

  /* ---------- THEME DETAIL ---------- */
  themeDetail: () => {
    const t = THEMES.find(x => x.id === S.theme);
    const status = themeStatus(t.id);
    const prog = getProgress()[t.id];
    let btnLabel = '▶ Iniciar Tema';
    let btnFn = `startTheme(${t.id})`;
    if (status === 'started') { btnLabel = '▶ Continuar'; }
    if (status === 'done')    { btnLabel = ' Rever Tema'; }
    return `
      <div class="screen">
        <div class="hdr" style="background:${t.color}">
          <button class="hdr-back" onclick="navigate('home')">←</button>
          <div class="hdr-title">${t.title}</div>
        </div>
        <div class="theme-hero" style="background:${t.color}">
          <div class="th-icon">${t.icon}</div>
          <div class="th-title">${t.title}</div>
          <div class="th-sub">${t.sub}</div>
        </div>
        <div class="theme-info">
          <div class="ti-row"><span class="ti-icon"></span> ${t.steps} etapas de conteúdo</div>
          <div class="ti-row"><span class="ti-icon"></span> ${t.quiz.length} perguntas no quiz</div>
          <div class="ti-row"><span class="ti-icon">⏱</span> Aprox. ${t.steps * 2}–${t.steps * 3} minutos</div>
          ${status === 'done' ? `<div class="ti-row"><span class="ti-icon">🏆</span> Concluído em ${prog?.date || '–'} · Acertos: ${prog?.score}/${t.quiz.length}</div>` : ''}
          ${status === 'started' ? `<div class="ti-row"><span class="ti-icon"></span> Progresso: ${themeProgress(t.id)}%</div>` : ''}
        </div>
        <div style="padding:0 18px 28px;display:flex;flex-direction:column;gap:10px">
          <button class="btn-full-green" onclick="${btnFn}">${btnLabel}</button>
          ${status === 'done' ? `<button class="btn btn-ghost" onclick="startQuiz(${t.id})"> Refazer Quiz</button>` : ''}
        </div>
      </div>`;
  },

  /* ---------- STEP ---------- */
  step: () => {
    const t = THEMES.find(x => x.id === S.theme);
    const s = t.content[S.step];
    const isLast = S.step === t.content.length - 1;
    const pct = Math.round(((S.step + 1) / t.content.length) * 100);
    return `
      <div class="screen">
        <div class="hdr" style="background:${t.color}">
          <button class="hdr-back" onclick="confirmLeave()">←</button>
          <div class="hdr-title">${t.title}</div>
        </div>
        <div class="step-body">
          <div class="step-prog-wrap">
            <div class="step-prog-bar"><div class="step-prog-fill" style="width:${pct}%"></div></div>
            <div class="step-count">${S.step + 1}/${t.content.length}</div>
          </div>
          <div class="step-card">
            <div class="step-emoji-box">${s.emoji}</div>
            <div class="step-card-body">
              <div class="step-title">${s.title}</div>
              <div class="step-text">${s.text}</div>
            </div>
          </div>
          <button class="audio-btn${S.audioPlaying?' playing':''}" id="audiobtn" onclick="toggleAudio()">
            ${S.audioPlaying ? '⏸ Pausar Áudio' : ' Ouvir Áudio'}
          </button>
        </div>
        <div class="step-nav">
          ${S.step > 0 ? `<button class="btn btn-gray" onclick="prevStep()">← Voltar</button>` : '<div></div>'}
          <button class="btn btn-green" onclick="nextStep()">
            ${isLast ? 'Fazer Quiz →' : 'Próximo →'}
          </button>
        </div>
      </div>`;
  },

  /* ---------- QUIZ INTRO ---------- */
  quizIntro: () => {
    const t = THEMES.find(x => x.id === S.theme);
    return `
      <div class="quiz-intro screen">
        <div class="qi-icon"></div>
        <div class="qi-title">Hora do Quiz!</div>
        <div class="qi-text">Vamos ver o que você aprendeu sobre "${t.title}". Responda ${t.quiz.length} perguntas com calma. Você consegue!</div>
        <button class="btn btn-white btn-lg" onclick="startQuiz(${t.id})">Começar o Quiz →</button>
        <button class="btn btn-outline" onclick="navigate('themeDetail',{theme:${t.id}})">Revisar Conteúdo</button>
      </div>`;
  },

  /* ---------- QUIZ QUESTION ---------- */
  quiz: () => {
    const t = THEMES.find(x => x.id === S.theme);
    const q = t.quiz[S.quizIdx];
    const letters = ['A','B','C','D'];
    const answered = S.answered;
    return `
      <div class="screen">
        <div class="hdr" style="background:${t.color}">
          <button class="hdr-back" onclick="navigate('themeDetail',{theme:${t.id}})">✕</button>
          <div class="hdr-title">Quiz</div>
          <div class="hdr-action">${S.quizIdx+1}/${t.quiz.length}</div>
        </div>
        <div class="quiz-body">
          <div class="quiz-counter">${S.quizIdx+1} de ${t.quiz.length} pergunta${t.quiz.length>1?'s':''}</div>
          <div class="quiz-q">${q.q}</div>
          <div class="quiz-opts">
            ${q.opts.map((o,i) => {
              let cls = '';
              if (answered) {
                if (i === q.ans) cls = 'correct';
                else if (i === S._selected && i !== q.ans) cls = 'wrong';
              }
              return `<button class="quiz-opt${cls?' '+cls:''} ${answered?'disabled':''}"
                onclick="${answered?'':  `answerQuiz(${i})`}">
                <div class="opt-letter">${letters[i]}</div>${o}
              </button>`;
            }).join('')}
          </div>
          ${answered ? `
            <div class="quiz-feedback ${S.quizAnswers[S.quizIdx]?'ok':'err'}">
              ${S.quizAnswers[S.quizIdx] ? ' Muito bem!' : '❌ Não foi dessa vez.'} ${q.exp}
            </div>
            <button class="btn btn-green" onclick="nextQuiz()">
              ${S.quizIdx < t.quiz.length-1 ? 'Próxima Pergunta →' : 'Ver Resultado →'}
            </button>` : ''}
        </div>
      </div>`;
  },

  /* ---------- QUIZ RESULT ---------- */
  result: () => {
    const t = THEMES.find(x => x.id === S.theme);
    const correct = S.quizAnswers.filter(Boolean).length;
    const total = t.quiz.length;
    const pct = Math.round((correct/total)*100);
    const passed = pct >= 67;
    const emoji = pct===100?'':pct>=67?'':'';
    const st = stars(correct, total);
    const msg = pct===100 ? 'Perfeito! Você acertou tudo!' :
                pct>=67   ? 'Parabéns! Você passou no quiz e desbloqueou o certificado!' :
                            'Não se preocupe! Reveja o conteúdo e tente novamente.';
    const prog = getProgress();
    const allUnlocked = prog[1]?.done;
    const justUnlocked = t.id === 1 && !allUnlocked && passed;
    if (passed) markDone(t.id, correct);
    return `
      <div class="screen">
        <div class="hdr" style="background:${t.color}">
          <div class="hdr-title" style="text-align:center">Resultado</div>
        </div>
        <div class="result-screen">
          <div class="rs-emoji">${emoji}</div>
          <div class="rs-stars">${st}</div>
          <div class="rs-title">${correct}/${total} acertos</div>
          <div class="rs-score">${pct}% de aproveitamento</div>
          <div class="rs-msg">${msg}</div>
          ${justUnlocked ? `<div class="unlock-banner"> Todos os temas foram desbloqueados!<br>Você já pode explorar todo o aplicativo!</div>` : ''}
          ${passed ? `<div class="cert-wrap" style="margin:0;width:100%">
            <div class="cert-card">
              <div class="cert-icon"></div>
              <div class="cert-badge">CERTIFICADO DIGITAL</div>
              <div class="cert-title">Certificado de Conclusão</div>
              <div class="cert-body">Certificamos que</div>
              <div class="cert-name">${S.user?.name || 'Participante'}</div>
              <div class="cert-theme">concluiu o tema: ${t.title}</div>
              <div class="cert-date">${fmtDate()}</div>
            </div>
          </div>` : ''}
          <div class="rs-btns">
            <button class="btn btn-green" onclick="navigate('home',{tab:0})"> Voltar ao Início</button>
            ${!passed ? `<button class="btn btn-ghost" onclick="startTheme(${t.id})"> Rever Conteúdo</button>` : ''}
          </div>
        </div>
      </div>`;
  },

  /* ---------- PROFILE ---------- */
  profile: () => {
    const prog = getProgress();
    const done = THEMES.filter(t => prog[t.id]?.done).length;
    const started = THEMES.filter(t => prog[t.id]?.started && !prog[t.id]?.done).length;
    const user = S.user || { name:'Visitante', email:'—' };
    const history = THEMES.filter(t => prog[t.id]?.done);
    return `
      <div class="screen">
        <div class="hdr">
          <button class="hdr-back" onclick="navigate('home')">←</button>
          <div class="hdr-title">Meu Perfil</div>
        </div>
        <div class="profile-hero">
          <div class="ph-avatar"></div>
          <div class="ph-name">${user.name}</div>
          <div class="ph-email">${user.email}</div>
        </div>
        <div class="ph-stats">
          <div class="pstat"><div class="pstat-n">${done}</div><div class="pstat-l">Concluídos</div></div>
          <div class="pstat"><div class="pstat-n">${started}</div><div class="pstat-l">Em andamento</div></div>
          <div class="pstat"><div class="pstat-n">${done}</div><div class="pstat-l">Certificados</div></div>
        </div>
        <div class="profile-menu" style="margin-top:14px">
          ${history.length > 0 ? `
          <div style="font-size:var(--fz-md);font-weight:800;color:var(--gray-700);padding:4px 0 2px"> Temas Concluídos</div>
          ${history.map(t=>`
            <div class="history-item">
              <div class="hi-icon">${t.icon}</div>
              <div class="hi-info">
                <div class="hi-title">${t.title}</div>
                <div class="hi-date">Concluído em ${prog[t.id].date}</div>
              </div>
              <div class="hi-score">${prog[t.id].score}/${t.quiz.length} ⭐</div>
            </div>`).join('')}
          ` : `<div class="empty"><div class="empty-icon">📚</div><div class="empty-text">Complete um tema para ver seu histórico aqui!</div></div>`}
          <div style="margin-top:8px">
            <button class="pmitem" style="width:100%;background:var(--gray-200);color:var(--red);justify-content:center" onclick="doLogout()">
              🚪 Sair da conta
            </button>
          </div>
        </div>
        ${bottomNavHTML()}
      </div>`;
  },

  /* ---------- SETTINGS ---------- */
  settings: () => `
    <div class="screen">
      <div class="hdr">
        <button class="hdr-back" onclick="navigate('home')">←</button>
        <div class="hdr-title">Configurações</div>
      </div>
      <div class="settings-body">
        <div class="scard">
          <div class="scard-title"> Tamanho do Texto</div>
          <div class="srow">
            <div class="slabel">Tamanho das letras</div>
            <div class="sopts">
              ${['normal','grande','enorme'].map(v=>`
                <button class="sopt${S.settings.fontSize===v?' on':''}" onclick="setSetting('fontSize','${v}')">
                  ${v==='normal'?'Normal':v==='grande'?'Grande':'Enorme'}
                </button>`).join('')}
            </div>
          </div>
        </div>
        <div class="scard">
          <div class="scard-title"> Visibilidade</div>
          <div class="srow">
            <div class="slabel">Alto contraste</div>
            <div class="toggle-wrap">
              <button class="toggle${S.settings.contrast?' on':''}" onclick="toggleSetting('contrast')" title="Alto contraste"></button>
              <span style="font-size:var(--fz-sm);color:var(--gray-500)">${S.settings.contrast?'Ligado':'Desligado'}</span>
            </div>
          </div>
        </div>
        <div class="scard">
          <div class="scard-title"> Áudio</div>
          <div class="srow">
            <div class="slabel">Som ligado</div>
            <div class="toggle-wrap">
              <button class="toggle${S.settings.audioOn?' on':''}" onclick="toggleSetting('audioOn')" title="Áudio"></button>
              <span style="font-size:var(--fz-sm);color:var(--gray-500)">${S.settings.audioOn?'Ligado':'Desligado'}</span>
            </div>
          </div>
          <div class="srow">
            <div class="slabel">Velocidade do áudio</div>
            <div class="sopts">
              ${['0.5x','0.75x','1x','1.25x'].map(v=>`
                <button class="sopt${S.settings.audioSpeed===v?' on':''}" onclick="setSetting('audioSpeed','${v}')">${v}</button>`
              ).join('')}
            </div>
          </div>
        </div>
        <div class="scard">
          <div class="scard-title">ℹ️ Sobre o Aplicativo</div>
          <div class="srow"><div class="slabel">Versão</div><div style="color:var(--gray-500);font-size:var(--fz-sm)">1.0 – Protótipo</div></div>
          <div class="srow"><div class="slabel">Desenvolvido para</div><div style="color:var(--gray-500);font-size:var(--fz-sm)">Trabalho Acadêmico</div></div>
        </div>
        <button class="btn btn-green" onclick="navigate('home')">✓ Salvar e Voltar</button>
      </div>
      ${bottomNavHTML()}
    </div>`,
};

/* ============================================================
   HELPER HTML
   ============================================================ */
function bottomNavHTML() {
  const items = [
    { icon:'', label:'Início', screen:'home' },
    { icon:'', label:'Perfil', screen:'profile' },
    { icon:'', label:'Config', screen:'settings' },
  ];
  const idx = S.navTab;
  return `<div class="bottom-nav">
    ${items.map((it,i)=>`
      <button class="bnav-item${i===idx?' on':''}" onclick="setNavTab(${i})">
        <span>${it.icon}</span><span>${it.label}</span>
      </button>`).join('')}
  </div>`;
}

function emptyStateHTML() {
  const msgs = [
    { icon:'', text:'Complete o tema "Como Criar sua Conta" primeiro para desbloquear todos os temas!' },
    { icon:'', text:'Nenhum tema em andamento ainda. Toque em "Disponíveis" e comece a aprender!' },
    { icon:'', text:'Nenhum tema concluído ainda. Complete um tema para ver aqui!' },
  ];
  const m = msgs[S.tab];
  return `<div class="empty"><div class="empty-icon">${m.icon}</div><div class="empty-text">${m.text}</div></div>`;
}

function themeCardHTML(t) {
  const status = themeStatus(t.id);
  const locked = status === 'locked';
  const prog = themeProgress(t.id);
  let statusLabel = '', statusCls = '';
  if (status === 'done')    { statusLabel='✓ Concluído'; statusCls='tc-done'; }
  if (status === 'started') { statusLabel='Em andamento'; statusCls='tc-prog'; }
  if (locked)               { statusLabel=''; statusCls='tc-lock'; }
  return `
    <div class="theme-card${locked?' locked':''}" onclick="${locked?'lockedTheme()':'navigate(\'themeDetail\',{theme:'+t.id+'})'}" role="button">
      <div class="tc-icon" style="background:${t.color}22">${t.icon}</div>
      <div class="tc-info">
        <div class="tc-title">${t.title}</div>
        <div class="tc-sub">${t.sub}</div>
        <div class="tc-bar"><div class="tc-fill" style="width:${prog}%"></div></div>
      </div>
      ${statusLabel ? `<div class="tc-status ${statusCls}">${statusLabel}</div>` : ''}
    </div>`;
}

function getThemesByTab() {
  return THEMES.filter(t => {
    const status = themeStatus(t.id);
    if (S.tab === 0) return status !== 'done' && status !== 'locked'; // disponíveis (available + started)
    if (S.tab === 1) return status === 'started';
    if (S.tab === 2) return status === 'done';
    return false;
  });
}

/* ============================================================
   ACTIONS
   ============================================================ */
function nextObSlide(isLast) {
  if (isLast) { navigate('welcome'); return; }
  S.obSlide++;
  render();
}

function enterGuest() {
  S.user = null;
  navigate('home', { tab: 0 });
}

function doLogin() {
  const email = $('lemail')?.value?.trim();
  const pw    = $('lpw')?.value;
  if (!email || !pw) { showErr('login-err', 'Preencha e-mail e senha.'); return; }
  try {
    const stored = JSON.parse(localStorage.getItem('user_' + email) || 'null');
    if (!stored || stored.pw !== pw) { showErr('login-err', 'E-mail ou senha incorretos.'); return; }
    S.user = { name: stored.name, email: stored.email };
    save();
    navigate('home', { tab: 0 });
  } catch(e) { showErr('login-err', 'Erro ao entrar. Tente novamente.'); }
}

function doRegister() {
  const name = $('rname')?.value?.trim();
  const email= $('remail')?.value?.trim();
  const pw   = $('rpw')?.value;
  const pw2  = $('rpw2')?.value;
  if (!name || !email || !pw) { showErr('reg-err', 'Preencha todos os campos.'); return; }
  if (pw.length < 6) { showErr('reg-err', 'A senha deve ter pelo menos 6 caracteres.'); return; }
  if (pw !== pw2) { showErr('reg-err', 'As senhas não coincidem.'); return; }
  if (!email.includes('@')) { showErr('reg-err', 'E-mail inválido.'); return; }
  const exists = localStorage.getItem('user_' + email);
  if (exists) { showErr('reg-err', 'Este e-mail já está cadastrado. Faça login.'); return; }
  localStorage.setItem('user_' + email, JSON.stringify({ name, email, pw }));
  showModal('🎉', 'Conta criada!', `Bem-vindo(a), ${name}! Sua conta foi criada com sucesso. Comece pelo primeiro tema!`, [
    { label:'Começar a Aprender →', cls:'btn-green', fn:'closeModal();navigate(\'login\')' }
  ]);
}

function doForgot() {
  const email = $('femail')?.value?.trim();
  if (!email) { showErr('forgot-msg', 'Digite seu e-mail.'); return; }
  $('forgot-msg').innerHTML = `<div style="background:#E8F5E9;color:var(--green-dark);padding:12px;border-radius:10px;font-weight:600;font-size:var(--fz-md)">
     Se o e-mail estiver cadastrado, enviaremos instruções em breve.<br><br>
    <small>(Em produção: um e-mail seria enviado. Este é um protótipo.)</small>
  </div>`;
}

function doLogout() {
  showModal('', 'Sair da conta?', 'Tem certeza que deseja sair? Seu progresso está salvo.', [
    { label:'Sim, sair', cls:'btn-danger', fn:'confirmLogout()' },
    { label:'Cancelar', cls:'btn-gray', fn:'closeModal()' }
  ]);
}

function confirmLogout() {
  closeModal();
  S.user = null;
  save();
  navigate('welcome');
}

function startTheme(id) {
  const prog = getProgress();
  const stepIdx = (prog[id]?.step) || 0;
  navigate('step', { theme: id, step: stepIdx < THEMES.find(t=>t.id===id).content.length ? stepIdx : 0, audioPlaying: false });
}

function prevStep() {
  if (S.step > 0) navigate('step', { step: S.step - 1, audioPlaying: false });
}

function nextStep() {
  const t = THEMES.find(x => x.id === S.theme);
  if (!S.user) {
    showModal('', 'Crie sua conta!', 'Para continuar aprendendo e salvar seu progresso, crie uma conta gratuita agora.', [
      { label:'Criar Conta', cls:'btn-green', fn:'closeModal();navigate("register")' },
      { label:'Continuar como visitante', cls:'btn-gray', fn:'closeModal();_guestNextStep()' }
    ]);
    return;
  }
  markStep(S.theme, S.step + 1);
  if (S.step >= t.content.length - 1) {
    navigate('quizIntro');
  } else {
    navigate('step', { step: S.step + 1, audioPlaying: false });
  }
}

function _guestNextStep() {
  const t = THEMES.find(x => x.id === S.theme);
  if (S.step >= t.content.length - 1) navigate('quizIntro');
  else navigate('step', { step: S.step + 1, audioPlaying: false });
}

function confirmLeave() {
  showModal('', 'Sair do tema?', 'Seu progresso nesta etapa será salvo.', [
    { label:'Sim, sair', cls:'btn-gray', fn:'closeModal();navigate("themeDetail",{theme:S.theme})' },
    { label:'Continuar estudando', cls:'btn-green', fn:'closeModal()' }
  ]);
}

function startQuiz(id) {
  navigate('quiz', { theme: id, quizIdx: 0, quizAnswers: [], answered: false, _selected: -1 });
}

function answerQuiz(i) {
  const t = THEMES.find(x => x.id === S.theme);
  const q = t.quiz[S.quizIdx];
  const correct = i === q.ans;
  S.quizAnswers[S.quizIdx] = correct;
  S._selected = i;
  S.answered = true;
  render();
}

function nextQuiz() {
  const t = THEMES.find(x => x.id === S.theme);
  if (S.quizIdx < t.quiz.length - 1) {
    navigate('quiz', { quizIdx: S.quizIdx + 1, answered: false, _selected: -1 });
  } else {
    navigate('result');
  }
}

function setTab(i) {
  S.tab = i;
  render();
}

function setNavTab(i) {
  S.navTab = i;
  const screens_map = ['home', 'profile', 'settings'];
  navigate(screens_map[i]);
}

function toggleAudio() {
  if (!S.settings.audioOn) {
    showModal('', 'Áudio desativado', 'Ative o áudio nas configurações para ouvir as explicações.', [
      { label:'Ir para Configurações', cls:'btn-green', fn:'closeModal();navigate("settings")' },
      { label:'Fechar', cls:'btn-gray', fn:'closeModal()' }
    ]);
    return;
  }
  S.audioPlaying = !S.audioPlaying;
  const btn = $('audiobtn');
  if (btn) {
    btn.textContent = S.audioPlaying ? '⏸ Pausar Áudio' : ' Ouvir Áudio';
    btn.className = 'audio-btn' + (S.audioPlaying?' playing':'');
  }
  if (S.audioPlaying) {
    const t = THEMES.find(x=>x.id===S.theme);
    const s = t.content[S.step];
    speakText(s.title + '. ' + s.text);
  } else {
    window.speechSynthesis?.cancel();
  }
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'pt-BR';
  const speedMap = { '0.5x':0.5, '0.75x':0.75, '1x':1.0, '1.25x':1.25 };
  utt.rate = speedMap[S.settings.audioSpeed] || 1.0;
  utt.onend = () => {
    S.audioPlaying = false;
    const btn = $('audiobtn');
    if (btn) { btn.textContent=' Ouvir Áudio'; btn.className='audio-btn'; }
  };
  window.speechSynthesis.speak(utt);
}

function setSetting(key, val) {
  S.settings[key] = val;
  save();
  render();
}

function toggleSetting(key) {
  S.settings[key] = !S.settings[key];
  save();
  render();
}

function lockedTheme() {
  if (!S.user) {
    showModal('', 'Faça login primeiro!', 'Crie uma conta ou faça login e complete o primeiro tema para desbloquear todos os outros.', [
      { label:'Criar Conta', cls:'btn-green', fn:'closeModal();navigate("register")' },
      { label:'Fazer Login', cls:'btn-ghost', fn:'closeModal();navigate("login")' }
    ]);
  } else {
    showModal('', 'Tema Bloqueado', 'Complete o tema "Como Criar sua Conta" primeiro para desbloquear todos os temas!', [
      { label:'Ir para o 1º Tema', cls:'btn-green', fn:'closeModal();navigate("themeDetail",{theme:1})' },
      { label:'Fechar', cls:'btn-gray', fn:'closeModal()' }
    ]);
  }
}

function showErr(id, msg) {
  const el = $(id);
  if (el) {
    el.innerHTML = `<div class="err-msg">⚠️ ${msg}</div>`;
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 500);
  }
}

/* ============================================================
   AFTER RENDER HOOKS
   ============================================================ */
function afterRender() {
  // Focus first input in forms
  if (['login','register','forgot'].includes(S.screen)) {
    const inp = document.querySelector('.field input');
    if (inp) setTimeout(() => inp.focus(), 100);
  }
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  load();
  initTestUsers();
  applySettings();
  // Splash → onboarding or welcome
  setTimeout(() => {
    if (S.firstTime) {
      S.firstTime = false;
      save();
      navigate('onboarding', { obSlide: 0 });
    } else if (S.user) {
      navigate('home', { tab: 0 });
    } else {
      navigate('welcome');
    }
  }, 1800);
  render();
}

init();