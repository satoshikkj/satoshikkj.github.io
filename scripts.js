// Mostrar mensagem ao clicar no nome "Izys"
function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.style.display = "block";
}

// Criar corações no clique/tela
function mostrarCoracoes(e) {
  const coracao = document.createElement("div");
  coracao.classList.add("coração-toque");
  coracao.innerText = "❤️";
  coracao.style.left = e.clientX + "px";
  coracao.style.top = e.clientY + "px";
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 2000);
}

// Vibrar botão ao clicar
function vibrar(el) {
  el.classList.add("vibrar");
  setTimeout(() => el.classList.remove("vibrar"), 500);
}

// Máquina de escrever no #carta
const textoCarta = "Se amor tivesse um nome, seria o seu. 💌";
let index = 0;
function escreverCarta() {
  const carta = document.getElementById("carta");
  if (index < textoCarta.length) {
    carta.innerHTML += textoCarta.charAt(index);
    index++;
    setTimeout(escreverCarta, 100);
  }
}
escreverCarta();

// Frases românticas alternando no #frases
const frasesRomanticas = [
  "Se amor tivesse um nome, seria o seu.",
  "Perfeição é ficar olhando suas fotos.",
  "Te amo mais do que você imagina.",
  "Seu sorriso parece pinturas de Van Gogh.",
  "Desde que te conheci, meu mundo ficou mais bonito."
];
let fraseAtual = 0;
function mostrarFrases() {
  const el = document.getElementById("frases");
  el.innerHTML = frasesRomanticas[fraseAtual];
  fraseAtual = (fraseAtual + 1) % frasesRomanticas.length;
  setTimeout(mostrarFrases, 4000);
}
mostrarFrases();

// Surpresa ao clicar no botão
document.getElementById("btnMensagem").addEventListener("click", function () {
  const caixa = document.getElementById("caixaMensagem");
  caixa.innerText = "Você é a coisa mais linda que já me aconteceu ❤️";
  caixa.classList.add("mensagem-clicada");
  caixa.style.display = "block";
});

// Estrelas piscando no fundo
for (let i = 0; i < 100; i++) {
  const estrela = document.createElement("div");
  estrela.className = "estrela";
  estrela.style.left = Math.random() * 100 + "vw";
  estrela.style.top = Math.random() * 100 + "vh";
  document.body.appendChild(estrela);
}

// Corações "Te amo" caindo do topo
function criarTeAmo() {
  const el = document.createElement("div");
  el.className = "teamo";
  el.innerText = "💖 Te amo 💖";
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}
setInterval(criarTeAmo, 1000);

// Contador desde 13/12/2024
const inicio = new Date("2024-12-13T00:00:00");
function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);
  document.getElementById("contador").innerText =
    `Estamos juntos há ${dias} dias, ${horas}h ${minutos}min ${segundos}s 💖`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

// BOTÃO "NÃO" FUGINDO
const button = document.getElementById("no");
const height = window.innerHeight - 50;
const width = window.innerWidth - 50;

button.addEventListener("mouseover", function () {
  button.style.position = "absolute";
  button.style.top = Math.random() * height + "px";
  button.style.left = Math.random() * width + "px";
});
