// Scroll animation for fade-in sections
const scrollFadeElems = document.querySelectorAll('.scroll-fade');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

scrollFadeElems.forEach(el => observer.observe(el));

// Hover effects remain for projects
const projectCards = document.querySelectorAll('.project');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.05)';
    });
});
