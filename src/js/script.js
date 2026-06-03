// Menu Hamburger
document.addEventListener("DOMContentLoaded",()=>{
    const menuIcone = document.getElementById("menu-icone");
    const navMenu =document.querySelector("nav");
    if(menuIcone && navMenu){
        menuIcone.onclick=()=>{
                navMenu.classList.toggle("active");
                menuIcone.classList.toggle("open");
        }
    }
})

// DOM no main para listar Pages 
const pages = [
    {
        id: 1, // Page 1
        nome: "Problema Abordado",
        path: "/pages/problema-abordado.html"
    },
    {
        id:2,  // Page 2
        nome: "Tecnologias Utilizadas",
        path: "/pages/tecnologias.html"
    },
    {
        id:3,  // Page 3
        nome: "Objetivos do Projeto",
        path: "/pages/objetivos.html"
    },
    {
        id:4,  // Page 4
        nome: "Público Alvo",
        path: "/pages/publico-alvo.html"
    },
    {
        id:5,  // Page 5
        nome: "Benefícios do Projeto",
        path: "/pages/beneficios.html"
    },
    {
        id:6,  // Page 6
        nome: "Aplicação do Projeto",
        path: "/pages/aplicacao.html"
    }
]

pages.forEach((page) => {
    console.log(page.nome);
})
pages.forEach((page) => {
    console.log(`${page.id} - ${page.nome}`);
});

const listaPages = document.getElementById("lista-pages")

pages.forEach((page) => {
    listaPages.innerHTML += `
        <div class="card">
            <l1 class = "pagina">
                <a href="${page.path}">
                    ${page.nome}
                </a>
            </li>
        </div>    
    `;
});