import { categories } from "../data/portfolio";
import SkillTag from "../components/skills/SkillTag";

export default function Skills() {
    return (
        <section id="skills" aria-label="skills section" className="flex flex-col items-center">
            <h2 className="text-pomegranate font-black text-4xl">Skills</h2>
            
            {/* skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 gap-y-6 max-w-screen w-[95vw] sm:w-[90vw]">
                {categories.map((category) => (
                    // the box holding the category title & each skills list
                    <div key={category.title} className="flex flex-col gap-2 w-full">
                        <h3 className="text-coffee text-center font-bold">{category.title}</h3>
                        {/* now map the skills per category into a div with wrap */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {category.skills.map((skill) => (
                                <SkillTag key={skill.name} name={skill.name} color={skill.color}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}