export type Project = {
    id: string;
    title: {
        es: string;
        en: string;
    };
    description: {
        es: string;
        en: string;
    };
    logo: string;
    gallery: string[];
    features: {
        es: string[];
        en: string[];
    };
    demos: {
        games: Demo[];
        physics: Demo[];
    };
    links: { github: string, live: string };
    technologies: string[];
    tags: string[];
}

export type Demo = {
    title: {
        es: string;
        en: string;
    };
    description: {
        es: string;
        en: string;
    };
    type: string;
    icon: string;
    difficulty: {
        es: string;
        en: string;
    };
    link: string;
    technologies: string[];
}