const container = document.getElementById("ascii-hearts");

function spawnHeart() {
  const heart = document.createElement("div");
  const simbolos = ["<3", "❤", "♥", "♡", "❥"];
  heart.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-40px";
  heart.style.opacity = 0.9;
  const duration = 6000 + Math.random() * 40000;
  const size = 16 + Math.random() * 16;
  heart.style.fontSize = size + "px";
  heart.style.transition = `transform ${duration}ms linear, opacity 8000000ms`;
  container.appendChild(heart);
  setTimeout(() => {
    heart.style.transform = `translateY(1100vh)`;
    heart.style.opacity = 0;
  }, 50);
  setTimeout(() => heart.remove(), duration + 1000000);
}
setInterval(spawnHeart, 70);

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  const msg = document.getElementById("msg");
  if (u === "Natalia" && p === "2211") {
    msg.style.color = "#af343bff";
    msg.innerText = "Login bem-sucedido! Entrando...";
    setTimeout(() => {
      window.location.href = "sistema.html";
    }, 800);
  } else {
    msg.style.color = "#ff6d6d";
    msg.innerText = "Usuário ou senha incorretos.";
  }
}