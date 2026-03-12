// CENTRAL HUB FOR PORTFOLIO DATA

// 1. SKILLS DATA
// interfaces for shape of the Skills object
export interface Skill {
    name: string,
    color: string
}

// interface with all the array of categories holding skills
export interface SkillCategory {
    title: string,
    skills: Skill[]
}

export const categories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "TypeScript", color: "bg-wave" },
            { name: "JavaScript", color: "bg-autumn" },
            { name: "Python", color: "bg-cactus" },
            { name: "HTML5", color: "bg-pomegranate" },
            { name: "CSS3", color: "bg-eggplant" },
        ],
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: "React", color: "bg-pomegranate" },
            { name: "Node.js", color: "bg-eggplant" },
            { name: "Express", color: "bg-autumn" },  
            { name: "Mongoose", color: "bg-cactus" },          
            { name: "Tailwind CSS", color: "bg-wave" },
            { name: "Bootstrap", color: "bg-coffee" },
            { name: "Motion", color: "bg-pomegranate" },
            { name: "Material UI", color: "bg-cactus" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", color: "bg-autumn" },
            { name: "Vite", color: "bg-cactus" },
            { name: "Axios", color: "bg-coffee" },
            { name: "REST APIs", color: "bg-wave" },
            { name: "Postman", color: "bg-pomegranate" },
            { name: "GitHub Copilot", color: "bg-autumn" },
            { name: "Figma", color: "bg-eggplant" },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", color: "bg-autumn" },
            { name: "Google Firestore", color: "bg-cactus" },
        ],
    },
    {
        title: "Authentication",
        skills: [
            { name: "Passport.js", color: "bg-pomegranate" },
            { name: "OAuth", color: "bg-wave" },
            { name: "Bcrypt", color: "bg-coffee" },
            { name: "JWT", color: "bg-eggplant" },
        ],
    },
    {
        title: "Accessibility",
        skills: [
            { name: "WCAG 2.2", color: "bg-pomegranate" },
            { name: "ARIA", color: "bg-wave" },
            { name: "Semantic HTML", color: "bg-cactus" },
        ],
    },
];

// 2. PROJECTS DATA
// interface for shape of project object
export interface Project {
    id: string,
    // main content
    title: string,
    desc: string,
    stack: string[],
    github: string,
    live: string,
    // postcard content
    postcard: {
        teaser: string,
        type: string,
        focus: string,
        status: string,
        frontImg: string,
    }     
}

// PROJECTS
export const projects: Project[] = [
    // Healie
    {
        id: "healie",
        title: "Healie App",
        desc: "description",
        stack: ["React", "JavaScript", "Google Firestore", "Tailwind CSS"],
        github: "https://github.com/cherryontech/mint-chip",
        live: "https://mint-chip.netlify.app/",
        postcard: {
            teaser: "A 4-month cross-functional project designed for women in tech",
            type: "Burnout Reduction Tool",
            focus: "Accessibility",
            status: "Ongoing, Post-MVP",
            frontImg: "/healie/landing.png",
        } 
    },
    // GoEasy
    {
        id: "goeasy",
        title: "GoEasy",
        desc: "some description",
        stack: ["React", "TypeScript", "JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "OAuth", "JWT", "Axios", "Tailwind CSS", "Motion"],
        github: "https://github.com/magali-la/goeasy-app",
        live: "https://goeasy-travel.vercel.app/",
        postcard: {    
            teaser: "A travel planning tool for budget-conscious explorers",
            type: "Budget Travel Plannner",
            focus: "Full Stack, UX-Forward",
            status: "Live",
            frontImg: "/healie/landing.png",
        } 
    },

    // Afribite

    // 
]