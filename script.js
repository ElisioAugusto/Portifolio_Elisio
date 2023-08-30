let slideIndex = 0;
let slideTimer; // Variável para armazenar o temporizador

showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slideTimer = setTimeout(showSlides, 10000); // Inicia um novo temporizador
}

function plusSlides(n) {
    clearTimeout(slideTimer); // Cancela o temporizador atual
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slideTimer = setTimeout(showSlides, 10000); // Inicia um novo temporizador
}
