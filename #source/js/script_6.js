// Слайдер choice

const prevCh = document.getElementById("btn-ch-prev"),
  nextCh = document.getElementById("btn-ch-next"),
  slidesCh = document.querySelectorAll(".slider-ch__slide"),
  chStart = 1,
  chEnd = slidesCh.length,
  numsChLength = 3,
  numsCh = document.querySelector(".direct-ch__nums"),
  numCh = document.getElementsByClassName("direct-ch__num"),
  numChLength = numCh.length;
  //containerWidth = document.querySelector(".container").offsetWidth;

let limitCh,
  indexChArr = [],
  indexCh = 0,
  limitChNum = 3;

if (containerWidth == 1170) {
  limitCh = 4;
}
if (containerWidth == 690) {
  limitCh = 3;
}
if (containerWidth == 262) {
  limitCh = 1;
}

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
