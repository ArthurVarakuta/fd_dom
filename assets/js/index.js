'use strict';

const slides = [
  'https://static.toiimg.com/photo/72975551.cms',
  'data:image/jpeg;base64,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',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg',
  'https://images.freeimages.com/images/small-previews/5c6/sunset-jungle-1383333.jpg',
];

const slider = new Slider(slides);

const [prevBtn, nextBtn] = document.getElementsByTagName('button');
const img = document.querySelector('.slide');

prevBtn.addEventListener('click', () => {
  slider.currentIndex = slider.prevIndex;
  updateView();
});

nextBtn.addEventListener('click', () => {
  slider.currentIndex = slider.nextIndex;
  updateView();
});

function updateView() {
  img.setAttribute('src', slider.currentSlide);
}

updateView();
