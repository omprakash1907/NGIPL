document.addEventListener("DOMContentLoaded", () => {
  const testimonialSlides = document.querySelectorAll(".testimonial-caurosal");
  const testimonialPrevButton = document.getElementById("testimonialPrevButton");
  const testimonialNextButton = document.getElementById("testimonialNextButton");
  const testimonialCurrentSlideElement = document.getElementById("testimonialCurrentSlide");

  let testimonialCurrentSlide = 0; // Index of the current slide

  // Update Testimonial Counter
  const updateTestimonialCounter = () => {
    testimonialCurrentSlideElement.textContent = testimonialCurrentSlide + 1;
  };

  // Move Testimonial Carousel
  const moveTestimonialCarousel = () => {
    const isSmallScreen = window.innerWidth < 768; // Small screen breakpoint
    const slidesPerView = isSmallScreen ? 1 : 2; // Show 1 slide on small screens, 2 on larger screens
    const testimonialTotalSlides = Math.ceil(testimonialSlides.length / slidesPerView);

    testimonialSlides.forEach((slide, index) => {
      const start = testimonialCurrentSlide * slidesPerView; // Start index for visible slides
      const end = start + slidesPerView; // End index for visible slides
      if (index >= start && index < end) {
        slide.classList.remove("hidden");
        slide.classList.add("md:flex");
      } else {
        slide.classList.remove("md:flex");
        slide.classList.add("hidden");
      }
    });

    updateTestimonialCounter();
  };

  // Previous Button for Testimonial
  testimonialPrevButton.addEventListener("click", () => {
    const isSmallScreen = window.innerWidth < 768;
    const slidesPerView = isSmallScreen ? 1 : 2;
    const testimonialTotalSlides = Math.ceil(testimonialSlides.length / slidesPerView);

    testimonialCurrentSlide = (testimonialCurrentSlide - 1 + testimonialTotalSlides) % testimonialTotalSlides;
    moveTestimonialCarousel();
  });

  // Next Button for Testimonial
  testimonialNextButton.addEventListener("click", () => {
    const isSmallScreen = window.innerWidth < 768;
    const slidesPerView = isSmallScreen ? 1 : 2;
    const testimonialTotalSlides = Math.ceil(testimonialSlides.length / slidesPerView);

    testimonialCurrentSlide = (testimonialCurrentSlide + 1) % testimonialTotalSlides;
    moveTestimonialCarousel();
  });

  // Initialize Carousel and add resize event listener
  moveTestimonialCarousel();
  window.addEventListener("resize", moveTestimonialCarousel); // Adjust carousel on window resize
});
