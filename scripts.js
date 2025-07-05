// script.js

function toggleDetalhes(button) {
  const detalhesId = button.getAttribute("aria-controls");
  const detalhes = document.getElementById(detalhesId);

  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);

  if (isExpanded) {
    detalhes.hidden = true;
    button.textContent = "Ver Detalhes";
  } else {
    detalhes.hidden = false;
    button.textContent = "Ocultar Detalhes";
  }
}
