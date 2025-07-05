document.addEventListener("DOMContentLoaded", () => {
  const detailButtons = document.querySelectorAll(".btn-details");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      const isVisible = details.style.display === "block";

      details.style.display = isVisible ? "none" : "block";
      button.textContent = isVisible ? "Ver Detalhes" : "Ocultar Detalhes";
    });
  });
});
