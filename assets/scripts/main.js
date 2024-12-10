const projects = [
    {
        name: "Plataforma para Análise Estatística",
        description: "Desenvolvimento de uma plataforma para jornalistas acessarem informações e dados de eleitores de diferentes regiões.",
        link: "https://github.com/grupo-3dsm/repo_pi"
    },
    {
        name: "Portal Web com Interface de Mapa",
        description: "Desenvolvimento de um portal web com interface de mapa, baseado em serviços de computação em nuvem utilizando tiles.",
        link: "https://github.com/grupo-3dsm/Sirius-repoP.I"
    },
    {
        name: "Website Help Desk para Suporte Técnico",
        description: "Criação de uma ferramenta inteligente em aplicação web para identificação das causas de falhas que geram retrabalhos.",
        link: "https://github.com/Grupo2-DSM/Api-3dsm-2022"
    },
    {
        name: "Estação Meteorológica com a Empresa Tecsus",
        description: "Desenvolvimento de uma estação meteorológica capaz de coletar e transmitir dados em tempo real para um servidor na nuvem.",
        link: "https://github.com/Conveccao/conveccao-documentacao"
    },
    {
        name: "Aplicativo Organizacional para a Oracle Academy",
        description: "Aplicativo de gerenciamento de atividades para facilitar a organização na vida corporativa e pessoal do usuário.",
        link: "https://github.com/TheAchieversDSM/API-2023.2-Back-End"
    },
    {
        name: "Sistema de Sumarização para a Empresa Dom Rock",
        description: "Desenvolvimento de dashboards dinâmicos para análise de reviews de produtos utilizando técnicas de Processamento de Linguagem Natural e aprendizado de máquina.",
        link: "https://github.com/TheAchieversDSM/API-2024.1"
    }
];

const projectsGrid = document.querySelector(".projects-grid");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Ver Projeto</a>
    `;

    projectsGrid.appendChild(projectCard);
});
