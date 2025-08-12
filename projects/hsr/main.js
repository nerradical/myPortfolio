document.addEventListener("scroll", function () {
    console.log(window.scrollY);
  
    const container = document.querySelector(".container");
  
    // Set the scroll trigger point
    const firstTriggerPoint = [450, 10000]; // Adjust this value to set the point where the image should start appearing
    // Check if scroll position is beyond the trigger point to make the image visible
    if (
      window.scrollY >= firstTriggerPoint[0] &&
      window.scrollY <= firstTriggerPoint[1]
    ) {
      container.classList.add("container_visible");
    } else {
      container.classList.remove("container_visible");
    }
  });