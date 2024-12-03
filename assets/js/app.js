/// Header ---------------------------------------------------------------->>>
$(document).ready(function () {
  // Load the header dynamically
  $("#header-placeholder").load("./components/header.html", function () {
    // Get the current page name from the URL
    const currentPage = window.location.pathname.split("/").pop().split(".")[0]; // e.g., "index" or "about"

    // Flag to check if any page is active
    let isPageActive = false;

    // Loop through navigation links and set the active class
    $(".nav-link").each(function () {
      const page = $(this).data("page"); // Get the page identifier from the data attribute
      if (page === currentPage) {
        $(this).addClass("text-primary"); // Add active class
        $(this).removeClass("text-secondary"); // Remove secondary class
        isPageActive = true; // Mark that a page is active
      }
    });

    // If no page matches, set HOME as active by default
    if (!isPageActive) {
      $('.nav-link[data-page="home"]').addClass("text-primary");
      $('.nav-link[data-page="home"]').removeClass("text-secondary");
    }
  });
});

///Footer --------------------------------------------------------------------->>>
$(document).ready(function () {
  // Load the footer dynamically
  $("#footer-placeholder").load("./components/footer.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading footer:", xhr.status, xhr.statusText);
    } else {
      console.log("Footer loaded successfully.");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  elements.forEach((el) => observer.observe(el));
});




// Gallery Carousel Logic ----------------------------------------------------->>>
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".flex-shrink-0");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const currentSlideElement = document.getElementById("currentSlide");
const totalSlides = Math.ceil(slides.length / 3); // Total number of groups (3 items per page)

let currentSlide = 0;

// Update Counter
const updateCounter = () => {
  currentSlideElement.textContent = currentSlide + 1;
};

// Move Carousel
const moveCarousel = () => {
  const offset = -currentSlide * 100; // Move by 100% for each group
  carousel.style.transform = `translateX(${offset}%)`;
  updateCounter();
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

// Initialize Total Slides
document.getElementById("totalSlides").textContent = totalSlides;



