document.addEventListener("DOMContentLoaded", () => {
  // Botão de Detalhes (mostrar/ocultar)
  const detailButtons = document.querySelectorAll(".btn-details");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const detalhesId = button.getAttribute("aria-controls");
      const detalhesEl = document.getElementById(detalhesId);

      if (!detalhesEl) {
        console.warn(`Elemento com id '${detalhesId}' não encontrado.`);
        return;
      }

      const isHidden = detalhesEl.hasAttribute("hidden");

      if (isHidden) {
        detalhesEl.removeAttribute("hidden");
        button.setAttribute("aria-expanded", "true");
        button.textContent = "Ocultar Detalhes";
      } else {
        detalhesEl.setAttribute("hidden", "");
        button.setAttribute("aria-expanded", "false");
        button.textContent = "Ver Detalhes";
      }
    });
  });

  // Modal
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const modalOverlay = document.getElementById("modalOverlay");

  if (openModal && closeModal && modalOverlay) {
    openModal.addEventListener("click", () => {
      modalOverlay.classList.add("active");
    });

    closeModal.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  // Slider manual
  const sliderWrapper = document.getElementById("sliderWrapper");
  const slides = sliderWrapper ? sliderWrapper.querySelectorAll(".slide") : [];
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentSlide = 0;

  function showSlide(index) {
    if (!sliderWrapper || slides.length === 0) return;

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
    nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
  }

  // Estrelas de avaliação
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      const val = +star.dataset.value;
      stars.forEach((s) => {
        s.style.color = +s.dataset.value <= val ? "#ffc107" : "#444";
      });
    });

    star.addEventListener("mouseout", () => {
      stars.forEach((s) => s.style.color = "#444");
    });

    star.addEventListener("click", () => {
      const val = +star.dataset.value;
      alert(`Você avaliou com ${val} estrela(s)!`);
    });
  });
});
