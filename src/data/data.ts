import DrawAI from '../assets/DrawAI.png'
import DrawAIMobile from '../assets/DrawAIMobile.png'

export interface Project {
    title: string,
    img: string,
    img2?: string,
    description: String,
    feature1?: String,
    feature2?: String,
    feature3?: String,
    feature4?: String,
    feature5?: String,
    tech: Array<string>,
    languages: Array<string>,
    git?: string,
    deployed?: string,
}

export const projects: Project[] = [
    {
        title: "Draw AI",
        img: DrawAI,
        img2: DrawAIMobile,
        description: "Interactive AI-powered digit recognition: Draw a number, and our AI will accurately predict which digit you've sketched.",
        feature1: "- Interactive on-screen canvas",
        feature2: "- Near real-time Data Transmission",
        feature3: "- AI-powered digit recognition",
        feature4: "- AI statistics chart",
        tech: ["React", "Flask", "pyTorch", "Docker"],
        languages: ["TypeScript", "Python"],
        git: "https://github.com/Cadhig/DrawAI",
        deployed: "https://drawai-production.up.railway.app/"
    },
]