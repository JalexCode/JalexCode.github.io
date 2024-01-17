import { Project } from "./projectsInterface";

const ACuantoEstaDescription =
`
**¿A cuánto está?** is a browser extension that will show you the current exchange value of the Dollar, Euro and MLC in Cuba.
`;

const VisualesUclvExplorerDescription =
`
**Visuales UCLV** are a desktop and Android applications that allows the user to explore the content of the Cuban ftp http://visuales.uclv.cu.
`;

const Apklis4DevsDescription =
`
**Apklis4Devs** is a client application for Android that shows the user in a friendly way useful information about their [Apklis Developer](https://admin.apklis.cu/login) account.
`;

const RubieraDescription =
`
**Rubiera** is a desktop application that shows Cuba weather information.
`;

const PortalUsuarioDescription =
`
**Portal Usuario** is an Android application that allows cuban users to use in an easily and friendly way Cubacel services.
`;

const projects: Array<Project> = [
    {
        name: 'Visuales UCLV Explorer',
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
            '/images/screenshots/visuales/1.png',
            '/images/screenshots/visuales/2.jpg',
            '/images/screenshots/visuales/3.jpg',
            '/images/screenshots/visuales/4.jpg',
        ]
    },
    {
        name: 'Apklis4Devs',
        markdownDescription: Apklis4DevsDescription,
        iconPath: '/images/apklis4devs.png',
        usedTechs: [
            "Android",
            "Java",
            "Retrofit",
        ],
        screenShots: [
            '/images/screenshots/apklis4devs/1.jpg',
            '/images/screenshots/apklis4devs/2.jpg',
            '/images/screenshots/apklis4devs/3.jpg',
            '/images/screenshots/apklis4devs/4.jpg',
        ]
    },
    {
        name: '¿A cuánto está?',
        markdownDescription: ACuantoEstaDescription,
        iconPath: '/images/a-cuanto-esta.png',
        usedTechs: [
            "Browser",
            "Extension",
            "React",
            "TypeScript",
            "Plasmo",
        ],
        screenShots: [
            '/images/screenshots/acuanto/1.jpg',
            '/images/screenshots/acuanto/2.jpg',
            '/images/screenshots/acuanto/3.jpg',
        ]
    },
    {
        name: 'Rubiera',
        markdownDescription: RubieraDescription,
        iconPath: '/images/rubiera.png',
        usedTechs: [
            "Desktop",
            "Python",
            "PyQt5",
            "WebScrapping"
        ],
        screenShots: [
            '/images/screenshots/rubiera/1.png'
        ]
    },
    {
        name: 'Portal Usuario',
        markdownDescription: PortalUsuarioDescription,
        iconPath: '/images/rubiera.png',
        usedTechs: [
            "Android",
            "Java",
            "WebScrapping",
        ],
        screenShots: [
            '/images/screenshots/portal/1.jpg'
        ]
    },

];

export default projects;