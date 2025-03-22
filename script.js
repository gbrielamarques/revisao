document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    function revealOnScroll() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (cardPosition < windowHeight - 100 && cardBottom > 100) {
                card.classList.add("show");
            } else {
                card.classList.remove("show"); 
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});
