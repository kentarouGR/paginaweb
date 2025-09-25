// ==================== SLIDER ====================
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".nav.prev");
const nextBtn = document.querySelector(".nav.next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

// Crear los dots dinámicamente
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

const dots = document.querySelectorAll(".dot");

// Mostrar slide por índice
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

// Botón anterior
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Botón siguiente
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Auto play
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000); // cada 5 segundos


// ==================== MENÚ MÓVIL ====================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// ==================== SUBMENÚ ====================
const servicios = document.querySelector(".has-submenu > a");
if (servicios) {
  servicios.addEventListener("click", (e) => {
    e.preventDefault(); // evitar que redireccione
    const submenu = servicios.nextElementSibling;
    submenu.classList.toggle("active");
  });
}


// ==================== FORMULARIO RESERVA ====================
// (Validación simple)
const reservaForm = document.querySelector(".reserva form");
if (reservaForm) {
  reservaForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const entrada = document.querySelector("#entrada").value;
    const salida = document.querySelector("#salida").value;

    if (entrada >= salida) {
      alert("La fecha de salida debe ser mayor a la de entrada.");
      return;
    }

    alert("✅ Reserva realizada con éxito");
    reservaForm.reset();
  });
}
