// Base de datos simulada de carreras universitarias en Ecuador

// =============================================
// SECCIÓN 1: BASE DE DATOS DE CARRERAS
// =============================================

const carrerasData = [
  // Ciencias de la Salud - Esmeraldas
  {
    id: 1,
    nombre: "Medicina",
    area: "ciencias-salud",
    universidad: "Universidad Central del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "6 años",
    descripcion: "Formación integral de profesionales médicos para la atención primaria y especializada de la salud.",
    requisitos: "Bachillerato en Ciencias, Examen de acceso a la educación superior",
    campoLaboral: "Hospitales, clínicas, centros de salud, investigación médica",
    pagina: "https://www.uce.edu.ec/web/fcm",
    imagen: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 2,
    nombre: "Enfermería",
    area: "ciencias-salud",
    universidad: "PUCESE - Pontificia Universidad Católica del Ecuador Sede Esmeraldas",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación de profesionales de enfermería para el cuidado integral de la salud en la región costera.",
    requisitos: "Bachillerato en Ciencias, Vocación de servicio",
    campoLaboral: "Hospitales, clínicas, centros de salud, atención comunitaria",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/enfermeria",
    imagen: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 3,
    nombre: "Odontología",
    area: "ciencias-salud",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Formación de profesionales en salud bucal con enfoque en las necesidades de la población esmeraldeña.",
    requisitos: "Bachillerato en Ciencias, Examen de ingreso",
    campoLaboral: "Consultorios dentales, hospitales, clínicas, atención pública",
    pagina: "https://www.ult.edu.ec/carreras/odontologia",
    imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 4,
    nombre: "Fisioterapia",
    area: "ciencias-salud",
    universidad: "Universidad San Francisco de Quito",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Rehabilitación física de pacientes mediante técnicas especializadas de movimiento y ejercicio.",
    requisitos: "Bachillerato en Ciencias, Interés en biología y anatomía",
    campoLaboral: "Hospitales, clínicas de rehabilitación, centros deportivos",
    pagina: "https://www.usfq.edu.ec/es/carreras-de-pregrado/fisioterapia",
    imagen: "https://fisionervion.com/wp-content/uploads/2023/12/Diferencias-entre-fisioterapia-y-rehabilitacion.jpg"
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
    descripcion: "Formación de profesionales en el diseño, desarrollo y gestión de sistemas informáticos.",
    requisitos: "Bachillerato en Ciencias, Matemáticas avanzadas",
    campoLaboral: "Empresas de tecnología, bancos, consultoría IT, desarrollo de software",
    pagina: "https://webhistorico.epn.edu.ec/ingenieria-de-sistemas",
    imagen: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 6,
    nombre: "Ingeniería Civil",
    area: "ingenieria",
    universidad: "Escuela Politécnica Nacional",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Diseño, construcción y mantenimiento de infraestructuras civiles.",
    requisitos: "Bachillerato en Ciencias, Matemáticas y Física avanzadas",
    campoLaboral: "Constructoras, consultoras, sector público, proyectos de infraestructura",
    pagina: "https://www.epn.edu.ec/ingenieria-civil",
    imagen: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 7,
    nombre: "Ingeniería en Acuicultura",
    area: "ingenieria",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Formación especializada en cultivo y producción de especies acuáticas en ambientes costeros.",
    requisitos: "Bachillerato en Ciencias, Interés en biología marina",
    campoLaboral: "Granjas acuícolas, centros de investigación marina, pesca",
    pagina: "https://www.ult.edu.ec/carreras/acuicultura",
    imagen: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 8,
    nombre: "Ingeniería Electrónica",
    area: "ingenieria",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Diseño y desarrollo de sistemas electrónicos, circuitos y dispositivos tecnológicos.",
    requisitos: "Bachillerato en Ciencias, Física y matemáticas avanzadas",
    campoLaboral: "Empresas de telecomunicaciones, automatización, investigación",
    pagina: "https://uta.edu.ec/ingenieria-electronica",
    imagen: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  
  // Ciencias Sociales
  {
    id: 9,
    nombre: "Psicología",
    area: "ciencias-sociales",
    universidad: "PUCESE - Pontificia Universidad Católica del Ecuador Sede Esmeraldas",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio del comportamiento humano y procesos mentales con enfoque en la realidad social esmeraldeña.",
    requisitos: "Bachillerato, Aptitudes de comunicación",
    campoLaboral: "Clínicas, hospitales, instituciones educativas, recursos humanos",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/psicologia-2",
    imagen: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 10,
    nombre: "Derecho",
    area: "ciencias-sociales",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Formación integral en ciencias jurídicas y práctica del derecho.",
    requisitos: "Bachillerato, Comprensión lectora avanzada",
    campoLaboral: "Bufetes jurídicos, instituciones públicas, sector empresarial",
    pagina: "https://www.ucuenca.edu.ec/carreras/derecho",
    imagen: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 11,
    nombre: "Comunicación Social",
    area: "ciencias-sociales",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación en periodismo, comunicación audiovisual y medios digitales.",
    requisitos: "Bachillerato, Habilidades de comunicación",
    campoLaboral: "Medios de comunicación, agencias de publicidad, comunicación corporativa",
    pagina: "https://admision.ug.edu.ec/oferta-ug",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 12,
    nombre: "Sociología",
    area: "ciencias-sociales",
    universidad: "Universidad Central del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio científico de la sociedad, estructuras sociales y relaciones humanas.",
    requisitos: "Bachillerato, Interés en ciencias sociales",
    campoLaboral: "Investigación social, organismos públicos, ONGs, consultoría",
    pagina: "https://www.uce.edu.ec/web/facultad-de-ciencias-sociales",
    imagen: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
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
    descripcion: "Diseño y planificación de espacios arquitectónicos y urbanos.",
    requisitos: "Bachillerato, Habilidades de dibujo y creatividad",
    campoLaboral: "Estudios de arquitectura, construcción, planificación urbana",
    pagina: "https://www.uce.edu.ec/web/fau",
    imagen: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 14,
    nombre: "Diseño Gráfico",
    area: "arte-humanidades",
    universidad: "PUCESE - Pontificia Universidad Católica del Ecuador Sede Esmeraldas",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Creación de soluciones visuales con inspiración en la cultura y biodiversidad esmeraldeña.",
    requisitos: "Bachillerato, Creatividad, habilidades artísticas",
    campoLaboral: "Agencias de publicidad, estudios de diseño, medios digitales, turismo",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/diseno-grafico",
    imagen: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 15,
    nombre: "Artes Plásticas",
    area: "arte-humanidades",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Expresión artística a través de diferentes técnicas y medios visuales.",
    requisitos: "Bachillerato, Portafolio artístico, entrevista",
    campoLaboral: "Estudios de arte, galerías, docencia, proyectos culturales",
    pagina: "https://www.ucuenca.edu.ec/carreras/artes-plasticas",
    imagen: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 16,
    nombre: "Música",
    area: "arte-humanidades",
    universidad: "Universidad de las Américas",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación en teoría musical, interpretación y composición.",
    requisitos: "Bachillerato, Prueba de aptitud musical",
    campoLaboral: "Orquestas, conservatorios, enseñanza, producción musical",
    pagina: "https://www.udla.edu.ec/estudios/pregrado/musica",
    imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
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
    campoLaboral: "Laboratorios, investigación, conservación ambiental, educación",
    pagina: "https://unl.edu.ec/oferta_academica/facultad-de-la-educacion-el-arte-y-la-comunicacion/pedagogia-de-las-ciencias-3",
    imagen: "https://images.unsplash.com/photo-1530026405189-8745d6f2e4f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 18,
    nombre: "Química",
    area: "ciencias-naturales",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio de la composición, estructura y propiedades de la materia.",
    requisitos: "Bachillerato en Ciencias, Matemáticas y física",
    campoLaboral: "Laboratorios, industria farmacéutica, control de calidad, investigación",
    pagina: "https://uta.edu.ec/quimica",
    imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 19,
    nombre: "Geología",
    area: "ciencias-naturales",
    universidad: "Escuela Politécnica Nacional",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio de la Tierra, sus materiales, estructura y procesos geológicos.",
    requisitos: "Bachillerato en Ciencias, Matemáticas y física",
    campoLaboral: "Minería, petróleo, geotecnia, investigación",
    pagina: "https://www.epn.edu.ec/geologia",
    imagen: "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 20,
    nombre: "Física",
    area: "ciencias-naturales",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio de las leyes fundamentales que rigen el universo y la materia.",
    requisitos: "Bachillerato en Ciencias, Matemáticas avanzadas",
    campoLaboral: "Investigación, docencia, industria tecnológica, consultoría",
    pagina: "https://www.ucuenca.edu.ec/carreras/fisica",
    imagen: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
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
    campoLaboral: "Instituciones educativas públicas y privadas, centros de capacitación",
    pagina: "https://uta.edu.ec/educacion-basica",
    imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 22,
    nombre: "Pedagogía",
    area: "educacion",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Ciencia de la educación con enfoque en la realidad educativa de la región costera.",
    requisitos: "Bachillerato, Interés en procesos educativos",
    campoLaboral: "Instituciones educativas, diseño curricular, investigación educativa",
    pagina: "https://www.ult.edu.ec/carreras/pedagogia",
    imagen: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
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
    imagen: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 24,
    nombre: "Educación Especial",
    area: "educacion",
    universidad: "Universidad Técnica del Norte",
    ciudad: "riobamba",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación para atender necesidades educativas especiales y discapacidades.",
    requisitos: "Bachillerato, Sensibilidad social, paciencia",
    campoLaboral: "Centros de educación especial, inclusión educativa, terapia",
    pagina: "https://utn.edu.ec/educacion-especial",
    imagen: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
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
    descripcion: "Desarrollo de habilidades gerenciales y empresariales para liderar organizaciones.",
    requisitos: "Bachillerato, Matemáticas básicas",
    campoLaboral: "Empresas públicas y privadas, emprendimientos, consultoría",
    pagina: "https://www.usfq.edu.ec/es/carreras-de-pregrado/administracion-de-empresas",
    imagen: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 26,
    nombre: "Marketing Digital",
    area: "economia-negocios",
    universidad: "Universidad Tecnológica Israel",
    ciudad: "quito",
    modalidad: "virtual",
    duracion: "3.5 años",
    descripcion: "Estrategias de marketing en plataformas digitales y comercio electrónico.",
    requisitos: "Bachillerato, Conocimientos básicos de informática",
    campoLaboral: "Agencias de marketing, e-commerce, redes sociales, consultoría digital",
    pagina: "https://educontinua.uisrael.edu.ec/esiec/InformacionCursos.aspx?param1=23200",
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 27,
    nombre: "Contabilidad y Auditoría",
    area: "economia-negocios",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Gestión financiera y contable para empresas de la región costera.",
    requisitos: "Bachillerato, Aptitudes matemáticas",
    campoLaboral: "Empresas públicas y privadas, firmas de auditoría, consultoría financiera",
    pagina: "https://www.ult.edu.ec/carreras/contabilidad",
    imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 28,
    nombre: "Turismo",
    area: "economia-negocios",
    universidad: "PUCESE - Pontificia Universidad Católica del Ecuador Sede Esmeraldas",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Gestión y promoción del turismo sostenible en la región costera y sus atractivos naturales.",
    requisitos: "Bachillerato, Idiomas (preferible), interés en cultura local",
    campoLaboral: "Hoteles, agencias de viajes, ministerio de turismo, guías turísticos",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/turismo",
    imagen: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
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
    campoLaboral: "Clínicas veterinarias, granjas, zoológicos, investigación animal",
    pagina: "https://www.udla.edu.ec/estudios/pregrado/medicina-veterinaria",
    imagen: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 30,
    nombre: "Ingeniería Ambiental",
    area: "ingenieria",
    universidad: "Universidad Técnica de Machala",
    ciudad: "machala",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Solución de problemas ambientales mediante técnicas de ingeniería.",
    requisitos: "Bachillerato en Ciencias, Interés en medio ambiente",
    campoLaboral: "Consultoría ambiental, gestión de residuos, auditorías",
    pagina: "https://portal.utmachala.edu.ec/portalwp/carrera/ingenieria-ambiental",
    imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 31,
    nombre: "Relaciones Internacionales",
    area: "ciencias-sociales",
    universidad: "Universidad San Francisco de Quito",
    ciudad: "quito",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Estudio de las relaciones entre estados y actores internacionales.",
    requisitos: "Bachillerato, Idiomas, interés en política internacional",
    campoLaboral: "Cancillería, organismos internacionales, ONGs",
    pagina: "https://www.usfq.edu.ec/es/carreras-de-pregrado/relaciones-internacionales",
    imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 32,
    nombre: "Historia del Arte",
    area: "arte-humanidades",
    universidad: "Pontificia Universidad Católica del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio crítico de las manifestaciones artísticas a través del tiempo.",
    requisitos: "Bachillerato, Interés en arte y cultura",
    campoLaboral: "Museos, galerías, crítica de arte, investigación",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/historia-del-arte",
    imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 33,
    nombre: "Matemáticas",
    area: "ciencias-naturales",
    universidad: "Universidad Nacional de Loja",
    ciudad: "loja",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio de estructuras, patrones y relaciones matemáticas abstractas.",
    requisitos: "Bachillerato en Ciencias, Aptitud para las matemáticas",
    campoLaboral: "Docencia, investigación, análisis de datos, criptografía",
    pagina: "https://unl.edu.ec/oferta_academica/facultad-de-la-educacion-el-arte-y-la-comunicacion/matematicas",
    imagen: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 34,
    nombre: "Educación Física",
    area: "educacion",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación en pedagogía de la actividad física y el deporte.",
    requisitos: "Bachillerato, Condición física adecuada",
    campoLaboral: "Instituciones educativas, clubes deportivos, gimnasios",
    pagina: "https://www.ucuenca.edu.ec/carreras/educacion-fisica",
    imagen: "https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 35,
    nombre: "Finanzas",
    area: "economia-negocios",
    universidad: "Universidad de las Américas",
    ciudad: "quito",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Gestión de recursos financieros, inversiones y análisis de mercados.",
    requisitos: "Bachillerato, Aptitudes matemáticas y analíticas",
    campoLaboral: "Bancos, fondos de inversión, empresas, consultoría financiera",
    pagina: "https://www.udla.edu.ec/estudios/pregrado/finanzas",
    imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 36,
    nombre: "Enfermería (Semipresencial)",
    area: "ciencias-salud",
    universidad: "Universidad Técnica Particular de Loja",
    ciudad: "loja",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Formación de enfermeros con modalidad semipresencial para mayor flexibilidad.",
    requisitos: "Bachillerato en Ciencias, Acceso a internet",
    campoLaboral: "Hospitales, clínicas, atención primaria, telemedicina",
    pagina: "https://www.utpl.edu.ec/carreras/enfermeria",
    imagen: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  // Carreras adicionales para Esmeraldas
  {
    id: 37,
    nombre: "Gastronomía",
    area: "arte-humanidades",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Arte culinario con énfasis en la gastronomía costera y afroecuatoriana.",
    requisitos: "Bachillerato, Creatividad, interés en cocina",
    campoLaboral: "Restaurantes, hoteles, catering, emprendimiento gastronómico",
    pagina: "https://www.ult.edu.ec/carreras/gastronomia",
    imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 38,
    nombre: "Ingeniería en Petróleos",
    area: "ingenieria",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Formación especializada en la explotación y procesamiento de recursos petroleros.",
    requisitos: "Bachillerato en Ciencias, Matemáticas y química",
    campoLaboral: "Industria petrolera, refinerías, consultoría energética",
    pagina: "https://www.ult.edu.ec/carreras/ingenieria-petroleos",
    imagen: "https://copaipa.org.ar/wp-content/uploads/2022/02/petroleum-engineering-technology-1.jpg"
  },
  {
    id: 39,
    nombre: "Trabajo Social",
    area: "ciencias-sociales",
    universidad: "PUCESE - Pontificia Universidad Católica del Ecuador Sede Esmeraldas",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Intervención social para mejorar la calidad de vida de comunidades vulnerables.",
    requisitos: "Bachillerato, Sensibilidad social, vocación de servicio",
    campoLaboral: "ONGs, municipios, ministerios, trabajo comunitario",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/trabajo-social",
    imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 40,
    nombre: "Administración de Empresas Turísticas",
    area: "economia-negocios",
    universidad: "PUCESE - Pontificia Universidad Católica del Ecuador Sede Esmeraldas",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Gestión empresarial especializada en el sector turístico costero.",
    requisitos: "Bachillerato, Idiomas, interés en turismo",
    campoLaboral: "Hoteles, agencias de viajes, operadores turísticos, emprendimiento",
    pagina: "https://www.pucese.edu.ec/oferta-academica/grado/administracion-turistica",
    imagen: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
  id: 41,
  nombre: "Desarrollo de Software",
  area: "ingenieria",
  universidad: "Universidad de las Américas",
  ciudad: "quito",
  modalidad: "virtual",
  duracion: "4 años",
  descripcion: "Formación especializada en diseño, desarrollo e implementación de soluciones de software mediante metodologías ágiles y tecnologías modernas. Enfoque en programación web, móvil, bases de datos y desarrollo de sistemas empresariales.",
  requisitos: "Bachillerato, Conocimientos básicos de informática, Acceso a internet, Aptitud lógico-matemática",
  campoLaboral: "Desarrollador web, Desarrollador móvil, Ingeniero de software, Analista programador, Arquitecto de software, Consultor tecnológico, Empresas de tecnología, Startups, Teletrabajo internacional",
  pagina: "https://www.udla.edu.ec/estudios/pregrado/desarrollo-de-software",
  imagen: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
  id: 42,
  nombre: "Desarrollo de Software",
  area: "ingenieria",
  universidad: "Universidad Técnica Particular de Loja",
  ciudad: "loja",
  modalidad: "semipresencial",
  duracion: "4 años",
  descripcion: "Programa semipresencial que combina sesiones virtuales con encuentros presenciales periódicos para formación en desarrollo de aplicaciones, sistemas web y móviles.",
  requisitos: "Bachillerato, Acceso a internet, Disponibilidad para encuentros presenciales mensuales",
  campoLaboral: "Desarrollo de aplicaciones empresariales, Consultoría IT, Desarrollo de sistemas, Administración de proyectos de software",
  pagina: "https://www.utpl.edu.ec/carreras/desarrollo-software-semipresencial",
  imagen: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
  id: 43,
  nombre: "Ingeniería en Desarrollo de Software",
  area: "ingenieria",
  universidad: "Escuela Politécnica Nacional",
  ciudad: "quito",
  modalidad: "presencial",
  duracion: "5 años",
  descripcion: "Carrera de ingeniería con enfoque en el ciclo completo de desarrollo de software: análisis, diseño, programación, pruebas, implementación y mantenimiento de sistemas informáticos.",
  requisitos: "Bachillerato en Ciencias, Examen de ingreso, Matemáticas avanzadas, Lógica de programación",
  campoLaboral: "Empresas de desarrollo de software, Bancos, Telecomunicaciones, Consultoría tecnológica, Investigación en TI",
  pagina: "https://www.epn.edu.ec/desarrollo-software",
  imagen: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
  id: 44,
  nombre: "Tecnología en Desarrollo de Software",
  area: "ingenieria",
  universidad: "PUCESE - Pontificia Universidad Católica Sede Esmeraldas",
  ciudad: "esmeraldas",
  modalidad: "presencial",
  duracion: "3 años",
  descripcion: "Formación técnica en desarrollo de software con enfoque en las necesidades tecnológicas de la región costera y proyectos de desarrollo local.",
  requisitos: "Bachillerato, Interés en tecnología, Residencia en Esmeraldas o provincia",
  campoLaboral: "Empresas locales de tecnología, Sector público municipal, Emprendimiento tecnológico, Consultoría para pequeñas empresas",
  pagina: "https://www.pucese.edu.ec/oferta-academica/grado/tecnologia-desarrollo-software",
  imagen: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  // Carrera 45-94 (50 carreras adicionales)

// ==================== QUITO (6 carreras adicionales) ====================
  {
    id: 45,
    nombre: "Nutrición y Dietética",
    area: "ciencias-salud",
    universidad: "Universidad Central del Ecuador",
    ciudad: "quito",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Formación en alimentación saludable, nutrición clínica y comunitaria para promover el bienestar físico.",
    requisitos: "Bachillerato en Ciencias, interés en biología y química",
    campoLaboral: "Hospitales, consultorios, industrias alimentarias, centros deportivos",
    pagina: "https://www.uce.edu.ec/web/facultad-ciencias-medicas/nutricion",
    imagen: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 46,
    nombre: "Ingeniería Mecánica",
    area: "ingenieria",
    universidad: "Escuela Politécnica Nacional",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Diseño y mantenimiento de sistemas mecánicos, máquinas y equipos industriales.",
    requisitos: "Bachillerato en Ciencias, física y matemáticas avanzadas",
    campoLaboral: "Industria manufacturera, automotriz, energía, consultoría",
    pagina: "https://www.epn.edu.ec/ingenieria-mecanica",
    imagen: "https://www.upb.edu.co/es/imagenes/img-entblg-mtr-2023-ventajas-de-ser-un-ingeniero-mecanico-1464272423457.jpg"
  },
  {
    id: 47,
    nombre: "Antropología",
    area: "ciencias-sociales",
    universidad: "Pontificia Universidad Católica del Ecuador",
    ciudad: "quito",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Estudio científico de la diversidad cultural y social humana en contextos históricos y contemporáneos.",
    requisitos: "Bachillerato, interés en ciencias sociales",
    campoLaboral: "Investigación, museos, turismo cultural, ONGs",
    pagina: "https://www.puce.edu.ec/antropologia-virtual",
    imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 48,
    nombre: "Diseño de Interiores",
    area: "arte-humanidades",
    universidad: "Universidad San Francisco de Quito",
    ciudad: "quito",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Creación de espacios interiores funcionales y estéticos para viviendas, oficinas y locales comerciales.",
    requisitos: "Bachillerato, creatividad, portafolio básico",
    campoLaboral: "Estudios de diseño, constructoras, retail, hotelería",
    pagina: "https://www.usfq.edu.ec/diseno-interiores",
    imagen: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 49,
    nombre: "Bioquímica",
    area: "ciencias-naturales",
    universidad: "Universidad de las Américas",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio de los procesos químicos en organismos vivos y sus aplicaciones en medicina e industria.",
    requisitos: "Bachillerato en Ciencias, química y biología avanzadas",
    campoLaboral: "Laboratorios clínicos, farmacéuticas, investigación",
    pagina: "https://www.udla.edu.ec/bioquimica",
    imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 50,
    nombre: "Educación Musical",
    area: "educacion",
    universidad: "Universidad Central del Ecuador",
    ciudad: "quito",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación de docentes especializados en enseñanza musical para instituciones educativas.",
    requisitos: "Bachillerato, conocimientos musicales básicos",
    campoLaboral: "Escuelas, conservatorios, academias de música",
    pagina: "https://www.uce.edu.ec/web/facultad-artes/educacion-musical",
    imagen: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },

  // ==================== GUAYAQUIL (7 carreras adicionales) ====================
  {
    id: 51,
    nombre: "Farmacia",
    area: "ciencias-salud",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Formación en elaboración, control y dispensación de medicamentos y productos farmacéuticos.",
    requisitos: "Bachillerato en Ciencias, química y biología",
    campoLaboral: "Farmacias, laboratorios, hospitales, industria farmacéutica",
    pagina: "https://www.ug.edu.ec/farmacia",
    imagen: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 52,
    nombre: "Ingeniería Naval",
    area: "ingenieria",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Diseño y construcción de embarcaciones y estructuras marítimas para la industria naval.",
    requisitos: "Bachillerato en Ciencias, matemáticas y física",
    campoLaboral: "Astilleros, marina mercante, puertos",
    pagina: "https://www.ug.edu.ec/ingenieria-naval",
    imagen: "https://marineandnavalengineering.com/wp-content/uploads/2020/11/industria-maritima.jpg"
  },
  {
    id: 53,
    nombre: "Comunicación Organizacional",
    area: "ciencias-sociales",
    universidad: "Universidad Católica de Santiago de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Gestión de la comunicación interna y externa en empresas e instituciones para mejorar su imagen y productividad.",
    requisitos: "Bachillerato, habilidades de comunicación",
    campoLaboral: "Departamentos de comunicación, relaciones públicas, consultoría",
    pagina: "https://www.ucsg.edu.ec/comunicacion-organizacional",
    imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 54,
    nombre: "Artes Visuales",
    area: "arte-humanidades",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación en técnicas artísticas visuales como pintura, escultura, grabado y nuevas tecnologías.",
    requisitos: "Bachillerato, portafolio artístico, entrevista",
    campoLaboral: "Estudios de arte, galerías, docencia, ilustración",
    pagina: "https://www.ug.edu.ec/artes-visuales",
    imagen: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 55,
    nombre: "Oceanografía",
    area: "ciencias-naturales",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio científico de los océanos, sus fenómenos y recursos marinos costeros.",
    requisitos: "Bachillerato en Ciencias, biología y química marina",
    campoLaboral: "Investigación marina, pesca, acuicultura, medio ambiente",
    pagina: "https://www.ug.edu.ec/oceanografia",
    imagen: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 56,
    nombre: "Educación Física y Deportes",
    area: "educacion",
    universidad: "Universidad de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación de profesionales en educación física, entrenamiento deportivo y gestión de actividades físicas.",
    requisitos: "Bachillerato, condición física adecuada",
    campoLaboral: "Escuelas, clubes deportivos, gimnasios, federaciones",
    pagina: "https://www.ug.edu.ec/educacion-fisica",
    imagen: "https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 57,
    nombre: "Comercio Internacional",
    area: "economia-negocios",
    universidad: "Universidad Católica de Santiago de Guayaquil",
    ciudad: "guayaquil",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Gestión de operaciones de importación y exportación, logística internacional y negocios globales.",
    requisitos: "Bachillerato, inglés intermedio, matemáticas básicas",
    campoLaboral: "Empresas exportadoras, aduanas, consultoría internacional",
    pagina: "https://www.ucsg.edu.ec/comercio-internacional-virtual",
    imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },

  // ==================== CUENCA (6 carreras adicionales) ====================
  {
    id: 58,
    nombre: "Terapia Física",
    area: "ciencias-salud",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Rehabilitación física mediante técnicas especializadas para recuperación de movilidad y función.",
    requisitos: "Bachillerato en Ciencias, interés en anatomía",
    campoLaboral: "Hospitales, clínicas de rehabilitación, centros deportivos",
    pagina: "https://www.ucuenca.edu.ec/terapia-fisica",
    imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 59,
    nombre: "Ingeniería en Minas",
    area: "ingenieria",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Exploración, extracción y procesamiento de recursos minerales de manera sostenible.",
    requisitos: "Bachillerato en Ciencias, matemáticas y física",
    campoLaboral: "Minas, consultoría minera, seguridad industrial",
    pagina: "https://www.ucuenca.edu.ec/ingenieria-minas",
    imagen: "https://www.aauniv.com/s/blog/wp-content/uploads/2022/03/beneficios-estudiar-maestria-ingenieria-minas-1280x720.jpg"
  },
  {
    id: 60,
    nombre: "Geografía",
    area: "ciencias-sociales",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Estudio del espacio terrestre, sus características físicas y humanas para la planificación territorial.",
    requisitos: "Bachillerato, interés en ciencias sociales y naturales",
    campoLaboral: "Planificación urbana, cartografía, medio ambiente, turismo",
    pagina: "https://www.ucuenca.edu.ec/geografia",
    imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 61,
    nombre: "Cerámica",
    area: "arte-humanidades",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Arte y técnica de creación de objetos en cerámica, desde lo artesanal hasta lo industrial.",
    requisitos: "Bachillerato, creatividad, habilidades manuales",
    campoLaboral: "Talleres artesanales, industria cerámica, docencia",
    pagina: "https://www.ucuenca.edu.ec/ceramica",
    imagen: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 62,
    nombre: "Meteorología",
    area: "ciencias-naturales",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio de los fenómenos atmosféricos y predicción del tiempo para diversos sectores productivos.",
    requisitos: "Bachillerato en Ciencias, matemáticas y física",
    campoLaboral: "Instituto Meteorológico, aviación, agricultura, medios",
    pagina: "https://www.ucuenca.edu.ec/meteorologia",
    imagen: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 63,
    nombre: "Pedagogía de los Idiomas",
    area: "educacion",
    universidad: "Universidad de Cuenca",
    ciudad: "cuenca",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Formación de docentes especializados en enseñanza de lenguas extranjeras con metodologías modernas.",
    requisitos: "Bachillerato, dominio de al menos un idioma extranjero",
    campoLaboral: "Instituciones educativas, academias de idiomas, traducción",
    pagina: "https://www.ucuenca.edu.ec/pedagogia-idiomas-virtual",
    imagen: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },

  // ==================== AMBATO (5 carreras adicionales) ====================
  {
    id: 64,
    nombre: "Laboratorio Clínico",
    area: "ciencias-salud",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Análisis clínicos y diagnóstico de enfermedades mediante técnicas de laboratorio.",
    requisitos: "Bachillerato en Ciencias, química y biología",
    campoLaboral: "Laboratorios clínicos, hospitales, investigación",
    pagina: "https://www.uta.edu.ec/laboratorio-clinico",
    imagen: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 65,
    nombre: "Ingeniería en Alimentos",
    area: "ingenieria",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Procesamiento, conservación y control de calidad de productos alimenticios.",
    requisitos: "Bachillerato en Ciencias, química y biología",
    campoLaboral: "Industria alimentaria, control de calidad, investigación",
    pagina: "https://www.uta.edu.ec/ingenieria-alimentos",
    imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 66,
    nombre: "Desarrollo Local",
    area: "ciencias-sociales",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Planificación y gestión del desarrollo comunitario con enfoque territorial y participativo.",
    requisitos: "Bachillerato, interés en trabajo comunitario",
    campoLaboral: "Municipios, ONGs, cooperación internacional",
    pagina: "https://www.uta.edu.ec/desarrollo-local",
    imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 67,
    nombre: "Literatura",
    area: "arte-humanidades",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Estudio crítico de obras literarias, teoría literaria y creación de textos narrativos y poéticos.",
    requisitos: "Bachillerato, aptitud para lectura y escritura",
    campoLaboral: "Edición, crítica literaria, docencia, medios",
    pagina: "https://www.uta.edu.ec/literatura-virtual",
    imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 68,
    nombre: "Gestión Empresarial",
    area: "economia-negocios",
    universidad: "Universidad Técnica de Ambato",
    ciudad: "ambato",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Formación en administración y dirección de empresas para la toma de decisiones estratégicas.",
    requisitos: "Bachillerato, matemáticas básicas",
    campoLaboral: "Empresas públicas y privadas, emprendimiento, consultoría",
    pagina: "https://www.uta.edu.ec/gestion-empresarial",
    imagen: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },

  // ==================== RIOBAMBA (5 carreras adicionales) ====================
  {
    id: 69,
    nombre: "Optometría",
    area: "ciencias-salud",
    universidad: "Universidad Nacional de Chimborazo",
    ciudad: "riobamba",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Cuidado de la salud visual, diagnóstico y corrección de problemas refractivos y enfermedades oculares.",
    requisitos: "Bachillerato en Ciencias, física y biología",
    campoLaboral: "Consultorios optométricos, ópticas, hospitales",
    pagina: "https://www.unach.edu.ec/optometria",
    imagen: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 70,
    nombre: "Ingeniería en Geología",
    area: "ingenieria",
    universidad: "Universidad Nacional de Chimborazo",
    ciudad: "riobamba",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Estudio de la Tierra, sus recursos minerales y riesgos geológicos para el desarrollo sostenible.",
    requisitos: "Bachillerato en Ciencias, matemáticas y física",
    campoLaboral: "Minería, petróleo, geotecnia, medio ambiente",
    pagina: "https://www.unach.edu.ec/ingenieria-geologia",
    imagen: "https://cms.areandina.edu.co/sites/default/files/Blog_Piezas_Contenido%20Ingenieri%CC%81a%20Geolo%CC%81gica_IMG%202.png"
  },
  {
    id: 71,
    nombre: "Turismo Comunitario",
    area: "ciencias-sociales",
    universidad: "Universidad Nacional de Chimborazo",
    ciudad: "riobamba",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Gestión de actividades turísticas que involucran directamente a comunidades locales en su desarrollo.",
    requisitos: "Bachillerato, interés en turismo y desarrollo comunitario",
    campoLaboral: "Operadoras turísticas, comunidades, gobiernos locales",
    pagina: "https://www.unach.edu.ec/turismo-comunitario",
    imagen: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 72,
    nombre: "Artesanía y Diseño",
    area: "arte-humanidades",
    universidad: "Universidad Nacional de Chimborazo",
    ciudad: "riobamba",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Fusión de técnicas artesanales tradicionales con diseño contemporáneo para productos innovadores.",
    requisitos: "Bachillerato, habilidades manuales, creatividad",
    campoLaboral: "Talleres artesanales, diseño de productos, ferias artesanales",
    pagina: "https://www.unach.edu.ec/artesania-diseno",
    imagen: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 73,
    nombre: "Agroecología",
    area: "ciencias-naturales",
    universidad: "Universidad Nacional de Chimborazo",
    ciudad: "riobamba",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Producción agrícola sostenible basada en principios ecológicos y conservación de recursos.",
    requisitos: "Bachillerato, interés en agricultura y medio ambiente",
    campoLaboral: "Fincas orgánicas, consultoría agrícola, cooperativas",
    pagina: "https://www.unach.edu.ec/agroecologia-virtual",
    imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },

  // ==================== LOJA (5 carreras adicionales) ====================
  {
    id: 74,
    nombre: "Salud Pública",
    area: "ciencias-salud",
    universidad: "Universidad Nacional de Loja",
    ciudad: "loja",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Prevención de enfermedades y promoción de la salud a nivel poblacional mediante políticas públicas.",
    requisitos: "Bachillerato, interés en salud comunitaria",
    campoLaboral: "Ministerio de Salud, municipios, ONGs de salud",
    pagina: "https://www.unl.edu.ec/salud-publica",
    imagen: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 75,
    nombre: "Ingeniería en Telecomunicaciones",
    area: "ingenieria",
    universidad: "Universidad Técnica Particular de Loja",
    ciudad: "loja",
    modalidad: "virtual",
    duracion: "5 años",
    descripcion: "Diseño, implementación y mantenimiento de sistemas de comunicación y redes de telecomunicaciones.",
    requisitos: "Bachillerato, matemáticas y física, acceso a internet",
    campoLaboral: "Empresas de telecomunicaciones, operadoras, consultoría",
    pagina: "https://www.utpl.edu.ec/telecomunicaciones-virtual",
    imagen: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 76,
    nombre: "Criminología",
    area: "ciencias-sociales",
    universidad: "Universidad Nacional de Loja",
    ciudad: "loja",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio científico del delito, delincuentes y control social para prevenir conductas criminales.",
    requisitos: "Bachillerato, interés en ciencias sociales y derecho",
    campoLaboral: "Sistema judicial, policía, prisiones, seguridad privada",
    pagina: "https://www.unl.edu.ec/criminologia",
    imagen: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 77,
    nombre: "Fotografía",
    area: "arte-humanidades",
    universidad: "Universidad Técnica Particular de Loja",
    ciudad: "loja",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Arte y técnica de capturar imágenes con fines artísticos, documentales o comerciales.",
    requisitos: "Bachillerato, equipo fotográfico básico, creatividad",
    campoLaboral: "Estudios fotográficos, medios de comunicación, publicidad",
    pagina: "https://www.utpl.edu.ec/fotografia",
    imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 78,
    nombre: "Genética",
    area: "ciencias-naturales",
    universidad: "Universidad Nacional de Loja",
    ciudad: "loja",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Estudio de la herencia biológica y variación genética en organismos vivos y sus aplicaciones.",
    requisitos: "Bachillerato en Ciencias, biología y química avanzadas",
    campoLaboral: "Laboratorios genéticos, investigación, salud, agricultura",
    pagina: "https://www.unl.edu.ec/genetica",
    imagen: "https://images.unsplash.com/photo-1530026405189-8745d6f2e4f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },

  // ==================== MACHALA (5 carreras adicionales) ====================
  {
    id: 79,
    nombre: "Gerontología",
    area: "ciencias-salud",
    universidad: "Universidad Técnica de Machala",
    ciudad: "machala",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Estudio del envejecimiento y atención integral a personas adultas mayores para mejorar su calidad de vida.",
    requisitos: "Bachillerato, interés en trabajo con adultos mayores",
    campoLaboral: "Hogares de ancianos, centros de día, salud pública",
    pagina: "https://www.utmachala.edu.ec/gerontologia-virtual",
    imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 80,
    nombre: "Ingeniería en Energías Renovables",
    area: "ingenieria",
    universidad: "Universidad Técnica de Machala",
    ciudad: "machala",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Diseño e implementación de sistemas de energía solar, eólica y otras fuentes renovables.",
    requisitos: "Bachillerato en Ciencias, matemáticas y física",
    campoLaboral: "Empresas de energía, consultoría, proyectos sostenibles",
    pagina: "https://www.utmachala.edu.ec/energias-renovables",
    imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 81,
    nombre: "Sociología",
    area: "ciencias-sociales",
    universidad: "Universidad Técnica de Machala",
    ciudad: "machala",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Análisis científico de la sociedad, sus estructuras, instituciones y dinámicas de cambio social.",
    requisitos: "Bachillerato, interés en fenómenos sociales",
    campoLaboral: "Investigación social, políticas públicas, docencia",
    pagina: "https://www.utmachala.edu.ec/sociologia",
    imagen: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 82,
    nombre: "Diseño de Modas",
    area: "arte-humanidades",
    universidad: "Universidad Técnica de Machala",
    ciudad: "machala",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Creación de prendas de vestir y accesorios con enfoque en diseño, confección y tendencias.",
    requisitos: "Bachillerato, creatividad, habilidades manuales",
    campoLaboral: "Talleres de confección, diseño independiente, retail",
    pagina: "https://www.utmachala.edu.ec/diseno-moda",
    imagen: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 83,
    nombre: "Finanzas Internacionales",
    area: "economia-negocios",
    universidad: "Universidad Técnica de Machala",
    ciudad: "machala",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Gestión de recursos financieros en contextos globales, mercados internacionales y comercio exterior.",
    requisitos: "Bachillerato, matemáticas, inglés básico",
    campoLaboral: "Bancos, multinacionales, comercio exterior, consultoría",
    pagina: "https://www.utmachala.edu.ec/finanzas-internacionales",
    imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },

  // ==================== PORTOVIEJO (5 carreras adicionales) ====================
  {
    id: 84,
    nombre: "Terapia Ocupacional",
    area: "ciencias-salud",
    universidad: "Universidad Técnica de Manabí",
    ciudad: "portoviejo",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Rehabilitación mediante actividades terapéuticas para mejorar la autonomía en la vida diaria.",
    requisitos: "Bachillerato en Ciencias, interés en rehabilitación",
    campoLaboral: "Hospitales, centros de rehabilitación, escuelas especiales",
    pagina: "https://www.utm.edu.ec/terapia-ocupacional",
    imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 85,
    nombre: "Ingeniería en Acuicultura",
    area: "ingenieria",
    universidad: "Universidad Técnica de Manabí",
    ciudad: "portoviejo",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Cultivo y producción de especies acuáticas para consumo humano con técnicas sostenibles.",
    requisitos: "Bachillerato en Ciencias, biología y química",
    campoLaboral: "Granjas acuícolas, pesca, investigación marina",
    pagina: "https://www.utm.edu.ec/acuicultura",
    imagen: "https://institutodelagua.es/wp-content/uploads/2024/02/ingenieria-acuicultura-descubre-que-es-y-su-importancia-en-el-mundo-del-agua.jpg"
  },
  {
    id: 86,
    nombre: "Desarrollo Rural",
    area: "ciencias-sociales",
    universidad: "Universidad Técnica de Manabí",
    ciudad: "portoviejo",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Planificación y gestión del desarrollo en zonas rurales con enfoque agroproductivo y social.",
    requisitos: "Bachillerato, interés en desarrollo comunitario rural",
    campoLaboral: "Cooperativas, gobiernos locales, ONGs rurales",
    pagina: "https://www.utm.edu.ec/desarrollo-rural",
    imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 87,
    nombre: "Gestión Cultural",
    area: "arte-humanidades",
    universidad: "Universidad Técnica de Manabí",
    ciudad: "portoviejo",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Administración de proyectos y espacios culturales para la promoción del patrimonio y las artes.",
    requisitos: "Bachillerato, interés en arte y cultura",
    campoLaboral: "Museos, casas de cultura, eventos culturales, turismo",
    pagina: "https://www.utm.edu.ec/gestion-cultural-virtual",
    imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 88,
    nombre: "Marketing Digital",
    area: "economia-negocios",
    universidad: "Universidad Técnica de Manabí",
    ciudad: "portoviejo",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Estrategias de comercialización en entornos digitales, redes sociales y comercio electrónico.",
    requisitos: "Bachillerato, acceso a internet, conocimientos básicos de tecnología",
    campoLaboral: "Agencias digitales, e-commerce, redes sociales, consultoría",
    pagina: "https://www.utm.edu.ec/marketing-digital-virtual",
    imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },

  // ==================== ESMERALDAS (6 carreras adicionales) ====================
  {
    id: 89,
    nombre: "Salud Comunitaria",
    area: "ciencias-salud",
    universidad: "PUCESE - Pontificia Universidad Católica Sede Esmeraldas",
    ciudad: "esmeraldas",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Atención primaria de salud con enfoque preventivo y comunitario para poblaciones vulnerables.",
    requisitos: "Bachillerato, vocación de servicio, residencia en Esmeraldas",
    campoLaboral: "Centros de salud comunitarios, ONGs de salud, municipios",
    pagina: "https://www.pucese.edu.ec/salud-comunitaria",
    imagen: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 90,
    nombre: "Ingeniería en Pesquería",
    area: "ingenieria",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "5 años",
    descripcion: "Gestión sostenible de recursos pesqueros y procesamiento de productos del mar.",
    requisitos: "Bachillerato en Ciencias, interés en recursos marinos",
    campoLaboral: "Industria pesquera, acuicultura, control pesquero, puertos",
    pagina: "https://www.ult.edu.ec/ingenieria-pesqueria",
    imagen: "https://www.cientifica.edu.pe/wp-content/uploads/2023/10/imagen-hombre-ingenieria-pesquera-acuicultura-universidad-cientifica-del-sur-scaled.webp"
  },
  {
    id: 91,
    nombre: "Gestión de Riesgos",
    area: "ciencias-sociales",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "virtual",
    duracion: "4 años",
    descripcion: "Prevención, preparación y respuesta ante desastres naturales y emergencias en contextos urbanos y rurales.",
    requisitos: "Bachillerato, interés en gestión de emergencias",
    campoLaboral: "Defensa Civil, municipios, empresas de seguridad, ONGs",
    pagina: "https://www.ult.edu.ec/gestion-riesgos-virtual",
    imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 92,
    nombre: "Gastronomía Costera",
    area: "arte-humanidades",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Arte culinario especializado en la gastronomía de la costa ecuatoriana con productos marinos.",
    requisitos: "Bachillerato, interés en cocina, creatividad",
    campoLaboral: "Restaurantes, hoteles, catering, emprendimiento gastronómico",
    pagina: "https://www.ult.edu.ec/gastronomia-costera",
    imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 93,
    nombre: "Biotecnología Marina",
    area: "ciencias-naturales",
    universidad: "PUCESE - Pontificia Universidad Católica Sede Esmeraldas",
    ciudad: "esmeraldas",
    modalidad: "presencial",
    duracion: "4 años",
    descripcion: "Aplicación de técnicas biotecnológicas en recursos marinos para medicina, alimentación e industria.",
    requisitos: "Bachillerato en Ciencias, biología y química avanzadas",
    campoLaboral: "Laboratorios de investigación marina, acuicultura, farmacéutica",
    pagina: "https://www.pucese.edu.ec/biotecnologia-marina",
    imagen: "https://images.unsplash.com/photo-1530026405189-8745d6f2e4f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    id: 94,
    nombre: "Administración Portuaria",
    area: "economia-negocios",
    universidad: "Universidad Luis Vargas Torres",
    ciudad: "esmeraldas",
    modalidad: "semipresencial",
    duracion: "4 años",
    descripcion: "Gestión de operaciones portuarias, logística marítima y comercio exterior para puertos costeros.",
    requisitos: "Bachillerato, interés en comercio marítimo y logística",
    campoLaboral: "Puertos, aduanas, empresas navieras, logística",
    pagina: "https://www.ult.edu.ec/administracion-portuaria",
    imagen: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80"
  }
];

  // =============================================
  // BASE DE DATOS DE UNIVERSIDADES
  // =============================================

  const universitiesData = [
    {
      id: 1,
      nombre: "Universidad Central del Ecuador",
      ciudad: "quito",
      tipo: "Pública",
      fundacion: "1826",
      estudiantes: "40,000+",
      descripcion: "La universidad pública más antigua y grande de Ecuador, con una amplia oferta académica y fuerte compromiso con la investigación y desarrollo del país.",
      pagina: "https://www.uce.edu.ec",
      carrerasDestacadas: ["Medicina", "Arquitectura", "Derecho", "Ingenierías"],
      contacto: "02 222-4765",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIEIUN2HsVDaRRkFQ6dHIhzNvSx04UpS5wA&s"
    },
    {
      id: 2,
      nombre: "Escuela Politécnica Nacional",
      ciudad: "quito",
      tipo: "Pública",
      fundacion: "1869",
      estudiantes: "15,000+",
      descripcion: "Institución líder en educación técnica y científica del Ecuador, reconocida por su excelencia en ingeniería, ciencias y tecnología.",
      pagina: "https://www.epn.edu.ec",
      carrerasDestacadas: ["Ingeniería Civil", "Ingeniería de Sistemas", "Ingeniería Eléctrica", "Geología"],
      contacto: "02 297-6300",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Escuela_Polit%C3%A9cnica_Nacional.png"
    },
    {
      id: 3,
      nombre: "Universidad de Guayaquil",
      ciudad: "guayaquil",
      tipo: "Pública",
      fundacion: "1867",
      estudiantes: "80,000+",
      descripcion: "La universidad más grande de la costa ecuatoriana, con gran impacto en el desarrollo regional y nacional a través de la educación superior pública.",
      pagina: "https://www.ug.edu.ec",
      carrerasDestacadas: ["Medicina", "Enfermería", "Ingeniería Industrial", "Comunicación Social"],
      contacto: "04 229-2000",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/LogoUGcolor.png"
    },
    {
      id: 4,
      nombre: "Universidad San Francisco de Quito",
      ciudad: "quito",
      tipo: "Privada",
      fundacion: "1988",
      estudiantes: "7,000+",
      descripcion: "Universidad privada líder en innovación educativa, con modelo de artes liberales y fuerte enfoque internacional.",
      pagina: "https://www.usfq.edu.ec",
      carrerasDestacadas: ["Administración de Empresas", "Medicina", "Arquitectura", "Relaciones Internacionales"],
      contacto: "02 297-1700",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Escudo_usfq-01.png"
    },
    {
      id: 5,
      nombre: "Universidad de Cuenca",
      ciudad: "cuenca",
      tipo: "Pública",
      fundacion: "1867",
      estudiantes: "18,000+",
      descripcion: "Institución de educación superior pública ubicada en la hermosa ciudad de Cuenca, reconocida por su calidad académica y belleza arquitectónica.",
      pagina: "https://www.ucuenca.edu.ec",
      carrerasDestacadas: ["Derecho", "Arquitectura", "Medicina", "Odontología"],
      contacto: "07 405-1000",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lTmBQ_ddjJNpPQbAfJMQ_wkJGtoNddbPbQ&s"
    },
    {
      id: 6,
      nombre: "Pontificia Universidad Católica del Ecuador",
      ciudad: "quito",
      tipo: "Privada",
      fundacion: "1946",
      estudiantes: "20,000+",
      descripcion: "Universidad católica privada con enfoque en valores y formación integral, con múltiples sedes en todo el país.",
      pagina: "https://www.puce.edu.ec",
      carrerasDestacadas: ["Psicología", "Derecho", "Arquitectura", "Comunicación"],
      contacto: "02 299-1700",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBzYJt6gCe9Ow07psBTgOU_s5vJUT679yxA&s"
    },
    {
      id: 7,
      nombre: "Universidad Luis Vargas Torres",
      ciudad: "esmeraldas",
      tipo: "Pública",
      fundacion: "1970",
      estudiantes: "8,000+",
      descripcion: "Principal universidad pública de la provincia de Esmeraldas, comprometida con el desarrollo de la región costera y su población.",
      pagina: "https://www.ult.edu.ec",
      carrerasDestacadas: ["Odontología", "Ingeniería en Acuicultura", "Pedagogía", "Contabilidad y Auditoría"],
      contacto: "06 272-7374",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/ESCUDETO_UTE-LVT.png"
    },
    {
      id: 8,
      nombre: "PUCESE - Pontificia Universidad Católica del Ecuador Sede Esmeraldas",
      ciudad: "esmeraldas",
      tipo: "Privada",
      fundacion: "1994",
      estudiantes: "3,000+",
      descripcion: "Sede regional de la PUCE en Esmeraldas, enfocada en la formación profesional con pertinencia regional y valores católicos.",
      pagina: "https://www.pucese.edu.ec",
      carrerasDestacadas: ["Enfermería", "Psicología", "Turismo", "Trabajo Social"],
      contacto: "06 272-0971",
      logo: "https://yt3.googleusercontent.com/sgMI5sZSaDN7qb70YDrh6l48MuAB3zIiNyCUJ7U8fBM2SsoBj5lDZIlpHJHeeJArUmMEMGcUOA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
    id: 9,
    nombre: "Universidad de las Américas",
    ciudad: "quito",
    tipo: "Privada",
    fundacion: "1995",
    estudiantes: "12,000+",
    descripcion: "Universidad privada líder en innovación educativa, con un enfoque internacional y una amplia oferta académica en pregrado y posgrado.",
    pagina: "https://www.udla.edu.ec",
    carrerasDestacadas: ["Medicina", "Derecho", "Arquitectura", "Ingenierías"],
    contacto: "02 398-1000",
    logo: "https://images.credly.com/size/200x200/images/3bef627c-a46b-49b4-ab1b-7d0724010c87/blob.png"
    }
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

// Variables para modal de universidades
const universityModal = document.getElementById("universityModal");
const universityModalHeader = document.getElementById("universityModalHeader");
const universityModalBody = document.getElementById("universityModalBody");
const closeUniversityModal = document.getElementById("closeUniversityModal");

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
  
  // Agregar Esmeraldas al filtro de ciudades si no existe
  agregarEsmeraldasAlFiltro();
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

  // Modal de carrera
  closeModal.addEventListener("click", cerrarModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  // Modal de universidad
  closeUniversityModal.addEventListener("click", cerrarModalUniversidad);
  universityModal.addEventListener("click", function (e) {
    if (e.target === universityModal) {
      cerrarModalUniversidad();
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
    if (e.key === "Escape" && universityModal.style.display === "block") {
      cerrarModalUniversidad();
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

  // Event listeners para tarjetas de universidad
  const universityCards = document.querySelectorAll('.university-card');
  universityCards.forEach(card => {
    card.addEventListener('click', function() {
      const universityId = parseInt(this.getAttribute('data-university-id'));
      mostrarDetalleUniversidad(universityId);
    });
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
// SECCIÓN 8: MODAL DE DETALLES DE CARRERA (MODIFICADO)
// =============================================

// Función para mostrar detalle de carrera en modal
function mostrarDetalleCarrera(id) {
  const carrera = carrerasData.find((c) => c.id === id);
  if (!carrera) return;

  // Cargar header
  modalHeader.innerHTML = `
        <h3>${carrera.nombre}</h3>
        <p>${carrera.universidad}</p>
    `;

  // Cargar la imagen (columna izquierda)
  if (carrera.imagen) {
    modalImageContainer.innerHTML = `
      <div class="modal-image-container">
        <img src="${carrera.imagen}" alt="${carrera.nombre}" class="modal-image">
      </div>
     
    `;
  } else {
    // Usar placeholder si no hay imagen
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

  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevenir scroll del body
}
// Hacer la función accesible globalmente para el onclick en HTML
window.mostrarDetalleCarrera = mostrarDetalleCarrera;

// Función para cerrar modal de carrera
function cerrarModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restaurar scroll del body
}

// =============================================
// SECCIÓN 9: FUNCIONES PARA MODAL DE UNIVERSIDADES
// =============================================

// Función para mostrar detalle de universidad en modal
function mostrarDetalleUniversidad(id) {
  const universidad = universitiesData.find((u) => u.id === id);
  if (!universidad) return;

  // Cargar header
  universityModalHeader.innerHTML = `
    <h3>${universidad.nombre}</h3>
    <p>${capitalizeFirst(universidad.ciudad)}</p>
  `;

  // Cargar logo grande en el centro
  const universityLogoLarge = document.getElementById('universityLogoLarge');
  if (universityLogoLarge) {
    // Verificar si la universidad tiene un logo específico
    // Aquí debes tener un campo "logo" en cada objeto de universidad
    // Por ejemplo: universidad.logo = "https://ejemplo.com/logo.png"
    
    if (universidad.logo) {
      universityLogoLarge.innerHTML = `
        <img src="${universidad.logo}" alt="${universidad.nombre}" loading="lazy" class="university-logo-img">
      `;
    } else {
      // Si no tiene logo, mostrar placeholder con iniciales
      const initials = getUniversityInitials(universidad.nombre);
      universityLogoLarge.innerHTML = `
        <div class="university-logo-placeholder-large" style="background: linear-gradient(135deg, ${getRandomColor()}, ${getRandomColor()});">
          <span style="font-size: 2.5rem; font-weight: bold; color: white;">${initials}</span>
        </div>
      `;
    }
  }

  // Cargar título y ciudad debajo del logo
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

  universityModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Funciones auxiliares para logos
function getUniversityInitials(name) {
  // Obtener las iniciales del nombre de la universidad
  const words = name.split(' ');
  let initials = '';
  
  for (let word of words) {
    if (word.length > 0 && word[0].toUpperCase() === word[0]) {
      initials += word[0];
    }
    if (initials.length >= 3) break;
  }
  
  // Si no hay suficientes iniciales, usar las primeras letras
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

// Función para cerrar modal de universidad
function cerrarModalUniversidad() {
  universityModal.style.display = "none";
  document.body.style.overflow = "auto"; // Restaurar scroll del body
}

// =============================================
// SECCIÓN 10: FUNCIONES AUXILIARES
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

// Función para agregar Esmeraldas al filtro de ciudades
function agregarEsmeraldasAlFiltro() {
  const ciudadFilter = document.getElementById("ciudadFilter");
  const opcionesExistentes = Array.from(ciudadFilter.options).map(opt => opt.value);
  
  if (!opcionesExistentes.includes("esmeraldas")) {
    const nuevaOpcion = document.createElement("option");
    nuevaOpcion.value = "esmeraldas";
    nuevaOpcion.textContent = "Esmeraldas";
    ciudadFilter.appendChild(nuevaOpcion);
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
// SECCIÓN 11: ANIMACIONES Y EFECTOS
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
      target: 21,
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
// SECCIÓN 12: ESTILOS DINÁMICOS
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
// SECCIÓN 13: OPTIMIZACIONES (LAZY LOADING)
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