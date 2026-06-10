// --- HERO ---

window.onload = function(){
    setTimeout(() => {
    document.getElementById("inicio").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("inicio").style.display = "none";
    }, 2000);
}, 2000);
};

window.addEventListener('DOMContentLoaded', () => {

    const tema = localStorage.getItem('tema');

    if(tema){
        document.body.classList.add(tema);
    }

});

// --- LÓGICA DO MENU HAMBURGUER ---
const menuIcone = document.getElementById("menu-icone");
const navMenu = document.querySelector("nav");

if (menuIcone && navMenu) {
    menuIcone.onclick = () => {
        navMenu.classList.toggle("active");
        menuIcone.classList.toggle("open");
    }
}

function trocarTema(tema){

    document.body.classList.remove(
        'tema-claro',
        'tema-escuro',
        'tema-espacial'
    );

    document.body.classList.add(tema);

    localStorage.setItem('tema', tema);
}

// --- DOM NO MAIN PARA LISTAR PAGES ---
const pages = [
    {
        id: 1, // Page 1
        nome: "Problema Abordado",
        path: "/pages/problema-abordado.html"
    },
    {
        id: 2,  // Page 2
        nome: "Tecnologias Utilizadas",
        path: "/pages/tecnologias.html"
    },
    {
        id: 3,  // Page 3
        nome: "Objetivos do Projeto",
        path: "/pages/objetivos.html"
    },
    {
        id: 4,  // Page 4
        nome: "Público Alvo",
        path: "/pages/publico-alvo.html"
    },
    {
        id: 5,  // Page 5
        nome: "Benefícios do Projeto",
        path: "/pages/beneficios.html"
    },
    {
        id: 6,  // Page 6
        nome: "Aplicação do Projeto",
        path: "/pages/aplicacao.html"
    },
    {
        id: 7, //Page 7
        nome: "Quiz",
        path: "/pages/quiz.html"
    }
];

// Mantendo seus logs originais para debug
pages.forEach((page) => {
    console.log(page.nome);
});

pages.forEach((page) => {
    console.log(`${page.id} - ${page.nome}`);
});

const listaPages = document.getElementById("lista-pages");

if (listaPages) {
    pages.forEach((page) => {
        listaPages.innerHTML += `
            <div class="card">
                <li class="pagina">
                    <a class="link-pagina" href="${page.path}">
                        ${page.nome}
                    </a>
                </li>
            </div>
        `;
    })
}

// --- LÓGICA DO SLIDESHOW ---
function iniciarSlideshow(idContainer) {
    const container = document.getElementById(idContainer);
    
    // Se o container não for encontrado na página atual, a função para aqui
    if (!container) return; 

    let indexAtual = 0;
    const slides = container.querySelectorAll('.slide-img');
    const btnAnterior = container.querySelector('.btn-anterior');
    const btnProximo = container.querySelector('.btn-proximo');

    function mostrarSlide(index) {
        // Remove a classe 'active' de todos os slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Faz o carrossel girar em loop
        if (index >= slides.length) indexAtual = 0;
        if (index < 0) indexAtual = slides.length - 1;
        
        // Adiciona a classe 'active' apenas ao slide correto
        if (slides.length > 0) {
            slides[indexAtual].classList.add('active');
        }
    }

    // Adiciona os eventos de clique nos botões dinamicamente
    if (btnAnterior && btnProximo) {
        btnAnterior.addEventListener('click', () => {
            indexAtual -= 1;
            mostrarSlide(indexAtual);
        });

        btnProximo.addEventListener('click', () => {
            indexAtual += 1;
            mostrarSlide(indexAtual);
        });
    }

    // Inicializa o primeiro slide
    mostrarSlide(indexAtual);
}