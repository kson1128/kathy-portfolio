import '../style.scss';
import * as scroll from '../scroll';
import sendForm from '../emailjs';

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
    'Life is 10% what happens to me and 90% of how I react to it.',
    '—Charles Swindoll',
  ],
  [
    'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
    '—Oprah Winfrey',
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
];

let iconPics = [
  './src/imgs/javascript.png',
  './src/imgs/html.png',
  './src/imgs/css.png',
  './src/imgs/bootstrap.png',
  './src/imgs/tailwind.png',
  './src/imgs/materialui.png',
  './src/imgs/react.png',
  './src/imgs/redux.png',
  './src/imgs/node.png',
  './src/imgs/expressjs.png',
  './src/imgs/electron.png',
  './src/imgs/viroreact.png',
  './src/imgs/postgresql.png',
  './src/imgs/GitHub.png',
  './src/imgs/git.png',
  './src/imgs/heroku.png',
];

document.addEventListener('DOMContentLoaded', function () {
  let random = Math.floor(Math.random() * quotes.length);

  let quote = quotes[random][0];
  let author = quotes[random][1];

  const quoteElement = document.getElementById('quote');
  quoteElement.innerHTML = quote + '\n' + author;

  const generateNext = document.getElementById('generate');

  generateNext.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    let quote = quotes[random][0];
    let author = quotes[random][1];

    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quote + '\n' + author;
  });

  function displaySkillsIcon() {
    const icons = document.createElement('div');
    icons.className = 'iconPics';
    Array.from(iconPics).forEach(eachIcon => {
      let skill = `<img src="${eachIcon}" />`;
      icons.innerHTML += skill;

      let skills = document.getElementById('technical-skills');
      skills.appendChild(icons);
    });
  }

  displaySkillsIcon();

  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();

  (function () {
    emailjs.init(process.env.KEY);
  })();

  window.onload = function () {
    document
      .getElementById('contact-form')
      .addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        // emailjs.sendForm('contact_service', 'contact_form', this).then(
        //   function () {
        //     console.log('SUCCESS!');
        //   },
        //   function (error) {
        //     console.log('FAILED...', error);
        //   }
        // );

        emailjs
          .sendForm('service_n31wb6h', 'template_9tdszj7', '#contact-form')
          .then(
            function (response) {
              console.log('SUCCESS!', response.status, response.text);
            },
            function (error) {
              console.log('FAILED...', error);
            }
          );
      });
  };
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

    slideIndicator.innerHTML = `<div class="icon">
      <svg
        class="heart-main"
        viewBox="0 0 512 512"
        width="50"
        title="heart"
      >
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
      </svg>
      <svg
        class="heart-background"
        viewBox="0 0 512 512"
        width="100"
        title="heart"
      >
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
      </svg>
    </div>`;

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
