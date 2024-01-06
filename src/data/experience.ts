

export type ExperienceType = {
    workName: string;
    workingPeriod: string;
    place: string;
    role: string;
    description: string;
};


export const experience: Array<ExperienceType> = [
    
    {
        workName: 'Ewall Insurance Company',
        workingPeriod: 'Nov 2022 - Jul 2023',
        place: 'Remote - part time',
        role: 'Software Developer',
        description: 'Working in a Scrum team. Using React Native and AWS technologies.'
    },

    {
        workName: 'University of Camagüey Ignacio Agramonte Loynaz',
        workingPeriod: 'Jan 2023 - Nov 2023',
        place: 'Camagüey, Cuba - full time',
        role: 'Professor',
        description: 'Teaching Web Programming and Mathematical Logic to the students of the Faculty of Informatics and Exact Sciences. Fulfilling tasks of the Department of Informatics of the faculty and participating in research projects.'
    },
];

