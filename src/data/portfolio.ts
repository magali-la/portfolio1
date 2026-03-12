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
            { name: "Adobe Suite", color: "bg-coffee" },
            { name: "Jira", color: "bg-cactus" },
            { name: "Trello", color: "bg-wave" },
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
    stackColor: string,
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
    // GoEasy
    {
        id: "goeasy",
        title: "GoEasy",
        desc: "A full stack budget travel planning app where I implemented dual authentication with local and Google OAuth 2.0 using httpOnly cookie-based token storage, designed a RESTful API with Express and Node.js, and built a selective Mongoose population strategy to serve nested relational data efficiently.",
        stack: ["React", "TypeScript", "JavaScript", "CSS3", "Node.js", "Express", "MongoDB", "Mongoose", "OAuth", "JWT", "Axios", "Tailwind CSS", "Tailwind Variants", "Motion", "Figma", "Trello"],
        stackColor: "bg-pomegranate",
        github: "https://github.com/magali-la/goeasy-app",
        live: "https://goeasy-travel.vercel.app/",
        postcard: {    
            teaser: "A travel app for budget-conscious explorets who plan their spending before they go",
            type: "Budget Travel Planner",
            focus: "Full Stack, UX-Forward",
            status: "Live",
            frontImg: "/goeasy/goeasytrips.png",
        } 
    },
    // Healie
    {
        id: "healie",
        title: "Healie",
        desc: "A burnout-reduction web app for women in tech, built over 4 months in two-week sprints with a team of 3 developers, 1 designer, and a PM. I owned the onboarding flow and dashboard, including sorting and displaying completed challenge entries for users' progress overview. I built a reusable button design system using Tailwind Variants API to standardize UI consistency across the app.",
        stack: ["React", "JavaScript", "CSS3", "Google Firestore", "Tailwind CSS", "Tailwind Variants", "Jira"],
        stackColor: "bg-eggplant",
        github: "https://github.com/cherryontech/mint-chip",
        live: "https://mint-chip.netlify.app/",
        postcard: {
            teaser: "A web experience helping women in tech build a healthier work-life balance",
            type: "Burnout Reduction Tool",
            focus: "Accessibility",
            status: "Ongoing, Post-MVP",
            frontImg: "/healie/landing.png",
        } 
    },
    // Afribite
    {
        id: "afribite",
        title: "Afribite",
        desc: "A restaurant management app built over 4 weeks with a team of 4 developers and a UX team. I took ownership of the notification system, building scalable components with React hooks and dynamic order rendering, and implemented search functionality via Firestore queries to filter and retrieve order data in real time. Demo login on Admin tab: demo@gmail.com / demo123",
        stack: ["React", "JavaScript", "Tailwind CSS", "CSS3", "Google Firestore"],
        stackColor: "bg-autumn",
        github: "https://github.com/magali-la/Afribite",
        live: "https://afribitedemo.vercel.app/",
        postcard: {
            teaser: "A real-time order management tool built for small, family-owned restaurant teams",
            type: "Restaurant Management",
            focus: "Real-Time Data, UI Components",
            status: "Live",
            frontImg: "/afribite/afribitesearch.png",
        }
    }
]