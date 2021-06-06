function initCarousel() {
  
  const count = 1;
  const list = document.querySelector('.carousel__inner'); //переменная ленты
  const listElems = list.querySelectorAll('.carousel__slide');//NodeList слайдов
  const leftBtn = document.querySelector('.carousel__arrow_left') //кнопка прокуртки влево
  const rightBtn = document.querySelector('.carousel__arrow_right') //кнопка прокуртки вправо
  const width = list.offsetWidth; // ширина картинки

  leftBtn.style.display = 'none'

  let position = 0;
  leftBtn.onclick = () => {
    rightBtn.style.display = ''
    position += width * count;
    position = Math.min(position, 0)
    list.style.transform = `translateX(${position}px)`;
    if (position >= 0) {
      leftBtn.style.display = 'none'
    }
  }
  
  rightBtn.onclick = () => {
    leftBtn.style.display = ''
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.transform = `translateX(${position}px)`;
    if (-width * (listElems.length - count) / position === 1) {
      rightBtn.style.display = 'none'
    }
  }
}
