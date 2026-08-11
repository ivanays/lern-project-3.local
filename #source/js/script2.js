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
  slidesHo = document.querySelectorAll(".slider-ho__slide"),
  hoStart = 1,
  hoEnd = slidesHo.length,
  numsHoLength = 3,
  numsHo = document.querySelector(".direct-ho__nums"),
  numHo = document.getElementsByClassName("direct-ho__num"),
  //numHo = document.querySelectorAll(".direct-ho__num"),
  numHoActive = document.getElementsByClassName("active"),
  numHoLength = numHo.length,
  numHoEnd = hoEnd - numsHoLength - 2,
  containerWidth = document.querySelector(".container").offsetWidth;

let limitHo = 4,
  indexHoArr = [],
  indexHo = 0,
  limitHoNum = 3;

// if (containerWidth == 1170) {
//   limitHo = 4;
// }
// if (containerWidth == 690) {
//   limitHo = 3;
// }
// if (containerWidth == 262) {
//   limitHo = 1;
// }

const dowloadSlideHo = () => {
  removeSlidesHo();
  // removeNumsHo();
  for (let i = 0; i < limitHo; i++) {
    activeSlideHo(indexHo);
    indexHoArr.push(indexHo);
    indexHo++;
    //console.log(indexHoArr);
  }
  // dowloadBtnStartEnd();
  createNumHo();
  //activeNumHo(0);
  activeNumHo(hoEnd - 1);
  // indexHoArr = [1, 2, 3, 4];
  activeNumsHo();
  // activeStartHo(0);
  // activeEndHo(hoEnd - 1);
  // activeBtnHoEnd();
  activeBtnHoNext();
};

const dowloadBtnStartEnd = () => {
  startHo.insertAdjacentText("afterbegin", hoStart);
  endHo.insertAdjacentText("afterbegin", hoEnd);
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
        ind++;
      }
    }
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

const activeStartHo = (n) => {
  numHo[n].classList.add("start-ho");
};

const removeStartHo = (n) => {
  numHo[n].classList.remove("start-ho");
};

const activeEndHo = (n) => {
  numHo[n].classList.add("end-ho");
};

const removeEndHo = (n) => {
  numHo[n].classList.remove("end-ho");
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
  console.log(indexHo);
  console.log(indexHoArr);
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
  console.log(indexHo);
  console.log(indexHoArr);
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

// const numSlideHo = () => {

// };

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

const elemHoContent = (elem, content) => {
  elem.textContent(content);
};

const activeBtnHoPrev = () => {
  prevHo.classList.add("active");
};

const activeBtnHoNext = () => {
  nextHo.classList.add("active");
};

const activeBtnHoStart = () => {
  startHo.classList.add("active");
};

const activeBtnHoEnd = () => {
  endHo.classList.add("active");
};

const removeBtnHoPrev = () => {
  prevHo.classList.remove("active");
};

const removeBtnHoNext = () => {
  nextHo.classList.remove("active");
};

const removeBtnHoStart = () => {
  startHo.classList.remove("active");
};

const removeBtnHoEnd = () => {
  endHo.classList.remove("active");
};

dowloadSlideHo();

nextHo.addEventListener("click", nextSlideHo);
prevHo.addEventListener("click", prevSlideHo);

// for (let num of numHo) {
//   num.addEventListener("click", () => {
//     console.log(num.);
//   })
// }

for (let n = 0; n < numHo.length; n++) {
  numHo[n].addEventListener("click", () => {
    console.log(n);
    indexHoArr = [];
    // activeNumsHo();
    rePassiveNumsHo();
    removeSlidesHo();
    removeNumsHo();
    passiveNumHo(n);
    if (n < numHo.length - limitHo) {
      indexHo = n;
      for (let i = 0; i < limitHo; i++) {
        activeSlideHo(indexHo);
        //activeNumHo(indexHo);
        indexHoArr.push(indexHo);
        indexHo++;
        console.log(indexHoArr);
        console.log(indexHo);
      }
    } else {
      indexHo = n - limitHo + 1;
      for (let j = 0; j < limitHo; j++) {
        activeSlideHo(indexHo);
        //activeNumHo(indexHo);
        indexHoArr.push(indexHo);
        indexHo++;
        console.log(indexHoArr);
        console.log(indexHo);
      }
      // for (let j = limitHo; j > 0; j--) {
      //   activeSlideHo(indexHo);
      //   indexHoArr.unshift(indexHo);
      //   indexHo--;
      //   console.log(indexHoArr);
      //   console.log(indexHo);
      // }
    }
    activeNumsHo();
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
  });
}

// numHo.forEach((item) => {
//   item.addEventListener("click", () => {
//     // indexHo = indexNumHos;
//      console.log(indexHo);
//     // removeSlidesHo();
//     // for (let i = 0; i < limitHo; i++) {
//     //   activeSlideHo(indexHo);
//     //   indexHoArr.push(indexHo);
//     //   indexHo++;
//     // }
//   });
// });

// const prepareCurrentSlideHo = (ind) => {
//   activeSlideHo(ind);
//   //activeNumHo(ind);
// };

// const nextSlideHo = () => {
//   if (index == slidesHo.length - 1) {
//     index = 0;
//     prepareCurrentSlideHo(index);
//   } else {
//     index++;
//     prepareCurrentSlideHo(index);
//   }
// };

// const prevSlideHo = () => {
//   if (index == 0) {
//     index = slidesHo.length - 1;
//     prepareCurrentSlideHo(index);
//   } else {
//     index--;
//     prepareCurrentSlideHo(index);
//   }
// };

// // numsHo.forEach((item, indexNumHo) => {
// //   item.addEventListener("click", () => {
// //     index = indexNumHo;
// //     prepareCurrentSlideHo(index);
// //   });
// // });

//   prepareCurrentSlideHo(indexHo);

// nextHo.addEventListener("click", nextSlideHo);
// prevHo.addEventListener("click", prevSlideHo);
