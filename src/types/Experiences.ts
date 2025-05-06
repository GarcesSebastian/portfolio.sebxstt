export type ExperienceType = "work" | "hackathon"

export type Experience = {
    id: string,
    type: ExperienceType,
    company: string,
    period: string,
    location: string,
    description: string,
    achievements: string[],
    technologies: string[],
    icon: React.ReactNode
}