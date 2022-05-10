import '../style.scss';
import * as scroll from '../scroll';

let quotes = [
  [
    'Nothing is impossible, the word itself says “I’m possible”!',
    '—Audrey Hepburn',
  ],
  [
    'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    '—Maya Angelou',
  ][
    ('Whether you think you can or you think you can’t, you’re right.',
    '—Henry Ford')
  ],
  [
    'Perfection is not attainable, but if we chase perfection we can catch excellence.',
    '—Vince Lombardi',
  ],
  [
    'Life is 10% what happens to me and 90% of how I react to it.',
    '—Charles Swindoll',
  ],
  [
    'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
    '—Oprah Winfrey',
  ],
  [
    'Remember no one can make you feel inferior without your consent. ',
    '—Eleanor Roosevelt',
  ],
  [
    'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. ',
    '—Jimmy Dean',
  ],
  ['Believe you can and you’re halfway there. ', '—Theodore Roosevelt'],
  [
    'To handle yourself, use your head; to handle others, use your heart. ',
    '—Eleanor Roosevelt',
  ],
  [
    'Too many of us are not living our dreams because we are living our fears. ',
    '—Les Brown',
  ],
  ['Do or do not. There is no try. ', '—Yoda'],
  [
    'Whatever the mind of man can conceive and believe, it can achieve. ',
    '—Napoleon Hill',
  ],
  [
    'Strive not to be a success, but rather to be of value. ',
    '—Albert Einstein',
  ],
  [
    'I am not a product of my circumstances. I am a product of my decisions.',
    '—Stephen Covey',
  ],
  [
    'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
    '—Henry Ford',
  ],
  [
    'The most common way people give up their power is by thinking they don’t have any.',
    ' —Alice Walker',
  ],
  [
    'The most difficult thing is the decision to act, the rest is merely tenacity.',
    '—Amelia Earhart',
  ],
  [
    'It is during our darkest moments that we must focus to see the light.',
    '—Aristotle Onassis',
  ],
  [
    'Don’t judge each day by the harvest you reap but by the seeds that you plant.',
    '—Robert Louis Stevenson',
  ],
  ['The only way to do great work is to love what you do.', '—Steve Jobs'],
  ['Change your thoughts and you change your world.', '—Norman Vincent Peale'],
  [
    'The question isn’t who is going to let me; it’s who is going to stop me.',
    ' —Ayn Rand',
  ],
];

document.addEventListener('DOMContentLoaded', function () {
  let random = Math.floor(Math.random() * quotes.length);

  let quote = quotes[random][0];
  let author = quotes[random][1];

  console.log('author', author);
  const quoteElement = document.getElementById('quote');
  quoteElement.innerHTML = quote + '\n' + author;
});

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

    slideIndicator.innerText = '💚';

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
  // console.log(
  //   'slide-',
  //   (fps.onslide = function () {
  //     slideIndicators.forEach(function (slideIndicator, index) {
  //       if (index === fps.currentSlide) {
  //         slideIndicator.className = 'active';
  //       } else {
  //         slideIndicator.className = '';
  //       }
  //     });
  //   })
  // );

  // fps.slides.forEach(function (slide, index) {
  //   let menu = document.getElementsByClassName('menu')[0];
  //   menu.onclick = function () {
  //     fps.goToSlide(index);
  //   };
  // });
});

document.addEventListener('DOMContentLoaded', function () {
  let wrap = document.getElementById('wrap');
  let fps = new FullPageScroll(wrap);

  let indicators = document.getElementsByClassName('item');
  let menuItems = Array.from(indicators);

  menuItems.forEach(function (slide, index) {
    slide.onclick = function () {
      fps.goToSlide(index);
    };
  });
});
