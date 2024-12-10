const projects = [
    {
        name: "Plataforma para Análise Estatística",
        description: "Uma ferramenta para jornalistas explorarem informações de eleitores, utilizando análises de dados e inteligência artificial. Inclui dashboards interativos com insights regionais.",
        technologies: "Python, Data Science, Machine Learning",
        link: "https://github.com/grupo-3dsm/repo_pi"
    },
    {
        name: "Portal Web com Interface de Mapa",
        description: "Portal baseado em mapas para visualização de informações geográficas. Utiliza tiles em computação na nuvem para oferecer análises detalhadas.",
        technologies: "JavaScript, Cloud Computing, GIS",
        link: "https://github.com/grupo-3dsm/Sirius-repoP.I"
    },
    {
        name: "Website Help Desk para Suporte Técnico",
        description: "Sistema web inteligente para análise de causas de falhas, minimizando retrabalhos em suporte técnico.",
        technologies: "PHP, MySQL, AI-Based Support",
        link: "https://github.com/Grupo2-DSM/Api-3dsm-2022"
    },
    {
        name: "Estação Meteorológica com Tecsus",
        description: "Uma estação meteorológica para coleta e transmissão de dados em tempo real, integrando sensores e serviços em nuvem.",
        technologies: "IoT, Python, AWS",
        link: "https://github.com/Conveccao/conveccao-documentacao"
    },
    {
        name: "Aplicativo Organizacional para Oracle Academy",
        description: "Aplicativo para gerenciamento de atividades corporativas e pessoais, focando na produtividade e organização.",
        technologies: "Java, MongoDB, Firebase",
        link: "https://github.com/TheAchieversDSM/API-2023.2-Back-End"
    },
    {
        name: "Sistema de Sumarização para Dom Rock",
        description: "Dashboards dinâmicos para análise de reviews de produtos, utilizando processamento de linguagem natural e aprendizado de máquina.",
        technologies: "Python, Scikit-learn, PostgreSQL, AWS",
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
        <p><strong>Tecnologias:</strong> ${project.technologies}</p>
        <a href="${project.link}" target="_blank">Ver Projeto</a>
    `;

    projectsGrid.appendChild(projectCard);
});
