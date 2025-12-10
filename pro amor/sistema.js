// Mensagens para cada área
const mensagens = {
  area1: "Amo seu jeito que me deixa louquinho, doidinho por você...\
        suas piadas tanto as nossas, quanto as que você desenvolve...\
        seu cheiro, seu toque seu abraço, seus beijinhos...\
        tudo por ti me fazem mais e mais apaixonatinho e leoquinho por \
        você.",
  area2: "Abrindo segredo… 🌟",
  area3: "Telúrio + Amerício + Oxigênio | Mol + Urânio + Iodo + Tório \
        + Oxigênio + Oxigênio + Oxigênio + Oxigênio + Oxigênio + Oxigênio \
        + Oxigênio + Oxigênio + Oxigênio + Oxigênio + Oxigênio + Oxigênio \
        + Oxigênio + Oxigênio + Oxigênio + Oxigênio...",
};

// Seletores
const msgBox = document.querySelector(".mensagem-box");
const overlay = document.querySelector(".te-amo-overlay");

// Botões (os <button> são wrappers dos .card)
const botoes = document.querySelectorAll(".content button");


// Evento ao clicar nos botões
botoes.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index === 0) {
      // Área 1
      exibirMensagem(mensagens.area1);
    } 
    else if (index === 1) {
      // Área 2
      abrirTeAmo(mensagens.area2);
    } 
    else if (index === 2) {
      // Área 3 abre a área TE AMO
      exibirMensagem(mensagens.area3);
    }
  });
});

// Função para mostrar mensagem
function exibirMensagem(texto) {
  msgBox.innerText = texto;
  msgBox.classList.add("show");
}



// --------------------------
//   ÁREA TE AMO
// --------------------------
function abrirTeAmo() {
  overlay.style.display = "flex";
}



// --------------------------
//   ESTRELAS / CORAÇÕES
// --------------------------

// Lista com vários símbolos de coração
const hearts = [ "Amo seu cheiro", "Amo seu rostinho", "Amo seu jeitinho", "Amo seu toque", "Amo suas peadocas", "Tim adoro", "Tim gostar mucho my babyy"];
const estrelocas = ["❤", "♡", "<3"]

// Container das estrelas
const starsContainer = document.createElement("div");
starsContainer.id = "stars";
document.body.appendChild(starsContainer);

// Criar várias estrelas/corações fixos e piscantes
function gerarEstrelas() {
  for (let i = 0; i < 60; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerText = estrelocas[Math.floor(Math.random() * estrelocas.length)];

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.fontSize = (Math.random() * 20 + 10) + "px";
    star.style.animationDelay = Math.random() * 2 + "s";

    starsContainer.appendChild(star);
  }
}
// Criar partículas subindo
function gerarParticulas() {
  setInterval(() => {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    p.style.left = Math.random() * 100 + "vw";
    p.style.bottom = "-20px";

    p.style.fontSize = (Math.random() * 20 + 8) + "px";

    document.querySelector(".te-amo-overlay").appendChild(p);

    setTimeout(() => p.remove(), 6000);

  }, 400);
}

gerarParticulas();

gerarEstrelas();
