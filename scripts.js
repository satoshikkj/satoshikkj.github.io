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
  setTimeout(() => msg.style.display = "none", 4000);
}

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

function atualizarContador() {
  const inicio = new Date('2024-12-13T00:00:00');
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").textContent =
    `Desde que nos conhecemos: ${dias} dias, ${horas} horas e ${minutos} minutos.`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

function vibrar(el) {
  el.classList.add("vibrar");
  setTimeout(() => el.classList.remove("vibrar"), 300);
}

let pressTimer;
document.body.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    window.open("https://open.spotify.com/track/4A8dtxoyvZropiJiQ7FiSF?si=b8yoEq-2QAKC73QzIBj2eA", "_blank");
  }, 3000);
});
document.body.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});
