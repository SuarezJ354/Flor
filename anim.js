// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del sol iluminaba la esquina", time: 32 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
  
  { text: "Ella sabía que él sabía que algún día pasaría", time: 46 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 51 },
  { text: "No te apures, no detengas el instante del encuentro", time: 60 },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 63 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 66 },
  
  { text: "En ese bar tan desierto los esperaba el encuentro", time: 94 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 100 },
  { text: "Él se acercó de repente y la miró tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  
  { text: "Ella sabía que él sabía que algún día pasaría", time: 122 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 127 },
  { text: "No te apures, no detengas el instante del encuentro", time: 135 },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 138 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 141 },
  
  { text: "Ella sabía que él sabía que algún día pasaría", time: 167 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 172 },
  { text: "No te apures, no detengas el instante del encuentro", time: 181 },
  { text: "Está dicho que es un hecho no la pierdas, no hay derecho", time: 185 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 188 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = null;
  
  // Encuentra la línea actual
  for (let i = 0; i < lyricsData.length; i++) {
    if (time >= lyricsData[i].time) {
      // Verifica si hay una línea siguiente
      if (i + 1 < lyricsData.length) {
        // Si el tiempo actual es menor que el tiempo de la siguiente línea
        if (time < lyricsData[i + 1].time) {
          currentLine = lyricsData[i];
          break;
        }
      } else {
        // Si es la última línea, mostrarla hasta el final
        currentLine = lyricsData[i];
        break;
      }
    }
  }

  if (currentLine) {
    // Efecto de aparición suave
    var fadeInDuration = 0.3;
    var timeSinceStart = time - currentLine.time;
    var opacity = Math.min(1, timeSinceStart / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Si no hay línea actual, ocultar
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 210 segundos (ajustado para la duración de Flores Amarillas)
setTimeout(ocultarTitulo, 210000);
