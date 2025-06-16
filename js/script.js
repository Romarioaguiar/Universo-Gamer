document.addEventListener('DOMContentLoaded', function() {
    const tournamentsSection = document.getElementById('tournaments');
    const showTournamentsBtn = document.getElementById('show-tournaments-btn');

    if (showTournamentsBtn && tournamentsSection) {
        showTournamentsBtn.addEventListener('click', function(event) {

            // Previne o comportamento padrão do link para controlar a animação

            event.preventDefault();

            // Adiciona a classe 'visible' para iniciar a animação de fade-in

            if (!tournamentsSection.classList.contains('visible')) {
                tournamentsSection.classList.add('visible');
            }

            // Rola a página suavemente até a seção de torneios
            
            tournamentsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    } else {
        console.warn("Elementos 'tournaments' ou 'show-tournaments-btn' não encontrados. O script de torneios pode não funcionar corretamente.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".main-nav .menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
