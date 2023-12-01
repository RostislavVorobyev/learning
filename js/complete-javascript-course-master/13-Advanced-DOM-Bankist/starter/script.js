'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(x => x.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////// Cookie bannerdo

let heads = document.querySelector('.header');
let sections = document.querySelectorAll('.section');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we use cokies to improve your experience. <button class="btn btn-close-cookie">Got it!</button>';

document.querySelector('.header').prepend(message);
document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

let logo = document.querySelector('.nav_logo');

//////////////// Scroll

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({ behavior: 'smooth' });
});

const navLinks = document.querySelector('.nav__links');

// nav.forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     console.log(e.currentTarget);
//   });
// });

// navLink.forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(e.currentTarget);
//   });
// });

navLinks.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    let id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////

const nav = document.querySelector('.nav');
const changeNavOpacity = function (e) {
  const target = e.target;
  if (target.classList.contains('nav__link')) {
    const siblings = target.closest('.nav').querySelectorAll('.nav__link');
    const logo = target.closest('.nav').querySelector('.nav__logo');

    siblings.forEach(element => {
      if (element !== target) {
        element.style.opacity = this;
      }
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', changeNavOpacity.bind(0.5));

nav.addEventListener('mouseout', changeNavOpacity.bind(1));

///////////////////////
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  let clicked = e.target.closest('.operations__tab');

  if (clicked) {
    tabs.forEach(x => x.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    console.log(
      document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    );

    tabsContent.forEach(x => x.classList.remove('operations__content--active'));

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  }
});

///////////////////

const obsCallback = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
};
const header = document.querySelector('.header');
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);

/////////////////////

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(s => {
  sectionObserver.observe(s);
  // s.classList.add('section--hidden');
});

////
const lazyImg = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
    imageObserver.unobserve(entry.target);
  });
};

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-100px',
});

lazyImg.forEach(x => imageObserver.observe(x));

/////////////
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

let currSlide = 0;
const maxSlides = slides.length;

slider.style.transform = 'translateX(-50%) scale(0.4)';
slider.style.overflow = 'visible';

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotsContainer = document.querySelector('.dots');

const createDots = function () {
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(x => x.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
const goToSlide = function (currSlide) {
  slides.forEach(
    (x, i) => (x.style.transform = `translateX(${(i - currSlide) * 100}%)`)
  );
};

function nextSlide() {
  currSlide = currSlide === maxSlides - 1 ? 0 : currSlide + 1;

  goToSlide(currSlide);
  activateDot(currSlide);
}

function prevSlide() {
  currSlide = currSlide === 0 ? maxSlides - 1 : currSlide - 1;

  goToSlide(currSlide);
  activateDot(currSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

dotsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dots__dot')) {
    goToSlide(e.target.dataset.slide);
    activateDot(e.target.dataset.slide);
  }
});

function initializeSlider() {
  goToSlide(0);
  createDots();
  activateDot(0);
}

initializeSlider();

/////////////

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('html parsed', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log('aaaaaaaaaaa');
  e.returnValue = 'message';
});
