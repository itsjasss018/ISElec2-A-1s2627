/* ==============================
   CAROUSEL
================================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;


/* SHOW SLIDE */

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active-slide");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active-dot");
    });


    slides[index].classList.add("active-slide");

    dots[index].classList.add("active-dot");

    currentSlide = index;
}


/* NEXT SLIDE */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


/* PREVIOUS SLIDE */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}


/* BUTTONS */

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", previousSlide);


/* DOTS */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});


/* ==============================
   AUTOMATIC CAROUSEL
================================= */

let autoSlide = setInterval(nextSlide, 5000);


/* RESET TIMER WHEN USER CLICKS */

function resetTimer() {

    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 5000);

}


nextBtn.addEventListener("click", resetTimer);

prevBtn.addEventListener("click", resetTimer);

dots.forEach((dot) => {
    dot.addEventListener("click", resetTimer);
});


/* ==============================
   SEARCH
================================= */

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");


function searchWebsite() {

    const searchText = searchInput.value.trim().toLowerCase();


    if (searchText === "") {

        alert("Please enter something to search.");

        return;

    }


    if (searchText.includes("home")) {

        document.getElementById("home").scrollIntoView({
            behavior: "smooth"
        });

    }

    else if (searchText.includes("about")) {

        document.getElementById("about").scrollIntoView({
            behavior: "smooth"
        });

    }

    else if (searchText.includes("feature")) {

        document.getElementById("features").scrollIntoView({
            behavior: "smooth"
        });

    }

    else if (searchText.includes("contact")) {

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

    }

    else {

        alert("No matching section found.");

    }

}


searchButton.addEventListener("click", searchWebsite);


/* SEARCH USING ENTER */

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchWebsite();

    }

});

/* =========================
   NEXORA SEARCH
========================= */

const searchForm =
    document.getElementById("searchForm");


if (searchForm) {

    searchForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const query =
                document
                .getElementById("searchInput")
                .value
                .trim()
                .toLowerCase();


            if (query === "home") {

                document
                .getElementById("home")
                .scrollIntoView({
                    behavior: "smooth"
                });

            }

            else if (query === "about") {

                document
                .getElementById("about")
                .scrollIntoView({
                    behavior: "smooth"
                });

            }

            else if (
                query === "features" ||
                query === "feature"
            ) {

                document
                .getElementById("features")
                .scrollIntoView({
                    behavior: "smooth"
                });

            }

            else if (query === "contact") {

                document
                .getElementById("contact")
                .scrollIntoView({
                    behavior: "smooth"
                });

            }

            else if (
                query === "local storage" ||
                query === "localstorage"
            ) {

                window.location.href =
                    "local_storage.html";

            }

            else if (query === "preferences") {

                window.location.href =
                    "user_preferences.html";

            }

            else if (query === "weather") {

                window.location.href =
                    "weather_api.html";

            }

            else if (
                query === "maps" ||
                query === "map"
            ) {

                window.location.href =
                    "map_api.html";

            }

            else if (query === "github") {

                window.location.href =
                    "github_api.html";

            }

            else {

                alert(
                    "No matching feature found."
                );

            }

        }
    );

}