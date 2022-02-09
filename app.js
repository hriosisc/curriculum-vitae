const experiences = [ 
    {
        company: "IDG - Innovation Digital Group ",
        position: "Desarrollador Front-end",
        time: {
            since: "Dic 2021",
            to: "Actual"
        },
        activities: [
            "Administración y coordinacion de proyectos.",
            "Desarrollador de plataformas web.",
            "Administración de bases de datos.",
            "Analisis de datos y optimización de código"
        ] 
    },
    {
        company: "Sistema Integral de Transporte de Tijuana",
        position: "Subdirector de Tecnologías de Información y Comunicaciones",
        time: {
            since: "Abr 2021",
            to: "Dic 2021"
        },
        activities: [
            "Administración de proyectos.",
            "Coordinacion y desarrollo de sistemas web.",
            "Administración de bases de datos.",
            "Supervisión de implementaciones de desarrollo."
        ] 
    },
    {
        company: "GSEnergia ",
        position: "Desarrollador Web",
        time: {
            since: "May 2015",
            to: "Dic 2020"
        },
        activities: [
            "Desarrollo de plataformas web.",
            "Administración de bases de datos.",
            "Analisis de datos y optimización de código",
            "implementacion de nuevas funcionalidades"
        ] 
    }
]

const jobExperience = () => {

    const expContainer = document.getElementsByClassName("job-experience")[0];

    experiences.forEach(e=> {
        const experienceContainer = `
            <div class="exp">
                <h1 class="exp-company">${e.company}</h1>
                <h2 class="exp-title">${e.position}</h2>
                <h3 class="since-to">${e.time.since} - ${e.time.to}</h3> 
                <ul class="activities">
                    <li>${e.activities[0]}</li>
                    <li>${e.activities[1]}</li>
                    <li>${e.activities[2]}</li>
                    <li>${e.activities[3]}</li>
                </ul>
            </div>
            `;
        expContainer.insertAdjacentHTML('beforeend', experienceContainer);
    });
}

window.onload = () => {
    jobExperience();
}