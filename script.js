const timelineWrapper = document.querySelector('.timeline-wrapper');
const titleSection = document.querySelector('.title-section');
const scrollArrow = document.querySelector('.scroll-arrow');

timelineWrapper.addEventListener('scroll', () => {
    const scrollAmount = timelineWrapper.scrollLeft;
    const fadeThreshold = 1; // How quickly the title and arrow fade

    // Fade out the title and arrow based on scroll amount
    titleSection.style.opacity = 1 - Math.min(scrollAmount / fadeThreshold, 1);
    scrollArrow.style.opacity = 1 - Math.min(scrollAmount / fadeThreshold, 1);
});
