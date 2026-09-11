const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentSlide = 0;
function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active-slide");
    });
    dots.forEach(dot => {
        dot.classList.remove("active-dot");
    });
    slides[index].classList.add("active-slide");
    dots[index].classList.add("active-dot");
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

setInterval(nextSlide, 6000);

/* SEARCH FEATURES */

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    document
        .getElementById("features")
        .scrollIntoView({
            behavior: "smooth"
        });

});