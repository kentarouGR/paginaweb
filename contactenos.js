const inpNombre = document.getElementById('Coloca-nombre');
const inpEmail = document.getElementById('Coloca-email');
const inpMensaje = document.getElementById('Coloca-mensaje');

function enviardatos() {
  const nombre = inpNombre.value.trim();
  const email = inpEmail.value.trim();
  const mensaje = inpMensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert('⚠️ Por favor, rellene todos los campos');
    return;
  }

  alert('Datos enviados correctamente');

  // Limpiar campos
  inpNombre.value = "";
  inpEmail.value = "";
  inpMensaje.value = "";
}
