const header = document.querySelectorAll(".header-menu a");

function ativarLink (item) {
  if (document.location.href.includes(item.href)) {
    item.classList.add("ativo");
  }
}

header.forEach(ativarLink);

const parametro = new URLSearchParams(document.location.search);

function searchParam (item) {
  const element = document.getElementById(item);
  if (element) {
    element.checked = true;
  }
}

parametro.forEach(searchParam);

const button = document.querySelectorAll(".perguntas button");

function exibePergunta (event) {

  const control = event.currentTarget;
  const id = control.getAttribute("aria-controls");
  const pergunta = document.getElementById(id);

  pergunta.classList.toggle("ativo");

  const boolean = pergunta.classList.contains("ativo");
  control.setAttribute("aria-expanded", boolean);
}

function ativarPergunta (item) {
  item.addEventListener("click", exibePergunta);
}

button.forEach(ativarPergunta);

const images = document.querySelectorAll(".bicicleta-imagens img");
const containerImages = document.querySelector(".bicicleta-imagens");

function changeGalery (event) {
  if (matchMedia("(min-width: 1000px").matches) {
    containerImages.prepend(event.currentTarget);
  }
}

function changeImages (item) {
  item.addEventListener("click", changeGalery);
}

images.forEach(changeImages);

if (window.SimpleAnime) {
  new SimpleAnime();
}