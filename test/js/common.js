const consoleItem = document.getElementById('consoleItem'),
      feedbackForm = document.getElementById('feedbackForm'),
      exit = document.getElementById('exit');

consoleItem.addEventListener('click', onConsoleForm);
exit.addEventListener('click', exitConsoleForm);

function onConsoleForm() {
  feedbackForm.style.height = '100%';
  feedbackForm.style.display = 'flex';
}
function exitConsoleForm() {
  feedbackForm.style.display = 'none';
}

///Form
const myForm = document.getElementById('myForm');
const submit = myForm.elements.submit;
const myArrayCollection = Array.from(myForm);
submit.onclick = (event) => {
  event.preventDefault();
  myArrayCollection.map( (item) => {
     if( item.name == 'login' || item.name == 'phone' || item.name == 'email'){
         generationError(item, 'errorValue');
    }
  })
}
function generationError(item, className){
  item.classList.add(className);
  item.setAttribute('placeholder', 'Поле обязательно для заполнения');
}
// Slider
const slideleft = document.getElementById('slideleft'),
    slideright = document.getElementById('slideright'),
    slide = document.getElementById('slide'),
    total_img = document.querySelectorAll('.slide');



class Slider {
  constructor(slides) {
    this.slides = slides;
    this.idx = 0;
    this.timerId;
  }
  newSlid(){
    this.slides[this.idx].classList.remove("fadeOut");
    this.slides[this.idx].classList.remove("block");

  }
  noneSlide(){
    this.slides[this.idx].classList.add("block");
  }
  test(direction){

    this.slides[this.idx].classList.add("fadeOut");
    if(direction === 'right'){
      if(this.idx === this.slides.length -1){
        setTimeout(() =>{
          this.noneSlide();
          this.idx = 0;

           this.newSlid();
         },1000)
      }else {

        setTimeout(() =>{
          this.noneSlide();
          this.idx = this.idx + 1;

           this.newSlid();
         },1000)

      }
    }else if (direction === 'left'){
      console.log(
    this.idx);
        if(this.idx !== 0){
           setTimeout(() =>{
             this.noneSlide();
             this.idx = this.idx - 1;
             this.newSlid();
            },1000)
        }else {
          setTimeout(() =>{
            this.noneSlide();
            this.idx = this.slides.length - 1;
            this.newSlid();
           },1000)

        }
    }
  }
  initSlide(){
    this.timerId = setInterval(() =>{
      this.test('right');
    }, 4000);
  }
  nextSlide(){
      clearInterval(this.timerId);
      this.test.call(this, 'right');
  }
  leftSlide(){
      clearInterval(this.timerId);
      this.test.call(this, 'left');
  }
}

let mySlider = new Slider(total_img);
window.onload = () => {
  mySlider.initSlide();
}
slideleft.onclick = () => {
  mySlider.leftSlide();
}
slideright.onclick = () => {

  mySlider.nextSlide();
}
