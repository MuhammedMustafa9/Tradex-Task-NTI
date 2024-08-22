function animateCounter(id, endValue, duration) {
    var startValue = 0;
    var element = document.getElementById(id);
    var stepTime = Math.abs(Math.floor(duration / endValue));

    var timer = setInterval(function () {
        startValue += 1;
        element.textContent = startValue;

        if (startValue >= endValue) {
            clearInterval(timer);
            element.textContent = endValue;
        }
    }, stepTime);
}

animateCounter('total-projects', 550, 30);
animateCounter('won-awards', 660, 50);
animateCounter('happy-clients', 760, 70);
animateCounter('years-experience', 860, 802);


document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('.color-picker-button');
    let dropdown = document.querySelector('.color-picker-dropdown');

    button.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => {
            document.body.style.backgroundColor = option.getAttribute('data-color');
            dropdown.style.display = 'none';
        });
    });
});



window.onscroll = function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

document.getElementById('scrollToTopBtn').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    dropdownItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });
});

