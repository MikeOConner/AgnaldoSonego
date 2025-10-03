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

document.addEventListener('DOMContentLoaded', () => {
    // 1. Pega os elementos do DOM
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('img-full');
    const closeBtn = document.getElementsByClassName('close')[0];
    const portfolioImages = document.querySelectorAll('.portfolio-img');

    // 2. Adiciona evento de clique em TODAS as imagens do portfólio
    portfolioImages.forEach(img => {
        img.addEventListener('click', function() {
            // Abre o modal
            modal.style.display = "block";
            // Define o caminho da imagem de alta resolução (data-src)
            modalImg.src = this.getAttribute('data-src');
        });
    });

    // 3. Evento para fechar o modal ao clicar no 'X'
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // 4. Evento para fechar o modal ao clicar FORA da imagem
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});