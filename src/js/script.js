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
        nome: "Problema Abordado"
    },
    {
        id:2,  // Page 2
        nome: "Tecnologias Utilizadas"
    },
    {
        id:3,  // Page 3
        nome: "Objetivos do Projeto"
    },
    {
        id:4,  // Page 4
        nome: "Público Alvo"
    },
    {
        id:5,  // Page 5
        nome: "Benefícios do Projeto"
    },
    {
        id:6,  // Page 6
        nome: "Aplicação do Projeto"
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
            <h2>${page.nome}</h2>
        </div>    
    `;
});