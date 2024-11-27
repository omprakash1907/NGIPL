document.addEventListener("DOMContentLoaded", () => {
    const testimonialSlides = document.querySelectorAll(".gallery-caurosal"); 
    const testimonialPrevButton = document.getElementById("prevButton");
    const testimonialNextButton = document.getElementById("nextButton");
    const testimonialCurrentSlideElement = document.getElementById("currentSlide");
    const testimonialTotalSlides = Math.ceil(testimonialSlides.length / 3); // 2 cards per slide
  
    let testimonialCurrentSlide = 0; // Index of the current slide
  
    // Update Testimonial Counter
    const updateTestimonialCounter = () => {
      testimonialCurrentSlideElement.textContent = testimonialCurrentSlide + 1;
    };
  
    // Move Testimonial Carousel
    const moveTestimonialCarousel = () => {
      testimonialSlides.forEach((slide, index) => {
        const start = testimonialCurrentSlide * 3; // Start index for visible slides
        const end = start + 3; // End index for visible slides
        if (index >= start && index < end) {
          slide.classList.remove("hidden");
          slide.classList.add("flex");
        } else {
          slide.classList.remove("flex");
          slide.classList.add("hidden");
        }
      });
      updateTestimonialCounter();
    };
  
    // Previous Button for Testimonial
    testimonialPrevButton.addEventListener("click", () => {
      testimonialCurrentSlide = (testimonialCurrentSlide - 1 + testimonialTotalSlides) % testimonialTotalSlides;
      moveTestimonialCarousel();
    });
  
    // Next Button for Testimonial
    testimonialNextButton.addEventListener("click", () => {
      testimonialCurrentSlide = (testimonialCurrentSlide + 1) % testimonialTotalSlides;
      moveTestimonialCarousel();
    });
  
    // Initialize Carousel
    moveTestimonialCarousel();
  });
  