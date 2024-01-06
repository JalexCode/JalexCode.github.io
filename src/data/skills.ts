
interface SkillGroup {
    groupName: string;
    skills: Array<Skill>;
}

interface Skill {
    name: string;
    iconPath: string;
    rating: number;
    color: string;
}

const skillGroups: Array<SkillGroup> = [
    {
        groupName: 'Libraries and Frameworks',
        skills: [
            {
                name: 'React',
                iconPath: '/images/react.svg',
                rating: 40,
                color: "blue",
            },
            {
                name: 'Django',
                iconPath: '/images/django.svg',
                rating: 26,
                color: "green",
            },
            {
                name: 'Django REST',
                iconPath: '/images/djangorest.svg',
                rating: 15,
                color: "red",
            },
            {
                name: 'PyQt5',
                iconPath: '/images/qt.svg',
                rating: 60,
                color: "green",
            },
        ]
    },
    {
        groupName: 'Programming Languages',
        skills: [
            {
                name: 'Python',
                iconPath: '/images/python.svg',
                rating: 70,
                color: "blue",
            },
            {
                name: 'JavaScript',
                iconPath: '/images/javascript.svg',
                rating: 40,
                color: "yellow",
            },{
                name: 'TypeScript',
                iconPath: '/images/typescript.svg',
                rating: 40,
                color: "blue",
            },{
                name: 'Java',
                iconPath: '/images/java.svg',
                rating: 50,
                color: "indigo",
            },{
                name: 'Kotlin',
                iconPath: '/images/kotlin.svg',
                rating: 25,
                color: "indigo",
            },
        ]
    },
    {
        groupName: 'Databases',
        skills: [
            {
                name: 'PostgreSQL',
                iconPath: '/images/postgresql.svg',
                rating: 30,
                color: "blue",
            },
            {
                name: 'SQLite',
                iconPath: '/images/sqlite.svg',
                rating: 50,
                color: "indigo",
            },
        ]
    },
    {
        groupName: 'Version Control',
        skills: [
            {
                name: 'Git',
                iconPath: '/images/git.svg',
                rating: 50,
                color: "orange",
            },
            {
                name: 'GitHub',
                iconPath: '/images/github.svg',
                rating: 50,
                color: "gray",
            },
        ]
    },
];

export default skillGroups;