document.addEventListener("DOMContentLoaded", () => {
    const blogCarousel = document.querySelector(".blog-carousel");
    const blogSlides = blogCarousel.querySelectorAll(".flex-shrink-0");
    const blogPrevButton = document.getElementById("blogPrevButton");
    const blogNextButton = document.getElementById("blogNextButton");
    const blogCurrentSlideElement = document.getElementById("blogCurrentSlide");
    const blogTotalSlides = blogSlides.length;
  
    let blogCurrentSlide = 0;
  
    // Update Blog Counter
    const updateBlogCounter = () => {
      blogCurrentSlideElement.textContent = blogCurrentSlide + 1;
    };
  
    // Move Blog Carousel
    const moveBlogCarousel = () => {
      const offset = -blogCurrentSlide * 100; // Calculate offset for the slide
      blogCarousel.style.transform = `translateX(${offset}%)`;
      console.log(`Current Slide: ${blogCurrentSlide}, Offset: ${offset}%`); // Debug log
      updateBlogCounter();
    };
  
    // Previous Button for Blog
    blogPrevButton.addEventListener("click", () => {
      blogCurrentSlide = (blogCurrentSlide - 1 + blogTotalSlides) % blogTotalSlides;
      moveBlogCarousel();
    });
  
    // Next Button for Blog
    blogNextButton.addEventListener("click", () => {
      blogCurrentSlide = (blogCurrentSlide + 1) % blogTotalSlides;
      moveBlogCarousel();
    });
  
    // Initialize Counter
    updateBlogCounter();
  });
  