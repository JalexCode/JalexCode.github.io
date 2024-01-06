const ACuantoEstaDescription =
`
**¿A cuánto está?** is a browser extension that will show you the current exchange value of the Dollar, Euro and MLC in Cuba.
If you wish to contribute to the project you can do it [here](https://github.com/R0land013/dev-links).
`;

const VisualesUclvExplorerDescription =
`
**VisualesUCLV** are a desktop and Android applications that allows the user to explore the content of the Cuban ftp http://visuales.uclv.cu.

If you are interested in knowing more about it or want to contribute, click
[here](https://github.com/R0land013/blue-pos).
`;

const Apklis4DevsDescription =
`
**Apklis4Devs** is a client application for Android that shows the user in a friendly way useful information about their Apklis Developer account. Apklis is a Cuban Android application hosting platform.

If you want to know more about this app or contribute to the project go to see
the [repo](https://github.com/R0land013/blue-nauta).
`;

const RubieraDescription =
`
**Rubiera** is a desktop application that shows Cuba weather information.
`;

const projects: Array<Project> = [
    {
        name: 'Visuales UCLV Explorer',
        markdownDescription: VisualesUclvExplorerDescription,
        iconPath: '/images/visuales.png',
        usedTechs: [
            "Python",
            "PyQt5",
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
            "Python",
            "PyQt5",
        ],
        screenShots: [
            '/images/screenshots/rubiera/1.png'
        ]
    },

];

export default projects;