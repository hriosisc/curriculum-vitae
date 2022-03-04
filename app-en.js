const experiences = [ 
    {
        company: "IDG - Innovation Digital Group ",
        position: "Front-end Developer",
        time: {
            since: "Dec 2021",
            to: "Today"
        },
        activities: [
            "Managing web projects",
            "Web platform developer using React JS library",
            "Database administration using Firebase Realtime Database, Firestore and MongoDB.",
            "Data analysis and code optimization", 
        ] 
    },
    {
        company: "Tijuana's Transport Integral System",
        position: "Subdirector of Information and Communications Technologies",
        time: {
            since: "Apr 2021",
            to: "Dec 2021"
        },
        activities: [ 
            "Managing web projects.",
            "Firebase Realtime Database and Firestore Data Base administration.",
            "Supervising developer implementation."
        ] 
    },
    {
        company: "Ark Public",
        position: "Front-end Developer",
        time: {
            since: "Freelance",
            to: "Today"
        },
        activities: [
            "Improving the experience and performance of websites and langing pages.",
            "CSS Framework designing and developing",
            "Data analysis and code optimization."
        ] 
    },
    {
        company: "GSEnergia",
        position: "Web Developer",
        time: {
            since: "May 2015",
            to: "Dec 2020"
        },
        activities: [
            "Developing web platforms using HTML5, CSS3, JS, C#, ASP.NET.",
            "SQL Server data managing." 
        ] 
    }
]

const jobExperience = () => {

    const expContainer = document.getElementsByClassName("job-experience")[0];

    experiences.forEach(e=> {
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