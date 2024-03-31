export interface Project {
    name: string;
    type: string;
    iconPath?: string;
    markdownDescription: string;
    usedTechs?: Array<string>;
    screenShots?: Array<string>;
}