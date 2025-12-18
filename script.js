// Base de datos simulada de carreras universitarias en Ecuador

// =============================================
// SECCIÓN 1: BASE DE DATOS DE CARRERAS
// =============================================

const carrerasData = [
  // Ciencias de la Salud
  {
    id: 1,
    nombre: "Medicina",
    area: "ciencias-salud",
    universidad: "Universidad Central del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "6 años",
    descripcion:
      "Formación integral de profesionales médicos para la atención primaria y especializada de la salud.",
    requisitos:
      "Bachillerato en Ciencias, Examen de acceso a la educación superior",
    campoLaboral:
      "Hospitales, clínicas, centros de salud, investigación médica",
    pagina: "https://www.uce.edu.ec/web/fcm",
  },
  {
    id: 2,
    nombre: "Enfermería",
    area: "ciencias-salud",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Formación de profesionales de enfermería para el cuidado integral de la salud.",
    requisitos: "Bachillerato en Ciencias, Vocación de servicio",
    campoLaboral:
      "Hospitales, clínicas, centros de salud, atención domiciliaria",
    pagina: "https://admision.ug.edu.ec/oferta-ug",
  },
  {
    id: 3,
    nombre: "Odontología",
    area: "ciencias-salud",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion:
      "Formación de profesionales en salud bucal, diagnóstico y tratamiento de enfermedades dentales.",
    requisitos: "Bachillerato en Ciencias, Examen de ingreso",
    campoLaboral: "Consultorios dentales, hospitales, clínicas, investigación",
    pagina: "https://www.ucuenca.edu.ec/carreras/odontologia",
  },
  {
    id: 4,
    nombre: "Fisioterapia",
    area: "ciencias-salud",
    universidad: "Universidad San Francisco de Quito",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Rehabilitación física de pacientes mediante técnicas especializadas de movimiento y ejercicio.",
    requisitos: "Bachillerato en Ciencias, Interés en biología y anatomía",
    campoLaboral:
      "Hospitales, clínicas de rehabilitación, centros deportivos",
    pagina: "https://www.usfq.edu.ec/es/carreras-de-pregrado/fisioterapia",
  },
  
  // Ingeniería y Tecnología
  {
    id: 5,
    nombre: "Ingeniería de Sistemas",
    area: "ingenieria",
    universidad: "Escuela Politécnica Nacional",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion:
      "Formación de profesionales en el diseño, desarrollo y gestión de sistemas informáticos.",
    requisitos: "Bachillerato en Ciencias, Matemáticas avanzadas",
    campoLaboral:
      "Empresas de tecnología, bancos, consultoría IT, desarrollo de software",
    pagina: "https://webhistorico.epn.edu.ec/ingenieria-de-sistemas",
  },
  {
    id: 6,
    nombre: "Ingeniería Civil",
    area: "ingenieria",
    universidad: "Escuela Politécnica Nacional",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion:
      "Diseño, construcción y mantenimiento de infraestructuras civiles.",
    requisitos: "Bachillerato en Ciencias, Matemáticas y Física avanzadas",
    campoLaboral:
      "Constructoras, consultoras, sector público, proyectos de infraestructura",
    pagina: "https://www.epn.edu.ec/ingenieria-civil",
  },
  {
    id: 7,
    nombre: "Ingeniería Industrial",
    area: "ingenieria",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion:
      "Optimización de procesos productivos y sistemas organizacionales para mejorar la eficiencia.",
    requisitos: "Bachillerato en Ciencias, Matemáticas y física",
    campoLaboral: "Industrias manufactureras, consultoría, logística",
    pagina: "https://admision.ug.edu.ec/oferta-ug",
  },
  {
    id: 8,
    nombre: "Ingeniería Electrónica",
    area: "ingenieria",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion:
      "Diseño y desarrollo de sistemas electrónicos, circuitos y dispositivos tecnológicos.",
    requisitos: "Bachillerato en Ciencias, Física y matemáticas avanzadas",
    campoLaboral:
      "Empresas de telecomunicaciones, automatización, investigación",
    pagina: "https://uta.edu.ec/ingenieria-electronica",
  },
  
  // Ciencias Sociales
  {
    id: 9,
    nombre: "Psicología",
    area: "ciencias-sociales",
    universidad: "Pontificia Universidad Católica del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Estudio del comportamiento humano y procesos mentales para el bienestar social.",
    requisitos: "Bachillerato, Aptitudes de comunicación",
    campoLaboral:
      "Clínicas, hospitales, instituciones educativas, recursos humanos",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/psicologia-2",
  },
  {
    id: 10,
    nombre: "Derecho",
    area: "ciencias-sociales",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion:
      "Formación integral en ciencias jurídicas y práctica del derecho.",
    requisitos: "Bachillerato, Comprensión lectora avanzada",
    campoLaboral:
      "Bufetes jurídicos, instituciones públicas, sector empresarial",
    pagina: "https://www.ucuenca.edu.ec/carreras/derecho",
  },
  {
    id: 11,
    nombre: "Comunicación Social",
    area: "ciencias-sociales",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Formación en periodismo, comunicación audiovisual y medios digitales.",
    requisitos: "Bachillerato, Habilidades de comunicación",
    campoLaboral:
      "Medios de comunicación, agencias de publicidad, comunicación corporativa",
    pagina: "https://admision.ug.edu.ec/oferta-ug",
  },
  {
    id: 12,
    nombre: "Sociología",
    area: "ciencias-sociales",
    universidad: "Universidad Central del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Estudio científico de la sociedad, estructuras sociales y relaciones humanas.",
    requisitos: "Bachillerato, Interés en ciencias sociales",
    campoLaboral:
      "Investigación social, organismos públicos, ONGs, consultoría",
    pagina: "https://www.uce.edu.ec/web/facultad-de-ciencias-sociales",
  },
  
  // Arte y Humanidades
  {
    id: 13,
    nombre: "Arquitectura",
    area: "arte-humanidades",
    universidad: "Universidad Central del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion:
      "Diseño y planificación de espacios arquitectónicos y urbanos.",
    requisitos: "Bachillerato, Habilidades de dibujo y creatividad",
    campoLaboral:
      "Estudios de arquitectura, construcción, planificación urbana",
    pagina: "https://www.uce.edu.ec/web/fau",
  },
  {
    id: 14,
    nombre: "Diseño Gráfico",
    area: "arte-humanidades",
    universidad: "Universidad San Francisco de Quito",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Creación de soluciones visuales para comunicación y publicidad.",
    requisitos: "Bachillerato, Creatividad, habilidades artísticas",
    campoLaboral:
      "Agencias de publicidad, estudios de diseño, medios digitales",
    pagina: "https://www.usfq.edu.ec/es/carreras-de-pregrado/diseno-grafico",
  },
  {
    id: 15,
    nombre: "Artes Plásticas",
    area: "arte-humanidades",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Expresión artística a través de diferentes técnicas y medios visuales.",
    requisitos: "Bachillerato, Portafolio artístico, entrevista",
    campoLaboral:
      "Estudios de arte, galerías, docencia, proyectos culturales",
    pagina: "https://www.ucuenca.edu.ec/carreras/artes-plasticas",
  },
  {
    id: 16,
    nombre: "Música",
    area: "arte-humanidades",
    universidad: "Universidad de las Américas",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Formación en teoría musical, interpretación y composición.",
    requisitos: "Bachillerato, Prueba de aptitud musical",
    campoLaboral:
      "Orquestas, conservatorios, enseñanza, producción musical",
    pagina: "https://www.udla.edu.ec/estudios/pregrado/musica",
  },
  
  // Ciencias Naturales
  {
    id: 17,
    nombre: "Biología",
    area: "ciencias-naturales",
    universidad: "Universidad Nacional de Loja",
    ciudad: "loja",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio de los seres vivos y sus procesos vitales.",
    requisitos: "Bachillerato en Ciencias, Interés en ciencias naturales",
    campoLaboral:
      "Laboratorios, investigación, conservación ambiental, educación",
    pagina: "https://unl.edu.ec/oferta_academica/facultad-de-la-educacion-el-arte-y-la-comunicacion/pedagogia-de-las-ciencias-3",
  },
  {
    id: 18,
    nombre: "Química",
    area: "ciencias-naturales",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Estudio de la composición, estructura y propiedades de la materia.",
    requisitos: "Bachillerato en Ciencias, Matemáticas y física",
    campoLaboral:
      "Laboratorios, industria farmacéutica, control de calidad, investigación",
    pagina: "https://uta.edu.ec/quimica",
  },
  {
    id: 19,
    nombre: "Geología",
    area: "ciencias-naturales",
    universidad: "Escuela Politécnica Nacional",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Estudio de la Tierra, sus materiales, estructura y procesos geológicos.",
    requisitos: "Bachillerato en Ciencias, Matemáticas y física",
    campoLaboral: "Minería, petróleo, geotecnia, investigación",
    pagina: "https://www.epn.edu.ec/geologia",
  },
  {
    id: 20,
    nombre: "Física",
    area: "ciencias-naturales",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Estudio de las leyes fundamentales que rigen el universo y la materia.",
    requisitos: "Bachillerato en Ciencias, Matemáticas avanzadas",
    campoLaboral:
      "Investigación, docencia, industria tecnológica, consultoría",
    pagina: "https://www.ucuenca.edu.ec/carreras/fisica",
  },
  
  // Educación
  {
    id: 21,
    nombre: "Educación Básica",
    area: "educacion",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación de docentes para la educación básica y primaria.",
    requisitos: "Bachillerato, Vocación docente",
    campoLaboral:
      "Instituciones educativas públicas y privadas, centros de capacitación",
    pagina: "https://uta.edu.ec/educacion-basica",
  },
  {
    id: 22,
    nombre: "Pedagogía",
    area: "educacion",
    universidad: "Universidad Central del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Ciencia de la educación, enfocada en métodos y procesos de enseñanza.",
    requisitos: "Bachillerato, Interés en procesos educativos",
    campoLaboral:
      "Instituciones educativas, diseño curricular, investigación educativa",
    pagina: "https://www.uce.edu.ec/web/facultad-de-filosofia",
  },
  {
    id: 23,
    nombre: "Educación Inicial",
    area: "educacion",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación especializada en educación para la primera infancia.",
    requisitos: "Bachillerato, Paciencia y amor por los niños",
    campoLaboral: "Jardines infantiles, centros de desarrollo infantil",
    pagina: "https://admision.ug.edu.ec/oferta-ug",
  },
  {
    id: 24,
    nombre: "Educación Especial",
    area: "educacion",
    universidad: "Universidad Técnica del Norte",
    ciudad: "riobamba",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Formación para atender necesidades educativas especiales y discapacidades.",
    requisitos: "Bachillerato, Sensibilidad social, paciencia",
    campoLaboral:
      "Centros de educación especial, inclusión educativa, terapia",
    pagina: "https://utn.edu.ec/educacion-especial",
  },
  
  // Economía y Negocios
  {
    id: 25,
    nombre: "Administración de Empresas",
    area: "economia-negocios",
    universidad: "Universidad San Francisco de Quito",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Desarrollo de habilidades gerenciales y empresariales para liderar organizaciones.",
    requisitos: "Bachillerato, Matemáticas básicas",
    campoLaboral: "Empresas públicas y privadas, emprendimientos, consultoría",
    pagina: "https://www.usfq.edu.ec/es/carreras-de-pregrado/administracion-de-empresas",
  },
  {
    id: 26,
    nombre: "Marketing Digital",
    area: "economia-negocios",
    universidad: "Universidad Tecnológica Israel",
    ciudad: "quito",
    modalidad: "virtual",
    duracion: "3.5 años",
    descripcion:
      "Estrategias de marketing en plataformas digitales y comercio electrónico.",
    requisitos: "Bachillerato, Conocimientos básicos de informática",
    campoLaboral:
      "Agencias de marketing, e-commerce, redes sociales, consultoría digital",
    pagina: "https://educontinua.uisrael.edu.ec/esiec/InformacionCursos.aspx?param1=23200",
  },
  {
    id: 27,
    nombre: "Contabilidad y Auditoría",
    area: "economia-negocios",
    universidad: "Universidad Técnica de Machala",
    ciudad: "machala",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Gestión financiera, contable y auditoría empresarial.",
    requisitos: "Bachillerato, Aptitudes matemáticas",
    campoLaboral:
      "Empresas públicas y privadas, firmas de auditoría, consultoría financiera",
    pagina: "https://portal.utmachala.edu.ec/portalwp/carrera/contabilidad-y-auditoria",
  },
  {
    id: 28,
    nombre: "Turismo",
    area: "economia-negocios",
    universidad: "Universidad Técnica del Norte",
    ciudad: "riobamba",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Gestión y promoción de destinos turísticos y servicios de hospitalidad.",
    requisitos: "Bachillerato, Idiomas (preferible)",
    campoLaboral:
      "Hoteles, agencias de viajes, ministerio de turismo, emprendimiento turístico",
    pagina: "https://turismo.utn.edu.ec",
  },
  
  // Carreras adicionales para cobertura completa
  {
    id: 29,
    nombre: "Veterinaria",
    area: "ciencias-salud",
    universidad: "Universidad de las Américas",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Cuidado integral de la salud animal y medicina veterinaria.",
    requisitos: "Bachillerato en Ciencias, Amor por los animales",
    campoLaboral:
      "Clínicas veterinarias, granjas, zoológicos, investigación animal",
    pagina: "https://www.udla.edu.ec/estudios/pregrado/medicina-veterinaria",
  },
  {
    id: 30,
    nombre: "Ingeniería Ambiental",
    area: "ingenieria",
    universidad: "Universidad Técnica de Machala",
    ciudad: "machala",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion:
      "Solución de problemas ambientales mediante técnicas de ingeniería.",
    requisitos: "Bachillerato en Ciencias, Interés en medio ambiente",
    campoLaboral: "Consultoría ambiental, gestión de residuos, auditorías",
    pagina: "https://portal.utmachala.edu.ec/portalwp/carrera/ingenieria-ambiental",
  },
  {
    id: 31,
    nombre: "Relaciones Internacionales",
    area: "ciencias-sociales",
    universidad: "Universidad San Francisco de Quito",
    ciudad: "quito",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion:
      "Estudio de las relaciones entre estados y actores internacionales.",
    requisitos: "Bachillerato, Idiomas, interés en política internacional",
    campoLaboral: "Cancillería, organismos internacionales, ONGs",
    pagina: "https://www.usfq.edu.ec/es/carreras-de-pregrado/relaciones-internacionales",
  },
  {
    id: 32,
    nombre: "Historia del Arte",
    area: "arte-humanidades",
    universidad: "Pontificia Universidad Católica del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Estudio crítico de las manifestaciones artísticas a través del tiempo.",
    requisitos: "Bachillerato, Interés en arte y cultura",
    campoLaboral: "Museos, galerías, crítica de arte, investigación",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/historia-del-arte",
  },
  {
    id: 33,
    nombre: "Matemáticas",
    area: "ciencias-naturales",
    universidad: "Universidad Nacional de Loja",
    ciudad: "loja",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Estudio de estructuras, patrones y relaciones matemáticas abstractas.",
    requisitos: "Bachillerato en Ciencias, Aptitud para las matemáticas",
    campoLaboral:
      "Docencia, investigación, análisis de datos, criptografía",
    pagina: "https://unl.edu.ec/oferta_academica/facultad-de-la-educacion-el-arte-y-la-comunicacion/matematicas",
  },
  {
    id: 34,
    nombre: "Educación Física",
    area: "educacion",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion:
      "Formación en pedagogía de la actividad física y el deporte.",
    requisitos: "Bachillerato, Condición física adecuada",
    campoLaboral:
      "Instituciones educativas, clubes deportivos, gimnasios",
    pagina: "https://www.ucuenca.edu.ec/carreras/educacion-fisica",
  },
  {
    id: 35,
    nombre: "Finanzas",
    area: "economia-negocios",
    universidad: "Universidad de las Américas",
    ciudad: "quito",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion:
      "Gestión de recursos financieros, inversiones y análisis de mercados.",
    requisitos: "Bachillerato, Aptitudes matemáticas y analíticas",
    campoLaboral:
      "Bancos, fondos de inversión, empresas, consultoría financiera",
    pagina: "https://www.udla.edu.ec/estudios/pregrado/finanzas",
  },
  {
    id: 36,
    nombre: "Enfermería (Semipresencial)",
    area: "ciencias-salud",
    universidad: "Universidad Técnica Particular de Loja",
    ciudad: "loja",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion:
      "Formación de enfermeros con modalidad semipresencial para mayor flexibilidad.",
    requisitos: "Bachillerato en Ciencias, Acceso a internet",
    campoLaboral:
      "Hospitales, clínicas, atención primaria, telemedicina",
    pagina: "https://www.utpl.edu.ec/carreras/enfermeria",
  },
];

// =============================================
// SECCIÓN 2: CARRUSEL DE IMÁGENES DE FONDO
// =============================================

// Seleccionamos el contenedor
const inicio = document.getElementById("inicio");

// Sacamos las imágenes desde los <li><img>
const imagenes = Array.from(inicio.querySelectorAll("ul li img")).map(
  (img) => img.src
);

let indice = 0;

// Función para cambiar el fondo
function cambiarFondo() {
  inicio.style.backgroundImage = `url('${imagenes[indice]}')`;
  indice = (indice + 1) % imagenes.length;
}

// Mostrar la primera imagen y empezar el cambio
cambiarFondo();
setInterval(cambiarFondo, 5000); // cambia cada 5 segundos

// =============================================
// SECCIÓN 3: VARIABLES GLOBALES Y ELEMENTOS DOM
// =============================================

// Variables globales
let carrerasFiltradas = [];
let enBusqueda = false;

// Elementos del DOM
const searchInput = document.getElementById("searchInput");
const areaFilter = document.getElementById("areaFilter");
const ciudadFilter = document.getElementById("ciudadFilter");
const modalidadFilter = document.getElementById("modalidadFilter");
const resultsGrid = document.getElementById("resultsGrid");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
const modal = document.getElementById("careerModal");
const modalHeader = document.getElementById("modalHeader");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const menuToggle = document.getElementById("menuToggle");

// =============================================
// SECCIÓN 4: INICIALIZACIÓN DE LA APLICACIÓN
// =============================================

// Inicialización de la aplicación
document.addEventListener("DOMContentLoaded", function () {
  // Inicialmente mostrar solo 6 carreras
  carrerasFiltradas = carrerasData.slice(0, 6);
  mostrarCarreras(carrerasFiltradas);
  actualizarContadorResultados();
  
  inicializarEventListeners();
  animarContadores();
});

// =============================================
// SECCIÓN 5: MANEJO DE EVENTOS
// =============================================

// Event listeners
function inicializarEventListeners() {
  // Búsqueda en tiempo real
  searchInput.addEventListener("input", filtrarCarreras);

  // Filtros
  areaFilter.addEventListener("change", filtrarCarreras);
  ciudadFilter.addEventListener("change", filtrarCarreras);
  modalidadFilter.addEventListener("change", filtrarCarreras);

  // Modal
  closeModal.addEventListener("click", cerrarModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  // Navegación suave
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Menu toggle para móvil
  menuToggle.addEventListener("click", toggleMobileMenu);

  // Cerrar modal con Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      cerrarModal();
    }
  });

  // Detectar cuando se limpian todos los filtros para volver a mostrar solo 6
  searchInput.addEventListener('input', function() {
    if (this.value === '' && areaFilter.value === '' && ciudadFilter.value === '' && modalidadFilter.value === '') {
      resetearABusquedaInicial();
    }
  });

  areaFilter.addEventListener('change', function() {
    if (this.value === '' && ciudadFilter.value === '' && modalidadFilter.value === '' && searchInput.value === '') {
      resetearABusquedaInicial();
    }
  });

  ciudadFilter.addEventListener('change', function() {
    if (this.value === '' && areaFilter.value === '' && modalidadFilter.value === '' && searchInput.value === '') {
      resetearABusquedaInicial();
    }
  });

  modalidadFilter.addEventListener('change', function() {
    if (this.value === '' && areaFilter.value === '' && ciudadFilter.value === '' && searchInput.value === '') {
      resetearABusquedaInicial();
    }
  });
}

// =============================================
// SECCIÓN 6: FILTRADO Y BÚSQUEDA
// =============================================

// Función para resetear a la búsqueda inicial (6 carreras)
function resetearABusquedaInicial() {
  enBusqueda = false;
  carrerasFiltradas = carrerasData.slice(0, 6);
  mostrarCarreras(carrerasFiltradas);
  actualizarContadorResultados();
}

// Función para filtrar carreras
function filtrarCarreras() {
  const searchTerm = searchInput.value.toLowerCase();
  const areaSeleccionada = areaFilter.value;
  const ciudadSeleccionada = ciudadFilter.value;
  const modalidadSeleccionada = modalidadFilter.value;

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
    const coincideCiudad =
      !ciudadSeleccionada || carrera.ciudad === ciudadSeleccionada;
    const coincideModalidad =
      !modalidadSeleccionada || carrera.modalidad === modalidadSeleccionada;

    return (
      coincideNombre && coincideArea && coincideCiudad && coincideModalidad
    );
  });

  mostrarCarreras(carrerasFiltradas);
  actualizarContadorResultados();
}

// =============================================
// SECCIÓN 7: VISUALIZACIÓN DE RESULTADOS
// =============================================

// Función para mostrar carreras
function mostrarCarreras(carreras) {
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
                <p><i class="fas fa-map-marker-alt"></i> ${capitalizeFirst(
                  carrera.ciudad
                )}</p>
                <p><i class="fas fa-clock"></i> ${carrera.duracion}</p>
                <p><i class="fas fa-laptop"></i> ${capitalizeFirst(
                  carrera.modalidad
                )}</p>
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
    card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
  });
}

// =============================================
// SECCIÓN 8: MODAL DE DETALLES
// =============================================

// Función para mostrar detalle de carrera en modal
function mostrarDetalleCarrera(id) {
  const carrera = carrerasData.find((c) => c.id === id);
  if (!carrera) return;

  modalHeader.innerHTML = `
        <h3>${carrera.nombre}</h3>
        <p>${carrera.universidad}</p>
    `;

  modalBody.innerHTML = `
        <div class="modal-info">
            <div class="modal-info-item">
                <strong>Área de estudio:</strong>
                ${getAreaLabel(carrera.area)}
            </div>
            <div class="modal-info-item">
                <strong>Duración:</strong>
                ${carrera.duracion}
            </div>
            <div class="modal-info-item">
                <strong>Ciudad:</strong>
                ${capitalizeFirst(carrera.ciudad)}
            </div>
            <div class="modal-info-item">
                <strong>Modalidad:</strong>
                ${capitalizeFirst(carrera.modalidad)}
            </div>
        </div>
        
        <div style="margin-top: 2rem;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Descripción</h4>
            <p>${carrera.descripcion}</p>
        </div>
        
        <div style="margin-top: 2rem;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Requisitos</h4>
            <p>${carrera.requisitos}</p>
        </div>
        
        <div style="margin-top: 2rem;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Campo Laboral</h4>
            <p>${carrera.campoLaboral}</p>
        </div>
        
        <div style="margin-top: 2rem;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Más Información</h4>
            <p>Para más información visite la página oficial: 
                <a href="${carrera.pagina}" target="_blank" rel="noopener noreferrer" 
                style="color: var(--primary-color); text-decoration: underline; font-weight: 500;">
                    ${carrera.pagina}
                </a>
            </p>
        </div>
    `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevenir scroll del body
}
// Hacer la función accesible globalmente para el onclick en HTML
window.mostrarDetalleCarrera = mostrarDetalleCarrera;

// Función para cerrar modal
function cerrarModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restaurar scroll del body
}

// =============================================
// SECCIÓN 9: FUNCIONES AUXILIARES
// =============================================

// Función para actualizar contador de resultados
function actualizarContadorResultados() {
  const total = carrerasFiltradas.length;
  const totalCarreras = carrerasData.length;
  
  if (total === 0) {
    resultsCount.textContent = "No se encontraron resultados";
  } else if (!enBusqueda) {
    resultsCount.textContent = "Mostrando 6 carreras destacadas. Usa la búsqueda para ver más.";
  } else if (total === totalCarreras) {
    resultsCount.textContent = "Mostrando todas las carreras";
  } else {
    resultsCount.textContent = `Mostrando ${total} carrera${
      total === 1 ? "" : "s"
    }`;
  }
}

// Funciones auxiliares
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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

// =============================================
// SECCIÓN 10: ANIMACIONES Y EFECTOS
// =============================================

// Función para animar contadores en hero
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
      target: 20,
      suffix: "+",
    },
  ];

  counters.forEach((counter) => {
    animateCounter(counter.element, counter.target, counter.suffix);
  });
}

function animateCounter(element, target, suffix = "") {
  let current = 0;
  const increment = target / 50; // 50 pasos para la animación
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 50);
}

// Toggle para menú móvil
function toggleMobileMenu() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("show");
}

// =============================================
// SECCIÓN 11: ESTILOS DINÁMICOS
// =============================================

// Animaciones CSS adicionales
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .career-card {
        opacity: 0;
    }
    
    .career-description {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.5;
        margin: 1rem 0;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    @media (max-width: 768px) {
        .nav.show {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: var(--shadow-lg);
            border-top: 1px solid var(--border-color);
        }
        
        .nav.show a {
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .nav.show a:last-child {
            border-bottom: none;
        }
    }
`;
document.head.appendChild(style);

// =============================================
// SECCIÓN 12: OPTIMIZACIONES (LAZY LOADING)
// =============================================

// Lazy loading para mejorar rendimiento
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

// Inicializar lazy loading cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", lazyLoadImages);