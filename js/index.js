const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// toggle nav menu to home & vice versa
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// onclick location
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});