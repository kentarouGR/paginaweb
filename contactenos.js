JS
const inpNombre = document.getElementById('Coloca-nombre');
const inpEmail = document.getElementById('Coloca-email');
const inpMensaje = document.getElementById('Coloca-mensaje');

async function enviardatos()
{
const nombre=inpNombre.value;
const email=inpEmail.value;
const mensaje=inpMensaje.value;

if (!nombre || !email || !mensaje )
{
    alert('Por favor rellene todos los campos');
    return;
}

alert('Datos enviados correctamente');
document.getElementById('Coloca-nombre').value = "";
document.getElementById('Coloca-email').value = "";
document.getElementById('Coloca-mensaje').value = "";
  
  }