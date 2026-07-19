// ----------------------
// Smooth Scrolling
// ----------------------

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

       if (target) {
    target.scrollIntoView({
        behavior: "smooth"
    });

    navMenu.classList.remove("active");
}

    });
});


// --------------------------
// Scroll Reveal Animation
// ----------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    '.hero, .about-section, .project-card, .contact'
).forEach(el => {
    observer.observe(el);
});


// -------------------------
// Navbar Shrink Effect
// -------------------------

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        navbar.style.padding = '10px 60px';
        navbar.style.transition = '0.3s ease';

    } else {

        navbar.style.padding = '16px 60px';

    }

});


// --------------------------
// Active Navbar Link
// ---------------------------

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }

    });

});


// --------------------------
// Project Card Hover Tilt
// ---------------------------

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-10px) scale(1.03)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0) scale(1)';

    });

});
const fadeElements =
document.querySelectorAll(".fade-in");

const fadeObserver =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }

    });

},{
    threshold:0.15
});

fadeElements.forEach((el) => {
    fadeObserver.observe(el);
});

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }

    });

});
// --------------------------
// Mobile Menu
// --------------------------

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
 
