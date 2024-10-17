// Enable smooth horizontal scroll with mouse wheel or trackpad swipe
const timelineWrapper = document.querySelector('.timeline-wrapper');
const titleSection = document.querySelector('.title-section');
const scrollArrow = document.querySelector('.scroll-arrow');

// Adding an event listener for the mouse wheel to increase scroll speed horizontally
timelineWrapper.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default vertical scroll
    timelineWrapper.scrollLeft += event.deltaY * 2; // Increase horizontal scroll speed

    // Fade out the title and arrow based on scroll amount
    const scrollAmount = timelineWrapper.scrollLeft;
    const fadeThreshold = 200; // How quickly the title and arrow fade

    if (scrollAmount > fadeThreshold) {
        titleSection.style.opacity = 0;
        scrollArrow.style.opacity = 0;
    } else {
        titleSection.style.opacity = 1 - (scrollAmount / fadeThreshold);
        scrollArrow.style.opacity = 1 - (scrollAmount / fadeThreshold);
    }
});
