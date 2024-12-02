document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".gallery-caurosal");
  const prevButton = document.getElementById("galleryprevButton");
  const nextButton = document.getElementById("gallerynextButton");
  const currentSlideElement = document.getElementById("gallerycurrentSlide");
  const slidesPerView = 3; // Number of slides visible at a time
  const totalSlides = slides.length;
  const totalPages = Math.ceil(totalSlides / slidesPerView);
  let currentPage = 0;

  // Update the counter
  const updateCounter = () => {
    currentSlideElement.textContent = currentPage + 1;
  };

  // Move the carousel
  const moveCarousel = () => {
    const translateX = -currentPage * (100 / slidesPerView);
    carousel.style.transform = `translateX(${translateX}%)`;
    updateCounter();
  };

  // Event Listeners for Buttons
  prevButton.addEventListener("click", () => {
    currentPage = (currentPage - 1 + totalPages) % totalPages;
    moveCarousel();
  });

  nextButton.addEventListener("click", () => {
    console.log("next")
    currentPage = (currentPage + 1) % totalPages;
    moveCarousel();
  });

  // Initialize Carousel
  moveCarousel();
});
