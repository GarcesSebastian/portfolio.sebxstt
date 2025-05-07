export type User = {
    id: string,
    name: string,
    email: string,
    description: string,
    avatar: string,
    location: string,
    years_experience: number,
    social: { linkedin: string, github: string },
    skills: { name: string, icon: React.ReactNode }[],
    is_active: boolean,
}
