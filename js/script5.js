"use strict";

// Слайдер cozy-house

const slides = document.querySelectorAll(".slider-czh__slide"),
  dots = document.querySelectorAll(".dots-czh__dot");

let index = 0;

const activeSlide = (n) => {
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDot = (n) => {
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

setInterval(nextSlide, 3000);

// Слайдер hot-offers

const prevHo = document.getElementById("btn-ho-prev"),
  nextHo = document.getElementById("btn-ho-next"),
  sliderHo = document.querySelector(".slider-ho"),
  sliderHoItems = document.querySelector(".slider-ho__items"),
  sliderHoItem = document.querySelector(".slider-ho__item"),
  sliderHoInner = document.querySelector(".slider-ho__inner"),
  slidesHo = document.querySelectorAll(".slider-ho__slide"),
  hoStart = 1,
  hoEnd = slidesHo.length,
  numsHoLength = 3,
  numsHo = document.querySelector(".direct-ho__nums"),
  numHo = document.getElementsByClassName("direct-ho__num"),
  numHoLength = numHo.length,
  containerWidth = document.querySelector(".container").offsetWidth,
  body = document.body;

let limitHo,
  indexHoArr = [],
  indexHo = 0,
  limitHoNum = 3;

if (containerWidth == 1170) {
  limitHo = 4;

  const dowloadSlideHo = () => {
    removeSlidesHo();
    for (let i = 0; i < limitHo; i++) {
      activeSlideHo(indexHo);
      indexHoArr.push(indexHo);
      indexHo++;
    }
    createNumHo();
    activeNumHo(0);
    passiveNumHo(0);
    activeNumHo(1);
    activeNumHo(2);
    activeNumHo(3);
    activeNumHo(hoEnd - 1);
    activeBtnHoNext();
  };

  const createNumHo = () => {
    for (let i = 0; i < hoEnd; i++) {
      numsHo.insertAdjacentHTML(
        "afterbegin",
        '<span class="direct-ho__num"></span >'
      );
    }
    for (let j = 0; j < numHo.length; j++) {
      numHo[j].insertAdjacentText("afterbegin", j + 1);
    }
  };

  const activeNumsHo = () => {
    let ind = 0;
    for (let j = 0; j < indexHoArr.length; j++) {
      if (indexHoArr[j] != 0 || indexHoArr[j] != hoEnd - 1) {
        if (ind < 3) {
          activeNumHo(indexHoArr[j]);
        }
      }
      ind++;
    }
  };

  const activeNumHo = (n) => {
    numHo[n].classList.add("active");
  };

  const removeNumHo = (n) => {
    numHo[n].classList.remove("active");
  };

  const removeNumsHo = () => {
    for (let i = 1; i < numHo.length - 1; i++) {
      removeNumHo(i);
    }
  };

  const passiveNumHo = (n) => {
    numHo[n].classList.add("passive");
  };

  const rePassiveNumsHo = () => {
    for (let i = 1; i < numHo.length - 1; i++) {
      rePassiveNumHo(i);
    }
  };

  const rePassiveNumHo = (n) => {
    numHo[n].classList.remove("passive");
  };

  const nextSlideHo = () => {
    for (let i = 0; i < indexHoArr.length; i++) {
      if (indexHoArr[i] == slidesHo.length - 1) {
        return;
      }
    }
    activeSlideHo(indexHo);
    indexHoArr.push(indexHo);
    indexHo++;
    removeSlideHo(indexHoArr[0]);
    indexHoArr.shift();
    removeNumsHo();
    activeNumsHo();
    btnHoNext();
  };

  const prevSlideHo = () => {
    for (let i = 0; i < indexHoArr.length; i++) {
      if (indexHoArr[i] == 0) {
        return;
      }
    }
    removeSlideHo(indexHo - 1);
    indexHoArr.pop();
    indexHo--;
    activeSlideHo(indexHoArr[0] - 1);
    removeNumsHo();
    activeNumsHo();
    indexHoArr.unshift(indexHoArr[0] - 1);
    btnHoPrev();
  };

  const activeSlideHo = (n) => {
    slidesHo[n].classList.add("active");
  };

  const removeSlideHo = (n) => {
    slidesHo[n].classList.remove("active");
  };

  const removeSlidesHo = () => {
    for (let i = 0; i < hoEnd; i++) {
      removeSlideHo(i);
    }
  };

  const activeBtnHoPrev = () => {
    prevHo.classList.add("active");
  };

  const activeBtnHoNext = () => {
    nextHo.classList.add("active");
  };

  const removeBtnHoPrev = () => {
    prevHo.classList.remove("active");
  };

  const removeBtnHoNext = () => {
    nextHo.classList.remove("active");
  };

  const btnHoNext = () => {
    for (let j = 0; j < indexHoArr.length; j++) {
      if (indexHoArr[j] == hoEnd - 1) {
        removeBtnHoNext();
        passiveNumHo(hoEnd - 1);
      }
      if (indexHoArr[j] == 0) {
        removeBtnHoPrev();
        passiveNumHo(0);
      }
      if (indexHoArr[j] != hoEnd - 1) {
        activeBtnHoNext();
        rePassiveNumHo(hoEnd - 1);
      }
      if (indexHoArr[j] != 0) {
        activeBtnHoPrev();
        rePassiveNumHo(0);
      }
    }
  };

  const btnHoPrev = () => {
    for (let j = 0; j < indexHoArr.length; j++) {
      if (indexHoArr[j] == limitHo - 1) {
        removeBtnHoPrev();
        passiveNumHo(0);
      }
      if (indexHoArr[j] != limitHo - 1) {
        activeBtnHoPrev();
        rePassiveNumHo(0);
      }
      if (indexHoArr[j] == slidesHo.length - 1) {
        removeBtnHoNext();
        passiveNumHo(hoEnd - 1);
      }
      if (indexHoArr[j] != slidesHo.length - 1) {
        activeBtnHoNext();
        rePassiveNumHo(hoEnd - 1);
      }
    }
  };

  const btnHo = () => {
    btnHoNext();
    btnHoPrev();
  };

  const numHoSelect = () => {
    for (let n = 0; n < numHo.length; n++) {
      numHo[n].addEventListener("click", () => {
        console.log(n);
        indexHoArr = [];
        rePassiveNumsHo();
        removeSlidesHo();
        removeNumsHo();
        passiveNumHo(n);
        if (n < limitHo) {
          indexHo = n;
          for (let i = 0; i < limitHo; i++) {
            activeSlideHo(indexHo);
            indexHoArr.push(indexHo);
            indexHo++;
            console.log(indexHoArr);
            console.log(indexHo);
          }
        } else {
          indexHo = limitHo;
          for (let j = 0; j < limitHo; j++) {
            activeSlideHo(indexHo);
            indexHoArr.push(indexHo);
            indexHo++;
            console.log(indexHoArr);
            console.log(indexHo);
          }
        }
        if (n == limitHo) {
          //activeNumHo(3);
          activeNumHo(4);
          passiveNumHo(4);
          activeNumHo(5);
        }
        if (n == 0) {
          activeNumHo(0);
          passiveNumHo(0);
          activeNumHo(1);
          activeNumHo(2);
          activeNumHo(3);
        } else {
          activeNumsHo();
        }
        btnHo();
      });
    }
  };

  dowloadSlideHo();

  numHoSelect();

  nextHo.addEventListener("click", nextSlideHo);
  prevHo.addEventListener("click", prevSlideHo);
}

if (containerWidth == 690 || containerWidth == 262) {
  let sliderHoInnerWidth,
    cardSlideHoWidth = document.querySelector(".card-slide").offsetWidth,
    cardSlideHoMargin = 30,
    sliderHoItemPadding = 30,
    isActive = false;

  limitHo = slidesHo.length;
  sliderHoInnerWidth =
    (cardSlideHoWidth + cardSlideHoMargin) * limitHo - cardSlideHoMargin;
  sliderHoInner.style.width = `${sliderHoInnerWidth}px`;
  sliderHoItem.style.width = `${sliderHoInnerWidth + sliderHoItemPadding}px`;

  document.addEventListener("DOMContentLoaded", () => {
    sliderHoItem.style.left = `0px`;
  });

  sliderHo.addEventListener("mousedown", () => {
    isActive = true;
  });

  body.addEventListener("mouseup", () => {
    isActive = false;
  });

  body.addEventListener("mouseleave", () => {
    isActive = false;
  });

  const beforeAfterSliderHo = (x) => {
    let shiftHo = Math.max(
      0,
      Math.min(x, sliderHoItem.offsetWidth - body.offsetWidth)
    );
    sliderHoItem.style.left = `-${shiftHo}px`;
  };

  const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  sliderHoItems.addEventListener("mousemove", (e) => {
    if (!isActive) {
      return;
    }

    let x = e.pageX;
    x -= sliderHoItems.getBoundingClientRect().left;
    beforeAfterSliderHo(x);
    pauseEvents(e);
  });

  sliderHo.addEventListener("touchstart", () => {
    isActive = true;
  });

  body.addEventListener("touchend", () => {
    isActive = false;
  });

  body.addEventListener("touchcancel", () => {
    isActive = false;
  });

  sliderHoItems.addEventListener("touchmove", (e) => {
    if (!isActive) {
      return;
    }

    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    x -= sliderHoItems.getBoundingClientRect().left;

    beforeAfterSliderHo(x);
    pauseEvents(e);
  });
}

// Слайдер choice

const prevCh = document.getElementById("btn-ch-prev"),
  nextCh = document.getElementById("btn-ch-next"),
  sliderCh = document.querySelector(".slider-ch"),
  sliderChItems = document.querySelector(".slider-ch__items"),
  sliderChItem = document.querySelector(".slider-ch__item"),
  sliderChInner = document.querySelector(".slider-ch__inner"),
  slidesCh = document.querySelectorAll(".slider-ch__slide"),
  chStart = 1,
  chEnd = slidesCh.length,
  numsChLength = 3,
  numsCh = document.querySelector(".direct-ch__nums"),
  numCh = document.getElementsByClassName("direct-ch__num"),
  numChLength = numCh.length;

let limitCh,
  indexChArr = [],
  indexCh = 0,
  limitChNum = 3;

if (containerWidth == 1170) {
  limitCh = 4;

  const dowloadSlideCh = () => {
    removeSlidesCh();
    for (let i = 0; i < limitCh; i++) {
      activeSlideCh(indexCh);
      indexChArr.push(indexCh);
      indexCh++;
    }
    createNumCh();
    activeNumCh(0);
    passiveNumCh(0);
    activeNumCh(1);
    activeNumCh(2);
    activeNumCh(3);
    activeNumCh(chEnd - 1);
    activeBtnChNext();
  };

  const createNumCh = () => {
    for (let i = 0; i < chEnd; i++) {
      numsCh.insertAdjacentHTML(
        "afterbegin",
        '<span class="direct-ch__num"></span >'
      );
    }
    for (let j = 0; j < numCh.length; j++) {
      numCh[j].insertAdjacentText("afterbegin", j + 1);
    }
  };

  const activeNumsCh = () => {
    let ind = 0;
    for (let j = 0; j < indexChArr.length; j++) {
      if (indexChArr[j] != 0 || indexChArr[j] != chEnd - 1) {
        if (ind < 3) {
          activeNumCh(indexChArr[j]);
        }
      }
      ind++;
    }
  };

  const activeNumCh = (n) => {
    numCh[n].classList.add("active");
  };

  const removeNumCh = (n) => {
    numCh[n].classList.remove("active");
  };

  const removeNumsCh = () => {
    for (let i = 1; i < numCh.length - 1; i++) {
      removeNumCh(i);
    }
  };

  const passiveNumCh = (n) => {
    numCh[n].classList.add("passive");
  };

  const rePassiveNumsCh = () => {
    for (let i = 1; i < numCh.length - 1; i++) {
      rePassiveNumCh(i);
    }
  };

  const rePassiveNumCh = (n) => {
    numCh[n].classList.remove("passive");
  };

  const nextSlideCh = () => {
    for (let i = 0; i < indexChArr.length; i++) {
      if (indexChArr[i] == slidesCh.length - 1) {
        return;
      }
    }
    activeSlideCh(indexCh);
    indexChArr.push(indexCh);
    indexCh++;
    removeSlideCh(indexChArr[0]);
    indexChArr.shift();
    removeNumsCh();
    activeNumsCh();
    btnChNext();
  };

  const prevSlideCh = () => {
    for (let i = 0; i < indexChArr.length; i++) {
      if (indexChArr[i] == 0) {
        return;
      }
    }
    removeSlideCh(indexCh - 1);
    indexChArr.pop();
    indexCh--;
    activeSlideCh(indexChArr[0] - 1);
    removeNumsCh();
    activeNumsCh();
    indexChArr.unshift(indexChArr[0] - 1);
    btnChPrev();
  };

  const activeSlideCh = (n) => {
    slidesCh[n].classList.add("active");
  };

  const removeSlideCh = (n) => {
    slidesCh[n].classList.remove("active");
  };

  const removeSlidesCh = () => {
    for (let i = 0; i < chEnd; i++) {
      removeSlideCh(i);
    }
  };

  const activeBtnChPrev = () => {
    prevCh.classList.add("active");
  };

  const activeBtnChNext = () => {
    nextCh.classList.add("active");
  };

  const removeBtnChPrev = () => {
    prevCh.classList.remove("active");
  };

  const removeBtnChNext = () => {
    nextCh.classList.remove("active");
  };

  const btnChNext = () => {
    for (let j = 0; j < indexChArr.length; j++) {
      if (indexChArr[j] == chEnd - 1) {
        removeBtnChNext();
        passiveNumCh(chEnd - 1);
      }
      if (indexChArr[j] == 0) {
        removeBtnChPrev();
        passiveNumCh(0);
      }
      if (indexChArr[j] != chEnd - 1) {
        activeBtnChNext();
        rePassiveNumCh(chEnd - 1);
      }
      if (indexChArr[j] != 0) {
        activeBtnChPrev();
        rePassiveNumCh(0);
      }
    }
  };

  const btnChPrev = () => {
    for (let j = 0; j < indexChArr.length; j++) {
      if (indexChArr[j] == limitCh - 1) {
        removeBtnChPrev();
        passiveNumCh(0);
      }
      if (indexChArr[j] != limitCh - 1) {
        activeBtnChPrev();
        rePassiveNumCh(0);
      }
      if (indexChArr[j] == slidesCh.length - 1) {
        removeBtnChNext();
        passiveNumCh(chEnd - 1);
      }
      if (indexChArr[j] != slidesCh.length - 1) {
        activeBtnChNext();
        rePassiveNumCh(chEnd - 1);
      }
    }
  };

  const btnCh = () => {
    btnChNext();
    btnChPrev();
  };

  const numChSelect = () => {
    for (let n = 0; n < numCh.length; n++) {
      numCh[n].addEventListener("click", () => {
        console.log(n);
        indexChArr = [];
        rePassiveNumsCh();
        removeSlidesCh();
        removeNumsCh();
        passiveNumCh(n);
        if (n < limitCh) {
          indexCh = n;
          for (let i = 0; i < limitCh; i++) {
            activeSlideCh(indexCh);
            indexChArr.push(indexCh);
            indexCh++;
            console.log(indexChArr);
            console.log(indexCh);
          }
        } else {
          indexCh = limitCh;
          for (let j = 0; j < limitCh; j++) {
            activeSlideCh(indexCh);
            indexChArr.push(indexCh);
            indexCh++;
            console.log(indexChArr);
            console.log(indexCh);
          }
        }
        if (n == limitCh) {
          //activeNumCh(3);
          activeNumCh(4);
          passiveNumCh(4);
          activeNumCh(5);
        }
        if (n == 0) {
          activeNumCh(0);
          passiveNumCh(0);
          activeNumCh(1);
          activeNumCh(2);
          activeNumCh(3);
        } else {
          activeNumsCh();
        }
        btnCh();
      });
    }
  };

  dowloadSlideCh();

  numChSelect();

  nextCh.addEventListener("click", nextSlideCh);
  prevCh.addEventListener("click", prevSlideCh);
}

if (containerWidth == 690 || containerWidth == 262) {
  let sliderChInnerWidth,
    cardSlideChWidth = document.querySelector(".card-slide").offsetWidth,
    cardSlideChMargin = 30,
    sliderChItemPadding = 30,
    isActive = false;

  limitCh = slidesCh.length;
  sliderChInnerWidth =
    (cardSlideChWidth + cardSlideChMargin) * limitCh - cardSlideChMargin;
  sliderChInner.style.width = `${sliderChInnerWidth}px`;
  sliderChItem.style.width = `${sliderChInnerWidth + sliderChItemPadding}px`;

  document.addEventListener("DOMContentLoaded", () => {
    sliderChItem.style.left = `0px`;
  });

  sliderCh.addEventListener("mousedown", () => {
    isActive = true;
  });

  body.addEventListener("mouseup", () => {
    isActive = false;
  });

  body.addEventListener("mouseleave", () => {
    isActive = false;
  });

  const beforeAfterSliderCh = (x) => {
    let shiftCh = Math.max(
      0,
      Math.min(x, sliderChItem.offsetWidth - body.offsetWidth)
    );
    sliderChItem.style.left = `-${shiftCh}px`;
  };

  const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  sliderChItems.addEventListener("mousemove", (e) => {
    if (!isActive) {
      return;
    }

    let x = e.pageX;
    x -= sliderChItems.getBoundingClientRect().left;
    beforeAfterSliderCh(x);
    pauseEvents(e);
  });

  sliderCh.addEventListener("touchstart", () => {
    isActive = true;
  });

  body.addEventListener("touchend", () => {
    isActive = false;
  });

  body.addEventListener("touchcancel", () => {
    isActive = false;
  });

  sliderChItems.addEventListener("touchmove", (e) => {
    if (!isActive) {
      return;
    }

    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    x -= sliderChItems.getBoundingClientRect().left;

    beforeAfterSliderCh(x);
    pauseEvents(e);
  });
}

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

const menuBurger = document.querySelector(".menu-categories__burger"),
  container = document.querySelector(".container");
if (menuBurger) {
  const menuBody = document.querySelector(".menu-categories__body");
  const menuServices = document.querySelector(".header__menu-services");
  const menuHeaderLogo = document.querySelector(".header__logo");
  const menuShoping = document.querySelector(".shoping");
  const menuContacts = document.querySelector(".header__contacts");
  menuBurger.addEventListener("click", function (e) {
    menuBurger.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    menuServices.classList.toggle("_active");
    if (menuServices.classList.contains("_active")) {
      if (containerWidth == 262) {
        menuHeaderLogo.style.margin = "18px 0 0 0";
      }
      document.body.style.overflow = "hidden";
      menuShoping.style.display = "none";
      menuContacts.style.display = "none";
    } else {
      menuHeaderLogo.style.margin = "0";
      document.body.style.overflow = "auto";
      menuShoping.style.display = "block";
      menuContacts.style.display = "flex";
    }
  });
}

// footer__block-catalog, footer__block-buyers, footer__block-info, footer__block-network

const footerBlockCatalog = document.querySelector(".footer__block-catalog"),
  footerBlockBuyers = document.querySelector(".footer__block-buyers"),
  footerBlockInfo = document.querySelector(".footer__block-info"),
  footerBlockNetwork = document.querySelector(".footer__block-network"),
  footerMenu = document.querySelectorAll(".footer__menu"),
  footerMenuCatalog = document.querySelector(".footer__menu-catalog"),
  footerMenuBuyers = document.querySelector(".footer__menu-buyers"),
  footerMenuInfo = document.querySelector(".footer__menu-info"),
  footerMenuNetwork = document.querySelector(".footer__menu-network");

if (containerWidth == 690 || containerWidth == 262) {
  footerBlockCatalog.addEventListener("click", function (e) {
    if (footerMenuBuyers.classList.contains("_active")) {
      footerMenuBuyers.classList.remove("_active");
    }
    if (footerMenuInfo.classList.contains("_active")) {
      footerMenuInfo.classList.remove("_active");
    }
    if (footerMenuNetwork.classList.contains("_active")) {
      footerMenuNetwork.classList.remove("_active");
    }
    footerMenuCatalog.classList.toggle("_active");
  });
  footerBlockBuyers.addEventListener("click", function (e) {
    if (footerMenuCatalog.classList.contains("_active")) {
      footerMenuCatalog.classList.remove("_active");
    }
    if (footerMenuInfo.classList.contains("_active")) {
      footerMenuInfo.classList.remove("_active");
    }
    if (footerMenuNetwork.classList.contains("_active")) {
      footerMenuNetwork.classList.remove("_active");
    }
    footerMenuBuyers.classList.toggle("_active");
  });
  footerBlockInfo.addEventListener("click", function (e) {
    if (footerMenuCatalog.classList.contains("_active")) {
      footerMenuCatalog.classList.remove("_active");
    }
    if (footerMenuBuyers.classList.contains("_active")) {
      footerMenuBuyers.classList.remove("_active");
    }
    if (footerMenuNetwork.classList.contains("_active")) {
      footerMenuNetwork.classList.remove("_active");
    }
    footerMenuInfo.classList.toggle("_active");
  });
  footerBlockNetwork.addEventListener("click", function (e) {
    if (footerMenuCatalog.classList.contains("_active")) {
      footerMenuCatalog.classList.remove("_active");
    }
    if (footerMenuBuyers.classList.contains("_active")) {
      footerMenuBuyers.classList.remove("_active");
    }
    if (footerMenuInfo.classList.contains("_active")) {
      footerMenuInfo.classList.remove("_active");
    }
    footerMenuNetwork.classList.toggle("_active");
  });
}
