

export type ExperienceType = {
    workName: string;
    workingPeriod: string;
    place: string;
    time: string;
    role: string;
    description: string;
    webLink: string;
    image?:string;
    skills: Array<string>,
};


export const experience: Array<ExperienceType> = [
    {
        workName: 'University of Camagüey',
        workingPeriod: 'Jan 2023 - Now',
        place: 'Camagüey, Cuba',
        time: 'Full',
        role: 'Professor',
        description: 'Teaching Programming Language and Data Structures to the students of the Faculty of Informatics and Exact Sciences. Accomplishing the responsibilities assigned to the Department of Informatics within the university and contributing to ongoing research initiatives.',
        webLink: "https://www.reduc.edu.cu/",
        image: "/images/uc-logo.png",
        skills: [
            "Teaching",
            "Data Structures",
            "Java",
            "Python",
            "Research",
            "Data Science",
        ],
    },
];

