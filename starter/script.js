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

  if (currentImageIndex === images.length - 1) {
    document.removeEventListener("keyup", keyUpImgNext);
  } else {
    document.addEventListener("keyup", keyUpImgNext);
  }

  if (currentImageIndex === 0) {
    document.removeEventListener("keyup", keyUpImgPrevous);
  } else {
    document.addEventListener("keyup", keyUpImgPrevous);
  }
}

function imgNext() {
  currentImageIndex++;

  displayImg();
}

function imgPrevous() {
  currentImageIndex--;
  displayImg();
}

function keyUpImgNext(event) {
  if (event.key === "ArrowRight") {
    imgNext();
  }
}

function keyUpImgPrevous(event) {
  if (event.key === "ArrowLeft") {
    imgPrevous();
  }
}

btnNext.addEventListener("click", imgNext);
btnPrevious.addEventListener("click", imgPrevous);

document.addEventListener("keyup", keyUpImgNext);
document.addEventListener("keyup", keyUpImgPrevous);

displayImg();
