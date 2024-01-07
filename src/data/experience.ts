

export type ExperienceType = {
    workName: string;
    workingPeriod: string;
    place: string;
    time: string;
    role: string;
    description: string;
    webLink: string;
    image?:string;
};


export const experience: Array<ExperienceType> = [
    {
        workName: 'University of Camagüey',
        workingPeriod: 'Jan 2023 - Now',
        place: 'Camagüey, Cuba',
        time: 'Full',
        role: 'Professor',
        description: 'Teaching Programming Language and Data Structures to the students of the Faculty of Informatics and Exact Sciences. Fulfilling tasks of the Department of Informatics of the faculty and participating in research projects.',
        webLink: "https://www.reduc.edu.cu/",
        image: "/images/uc-logo.png",
    },
];

