// app.js - Lógica principal modular
let carrerasFiltradas = [];
let enBusqueda = false;
let currentCarouselSlide = 0;
let carouselInterval;

// =============================================
// INICIALIZACIÓN PRINCIPAL
// =============================================

function initApp() {
    // Verificar que los datos estén cargados
    if (typeof carrerasData === 'undefined' || typeof universitiesData === 'undefined') {
        console.error('Error: Los datos no están cargados. Asegúrate de que data.js se cargue primero.');
        return;
    }
    
    // Inicializar según la página actual
    const page = getCurrentPage();
    
    // Inicializar elementos comunes
    inicializarEventListenersComunes();
    
    // Inicializar página específica
    switch(page) {
        case 'index':
            inicializarHome();
            break;
        case 'carreras':
            inicializarCarreras();
            break;
        case 'universidades':
            inicializarUniversidades();
            break;
    }
}

// Obtener página actual
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    if (filename === 'index.html' || filename === '' || filename.includes('index')) {
        return 'index';
    } else if (filename === 'carreras.html' || filename.includes('carreras')) {
        return 'carreras';
    } else if (filename === 'universidades.html' || filename.includes('universidades')) {
        return 'universidades';
    }
    return 'index';
}

// =============================================
// INICIALIZACIÓN POR PÁGINA
// =============================================

function inicializarHome() {
    // Inicializar carrusel
    initCarousel();
    
    // Animar contadores
    animarContadores();
}

function inicializarCarreras() {
    // Inicializar carrusel
    initCarousel();
    
    // Inicializar elementos específicos de carreras
    const searchInput = document.getElementById("searchInput");
    const areaFilter = document.getElementById("areaFilter");
    const ciudadFilter = document.getElementById("ciudadFilter");
    const modalidadFilter = document.getElementById("modalidadFilter");
    const resultsGrid = document.getElementById("resultsGrid");
    
    if (resultsGrid) {
        // Mostrar carreras iniciales
        carrerasFiltradas = carrerasData.slice(0, 6);
        mostrarCarreras(carrerasFiltradas);
        actualizarContadorResultados();
    }
    
    // Agregar Esmeraldas al filtro si existe
    agregarEsmeraldasAlFiltro();
    
    // Inicializar event listeners específicos de carreras
    if (searchInput) {
        searchInput.addEventListener("input", filtrarCarreras);
    }
    if (areaFilter) {
        areaFilter.addEventListener("change", filtrarCarreras);
    }
    if (ciudadFilter) {
        ciudadFilter.addEventListener("change", filtrarCarreras);
    }
    if (modalidadFilter) {
        modalidadFilter.addEventListener("change", filtrarCarreras);
    }
}

function inicializarUniversidades() {
    const universityCards = document.querySelectorAll('.university-card');
    universityCards.forEach(card => {
        card.addEventListener('click', function() {
            const universityId = parseInt(this.getAttribute('data-university-id'));
            mostrarDetalleUniversidad(universityId);
        });
    });
}

// =============================================
// CARRUSEL
// =============================================

function initCarousel() {
    const slides = document.querySelectorAll('.fullwidth-carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Configurar eventos para las flechas
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            clearInterval(carouselInterval);
            moveCarousel(-1);
            startCarousel();
        });
    }
    
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            clearInterval(carouselInterval);
            moveCarousel(1);
            startCarousel();
        });
    }
    
    // Configurar eventos para los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(carouselInterval);
            goToSlide(index);
            startCarousel();
        });
    });
    
    // Iniciar carrusel automático
    startCarousel();
    
    // Pausar carrusel cuando el mouse está sobre él
    const carousel = document.querySelector('.fullwidth-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            startCarousel();
        });
    }
}

function startCarousel() {
    carouselInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.fullwidth-carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Remover clase active de la slide actual
    slides[currentCarouselSlide].classList.remove('active');
    if (dots[currentCarouselSlide]) {
        dots[currentCarouselSlide].classList.remove('active');
    }
    
    // Calcular nueva posición
    currentCarouselSlide += direction;
    
    // Verificar límites
    if (currentCarouselSlide >= slides.length) {
        currentCarouselSlide = 0;
    } else if (currentCarouselSlide < 0) {
        currentCarouselSlide = slides.length - 1;
    }
    
    // Agregar clase active a la nueva slide
    slides[currentCarouselSlide].classList.add('active');
    if (dots[currentCarouselSlide]) {
        dots[currentCarouselSlide].classList.add('active');
    }
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.fullwidth-carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0 || index < 0 || index >= slides.length) return;
    
    // Remover clase active de la slide actual
    slides[currentCarouselSlide].classList.remove('active');
    if (dots[currentCarouselSlide]) {
        dots[currentCarouselSlide].classList.remove('active');
    }
    
    // Actualizar índice
    currentCarouselSlide = index;
    
    // Agregar clase active a la nueva slide
    slides[currentCarouselSlide].classList.add('active');
    if (dots[currentCarouselSlide]) {
        dots[currentCarouselSlide].classList.add('active');
    }
}

// =============================================
// BÚSQUEDA Y FILTRADO
// =============================================

function filtrarCarreras() {
    const searchInput = document.getElementById("searchInput");
    const areaFilter = document.getElementById("areaFilter");
    const ciudadFilter = document.getElementById("ciudadFilter");
    const modalidadFilter = document.getElementById("modalidadFilter");
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const areaSeleccionada = areaFilter ? areaFilter.value : '';
    const ciudadSeleccionada = ciudadFilter ? ciudadFilter.value : '';
    const modalidadSeleccionada = modalidadFilter ? modalidadFilter.value : '';
    
    // Verificar si hay algún filtro activo
    enBusqueda = searchTerm !== '' || 
                 areaSeleccionada !== '' || 
                 ciudadSeleccionada !== '' || 
                 modalidadSeleccionada !== '';
    
    // Si no hay búsqueda activa, mostrar solo 6 carreras
    if (!enBusqueda) {
        carrerasFiltradas = carrerasData.slice(0, 6);
        mostrarCarreras(carrerasFiltradas);
        actualizarContadorResultados();
        return;
    }
    
    // Si hay búsqueda, filtrar todas las carreras
    carrerasFiltradas = carrerasData.filter((carrera) => {
        const coincideNombre =
            carrera.nombre.toLowerCase().includes(searchTerm) ||
            carrera.universidad.toLowerCase().includes(searchTerm) ||
            carrera.descripcion.toLowerCase().includes(searchTerm);
        
        const coincideArea = !areaSeleccionada || carrera.area === areaSeleccionada;
        const coincideCiudad = !ciudadSeleccionada || carrera.ciudad === ciudadSeleccionada;
        const coincideModalidad = !modalidadSeleccionada || carrera.modalidad === modalidadSeleccionada;
        
        return coincideNombre && coincideArea && coincideCiudad && coincideModalidad;
    });
    
    mostrarCarreras(carrerasFiltradas);
    actualizarContadorResultados();
}

// =============================================
// VISUALIZACIÓN DE RESULTADOS
// =============================================

function mostrarCarreras(carreras) {
    const resultsGrid = document.getElementById("resultsGrid");
    const noResults = document.getElementById("noResults");
    
    if (!resultsGrid || !noResults) return;
    
    if (carreras.length === 0) {
        resultsGrid.style.display = "none";
        noResults.style.display = "block";
        return;
    }
    
    resultsGrid.style.display = "grid";
    noResults.style.display = "none";
    
    resultsGrid.innerHTML = carreras
        .map(
            (carrera) => `
                <div class="career-card" onclick="mostrarDetalleCarrera(${carrera.id})">
                    <h4>${carrera.nombre}</h4>
                    <div class="career-info">
                        <p><i class="fas fa-university"></i> ${carrera.universidad}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${capitalizeFirst(carrera.ciudad)}</p>
                        <p><i class="fas fa-clock"></i> ${carrera.duracion}</p>
                        <p><i class="fas fa-laptop"></i> ${capitalizeFirst(carrera.modalidad)}</p>
                    </div>
                    <p class="career-description">${carrera.descripcion}</p>
                    <div class="career-tags">
                        <span class="tag area">${getAreaLabel(carrera.area)}</span>
                        <span class="tag">${capitalizeFirst(carrera.ciudad)}</span>
                    </div>
                </div>
            `
        )
        .join("");
    
    // Agregar animación a las tarjetas
    const cards = resultsGrid.querySelectorAll(".career-card");
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
}

function actualizarContadorResultados() {
    const resultsCount = document.getElementById("resultsCount");
    if (!resultsCount) return;
    
    const total = carrerasFiltradas.length;
    const totalCarreras = carrerasData.length;
    
    if (total === 0) {
        resultsCount.textContent = "No se encontraron resultados";
    } else if (!enBusqueda) {
        resultsCount.textContent = "Mostrando 6 carreras destacadas. Usa la búsqueda para ver más.";
    } else if (total === totalCarreras) {
        resultsCount.textContent = "Mostrando todas las carreras";
    } else {
        resultsCount.textContent = `Mostrando ${total} carrera${total === 1 ? "" : "s"}`;
    }
}

// =============================================
// MODALES
// =============================================

function mostrarDetalleCarrera(id) {
    const carrera = carrerasData.find((c) => c.id === id);
    if (!carrera) {
        console.error('Carrera no encontrada:', id);
        return;
    }
    
    const modal = document.getElementById("careerModal");
    if (!modal) {
        console.error('Modal de carrera no encontrado');
        return;
    }
    
    // Cargar header
    const modalHeader = document.getElementById("modalHeader");
    if (modalHeader) {
        modalHeader.innerHTML = `
            <h3>${carrera.nombre}</h3>
            <p>${carrera.universidad}</p>
        `;
    }
    
    // Cargar la imagen
    const modalImageContainer = document.getElementById("modalImageContainer");
    if (modalImageContainer) {
        if (carrera.imagen) {
            modalImageContainer.innerHTML = `
                <div class="modal-image-container">
                    <img src="${carrera.imagen}" alt="${carrera.nombre}" class="modal-image">
                </div>
            `;
        } else {
            modalImageContainer.innerHTML = `
                <div class="modal-image-container">
                    <div class="modal-image-placeholder">
                        <div>
                            <i class="fas fa-graduation-cap"></i>
                            <p>Imagen de ${carrera.nombre}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    // Cargar título y universidad
    const modalInfoTitle = document.querySelector('#modalInfoTitle');
    if (modalInfoTitle) {
        modalInfoTitle.innerHTML = `
            <h4>${carrera.nombre}</h4>
            <p>${carrera.universidad}</p>
        `;
    }
    
    // Cargar tabla de detalles
    const modalInfoDetails = document.querySelector('#modalInfoDetails');
    if (modalInfoDetails) {
        modalInfoDetails.innerHTML = `
            <table>
                <tr>
                    <td>Duración:</td>
                    <td>${carrera.duracion}</td>
                </tr>
                <tr>
                    <td>Modalidad:</td>
                    <td>${capitalizeFirst(carrera.modalidad)}</td>
                </tr>
                <tr>
                    <td>Universidad:</td>
                    <td>${carrera.universidad}</td>
                </tr>
                <tr>
                    <td>Ciudad:</td>
                    <td>${capitalizeFirst(carrera.ciudad)}</td>
                </tr>
            </table>
        `;
    }
    
    // Cargar área de estudio
    const modalAreaSection = document.querySelector('#modalAreaSection');
    if (modalAreaSection) {
        modalAreaSection.innerHTML = `
            <strong>Área:</strong>
            <span>${getAreaLabel(carrera.area)}</span>
        `;
    }
    
    // Cargar contenido adicional
    const modalAdditionalContent = document.querySelector('#modalAdditionalContent');
    if (modalAdditionalContent) {
        modalAdditionalContent.innerHTML = `
            <h5>Descripción</h5>
            <p>${carrera.descripcion}</p>
            
            <h5>Requisitos</h5>
            <p>${carrera.requisitos}</p>
            
            <h5>Campo Laboral</h5>
            <p>${carrera.campoLaboral}</p>
            
            <h5>Más Información</h5>
            <p>Para más información visite la página oficial: 
                <a href="${carrera.pagina}" target="_blank" rel="noopener noreferrer" 
                style="color: var(--primary-color); text-decoration: underline; font-weight: 500;">
                    ${carrera.pagina}
                </a>
            </p>
        `;
    }
    
    // Mostrar modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function mostrarDetalleUniversidad(id) {
    const universidad = universitiesData.find((u) => u.id === id);
    if (!universidad) {
        console.error('Universidad no encontrada:', id);
        return;
    }
    
    const universityModal = document.getElementById("universityModal");
    if (!universityModal) {
        console.error('Modal de universidad no encontrado');
        return;
    }
    
    // Cargar header
    const universityModalHeader = document.getElementById("universityModalHeader");
    if (universityModalHeader) {
        universityModalHeader.innerHTML = `
            <h3>${universidad.nombre}</h3>
            <p>${capitalizeFirst(universidad.ciudad)}</p>
        `;
    }
    
    // Cargar logo
    const universityLogoLarge = document.getElementById('universityLogoLarge');
    if (universityLogoLarge) {
        if (universidad.logo) {
            universityLogoLarge.innerHTML = `
                <img src="${universidad.logo}" alt="${universidad.nombre}" loading="lazy" class="university-logo-img">
            `;
        } else {
            const initials = getUniversityInitials(universidad.nombre);
            universityLogoLarge.innerHTML = `
                <div class="university-logo-placeholder-large" style="background: linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()});">
                    <span style="font-size: 2.5rem; font-weight: bold; color: white;">${initials}</span>
                </div>
            `;
        }
    }
    
    // Cargar título y ciudad
    const universityInfoTitle = document.querySelector('#universityInfoTitle');
    if (universityInfoTitle) {
        universityInfoTitle.innerHTML = `
            <h4>${universidad.nombre}</h4>
            <p>${capitalizeFirst(universidad.ciudad)}</p>
        `;
    }
    
    // Cargar tabla de información
    const universityInfoDetails = document.querySelector('#universityInfoDetails');
    if (universityInfoDetails) {
        universityInfoDetails.innerHTML = `
            <table>
                <tr>
                    <td>Tipo:</td>
                    <td>${universidad.tipo}</td>
                </tr>
                <tr>
                    <td>Ciudad:</td>
                    <td>${capitalizeFirst(universidad.ciudad)}</td>
                </tr>
                <tr>
                    <td>Fundación:</td>
                    <td>${universidad.fundacion}</td>
                </tr>
                <tr>
                    <td>Estudiantes:</td>
                    <td>${universidad.estudiantes}</td>
                </tr>
            </table>
        `;
    }
    
    // Cargar carreras destacadas
    const universityCarrerasSection = document.querySelector('#universityCarrerasSection');
    if (universityCarrerasSection) {
        universityCarrerasSection.innerHTML = `
            <h5>Carreras Destacadas</h5>
            <div class="university-carreras-list">
                ${universidad.carrerasDestacadas.map(carrera => 
                    `<span class="university-carrera-tag">${carrera}</span>`
                ).join('')}
            </div>
        `;
    }
    
    // Cargar contenido adicional
    const universityAdditionalContent = document.querySelector('#universityAdditionalContent');
    if (universityAdditionalContent) {
        universityAdditionalContent.innerHTML = `
            <h5>Descripción</h5>
            <p>${universidad.descripcion}</p>
            
            <h5>Contacto</h5>
            <p>${universidad.contacto}</p>
            
            <h5>Más Información</h5>
            <p>Para más información visite la página oficial:</p>
            <a href="${universidad.pagina}" target="_blank" rel="noopener noreferrer" 
                class="university-visit-button">
                Visitar Sitio Web
            </a>
        `;
    }
    
    // Mostrar modal
    universityModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// =============================================
// FUNCIONES AUXILIARES
// =============================================

function animarContadores() {
    const counters = [
        {
            element: document.getElementById("carrerasCount"),
            target: 150,
            suffix: "+",
        },
        {
            element: document.getElementById("universidadesCount"),
            target: 50,
            suffix: "+",
        },
        {
            element: document.getElementById("ciudadesCount"),
            target: 21,
            suffix: "+",
        },
    ];

    counters.forEach((counter) => {
        if (counter.element) {
            animateCounter(counter.element, counter.target, counter.suffix);
        }
    });
}

// =============================================
// EVENT LISTENERS COMUNES
// =============================================

function inicializarEventListenersComunes() {
    // Modal de carrera
    const modal = document.getElementById("careerModal");
    const closeModal = document.getElementById("closeModal");
    
    if (modal && closeModal) {
        closeModal.addEventListener("click", cerrarModal);
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                cerrarModal();
            }
        });
    }
    
    // Modal de universidad
    const universityModal = document.getElementById("universityModal");
    const closeUniversityModal = document.getElementById("closeUniversityModal");
    
    if (universityModal && closeUniversityModal) {
        closeUniversityModal.addEventListener("click", cerrarModalUniversidad);
        universityModal.addEventListener("click", function (e) {
            if (e.target === universityModal) {
                cerrarModalUniversidad();
            }
        });
    }
    
    // Menú móvil
    const menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMobileMenu);
    }
    
    // Cerrar modales con Escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            const modal = document.getElementById("careerModal");
            const universityModal = document.getElementById("universityModal");
            
            if (modal && modal.style.display === "block") {
                cerrarModal();
            }
            if (universityModal && universityModal.style.display === "block") {
                cerrarModalUniversidad();
            }
        }
    });
}

function cerrarModal() {
    const modal = document.getElementById("careerModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function cerrarModalUniversidad() {
    const universityModal = document.getElementById("universityModal");
    if (universityModal) {
        universityModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// =============================================
// FUNCIONES GLOBALES
// =============================================

// Hacer funciones disponibles globalmente
window.mostrarDetalleCarrera = mostrarDetalleCarrera;
window.mostrarDetalleUniversidad = mostrarDetalleUniversidad;
window.cerrarModal = cerrarModal;
window.cerrarModalUniversidad = cerrarModalUniversidad;
window.moveCarousel = moveCarousel;
window.goToSlide = goToSlide;
window.redirigirACarreras = redirigirACarreras;

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", initApp);
