document.addEventListener("DOMContentLoaded", () => {
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
});
