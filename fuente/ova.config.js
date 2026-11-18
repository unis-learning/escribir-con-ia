/* =========================================================
   CURSO · 
   ---------------------------------------------------------
   Cliente:   UNIS Virtual · Universidad del Istmo
   Insumo:    ../insumos/ (DI, figuras, medios, preguntas; ver insumos/LEEME.md)
   Preset visual: unis  (ver instituciones/unis/INSTITUCION.md)
   Versión template: hibrida

   Maqueta vacía (KIT-002): las pantallas de fuente/contenido/ traen la
   estructura y lo fijo de UNIS Virtual, y todo texto del curso es un
   hueco data-ova-hueco que se llena con el texto literal del DI. La foto
   de portada también es un hueco hasta que llegue la del curso.
   ========================================================= */

module.exports = {

  brand: {
    // Logo aprobado «UNIS Virtual» en blanco: el que va sobre el menú guinda. En la versión
    // «clara» la piel lo cambia por el guinda. En móvil va el mismo logo completo (D17).
    name: '',
    sub:  '',
    logo:       'assets/img/logos/un-logo-blanco.svg',
    logoMobile: 'assets/img/logos/un-logo-blanco.svg',
  },

  course: {
    code:             '',
    name:             'Escribir con IA sin perder la propia voz',
    subtitle:         'Competencias digitales para el posgrado',   // el Word dice «Asignatura - …»; va solo el nombre, como en la portada (aprobado, 2026-11-17)
    duration:         '',
    iso:              '',
    licencia:         '',
    preset:           'unis',
    pdf:              '',
    portadaFullBleed: true,
  },

  /* TEXTOS DE LA INTERFAZ · lo que el motor pinta fuera del contenido del curso. `voz` es el tratamiento
     (tú o usted) de los textos que escribe el motor, como los de Relacionar (KIT-016). Es la voz de
     instituciones/unis/catalogo.json; tests/voz-curso.test.js avisa si se separan. El texto de
     progreso del menú es el del motor (D20). */
  textos: {
    voz: 'usted',
  },

  /* MENÚ · la estructura RED:
       - `tipo: 'especial'`  → secciones estructurales que tiene toda unidad
                               (inicio, contenido, introducción, conclusión,
                               evaluación, glosario, referencias, créditos). Icono, no número.
       - `tipo: 'tema'`      → contenido temático, numerado 1, 2, 3…
     Las `secciones` con `ancla` aparecen en el menú como sub-ítems y bajan a la
     `.un-seccion` con ese `id` (único en todo el curso). */
  menu: [
    { id: 'portada',      titulo: 'Inicio',                  tipo: 'especial', icon: 'mdi:home-outline' },
    { id: 'temario',      titulo: 'Contenido de la unidad',  tipo: 'especial', icon: 'mdi:map-outline' },

    { id: 'introduccion', titulo: 'Introducción',            tipo: 'especial', icon: 'mdi:information-variant',
      secciones: [ { titulo: '¿Qué va a lograr en esta unidad?', ancla: 'que-va-a-lograr' } ] },

    /* Los temas, sus títulos y las secciones de cada pantalla salen del DI (/ova-auditar-insumos
       y /ova-maquetar): «Tema 1» y «Tema 2» solo marcan el lugar. */
    { id: 'tema1',        titulo: 'Qué hace bien la IA y qué no',                  tipo: 'tema',
      secciones: [ { titulo: 'Dónde ayuda la IA al escribir', ancla: 'tema1-1' },
                   { titulo: 'Dónde se equivoca', ancla: 'tema1-2' } ] },
    { id: 'tema2',        titulo: 'Pedir bien',                  tipo: 'tema',
      secciones: [ { titulo: 'Las partes de una buena instrucción', ancla: 'tema2-1' },
                   { titulo: 'Conversar con la IA: pedir, revisar y volver a pedir', ancla: 'tema2-2' } ] },
    { id: 'tema3',        titulo: 'Revisar y firmar',                  tipo: 'tema',
      secciones: [ { titulo: 'Verificar y recuperar la propia voz', ancla: 'tema3-1' },
                   { titulo: 'Declarar el uso de la IA', ancla: 'tema3-2' } ] },

    /* Conclusión y Glosario: ocultos por defecto, como en las otras instituciones de la RED.
       Sus pantallas siguen en contenido/; para mostrarlas, quite el // de su línea. */
    { id: 'conclusion',   titulo: 'Conclusión',              tipo: 'especial', icon: 'mdi:flag-outline' },
    { id: 'evaluacion',   titulo: 'Evaluación',              tipo: 'especial', icon: 'mdi:clipboard-check-outline' },
    // { id: 'glosario',     titulo: 'Glosario',                tipo: 'especial', icon: 'mdi:book-open-variant-outline' },
    { id: 'referencias',  titulo: 'Referencias',             tipo: 'especial', icon: 'mdi:bookmark-outline' },
    /* Créditos: pantalla propia después de Referencias (KIT-018; en UNIS desde UNIS-001 T6), con los
       cargos y las personas de la sección «Créditos» del Word. */
    { id: 'creditos',     titulo: 'Créditos',                tipo: 'especial', icon: 'mdi:account-group-outline' },
  ],

  /* REFERENCIAS · APA literal del DI §Referencias. Estilo de la línea: autor y año sin
     negrilla, título de la obra en cursiva, URL en texto sin hipervínculo. */
  referencias: [],

  creditos: {
    institucion: 'UNIS Virtual · Universidad del Istmo',
  },
};
