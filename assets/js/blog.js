document.addEventListener("DOMContentLoaded", () => {
  const blogCarousel = document.querySelector(".blog-carousel");
  const blogSlides = blogCarousel.querySelectorAll(".flex-shrink-0");
  const blogPrevButton = document.getElementById("blogPrevButton");
  const blogNextButton = document.getElementById("blogNextButton");
  const blogCurrentSlideElement = document.getElementById("blogCurrentSlide");
  const blogDotsContainer = document.createElement("div");
  blogDotsContainer.id = "blogDotsPagination";
  blogDotsContainer.className = "flex justify-center mt-4 lg:hidden";
  blogCarousel.parentElement.appendChild(blogDotsContainer);

  const blogTotalSlides = blogSlides.length;
  let blogCurrentSlide = 0;
  let blogAutoPlayInterval;

  // Create Dots for Pagination
  const createBlogDots = () => {
    blogDotsContainer.innerHTML = ""; // Clear existing dots
    for (let i = 0; i < blogTotalSlides; i++) {
      const dot = document.createElement("button");
      dot.classList.add(
        "w-3",
        "h-3",
        "bg-gray-300",
        "rounded-full",
        "mx-1",
        "focus:outline-none"
      );
      if (i === blogCurrentSlide) {
        dot.classList.add("bg-primary");
        dot.classList.remove("bg-gray-300");
      }
      dot.onclick = () => {
        blogCurrentSlide = i;
        moveBlogCarousel();
        resetBlogAutoPlay(); // Reset autoplay when a dot is clicked
      };
      blogDotsContainer.appendChild(dot);
    }
  };

  // Update Blog Counter
  const updateBlogCounter = () => {
    blogCurrentSlideElement.textContent = blogCurrentSlide + 1;
  };

  // Update Dots
  const updateBlogDots = () => {
    const dots = blogDotsContainer.querySelectorAll("button");
    dots.forEach((dot, index) => {
      if (index === blogCurrentSlide) {
        dot.classList.add("bg-primary");
        dot.classList.remove("bg-gray-300");
      } else {
        dot.classList.add("bg-gray-300");
        dot.classList.remove("bg-primary");
      }
    });
  };

  // Move Blog Carousel
  const moveBlogCarousel = () => {
    const offset = -blogCurrentSlide * 100; // Calculate offset for the slide
    blogCarousel.style.transform = `translateX(${offset}%)`;
    updateBlogCounter();
    updateBlogDots();
  };

  // Previous Button for Blog
  blogPrevButton.addEventListener("click", () => {
    blogCurrentSlide = (blogCurrentSlide - 1 + blogTotalSlides) % blogTotalSlides;
    moveBlogCarousel();
    resetBlogAutoPlay(); // Reset autoplay when previous is clicked
  });

  // Next Button for Blog
  blogNextButton.addEventListener("click", () => {
    blogCurrentSlide = (blogCurrentSlide + 1) % blogTotalSlides;
    moveBlogCarousel();
    resetBlogAutoPlay(); // Reset autoplay when next is clicked
  });

  // Autoplay Functionality
  const startBlogAutoPlay = () => {
    blogAutoPlayInterval = setInterval(() => {
      if (window.innerWidth < 768) { // Enable autoplay only for small screens
        blogCurrentSlide = (blogCurrentSlide + 1) % blogTotalSlides;
        moveBlogCarousel();
      }
    }, 3000); // Change slide every 3 seconds
  };

  const stopBlogAutoPlay = () => {
    clearInterval(blogAutoPlayInterval);
  };

  const resetBlogAutoPlay = () => {
    stopBlogAutoPlay();
    startBlogAutoPlay();
  };

  // Handle Window Resize
  const handleResize = () => {
    if (window.innerWidth < 768) {
      blogDotsContainer.classList.remove("hidden");
      startBlogAutoPlay();
    } else {
      blogDotsContainer.classList.add("hidden");
      stopBlogAutoPlay();
    }
  };

  // Initialize Blog Carousel
  moveBlogCarousel();
  createBlogDots();
  startBlogAutoPlay();

  // Add Resize Listener
  window.addEventListener("resize", handleResize);

  // Initial Visibility for Dots and Autoplay
  if (window.innerWidth >= 768) {
    blogDotsContainer.classList.add("hidden");
    stopBlogAutoPlay();
  }
});
