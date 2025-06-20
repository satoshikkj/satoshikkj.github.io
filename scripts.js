// Frases que mudam no #frases
const frases = [
  "Se amor tivesse um nome, seria o seu.",
  "Perfeição é ficar olhando suas fotos.",
  "Você é minha paz em forma de gente.",
  "Te amar é meu destino favorito.",
  "Eu queria morar no seu abraço.",
];

let index = 0;
setInterval(() => {
  document.getElementById("frases").textContent = frases[index];
  index = (index + 1) % frases.length;
}, 5000);

function mostrarMensagem() {
  const msg = document.getElementById("mensagem");
  msg.style.display = "block";
  setTimeout(() => (msg.style.display = "none"), 4000);
}

// Efeitos visuais: "te amo", estrelas, pétalas
for (let i = 0; i < 30; i++) {
  let el = document.createElement("div");
  el.className = "teamo";
  el.textContent = "te amo";
  el.style.left = `${Math.random() * 100}vw`;
  el.style.animationDuration = `${4 + Math.random() * 6}s`;
  el.style.fontSize = `${1 + Math.random() * 1.2}em`;
  document.body.appendChild(el);
}

for (let i = 0; i < 60; i++) {
  let estrela = document.createElement("div");
  estrela.className = "estrela";
  estrela.style.top = `${Math.random() * 100}vh`;
  estrela.style.left = `${Math.random() * 100}vw`;
  estrela.style.animationDelay = `${Math.random() * 2}s`;
  document.body.appendChild(estrela);
}

for (let i = 0; i < 20; i++) {
  let petala = document.createElement("div");
  petala.className = "petala";
  petala.style.left = `${Math.random() * 100}vw`;
  petala.style.top = `-${Math.random() * 100}vh`;
  petala.style.animationDuration = `${5 + Math.random() * 5}s`;
  document.body.appendChild(petala);
}

// Corações que sobem ao clicar
function mostrarCoracoes(e) {
  for (let i = 0; i < 3; i++) {
    const cora = document.createElement("div");
    cora.className = "coração-toque";
    cora.textContent = ["💘", "💖", "💗", "💕", "❤️"][Math.floor(Math.random() * 5)];
    cora.style.left = `${e.clientX - 10 + (Math.random() * 30 - 15)}px`;
    cora.style.top = `${e.clientY - 10 + (Math.random() * 30 - 15)}px`;
    document.body.appendChild(cora);
    setTimeout(() => cora.remove(), 2000);
  }
}

// Contador desde 13/12/2024
function atualizarContador() {
  const inicio = new Date("2024-12-13T00:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").textContent = `Desde que nos conhecemos: ${dias} dias, ${horas} horas e ${minutos} minutos.`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

// Animação de vibração no botão/link
function vibrar(el) {
  el.classList.add("vibrar");
  setTimeout(() => el.classList.remove("vibrar"), 300);
}

// Pressionar por 3s abre surpresa no Spotify
let pressTimer;
document.body.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    window.open("https://open.spotify.com/track/4A8dtxoyvZropiJiQ7FiSF?si=b8yoEq-2QAKC73QzIBj2eA", "_blank");
  }, 3000);
});
document.body.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});

// --- Máquina de escrever para a cartinha (opção 3) ---
const cartaTexto = "Izys, cada momento contigo é como poesia viva... 💖";
let iCarta = 0;
const cartaElement = document.getElementById("carta");

function digitarCarta() {
  if (iCarta < cartaTexto.length) {
    cartaElement.innerHTML += cartaTexto.charAt(iCarta);
    iCarta++;
    setTimeout(digitarCarta, 100);
  }
}
digitarCarta();

// --- Estrela cadente ocasional (opção 4) ---
function criarEstrelaCadente() {
  const estrela = document.createElement("div");
  estrela.className = "estrela-cadente";
  estrela.style.top = `${Math.random() * 50}vh`;
  estrela.style.left = `-5vw`;
  document.body.appendChild(estrela);

  estrela.animate(
    [
      { transform: "translateX(0) translateY(0) rotate(0deg)", opacity: 1 },
      { transform: "translateX(120vw) translateY(60vh) rotate(720deg)", opacity: 0 },
    ],
    {
      duration: 3000,
      easing: "ease-out",
    }
  );

  setTimeout(() => estrela.remove(), 3000);
}

setInterval(() => {
  criarEstrelaCadente();
}, 12000);

// --- Caixa de mensagens clicáveis (opção 6) ---
const mensagensSurpresa = [
  "Você ilumina meu mundo com seu sorriso.",
  "Cada dia contigo é um presente raro.",
  "Seu abraço é meu lugar favorito.",
  "Você é a melodia que eu sempre quis ouvir.",
  "Com você, a vida é mais doce.",
];

const btnMensagem = document.getElementById("btnMensagem");
const caixaMensagem = document.getElementById("caixaMensagem");

btnMensagem.addEventListener("click", () => {
  const msg = mensagensSurpresa[Math.floor(Math.random() * mensagensSurpresa.length)];
  caixaMensagem.textContent = msg;

  setTimeout(() => {
    caixaMensagem.textContent = "";
  }, 5000);
});
