document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const currentSlideElement = document.getElementById("currentSlide");
    const prevSlideNumberElement = document.getElementById("prevSlideNumber");
    const nextSlideNumberElement = document.getElementById("nextSlideNumber");
    const totalSlides = slides.length;
    let currentSlide = 0;
  
    // Update Counter and Pagination Numbers
    const updateCounterAndPagination = () => {
      currentSlideElement.textContent = currentSlide + 1;
      prevSlideNumberElement.textContent = ((currentSlide - 1 + totalSlides) % totalSlides) + 1;
      nextSlideNumberElement.textContent = ((currentSlide + 1) % totalSlides) + 1;
    };
  
    // Move Carousel
    const moveCarousel = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
      });
      const offset = -currentSlide * 500; // Slide height
      document.querySelector(".slides").style.transform = `translateY(${offset}px)`;
      updateCounterAndPagination();
    };
  
    // Previous Button
    prevButton.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      moveCarousel();
    });
  
    // Next Button
    nextButton.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      moveCarousel();
    });
  
    // Initialize Carousel
    moveCarousel();
  });
  