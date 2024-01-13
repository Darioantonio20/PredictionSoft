/**
 * The above JavaScript code uses the Intersection Observer API to toggle the 'unset' class on images
 * within figure elements when they are 80% visible in the viewport.
 * @param entries - The `entries` parameter in the callback function is an array of
 * `IntersectionObserverEntry` objects. Each object represents the intersection between the observed
 * element and the viewport.
 */
const imageContainers = document.querySelectorAll('figure');

const observer = new IntersectionObserver(callback, {
    threshold: .8
});

function callback(entries) {

    entries.forEach(entry => {

        const image = entry.target.querySelector('imagencita');
        image.classList.toggle('unset', entry.isIntersecting);

    });
}

imageContainers.forEach(container => {
    observer.observe(container);
})