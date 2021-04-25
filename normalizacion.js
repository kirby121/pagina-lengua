const $html = document.documentElement;
const $ancla = document.getElementsByTagName("nav");
const $titulo = document.querySelector(".principal-titulo");
const $subtitulo = document.querySelector(".principal-subtitulo");
const $cambio = document.querySelector(".navegacion-ancla-cambio");
const $significadoTitulo = document.querySelector(".significado-titulo");
const $significadoTexto = document.querySelector(".significado-texto");
const $significado = document.querySelector(".significado");
const $libroImagen = document.querySelector(".libro-imagen");
const $libros = document.querySelector(".libros");
const $libro = document.querySelector(".libro");
const $libro1 = document.querySelector(".libro1");
const $libroTitulo1 = document.querySelector(".libro-titulo1");
const $libroTitulo2 = document.querySelector(".libro-titulo2");
const $libroSubtitulo1 = document.querySelector(".libro-subtitulo1");
const $libroSubtitulo2 = document.querySelector(".libro-subtitulo2");
let claro = true;

const modoOscuro = () => {
  if(claro == true){
    $html.setAttribute("class" , "fondo-oscuro");
    $titulo.setAttribute("class" , "principal-titulo-oscuro");
    $subtitulo.setAttribute("class" , "principal-subtitulo-oscuro");
    $cambio.setAttribute("class" , "navegacion-ancla-cambio-seleccion");
    $significado.setAttribute("class" , "significado-oscuro");
    $significadoTitulo.setAttribute("class" , "significado-titulo-oscuro");
    $significadoTexto.setAttribute("class" , "significado-texto-oscuro");
    $libroImagen.setAttribute("class" , "libro-imagen-oscuro");
    $libros.setAttribute("class" , "libros-oscuro");
    $libro.setAttribute("class" , "libro-oscuro");
    $libro1.setAttribute("class" , "libro1-oscuro");
    $libroTitulo1.setAttribute("class" , "libro-titulo1-oscuro");
    $libroTitulo2.setAttribute("class" , "libro-titulo2-oscuro");
    $libroSubtitulo1.setAttribute("class" , "libro-subtitulo1-oscuro");
    $libroSubtitulo2.setAttribute("class" , "libro-subtitulo2-oscuro");
    claro = false
  }
  else{
    $html.setAttribute("class" , "fondo");
    $titulo.setAttribute("class" , "principal-titulo");
    $subtitulo.setAttribute("class" , "principal-subtitulo");
    $cambio.setAttribute("class" , "navegacion-ancla-cambio");
    $significado.setAttribute("class" , "significado");
    $significadoTitulo.setAttribute("class" , "significado-titulo");
    $significadoTexto.setAttribute("class" , "significado-texto");
    $libroImagen.setAttribute("class" , "libro-imagen");
    $libros.setAttribute("class" , "libros");
    $libro.setAttribute("class" , "libro");
    $libro1.setAttribute("class" , "libro1");
    $libroSubtitulo1.setAttribute("class" , "libro-subtitulo1");
    $libroSubtitulo2.setAttribute("class" , "libro-subtitulo2");
    claro = true
  }
}

function quees() {
  speechSynthesis.speak(new SpeechSynthesisUtterance("La normalización es la adaptación o el costumbrismo de acciones que normalmente están fuera de la norma, se vuelven costumbre y se cree que implementa pensando que eso es lo normal, creando situaciones que cuando nos paramos a analizarlas pueden llegar a ser muy controversiales, denigrantes e incluso ilegales"));
}
function libros() {
  speechSynthesis.speak(new SpeechSynthesisUtterance("Primer libro Katniss Everdeen debe enfrentarse a los juegos del hambre, un evento en el que participan 2 personas de cada distrito y se matan hasta que queda solo una de ellas, hecho para recordar a los distritos su derrota frente al capitolio, que es ahora quien dirige Panem, el país en que Katniss vive Segundo libro Luego de ganar los pasados juegos del hambre, Katniss y Peeta creen que ya nada podría salir mal, pero, mientras que una rebelión se comienza a formar en Panem, un cambio en las reglas de los juegos vuelve a ponerlos en riesgo Tercer libro Luego de que el capitolio atrapa a Peeta, Katniss escapa al distrito 13, un distrito que creía destruido, pero que ahora está listo para hacerle frente al capitolio, los juegos ya no son el problema, Panem está en guerra Precuela Poco después de la victoria de capitolio, Coriolanus Snow, de dieciocho años se alista para ser mentor de la tributo del distrito 12 para los juegos dell hambre, sin saber que en unos años sería el presidente de Panem "));
}