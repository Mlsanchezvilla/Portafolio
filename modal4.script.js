const modalCv = document.getElementById("modal-cv");
const btnCv = document.getElementById("Cv");
const closeCv = modalCv.getElementsByClassName("close")[0];

// Abrir el modal al hacer clic en el botón "Contáctame"
btnCv.onclick = function () {
  modalCv.style.display = "block";
};

// Cerrar el modal al hacer clic en la "x"
closeCv.onclick = function () {
  modalCv.style.display = "none";
};

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function (event) {
  if (event.target == modalCv) {
    modalCv.style.display = "none";
  }
};
