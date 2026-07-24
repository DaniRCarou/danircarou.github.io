
/* ================================
   HERO
================================ */


// === FRASES DEL TYPEWRITER === ARRAY QUE CONTIENE LAS PALABRAS PARA PRESENTARME

const frases = ["Industrial Technician", "Full-Stack Developer", "Problem Solver", "Bridge between industry and code"];



// === ELEMENTO DONDE SE MUESTRA EL TEXTO ===

const elementoTypewriter = document.getElementById("typewriter");



// === CONTADORES DE ESTADO ===

let indiceFrase = 0;
let indiceLetra = 0;



// === FUNCIÓN PRINCIPAL DEL TYPEWRITER === ESCRIBE/BORRA LETRA A LETRA SEGÚN EL MODO ACTUAL

function escribirTexto() {

  const fraseActual = frases[indiceFrase];
  elementoTypewriter.textContent = fraseActual.substring(0, indiceLetra); // substring es un método de los strings que devuelve solo una "porción" del texto, desde una posición hasta otra. Aquí le decimos "dame desde la letra 0 hasta la letra indiceLetra" 
  indiceLetra++;

  if (indiceLetra <= fraseActual.length) {

    // Todavía quedan letras por escribir de esta frase
    setTimeout(escribirTexto, 70);

  } else {

    // Frase completa: esperamos medio segundo, luego reseteamos y pasamos a la siguiente
    setTimeout(() => {

      indiceLetra = 0;
      indiceFrase = (indiceFrase + 1) % frases.length;
      escribirTexto();

    }, 2000);

  }

}



// === ARRANQUE DEL TYPEWRITER === Se llama aquí, después de la función, para que no intente ejecutarla antes de que el programa la haya leído

escribirTexto();



// FUNCIÓN PARA EL MOVIMIENTO DE LAS PARTÍCULAS DE FONDO

particlesJS('particles-js', {

  particles: {

    number: { value: 70 },
    color: { value: '#92b273' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 4 },
    line_linked: {
      enable: true,
      distance: 160,
      color: '#a5a96f',
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 3
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' }
    }

  }

});









/* ================================
   ABOUT
================================ */


// === ELEMENTOS DE ABOUT ===

const elementoLinea1 = document.getElementById("about-line-1");
const elementoImagen1 = document.getElementById("about-img-1");
const elementoLinea2 = document.getElementById("about-line-2");
const elementoImagen2 = document.getElementById("about-img-2");
const elementoLinea3 = document.getElementById("about-line-3");
const elementoImagen3 = document.getElementById("about-img-3");


// === ARRAY PARA GUARDAR LOS SETTIMEOUT ACTIVOS DE ABOUT ===
// Guarda el identificador que devuelve cada setTimeout, para poder cancelarlos más tarde con clearTimeout si hace falta reiniciar la secuencia antes de que terminen (por ejemplo, al entrar y salir rápido de la sección con la rueda del ratón).
let timeoutsAbout = [];

// === CANCELA TODOS LOS SETTIMEOUT PENDIENTES DE ABOUT ===
// forEach recorre cada id guardado en el array (igual que un for, pero sin contador manual) y ejecuta clearTimeout(id) con cada uno, cancelando esa tarea programada si aún no se había ejecutado. Al final se vacía el array (= []) para que la próxima tanda de setTimeout empiece de cero, sin arrastrar ids ya cancelados.
function limpiarTimeoutsAbout() {

  timeoutsAbout.forEach((id) => clearTimeout(id));
  timeoutsAbout = [];

}


// === FUNCIÓN QUE INICIA LA SECUENCIA DE ABOUT ===
function iniciarSecuenciaAbout() {

  // Cancela cualquier tanda de setTimeout de una entrada anterior, para que no se solape con esta nueva y descontrole el orden
  limpiarTimeoutsAbout();

  // Elemento donde se muestra el texto 1
  elementoLinea1.style.opacity = 1;

  // Elemento donde se muestra la imagen 1
  elementoImagen1.style.opacity = 1;

  // Guardamos en el array y se muestra el texto 2
  timeoutsAbout.push(setTimeout(() => {
    elementoLinea2.style.opacity = 1;
  }, 3500));

  // Guardamos en el array y se muestra la imagen 2
  timeoutsAbout.push(setTimeout(() => {
    elementoImagen2.style.opacity = 1;
  }, 3500));

  // Guardamos en el array y se muestra el texto 3
  timeoutsAbout.push(setTimeout(() => {
    elementoLinea3.style.opacity = 1;
  }, 7000));

  // Guardamos en el array, se desplazan las imágenes 1 y 2 y las oculta
  timeoutsAbout.push(setTimeout(() => {
    elementoImagen1.style.transform = "translateX(19.22rem)";
    elementoImagen2.style.transform = "translateX(-19.22rem)";
    elementoImagen1.style.opacity = 0;
    elementoImagen2.style.opacity = 0;
  }, 7000));

  // Guardamos en el array y se muestra la imagen 3
  timeoutsAbout.push(setTimeout(() => {
    elementoImagen3.style.opacity = 1;
  }, 8200));

}


// Función que resetea about a su estado inicial

function resetearAbout() {

  // Cancela también aquí cualquier setTimeout pendiente, por si
  // se sale de la sección antes de que termine de aparecer todo
  limpiarTimeoutsAbout();

  // transition: "none" desactiva la animación un instante, para que
  // el cambio a opacity:0 sea instantáneo y no se vea un desvanecimiento
  // lento al salir de la sección (mismo transition que se usa al aparecer)
  elementoLinea1.style.transition = "none";
  elementoLinea1.style.opacity = 0;

  elementoImagen1.style.transition = "none";
  elementoImagen1.style.opacity = 0;
  elementoImagen1.style.transform = "translateX(0)";

  elementoLinea2.style.transition = "none";
  elementoLinea2.style.opacity = 0;

  elementoImagen2.style.transition = "none";
  elementoImagen2.style.opacity = 0;
  elementoImagen2.style.transform = "translateX(0)";

  elementoLinea3.style.transition = "none";
  elementoLinea3.style.opacity = 0;

  elementoImagen3.style.transition = "none";
  elementoImagen3.style.opacity = 0;


  // Este setTimeout cumple una función concreta: restaurar la transición para la próxima vez que la secuencia arranque.
  // transition: "" (cadena vacía) no significa "anima todo" — significa "borra el estilo que había puesto directamente en este elemento con JavaScript", dejando que el elemento vuelva a mirar su CSS normal (.about-line { transition: opacity 4s ease; }) para decidir cómo comportarse.
  setTimeout(() => {

    elementoLinea1.style.transition = "";
    elementoImagen1.style.transition = "";
    elementoLinea2.style.transition = "";
    elementoImagen2.style.transition = "";
    elementoLinea3.style.transition = "";
    elementoImagen3.style.transition = "";

  }, 50);

}


// === OBSERVER: detecta cuándo #about entra o sale de la pantalla ===
const observer = new IntersectionObserver((entradas) => {

  // Comprobamos si al cambiar de pantalla el observer se da cuenta de que hemos cambiado
  console.log("Observer disparado, isIntersecting:", entradas[0].isIntersecting);

  // isIntersecting: true si el elemento vigilado está visible en pantalla ahora mismo, false si no lo está
  if (entradas[0].isIntersecting) {
    iniciarSecuenciaAbout();
  } else {
    resetearAbout();
  }

  }, {

  // rootMargin: "-130px 0px 0px 0px" -> Por defecto, IntersectionObserver considera "visible" TODA la ventana del navegador, de arriba (0) a abajo, sin saber que el navbar fijo (118px de alto) tapa visualmente esa franja superior. Por eso #about seguía marcado como isIntersecting:true aunque estuviera oculto detrás del navbar — matemáticamente su borde inferior aún tocaba esa zona de 0 a 118px. rootMargin "encoge" el área que el observer considera visible, restando 118px desde arriba (el mismo alto que el navbar), para que #about se considere "fuera de vista" en cuanto quede tapado por el navbar, no solo cuando sale de la ventana entera.
  rootMargin: "-130px 0px 0px 0px"

});

observer.observe(document.getElementById("about"));
