const modalContactos = document.getElementById("modal-contacto");
const btnContacto = document.getElementById("contactame");
const closeContactos = modalContactos.getElementsByClassName("close")[0];

// Abrir el modal al hacer clic en el botón "Contáctame"
btnContacto.onclick = function () {
  modalContactos.style.display = "block";
};

// Cerrar el modal al hacer clic en la "x"
closeContactos.onclick = function () {
  modalContactos.style.display = "none";
};

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function (event) {
  if (event.target == modalContactos) {
    modalContactos.style.display = "none";
  }
};
