export type ExperienceType = "work" | "hackathon"

export type Experience = {
    id: string,
    description: string,
    type: ExperienceType,
    company: string,
    period: string,
    location: string,
    achievements: string[],
    technologies: string[],
    icon: React.ReactNode
}