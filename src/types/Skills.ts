
export type SkillCategory = "Languages" | "Frameworks & Libraries" | "Databases & Tools" | "Other"

export type Skill = {
    name: string,
    icon: React.ReactNode,
    color: string,
    category: SkillCategory,
}