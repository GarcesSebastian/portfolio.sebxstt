export type Project = {
    id: string;
    title: string;
    description: string;
    logo: string;
    gallery: string[];
    features: string[];
    demos: { games: Demo[], physics: Demo[] };
    links: { github: string, live: string };
    technologies: string[];
    tags: string[];
}

export type Demo = {
    title: string;
    description: string;
    type: string;
    icon: string;
    difficulty: string;
    link: string;
    technologies: string[];
}