export interface Project {
    id: string;
    title: {
        es: string;
        en: string;
    };
    description: {
        es: string;
        en: string;
    };
    features: {
        es: string[];
        en: string[];
    };  
    gallery: string[];
    demos: {
        games: Demo[];
        physics: Demo[];
    };
    tags: string[];
    links: {
        github: string;
        live: string;
    };
    logo: string;
    technologies: string[];
}

export interface Demo {
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