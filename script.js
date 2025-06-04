// Simple interactivity for highlighting project cards
const projectCards = document.querySelectorAll('.project');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.05)';
    });
});
