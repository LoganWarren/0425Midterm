const timelineWrapper = document.querySelector('.timeline-wrapper');
const titleSection = document.querySelector('.title-section');
const scrollArrow = document.querySelector('.scroll-arrow');

timelineWrapper.addEventListener('wheel', (event) => {
    event.preventDefault(); 
    timelineWrapper.scrollLeft += event.deltaY * 2;

    const scrollAmount = timelineWrapper.scrollLeft;
    const fadeThreshold = 200; 

    if (scrollAmount > fadeThreshold) {
        titleSection.style.opacity = 0;
        scrollArrow.style.opacity = 0;
    } else {
        titleSection.style.opacity = 1 - (scrollAmount / fadeThreshold);
        scrollArrow.style.opacity = 1 - (scrollAmount / fadeThreshold);
    }
});
