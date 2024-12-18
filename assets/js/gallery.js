document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".gallery-caurosal");
    const prevButton = document.getElementById("galleryprevButton");
    const nextButton = document.getElementById("gallerynextButton");
    const currentSlideElement = document.getElementById("gallerycurrentSlide");
    const dotsContainer = document.getElementById("galleryDotsPagination");
    let slidesPerView = window.innerWidth < 1024 ? 1 : 3; // Number of slides visible at a time
    const totalSlides = slides.length;
    const totalPages = Math.ceil(totalSlides / slidesPerView);
    let currentPage = 0;
    let autoSlideInterval;

    // Create Dots Pagination
    const createDots = () => {
        dotsContainer.innerHTML = ""; // Clear existing dots
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement("button");
            dot.classList.add(
                "w-3",
                "h-3",
                "bg-gray-300",
                "rounded-full",
                "mx-1",
                "focus:outline-none"
            );
            if (i === currentPage) {
                dot.classList.add("bg-primary");
                dot.classList.remove("bg-gray-300");
            }
            dot.onclick = function () {
                currentPage = i;
                moveCarousel();
                resetAutoSlide(); // Reset auto-slide timer when a dot is clicked
            };
            dotsContainer.appendChild(dot);
        }
    };

    // Update the counter
    const updateCounter = () => {
        currentSlideElement.textContent = currentPage + 1;
    };

    // Update Dots Pagination
    const updateDots = () => {
        const dots = dotsContainer.querySelectorAll("button");
        dots.forEach((dot, index) => {
            if (index === currentPage) {
                dot.classList.add("bg-primary");
                dot.classList.remove("bg-gray-300");
            } else {
                dot.classList.add("bg-gray-300");
                dot.classList.remove("bg-primary");
            }
        });
    };

    // Move the carousel
    const moveCarousel = () => {
        const translateX = -currentPage * (100 / slidesPerView) * slidesPerView;
        carousel.style.transform = `translateX(${translateX}%)`;
        updateCounter();
        updateDots();
    };

    // Event Listeners for Buttons
    prevButton.addEventListener("click", () => {
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        moveCarousel();
        resetAutoSlide(); // Reset auto-slide timer when prev is clicked
    });

    nextButton.addEventListener("click", () => {
        currentPage = (currentPage + 1) % totalPages;
        moveCarousel();
        resetAutoSlide(); // Reset auto-slide timer when next is clicked
    });

    // Auto-slide functionality
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            if (window.innerWidth < 1024) {
                currentPage = (currentPage + 1) % totalPages;
                moveCarousel();
            }
        }, 3000); // Change slide every 3 seconds
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    const resetAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    // Initialize Carousel and Dots
    moveCarousel();
    createDots();
    startAutoSlide();

    // Handle window resize to toggle dots visibility and auto-slide
    window.addEventListener("resize", () => {
        if (window.innerWidth < 1024) {
            dotsContainer.classList.remove("hidden");
            startAutoSlide();
        } else {
            dotsContainer.classList.add("hidden");
            stopAutoSlide();
        }
    });

    // Initial visibility for dots
    if (window.innerWidth >= 1024) {
        dotsContainer.classList.add("hidden");
        stopAutoSlide();
    }
});
