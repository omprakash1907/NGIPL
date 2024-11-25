document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter"); 
  
    counters.forEach((counter) => {
      const target = +counter.textContent.trim(); // Get the target value from the text
      const increment = target / 200; // Control the speed (adjust the denominator for smoother/slower increments)
      let count = 0;
  
      const updateCounter = () => {
        count += increment; // Increment the count
        if (count < target) {
          counter.textContent = Math.floor(count); // Update the text
          requestAnimationFrame(updateCounter); // Call again for smooth animation
        } else {
          counter.textContent = target; // Set to the target value when done
        }
      };
  
      updateCounter(); // Start the counter animation
    });
  });
  