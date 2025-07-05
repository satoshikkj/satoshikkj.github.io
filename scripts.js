document.addEventListener("DOMContentLoaded", () => {
  const detailButtons = document.querySelectorAll(".btn-details");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const detalhesId = button.getAttribute("aria-controls");
      const detalhesEl = document.getElementById(detalhesId);

      if (!detalhesEl) return;

      const isHidden = detalhesEl.hasAttribute("hidden");

      if (isHidden) {
        detalhesEl.removeAttribute("hidden");
        button.setAttribute("aria-expanded", "true");
        button.innerHTML = 'Ocultar Detalhes'; // ou incluir ícone: '<i class="icon-class"></i> Ocultar Detalhes'
      } else {
        detalhesEl.setAttribute("hidden", "");
        button.setAttribute("aria-expanded", "false");
        button.innerHTML = 'Ver Detalhes'; // idem aqui se quiser ícone
      }
    });
  });
});
