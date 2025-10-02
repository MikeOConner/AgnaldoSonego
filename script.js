// Exemplo simples de animação suave no scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section, .card");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// Configuração inicial dos elementos
window.onload = () => {
  document.querySelectorAll("section, .card").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.6s ease-out";
  });
};
