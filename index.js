//Funciones de carrusel

const slides = document.querySelector('.slides');
console.log('slides: ', slides);
const slidesCount = slides.childElementCount
console.log('slidesCount: ', slidesCount);

const maxLeft = (slidesCount - 1)*100*-1

let current = 0;
function changeSlide(next=true){
    if (next){
        current += current >maxLeft ? -100 : current *-1;
    } else {
        current = current > 0 ? current + 100 : maxLeft;
    }
    slides.style.left = current + "%"
}

//controls
document.querySelector(".next-slide").addEventListener("click", function () {
    changeSlide();
  })
document.querySelector(".prev-slide").addEventListener("click", function () {
   changeSlide(false);
  })
