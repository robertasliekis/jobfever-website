const navSlide = () => {
  const burger = document.querySelector(".burger-icon");
  const nav = document.querySelector(".navbar-categories");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burger-active");
    burger.classList.toggle("toggle");
  });
};

navSlide();

function switchJobSearch() {
  document
    .getElementById("btn-search-candidate")
    .classList.toggle("search-right-active");
  document
    .getElementById("btn-search-job")
    .classList.toggle("search-left-active");
}
function switchJobOffers() {
  document
    .getElementById("top-left-section")
    .classList.toggle("offers-right-active");
  document
    .getElementById("top-right-section")
    .classList.toggle("offers-left-active");
}
