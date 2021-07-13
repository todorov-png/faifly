'use strict';

const slidesWrapper = document.querySelector('.header-content__slider-wrap');

if (slidesWrapper) {
  const slides = document.querySelectorAll('.header-content__slider-item'),
        slidesField = document.querySelector('.header-content__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
      
  let slideIndex = 1,
      offset = 0;

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => {
    slide.style.width = width;
  });

  const indicators = document.querySelector('.header-content__slider-btn'),
      dots = [];

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.setAttribute('data-slide-to', i+1);
    dot.classList.add('header-content__slider-dot');
    if (i == 0) {
      dot.classList.add('select');
    }
    indicators.append(dot);
    dots.push(dot);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to'),
            slidesWrapper = document.querySelector('.header-content__slider-wrap'),
            width = window.getComputedStyle(slidesWrapper).width;
  
      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);
  
      slidesField.style.transform = `translateX(-${offset}px)`;
  
      dotsActive(dots, slideIndex);
    });
  });
}


function deleteNotDigits(str) {
  return +str.replace(/\D/ig, '');
}

function dotsActive(dots, slideIndex) {
  dots.forEach(dot => dot.classList.remove('select'));
  dots[slideIndex - 1].classList.add('select');
};


function nextSlide() {
  const slidesWrapper = document.querySelector('.header-content__slider-wrap');
        
  if (slidesWrapper) {
    const slidesField = document.querySelector('.header-content__slider-inner'),
          dots = document.querySelectorAll('.header-content__slider-dot'),
          width = window.getComputedStyle(slidesWrapper).width,
          slides = document.querySelectorAll('.header-content__slider-item');

    let slideIndex = document.querySelector('.header-content__slider-dot.select').getAttribute('data-slide-to'); 

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    slidesField.style.transform = `translateX(-${deleteNotDigits(width) * (slideIndex - 1)}px)`;

    dotsActive(dots, slideIndex);
  }
}


setInterval(nextSlide, 10000);


window.addEventListener("resize", () => {
  const slidesWrapper = document.querySelector('.header-content__slider-wrap');

  if (slidesWrapper) {
    const slidesField = document.querySelector('.header-content__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width,
          slides = document.querySelectorAll('.header-content__slider-item'),
          slideTo = document.querySelector('.header-content__slider-dot.select').getAttribute('data-slide-to');

    slides.forEach(slide => {
      slide.style.width = width;
    });

    slidesField.style.transform = `translateX(-${deleteNotDigits(width) * (slideTo - 1)}px)`;
  }
});