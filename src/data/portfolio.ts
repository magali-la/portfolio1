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