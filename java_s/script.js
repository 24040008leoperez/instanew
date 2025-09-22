// 🔹 Secciones
function mostrarSeccion(id) {
  document.querySelectorAll("main section").forEach(sec => sec.classList.remove("activo"));
  document.getElementById(id).classList.add("activo");
}

// 🔹 Cambiar foto de perfil
document.getElementById("inputFoto").addEventListener("change", function(e) {
  const archivo = e.target.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function(e) {
      document.getElementById("fotoPerfil").src = e.target.result;
    };
    lector.readAsDataURL(archivo);
  }
});

// 🔹 Likes y comentarios
function darLike(btn) { 
  btn.innerText = btn.innerText.includes("❤️") ? "💔 Unlike" : "❤️ Like"; 
}

function comentar(btn) {
  const comentario = prompt("Escribe tu comentario:");
  if (comentario) {
    const post = btn.closest(".post");
    const comentariosDiv = post.querySelector(".comentarios");
    const p = document.createElement("p");
    p.textContent = comentario;
    p.classList.add("comentario");
    comentariosDiv.appendChild(p);
  }
}

// 🔹 Historias
const historiasImg = ['images/perfil.jpg','images/post1.jpg','images/post2.jpg','images/post3.jpg','images/post4.jpg'];
function abrirHistoria(index){
  document.getElementById("modalHistoria").style.display = "flex";
  document.getElementById("imgHistoria").src = historiasImg[index];
  document.getElementById("likeHistoria").innerText = "❤️ Like";
}
function cerrarHistoria(){ document.getElementById("modalHistoria").style.display = "none"; }
function likeHistoria(){ 
  const btn = document.getElementById("likeHistoria"); 
  btn.innerText = btn.innerText.includes("❤️") ? "💔 Unlike" : "❤️ Like"; 
}

const historiasDestacadas = ['images/post1.jpg','images/post2.jpg','images/post3.jpg'];
function abrirHistoriaDestacada(index){
  document.getElementById("modalHistoriaDestacada").style.display = "flex";
  document.getElementById("imgHistoriaDestacada").src = historiasDestacadas[index];
  document.getElementById("likeHistoriaDestacada").innerText = "❤️ Like";
}
function cerrarHistoriaDestacada(){ document.getElementById("modalHistoriaDestacada").style.display = "none"; }
function likeHistoriaDestacada(){ 
  const btn = document.getElementById("likeHistoriaDestacada"); 
  btn.innerText = btn.innerText.includes("❤️") ? "💔 Unlike" : "❤️ Like"; 
}

const publicacionesPerfil = ['images/ppost1.jpg','images/ppost2.jpg','images/ppost3.jpg'];
function abrirModalPerfil(index){
  document.getElementById("modalPerfil").style.display = "flex";
  document.getElementById("imgPerfil").src = publicacionesPerfil[index];
  document.getElementById("likePerfil").innerText = "❤️ Like";
}
function cerrarModalPerfil(){ document.getElementById("modalPerfil").style.display = "none"; }
function likePerfil(){ 
  const btn = document.getElementById("likePerfil"); 
  btn.innerText = btn.innerText.includes("❤️") ? "💔 Unlike" : "❤️ Like"; 
}

// 🔹 Chat
let chatActual = null;

function abrirChat(nombre, event) {
  chatActual = nombre;
  document.querySelectorAll(".chat-item").forEach(c => c.classList.remove("active"));
  event.currentTarget.classList.add("active");

  document.getElementById("chatBox").innerHTML = `<p class="mensaje-sistema">Chat con ${nombre} iniciado</p>`;
  document.getElementById("inputChatContainer").style.display = "flex";
}

function enviarMensaje() {
  const input = document.getElementById("mensajeInput");
  const chatBox = document.getElementById("chatBox");
  if (!chatActual) { alert("Selecciona un chat primero"); return; }
  if (input.value.trim() !== "") {
    const msg = document.createElement("p");
    msg.className = "mensaje-usuario";
    msg.textContent = input.value;
    chatBox.appendChild(msg);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
