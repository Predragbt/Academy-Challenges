const images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
];

const btnNext = document.querySelector("#next");
const btnPrevious = document.querySelector("#previous");
const imageDisplay = document.querySelector("#imageDisplay");

let currentImageIndex = 0;

function displayImg() {
  imageDisplay.src = images[currentImageIndex];

  btnNext.disabled = currentImageIndex === images.length - 1;
  btnPrevious.disabled = currentImageIndex === 0;
}

function imgNext() {
  currentImageIndex++;
  displayImg();
}

function imgPrevous() {
  currentImageIndex--;
  displayImg();
}

btnNext.addEventListener("click", imgNext);
btnPrevious.addEventListener("click", imgPrevous);

displayImg();
