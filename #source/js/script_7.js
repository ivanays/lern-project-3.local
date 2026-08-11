// header burger
// код определяющий на каком устройстве открыта страница

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

} else {
  document.body.classList.add("_pc");
}

// Слайдер gallery-gph

const slidesGph = document.querySelectorAll(".slider-gph__slide"),
  dotsGph = document.querySelectorAll(".dots-gph__dot");

let indexGph = 0;

const activeSlideGph = (n) => {
  for (let slideGph of slidesGph) {
    slideGph.classList.remove("active");
  }
  slidesGph[n].classList.add("active");
};

const activeDotGph = (n) => {
  for (let dotGph of dotsGph) {
    dotGph.classList.remove("active");
  }
  dotsGph[n].classList.add("active");
};

const prepareCurrentSlideGph = (ind) => {
  activeSlideGph(ind);
  activeDotGph(ind);
};

const nextSlideGph = () => {
  if (indexGph == slidesGph.length - 1) {
    indexGph = 0;
    prepareCurrentSlideGph(indexGph);
  } else {
    indexGph++;
    prepareCurrentSlideGph(indexGph);
  }
};

const prevSlideGph = () => {
  if (indexGph == 0) {
    indexGph = slidesGph.length - 1;
    prepareCurrentSlideGph(indexGph);
  } else {
    indexGph--;
    prepareCurrentSlideGph(indexGph);
  }
};

dotsGph.forEach((itemGph, indexDotGph) => {
  itemGph.addEventListener("click", () => {
    indexGph = indexDotGph;
    prepareCurrentSlideGph(indexGph);
  });
});

setInterval(nextSlideGph, 3000);