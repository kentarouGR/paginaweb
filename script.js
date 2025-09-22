  // === SLIDER PRINCIPAL ===
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");

  if (slides.length && dotsContainer) {
    let current = 0, timer;

    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    const render = () => {
      slides.forEach((s, i) => {
        s.classList.toggle("active", i === current);
        dots[i].classList.toggle("active", i === current);
      });
      document.querySelector(".slides").style.transform = `translateX(-${current * 100}%)`;
    };

    const goToSlide = i => {
      current = i;
      render();
      resetTimer();
    };

    const nextSlide = () => goToSlide((current + 1) % slides.length);
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(nextSlide, 8000);
    };

    document.querySelector(".prev")?.addEventListener("click", () =>
      goToSlide((current - 1 + slides.length) % slides.length)
    );
    document.querySelector(".next")?.addEventListener("click", nextSlide);

    render();
    resetTimer();
  }
