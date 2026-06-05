let indexAtualObj = 0;
const slidesObj = document.querySelectorAll('.slide-img');

function mostrarSlideObjetivos(index) {
    slidesObj.forEach(slide => slide.classList.remove('active'));
    
    if (index >= slidesObj.length) indexAtualObj = 0;
    if (index < 0) indexAtualObj = slidesObj.length - 1;
    
    if(slidesObj.length > 0) {
        slidesObj[indexAtualObj].classList.add('active');
    }
}

// Inicializa o primeiro slide ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    iniciarSlideshow('slides-beneficios');
});