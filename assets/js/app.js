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
