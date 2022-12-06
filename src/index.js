import '../style.scss';
import * as scroll from '../scroll';
import sendForm from '../emailjs';
import Swal from 'sweetalert2';

let quotes = [
  [
    'Nothing is impossible, the word itself says “I’m possible”!',
    '—Audrey Hepburn',
  ],
  [
    'It does not matter how slowly you go as long as you do not stop.',
    '—Confucius',
  ][
    ('Success is not final; failure is not fatal: It is the courage to continue that counts.',
    ' — Winston S. Churchill')
  ],
  [
    'Life is 10% what happens to me and 90% of how I react to it.',
    '—Charles Swindoll',
  ],
  [
    'To know how much there is to know is the beginning of learning to live.',
    ' —Dorothy West',
  ],

  [
    'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. ',
    '—Jimmy Dean',
  ],
  ['Believe you can and you’re halfway there. ', '—Theodore Roosevelt'],
  [
    'Coming together is a beginning. Keeping together is progress. Working together is success. ',
    '— Henry Ford',
  ],
  [
    'Just one small positive thought in the morning can change your whole day.',
    '— Dalai Lama',
  ],
  [
    'What you do speaks so loudly that I cannot hear what you say. ',
    '—Ralph Waldo Emerson',
  ],
  [
    'If you change the way you look at things, the things you look at change. ',
    '— Wayne Dyer',
  ],
  [
    'Strive not to be a success, but rather to be of value. ',
    '—Albert Einstein',
  ],
  ['You carry the passport to your own happiness.', '—Diane von Furstenberg'],
  [
    'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
    '—Henry Ford',
  ],
  ['If there is no struggle, there is no progress.', ' —Frederick Douglass'],
  [
    'Keep your eyes on the stars, and your feet on the ground.',
    '―Theodore Roosevelt',
  ],
  [
    'It is during our darkest moments that we must focus to see the light.',
    '—Aristotle Onassis',
  ],
  [
    'All you need is the plan, the road map, and the courage to press on to your destination.',
    '—Earl Nightingale',
  ],
  ['The only way to do great work is to love what you do.', '—Steve Jobs'],
  ['Change your thoughts and you change your world.', '—Norman Vincent Peale'],
];

let iconPics = [
  './src/imgs/javascript.png',
  './src/imgs/html.png',
  './src/imgs/css.png',
  './src/imgs/bootstrap.png',
  './src/imgs/react.png',
  './src/imgs/redux.png',
  './src/imgs/materialui.png',
  './src/imgs/tailwind.png',
  './src/imgs/expressjs.png',
  './src/imgs/node.png',
  './src/imgs/sequelize.png',
  './src/imgs/postgresql.png',
  './src/imgs/GitHub.png',
  './src/imgs/git.png',
  './src/imgs/heroku.png',
];

document.addEventListener('DOMContentLoaded', function () {
  function darkOrLightToggle() {
    let element = document.getElementById('focus');
    console.log('element', element);
    element.classList.toggle('dark-mode');

    let x = document.getElementById('btnValue');
    if (x.innerHTML === 'Dark mode') {
      x.innerHTML = 'Light mode';
      x.classList.remove('btn-dark');
      x.classList.toggle('btn-light');
    } else {
      x.innerHTML = 'Dark mode';
      x.classList.remove('btn-light');
      x.classList.toggle('btn-dark');
    }
  }

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

  let option = {
    animation: true,
    delay: 3000,
  };
  let btn = document.getElementById('toastbtn');
  let element = document.getElementById('toastNotice');

  // Create toast instance
  let myToast = new bootstrap.Toast(element, option);

  (function () {
    emailjs.init(process.env.KEY);
  })();

  window.onload = function () {
    document
      .getElementById('contact-form')
      .addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs
          .sendForm('service_n31wb6h', 'template_9tdszj7', '#contact-form')
          .then(
            result => {
              console.log(result.text);
              Swal.fire({
                icon: 'success',
                title: 'Message sent successfully 😃',
              });
              document.getElementById('contact-form').reset();
            },
            error => {
              console.log(error.text);
              Swal.fire({
                icon: 'error',
                title: 'Something went wrong 😕',
                text: error.text,
              });
            }
          );
      });
  };
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
      console.log('fps-', fps);
    };
    if (index === fps.currentSlide) {
      slideIndicator.className = 'active';
    }

    indicator.appendChild(slideIndicator);
    slideIndicators.push(slideIndicator);
  });

  document.body.appendChild(indicator);

  let indicators = document.getElementsByClassName('item');
  let menuItems = Array.from(indicators);

  menuItems.forEach(function (slide, index) {
    slide.onclick = function () {
      fps.goToSlide(index);
    };
  });
});

// async function typeSentence(sentence, eleRef, delay = 100) {
//   const letters = sentence.split('');
//   let i = 0;
//   while (i < letters.length) {
//     if (i === 3) {
//       await waitForMs(700);
//     }
//     await waitForMs(delay);
//     eleRef.append(letters[i]);
//     i++;
//   }
//   return;
// }

// function waitForMs(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// document.addEventListener('DOMContentLoaded', init);

// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));

//   typeSentence(words, txtElement);
// }

// document.addEventListener('DOMContentLoaded', function () {
//   let wrap = document.getElementById('wrap');
//   let fps = new FullPageScroll(wrap);

//   let indicator = document.createElement('div');
//   indicator.id = 'indicator';

//   let slideIndicators = [];

//   fps.slides.forEach(function (slide, index) {
//     let slideIndicator = document.createElement('div');

//     slideIndicator.innerHTML = `<div class="icon">
//       <svg
//         class="heart-main"
//         viewBox="0 0 512 512"
//         width="50"
//         title="heart"
//       >
//         <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
//       </svg>
//       <svg
//         class="heart-background"
//         viewBox="0 0 512 512"
//         width="100"
//         title="heart"
//       >
//         <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
//       </svg>
//     </div>`;

//     slideIndicator.onclick = function () {
//       fps.goToSlide(index);
//     };
//     if (index === fps.currentSlide) {
//       slideIndicator.className = 'active';
//     }

//     indicator.appendChild(slideIndicator);
//     slideIndicators.push(slideIndicator);
//   });

//   document.body.appendChild(indicator);

// fps.slides.forEach(function (slide, index) {
//   let menu = document.getElementsByClassName('menu')[0];
//   menu.onclick = function () {
//     fps.goToSlide(index);
//   };
// });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   let wrap = document.getElementById('wrap');
//   let fps = new FullPageScroll(wrap);

//   let indicators = document.getElementsByClassName('item');
//   let menuItems = Array.from(indicators);

//   menuItems.forEach(function (slide, index) {
//     slide.onclick = function () {
//       fps.goToSlide(index);
//     };
//   });
// });
