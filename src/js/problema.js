let indexAtual = 0;
const slides = document.querySelectorAll('.slide-img');

function mostrarSlide(index) {
    // Remove a classe 'active' de todas as imagens
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Lógica para voltar ao início ou ir para o final
    if (index >= slides.length) indexAtual = 0;
    if (index < 0) indexAtual = slides.length - 1;
    
    // Adiciona a classe 'active' na imagem correta
    if(slides.length > 0) {
        slides[indexAtual].classList.add('active');
    }
}

// Inicializa o primeiro slide ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    iniciarSlideshow('slides-problema');
});