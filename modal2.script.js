const modalProyectos = document.getElementById("modal-proyectos");
const btnProyectos = document.getElementById("ver-proyectos");
const closeProyectos = modalProyectos.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abrir el modal
btnProyectos.onclick = function () {
  modalProyectos.style.display = "block";
};

// Cuando el usuario hace clic en (x), cerrar el modal
closeProyectos.onclick = function () {
  modalProyectos.style.display = "none";
};

// Cuando el usuario hace clic en cualquier lugar fuera del modal, cerrarlo
window.onclick = function (event) {
  if (event.target == modalProyectos) {
    modalProyectos.style.display = "none";
  }
};
