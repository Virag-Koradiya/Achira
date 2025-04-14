window.onload = function() {
    // Initialize the carousel with Bootstrap
    const myCarouselElement = document.querySelector('#carouselExampleControls');
    if (myCarouselElement) {
        const carousel = new bootstrap.Carousel(myCarouselElement, {
            interval: 3000, // Changed from 200 to 3000 for better user experience
            wrap: true      // Changed from false to true to enable continuous looping
        });
    }

    // Initialize the slider if it exists
    const slider2Elements = document.querySelectorAll('.slider-2 img');
    if (slider2Elements.length > 0) {
        var slider2 = new Slider({
            images: '.slider-2 img',
            btnPrev: '.slider-2 .buttons .prev',
            btnNext: '.slider-2 .buttons .next',
            auto: true,
            rate: 3000 // Changed from 2000 to 3000 for better user experience
        });
    }
};

function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.auto = obj.auto;
    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;
    this.rate = obj.rate || 3000; // Default to 3000ms

    // If no images found, exit early
    if (this.images.length === 0) {
        console.warn('No slider images found');
        return;
    }

    var i = 0;
    var slider = this;

    // Show the first image initially
    this.images[0].classList.add('shown');

    this.prev = function() {
        slider.images[i].classList.remove('shown');
        i--;

        if (i < 0) {
            i = slider.images.length - 1;
        }

        slider.images[i].classList.add('shown');
    };

    this.next = function() {
        slider.images[i].classList.remove('shown');
        i++;

        if (i >= slider.images.length) {
            i = 0;
        }

        slider.images[i].classList.add('shown');
    };

    // Add event listeners only if the elements exist
    const prevButton = document.querySelector(slider.btnPrev);
    const nextButton = document.querySelector(slider.btnNext);

    if (prevButton) {
        prevButton.onclick = slider.prev;
    }

    if (nextButton) {
        nextButton.onclick = slider.next;
    }

    if (slider.auto) {
        setInterval(slider.next, slider.rate);
    }
}

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
});