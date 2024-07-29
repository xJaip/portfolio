import 'style.css'
import 'src/styles/custom.css'
import Navigo from 'navigo';
// Importa tus módulos de página
import home from 'src/pages/home.js';
import about from 'src/pages/about.js';
import projects from 'src/pages/projects.js';
import contact from 'src/pages/contact.js'

//inicia tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Agrega el evento click para dispositivos móviles
tooltipTriggerList.forEach(tooltipTriggerEl => {
    tooltipTriggerEl.addEventListener('click', () => {
        const tooltip = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
        if (tooltip._element.getAttribute('aria-describedby')) {
            tooltip.hide();
        } else {
            tooltip.show();
        }
    });
});


// Configura el enrutador
const router = new Navigo(window.location.origin, { hash: true });

// Función para actualizar el contenido de la página
function updateContent(content) {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = content;
    window.scrollTo(0, 0);
}

// Configura las rutas
router
    .on('/', () => {
        updateContent(home());
        setActiveLink('home-link');
    })
    .on('/about', () => {
        updateContent(about());
        setActiveLink('about-link');
    })
    .on('/projects', (match) => {
        updateContent(projects());
        setActiveLink('projects-link');
    })
    .on('/contact', () => {
      updateContent(contact())
      setActiveLink("contact-link")
    })
    
    .resolve(); // Asegúrate de llamar a resolve() para activar las rutas

// Función para establecer el enlace activo
function setActiveLink(linkId) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(linkId).classList.add('active');
}
