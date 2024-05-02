
export interface SkillGroup {
    groupName: string;
    skills: Array<Skill>;
}

export interface Skill {
    name: string;
    iconPath: string;
    rating: number;
    color: string;
}

export const skillGroups: Array<SkillGroup> = [
    {
        groupName: 'Frameworks',
        skills: [
            {
                name: 'NextJs',
                iconPath: '/images/next-js.svg',
                rating: 80,
                color: "gray",
            },
            {
                name: 'React',
                iconPath: '/images/react.svg',
                rating: 60,
                color: "blue",
            },
            {
                name: 'Django',
                iconPath: '/images/django.svg',
                rating: 40,
                color: "green",
            },
            {
                name: 'Django REST',
                iconPath: '/images/djangorest.svg',
                rating: 30,
                color: "red",
            },
            {
                name: 'Svelte',
                iconPath: '/images/svelte.svg',
                rating: 50,
                color: "orange",
            },
            {
                name: 'Laravel',
                iconPath: '/images/laravel.svg',
                rating: 30,
                color: "red",
            },
            {
                name: 'Android',
                iconPath: '/images/android-logomark.svg',
                rating: 60,
                color: "green",
            },
        ]
    },
    {
        groupName: 'UI Libraries',
        skills: [
            {
                name: 'TailwindCSS',
                iconPath: '/images/tailwindcss.svg',
                rating: 80,
                color: "blue",
            },
            {
                name: 'Flowbite (React)',
                iconPath: '/images/flowbite.svg',
                rating: 90,
                color: "indigo",
            },
            {
                name: 'AntDesign',
                iconPath: '/images/antdesign.svg',
                rating: 90,
                color: "red",
            },

            {
                name: 'PyQt5',
                iconPath: '/images/qt.svg',
                rating: 60,
                color: "green",
            },
        ],
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
                rating: 70,
                color: "yellow",
            }, {
                name: 'TypeScript',
                iconPath: '/images/typescript.svg',
                rating: 70,
                color: "blue",
            }, {
                name: 'Java',
                iconPath: '/images/java.svg',
                rating: 50,
                color: "red",
            }, {
                name: 'Kotlin',
                iconPath: '/images/kotlin.svg',
                rating: 25,
                color: "pink",
            },
            {
                name: 'Lua',
                iconPath: '/images/lua.png',
                rating: 50,
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
                color: "blue",
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