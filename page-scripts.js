const slider = document.querySelector(".blog-articles");

const leftArrow = document.querySelector(".scroll-button-left");
const rightArrow = document.querySelector(".scroll-button-right");

var sectionIndex = 0;

rightArrow.addEventListener("click", function() {
  slider.style.transform = "translate(-25%)";
});

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const slider = document.querySelector(".slider");

const indicatorParent = document.querySelector(".control ul");
const indicators = document.querySelectorAll(".control li");
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    document.querySelector(".control .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translateX(" + i * -25 + "%)";
    index = i;
  });
});

left.addEventListener("click", function() {
  index = index > 0 ? index - 1 : 0;
  document.querySelector(".control .selected").classList.remove("selected");
  indicatorParent.children[index].classList.add("selected");
  slider.style.transform = "translateX(" + index * -25 + "%)";
});

right.addEventListener("click", function() {
  index = index < 4 - 1 ? index + 1 : 3;
  document.querySelector(".control .selected").classList.remove("selected");
  indicatorParent.children[index].classList.add("selected");
  slider.style.transform = "translateX(" + index * -25 + "%)";
});
