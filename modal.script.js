const modal = document.getElementById("modal");
const btn = document.getElementById("ver-habilidades");
const closeHabilidades = modal.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abrir el modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Cuando el usuario hace clic en (x), cerrar el modal
closeHabilidades.onclick = function () {
  modal.style.display = "none";
};

// Cuando el usuario hace clic en cualquier lugar fuera del modal, cerrarlo
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
