'use strict';

const testimonials = document.querySelector('.testimonials');

if (testimonials) {
  const sliderContainer = testimonials.querySelector('.testimonials__slider-container-img'),
        back = testimonials.querySelector('.testimonials__slider-back'),
        forward = testimonials.querySelector('.testimonials__slider-forward'),
        item = sliderContainer.querySelectorAll('.testimonials__slider-item');

  forward.addEventListener('click', () => {
    toForward(sliderContainer);
  });
 
  back.addEventListener('click', () => {
    toBack(sliderContainer);
  });

  item.forEach(elem => {
    elem.addEventListener('click', (e) => {
      const item = sliderContainer.querySelectorAll('.testimonials__slider-item img');

      item.forEach((elem, i) => {
        if (elem == e.target){
          switch (i) {
            case 0: toBack(sliderContainer); toBack(sliderContainer); break;
            case 1: toBack(sliderContainer); break;
            case 3: toForward(sliderContainer); break;
            case 4: toForward(sliderContainer); toForward(sliderContainer); break;
          }
        }
        
      });
    });
  });
  setInterval(() => toForward(sliderContainer), 10000);
}

function toBack(sliderContainer) {
  const item = sliderContainer.querySelectorAll('.testimonials__slider-item');
  item[2].classList.remove('active');
  item[1].classList.add('active');
  updateText(parseInt(item[1].getAttribute('data-id')), testimonials);
  sliderContainer.prepend(item[4]); 
}

function toForward(sliderContainer) {
  const item = sliderContainer.querySelectorAll('.testimonials__slider-item');
  item[2].classList.remove('active');
  item[3].classList.add('active');
  updateText(parseInt(item[3].getAttribute('data-id')), testimonials);
  sliderContainer.append(item[0]);
}

function updateText(i, testimonials) {
  const data = [
    {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, molestias aliquam? Cum doloremque dolore consectetur odio atque doloribus debitis a commodi ipsa, iure, dolorem beatae ad ab temporibus impedit tempora excepturi? Quibusdam, vel? Molestiae beatae consequatur amet praesentium quia voluptatem consectetur? Temporibus cumque at quis distinctio, consectetur nihil adipisci enim velit nam!",
      name: "Katya UCUK",
      position: "CEO & FOUNDER"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat illo deserunt harum officiis mollitia suscipit eius, expedita eligendi dolores, nulla, dolorum a ut et fuga voluptatem modi totam quo ea repellendus porro? Architecto hic, delectus ipsum alias odit nobis. Eaque dignissimos quibusdam quaerat aperiam officia in. Illum, dolor! Magnam!",
      name: "DIK ADALIN",
      position: "ENGINEERING"
    },
    {
      text: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
      name: "JANE GALADRIEL",
      position: "CEO TENGKUREP"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum? Vel doloribus officiis veniam, temporibus deserunt alias aspernatur iusto quibusdam quo aperiam ratione saepe, cupiditate ipsum quam. Officiis repellat sint reprehenderit, exercitationem commodi enim. Libero, suscipit. Maiores dolorem odit ducimus saepe eos? Ducimus ea, reiciendis autem quas incidunt molestiae ratione!",
      name: "Maria KOL",
      position: "DESIGNER"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi quo nulla magnam quis quidem suscipit nostrum quisquam delectus vitae ipsa ducimus, voluptatum minus rem atque dolores officia perferendis culpa voluptates tempora, consequatur reprehenderit quasi dignissimos ipsum? Minus, voluptatum! Asperiores soluta molestias tempore voluptatibus. Dolorem debitis praesentium!",
      name: "PET ROMAK",
      position: "MARKETING"
    }
  ];

  testimonials.querySelector('.testimonials__text').innerText = data[i].text;
  testimonials.querySelector('.testimonials__name').innerText = data[i].name;
  testimonials.querySelector('.testimonials__position').innerText = data[i].position;
}