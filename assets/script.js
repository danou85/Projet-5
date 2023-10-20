const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

function updateDots(indexSelected) {
  dots.forEach((dot, indexDot) => {
    if (indexDot === indexSelected) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

function updateCarousel(indexSelected, direction) {
  if (indexSelected === -1 && direction === "left") {
    currentIndex = slides.length - 1;
  } else if (indexSelected === slides.length && direction === "right") {
    currentIndex = 0;
  }

  const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${currentIndex + 1}`;

  const tagLine = slides[currentIndex].tagLine;
  document.querySelector("p").innerHTML = tagLine;
}

// Écouteur d'événement pour le bouton de gauche

arrowLeft.addEventListener("click", () => {
  currentIndex -= 1;
  updateCarousel(currentIndex, "left"); // Appelle la fonction de mise à jour pour la diapositive précédente
  updateDots(currentIndex); // Met à jour les indicateurs de point
});

// Écouteur d'événement pour le bouton de droite

arrowRight.addEventListener("click", () => {
  currentIndex += 1;
  updateCarousel(currentIndex, "right"); // Appelle la fonction de mise à jour pour la diapositive suivante
  updateDots(currentIndex); // Met à jour les indicateurs de point
});

// Initialisation du carrousel et des indicateurs de point lors du démarrage
updateCarousel(currentIndex, "démarrage");
updateDots(currentIndex);
