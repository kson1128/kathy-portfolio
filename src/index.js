import '../style.scss';
import * as scroll from '../scroll';

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split('');
  let i = 0;
  while (i < letters.length) {
    if (i === 3) {
      await waitForMs(700);
    }
    await waitForMs(delay);
    eleRef.append(letters[i]);
    i++;
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));

  typeSentence(words, txtElement);
}

document.addEventListener('DOMContentLoaded', function () {
  let wrap = document.getElementById('wrap');
  let fps = new FullPageScroll(wrap);

  let indicator = document.createElement('div');
  indicator.id = 'indicator';
  let slideIndicators = [];

  fps.slides.forEach(function (slide, index) {
    let slideIndicator = document.createElement('div');
    slideIndicator.onclick = function () {
      fps.goToSlide(index);
    };
    if (index === fps.currentSlide) {
      slideIndicator.className = 'active';
    }
    indicator.appendChild(slideIndicator);
    slideIndicators.push(slideIndicator);
  });
  document.body.appendChild(indicator);
  fps.onslide = function () {
    slideIndicators.forEach(function (slideIndicator, index) {
      if (index === fps.currentSlide) {
        slideIndicator.className = 'active';
      } else {
        slideIndicator.className = '';
      }
    });
  };
});
