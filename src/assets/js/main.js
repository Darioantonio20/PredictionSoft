const imageContainers = document.querySelectorAll('figure');

const observer = new IntersectionObserver(callback, {
    threshold: .8
});

function callback(entries){
    
    entries.forEach(entry => {

        const image = entry.target.querySelector('imagencita');
        image.classList.toggle('unset', entry.isIntersecting);

    });
}

imageContainers.forEach(container =>{
    observer.observe(container);
})