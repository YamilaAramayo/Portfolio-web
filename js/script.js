// Esperar a que todo el contenido DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú responsivo para móviles
  const mobileMenu = document.getElementById('mobile-menu');
  const navbar = document.getElementById('navbar');

  if (mobileMenu && navbar) {
    mobileMenu.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en una opción
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });
  }

  // 2. Resaltar enlace activo según la sección visible en pantalla
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

});
