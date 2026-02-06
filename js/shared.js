// shared.js - Funciones compartidas entre páginas

// Funciones auxiliares
function capitalizeFirst(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

function redirigirACarreras() {
    window.location.href = 'carreras.html';
}

function getAreaLabel(area) {
    const areas = {
        "ciencias-salud": "Ciencias de la Salud",
        ingenieria: "Ingeniería y Tecnología",
        "ciencias-sociales": "Ciencias Sociales",
        "arte-humanidades": "Arte y Humanidades",
        "ciencias-naturales": "Ciencias Naturales",
        educacion: "Educación",
        "economia-negocios": "Economía y Negocios",
    };
    return areas[area] || area;
}

function getUniversityInitials(name) {
    const words = name.split(' ');
    let initials = '';
    
    for (let word of words) {
        if (word.length > 0 && word[0].toUpperCase() === word[0]) {
            initials += word[0];
        }
        if (initials.length >= 3) break;
    }
    
    if (initials.length < 2) {
        initials = name.substring(0, 3).toUpperCase();
    }
    
    return initials;
}

function getRandomColor() {
    const colors = [
        '#2563eb', '#3b82f6', '#1d4ed8', '#10b981', '#f59e0b', '#ef4444',
        '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#84cc16', '#06b6d4'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function animateCounter(element, target, suffix = "") {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 50);
}

function toggleMobileMenu() {
    const nav = document.querySelector(".nav");
    if (nav) {
        nav.classList.toggle("show");
    }
}

// Lazy loading para imágenes
function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach((img) => imageObserver.observe(img));
}

// Agregar Esmeraldas al filtro de ciudades
function agregarEsmeraldasAlFiltro() {
    const ciudadFilter = document.getElementById("ciudadFilter");
    if (ciudadFilter) {
        const opcionesExistentes = Array.from(ciudadFilter.options).map(opt => opt.value);
        
        if (!opcionesExistentes.includes("esmeraldas")) {
            const nuevaOpcion = document.createElement("option");
            nuevaOpcion.value = "esmeraldas";
            nuevaOpcion.textContent = "Esmeraldas";
            ciudadFilter.appendChild(nuevaOpcion);
        }
    }
}

// Hacer funciones disponibles globalmente
window.capitalizeFirst = capitalizeFirst;
window.getAreaLabel = getAreaLabel;
window.getUniversityInitials = getUniversityInitials;
window.getRandomColor = getRandomColor;
window.animateCounter = animateCounter;
window.toggleMobileMenu = toggleMobileMenu;
window.agregarEsmeraldasAlFiltro = agregarEsmeraldasAlFiltro;