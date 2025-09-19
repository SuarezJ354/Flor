// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 15 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 19 },
  { text: "Y el amarillo de sol iluminaba la esquina", time: 23 },
  { text: "(La esquina)", time: 27 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 29 },
  
  { text: "Ella sabía que él sabía que algún día pasaría", time: 35 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 40 },
  { text: "No te apures, no detengas", time: 45 },
  { text: "El instante del encuentro", time: 48 },
  { text: "Está dicho que es un hecho", time: 50 },
  { text: "No la pierdas, no hay derecho", time: 53 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 56 },
  
  { text: "En ese bar tan desierto los esperaba el encuentro", time: 75 },
  { text: "(encuentro)", time: 80 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 82 },
  { text: "Él se acercó de repente y la miró tan de frente", time: 87 },
  { text: "(de frente)", time: 91 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 93 },
  
  { text: "Ella sabía que él sabía que algún día pasaría", time: 99 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 104 },
  { text: "No te apures, no detengas", time: 109 },
  { text: "El instante del encuentro", time: 112 },
  { text: "Está dicho que es un hecho", time: 114 },
  { text: "No la pierdas, no hay derecho", time: 117 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 120 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
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

// Llama a la función después de 140 segundos (ajustado para la duración de Flores Amarillas)
setTimeout(ocultarTitulo, 140000);
