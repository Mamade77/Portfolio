document.addEventListener('mousemove', function (e) {
    parallax(e);
  });
  
  function parallax(e) {
    var container = document.querySelector('.parallax-container');
    var image = document.querySelector('.parallax-image');
  
    var x = (e.clientX / window.innerWidth - 0.5) * 50;
    var y = (e.clientY / window.innerHeight - 0.5) * 50;
  
    image.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  }
  
          // Sélectionne tous les liens de la navigation
          const navLinks = document.querySelectorAll('nav ul li a');

          // Ajoute un écouteur d'événement à chaque lien
          navLinks.forEach(link => {
              link.addEventListener('click', function() {
                  // Masque la liste de navigation
                  document.querySelector('nav ul').classList.remove('active');
              });
          });
  
          // Ajoute un écouteur d'événement à l'icône du menu burger
          document.querySelector('.menu-toggle').addEventListener('click', function() {
              // Bascule l'affichage de la liste de navigation
              document.querySelector('nav ul').classList.toggle('active');
          });
  
          if (window.innerWidth <= 800) {
              let lastScrollTop = 0;
              const navbar = document.querySelector('.navbar');
              const menuToggle = document.querySelector('.menu-toggle');
              const backToTopButton = document.getElementById('back-to-top');
  
              window.addEventListener('scroll', function() {
                  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
                  if (scrollTop > lastScrollTop) {
                      // Descendre
                      navbar.style.top = "-100px"; // Cacher le menu
                      backToTopButton.style.display = "block"; // Afficher le bouton de remontée
                  } else {
                      // Remonter
                      navbar.style.top = "0"; // Afficher le menu
                      backToTopButton.style.display = "none"; // Masquer le bouton de remontée
                  }
  
                  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
              });
  
              // Fonction pour remonter la page lorsque le bouton est cliqué
              backToTopButton.addEventListener('click', function() {
                  window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                  });
              });
          }
          document.addEventListener("DOMContentLoaded", function() {
            const articles = document.querySelectorAll('.article');
            articles.forEach(article => {
                article.classList.add('visible');
            });
        });
        