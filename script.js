const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#nextBtn");
const preBtn =  document.querySelector("#preBtn");
const items = document.querySelectorAll(".item");

const slideWidth = slides[0].clientWidth;
let index = 0;

function updateSlideIndex(offset) {
    index += offset;
    if(index < 0) {
        index = slides.length - 1;
    } else if(index >= slides.length) {
        index = 0;
    }
}

function updateSlide() {
    slidesContainer.style.transition = "all 0.3s ease-in-out";
    slidesContainer.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;
}

function setActiveItem() {
    items.forEach((item) => item.classList.remove("active"));
    items[index].classList.add("active");
}

function moveToNextSlide(){
    updateSlideIndex(1);
    updateSlide();
    setActiveItem();
}

function moveToPrevSlide() {
    updateSlideIndex(-1);
    updateSlide();
    setActiveItem();
}

function handleClick(i) {
    index = i;
    setActiveItem();
    updateSlide();
}

items.forEach((item,i) => item.addEventListener("click", () => handleClick(i)));

preBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

slidesContainer.insertAdjacentHTML("afterbegin",slides[slides.length - 1].outerHTML);
slidesContainer.insertAdjacentHTML("beforeend",slides[0].outerHTML);

slidesContainer.style.transform = `translateX(${-slideWidth}px)`;

setActiveItem();