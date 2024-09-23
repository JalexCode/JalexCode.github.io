export interface Project {
    name: string;
    type: string;
    iconPath?: string;
    markdownDescription: string;
    usedTechs?: Array<string>;
    screenShots?: Array<string>;
    prodUrl?: {
        name: string;
        url: string;
    }[];
}

// const ACuantoEstaDescription =
// `
// **¿A cuánto está?** is a browser extension that will show you the current exchange value of the Dollar, Euro and MLC in Cuba.
// `;

const VisualesUclvExplorerDescription =
`
**Visuales UCLV** are a desktop and Android applications that allows the user to explore the content of the Cuban ftp http://visuales.uclv.cu.
`;

const Apklis4DevsDescription =
`
**Apklis4Devs** is a client application for Android that shows the user in a friendly way useful information about their [Apklis Developer](https://admin.apklis.cu/login) account.
`;

// const RubieraDescription =
// `
// **Rubiera** is a desktop application that shows Cuba weather information.
// `;

const PortalUsuarioDescription =
`
**Portal Usuario** is an Android application that allows cuban users to use in an easily and friendly way Cubacel services.
`;

const MaoConsultingDescription =
`
This is a computer platform for identifying the legal requirements that companies must comply with, evaluating their compliance, and document management of waste, among other services..
`;

const projects: Array<Project> = [
    {
        name: 'Mao Consulting',
        type: 'Private',
        markdownDescription: MaoConsultingDescription,
        iconPath: '/images/mao_rounded.png',
        usedTechs: [
            "Web App",
            "NextJs 14",
            "React",
            "TypeScript",
            "TailwindCSS",
            "Flowbite",
            "TanStack Table",
            "i18next",
        ],
        screenShots: [
            '/images/mao/1.png',
            '/images/mao/2.png',
            '/images/mao/3.png',
        ],
        prodUrl: [
            {name: 'Website', url: 'https://panel.maoconsulting.es/login'}]
    },
    {
        name: 'Visuales UCLV Explorer',
        type: 'Open Source',
        markdownDescription: VisualesUclvExplorerDescription,
        iconPath: '/images/visuales.png',
        usedTechs: [
            "Desktop",
            "Python",
            "PyQt5",
            "Android",
            "Java",
        ],
        screenShots: [
            '/images/visuales/1.png',
            '/images/visuales/2.jpg',
            '/images/visuales/3.jpg',
            '/images/visuales/4.jpg',
        ],
        prodUrl: [
            {name: 'GitHub', url: 'https://github.com/JalexCode/VisualesUCLV-Desktop'},
            {name: 'Apklis', url: 'https://www.apklis.cu/application/com.jalexcode.visualesuclvexplorer'}]
    },
    // {
    //     name: '¿A cuánto está?',
    //     type: 'Open Source',
    //     markdownDescription: ACuantoEstaDescription,
    //     iconPath: '/images/a-cuanto-esta.png',
    //     usedTechs: [
    //         "Browser",
    //         "Extension",
    //         "React",
    //         "TypeScript",
    //         "Plasmo",
    //     ],
    //     screenShots: [
    //         '/images/acuanto/1.jpg',
    //         '/images/acuanto/2.jpg',
    //         '/images/acuanto/3.jpg',
    //     ]
    // },
    // {
    //     name: 'Rubiera',
    //     type: 'Open Source',
    //     markdownDescription: RubieraDescription,
    //     iconPath: '/images/rubiera.png',
    //     usedTechs: [
    //         "Desktop",
    //         "Python",
    //         "PyQt5",
    //         "WebScrapping"
    //     ],
    //     screenShots: [
    //         '/images/rubiera/1.png'
    //     ]
    // },
    {
        name: 'Portal Usuario',
        type: 'Individual (Collaboration)',
        markdownDescription: PortalUsuarioDescription,
        iconPath: '/images/portal.png',
        usedTechs: [
            "Android",
            "Java",
            "WebScrapping",
        ],
        screenShots: [
            '/images/portal/1.jpg'
        ],
        prodUrl: [
            {name: 'Apklis', url: 'https://www.apklis.cu/application/com.marlon.portalusuario'}]
    },
    {
        name: 'Apklis4Devs',
        type: 'Individual',
        markdownDescription: Apklis4DevsDescription,
        iconPath: '/images/apklis4devs.png',
        usedTechs: [
            "Android",
            "Java",
            "Retrofit",
        ],
        screenShots: [
            '/images/apklis4devs/1.jpg',
            '/images/apklis4devs/2.jpg',
            '/images/apklis4devs/3.jpg',
            '/images/apklis4devs/4.jpg',
        ],
        // prodUrl: [
        //     {name: 'GitHub', url: 'https://github.com/JalexCode/Apklis4Devs'},
        //     {name: 'Apklis', url: 'https://www.apklis.cu/application/com.jalexcode.apklis4devs'}]
    },
];

export default projects;