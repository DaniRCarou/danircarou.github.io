
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

    number: { value: 80 },
    color: { value: '#fc1803' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#f6ff74',
      opacity: 0.4,
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


