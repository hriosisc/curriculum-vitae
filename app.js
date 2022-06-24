const experiences = [
    {
        company: "IDG - Innovation Digital Group ",
        position: "Desarrollador Front-end",
        time: {
            since: "Dic 2021",
            to: "Actual"
        },
        activities: [
            "Administración y coordinacion de proyectos web.",
            "Desarrollador de plataformas web manejando la libreria React JS.",
            "Administración de bases de datos mediante Firebase Realtime Database, Firestore y MongoDB.",
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
            "Coordinacion, Administración y desarrollo de sistemas web.",
            "Administración de bases de datos mediante Firebase Realtime Database y Firestore.",
            "Supervisión de implementaciones de desarrollo."
        ]
    },
    {
        company: "Ark Public",
        position: "Desarrollador Front-end",
        time: {
            since: "Freelance",
            to: "Today"
        },
        activities: [
            "Mejoramiento de la experiencia y performance de sitios web y langing pages.",
            "Desarrollo de frameworks de diseño con CSS.",
            "Analisis de datos y optimización de código"
        ]
    },
    {
        company: "GSEnergia ",
        position: "Desarrolador Web",
        time: {
            since: "May 2015",
            to: "Dic 2020"
        },
        activities: [
            "Desarrollo de plataformas web utilizando HTML5, CSS3, JS, C#, ASP.NET.",
            "Administración de bases de datos mediante SQL Server."
        ]
    }
]

const jobExperience = () => {

    const expContainer = document.getElementsByClassName("job-experience")[0];

    experiences.forEach(e => {
        const experienceContainer = `
            <div class="m-16">
                <h1 class="title upper">${e.company}</h1>
                <h2 class="subtitle upper black">${e.position}</h2>
                <h3 class="fs-12 upper gold">${e.time.since} - ${e.time.to}</h3> 
                <ul class="ml-16">
                    <li class='fs-10 lh-16'>${e.activities[0]}</li>
                    <li class='fs-10 lh-16'>${e.activities[1]}</li>
                    ${e.activities[2] !== undefined ? `<li class='fs-10 lh-16'>${e.activities[2]}</li>` : ``}
                    ${e.activities[3] !== undefined ? `<li class='fs-10 lh-16'>${e.activities[3]}</li>` : ``}
                </ul>
            </div>
            `;
        expContainer.insertAdjacentHTML('beforeend', experienceContainer);
    });
}

window.onload = () => {
    jobExperience();
}