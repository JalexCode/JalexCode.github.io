

export type ExperienceType = {
    color: string;
    workName: string;
    workingPeriod: string;
    place: string;
    time: string;
    role: string;
    description: string;
    webLink: string;
    image?: string;
    skills: Array<string>,
};


export const experience: Array<ExperienceType> = [
    {
        color: "rgb(150, 124, 244)",
        workName: 'Freelance',
        workingPeriod: 'Feb 2024 - Now',
        place: 'Spain',
        time: 'Fulltime',
        role: 'Frontend Developer',
        description: 'Building the new MAO Consulting web platform. As part of a team of developers, we used the agile Scrum methodology to work on this project. Use NextJs, Tailwind, React, Typescript, Flowbite, i18next and more.',
        webLink: "https://maoconsulting.es/",
        image: "/images/mao.png",
        skills: [
            "Web App",
            "UI/UX",
            "NextJs 14",
            "React",
            "TypeScript",
            "Tailwind",
            "Flowbite",
            "TanStack Table",
            "i18next",
        ],
    },
    {
        color: "rgb(20, 124, 244)",
        workName: 'University of Camagüey',
        workingPeriod: 'Jan 2023 - Now',
        place: 'Camagüey, Cuba',
        time: 'Full',
        role: 'Professor',
        description: 'Teaching UI Design, Programming Language and Data Structures to the students of the Faculty of Informatics and Exact Sciences. Accomplishing the responsibilities assigned to the Department of Informatics within the university and contributing to ongoing research initiatives.',
        webLink: "https://www.reduc.edu.cu/",
        image: "/images/uc-logo.png",
        skills: [
            "Teaching",
            "UI Design",
            "Data Structures",
            "Java",
            "Python",
            "Research",
            "Data Science",
        ],
    },
];

