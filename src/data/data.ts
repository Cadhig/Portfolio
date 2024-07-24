import DrawAI from '../assets/DrawAI.png'
import DrawAIMobile from '../assets/DrawAIMobile.png'
import SpotifyUI from '../assets/SpotifyUI.png'
import SpotifyUIMobile from '../assets/SpotifyUIMobile.png'
import Wordle from '../assets/Wordle.png'
import WordleMobile from '../assets/WordleMobile.png'
import DoomScroller from '../assets/DoomScroller.png'
import DoomScrollerMobile from '../assets/DoomScrollerMobile.png'
import SocialMediaApi from '../assets/SocialMediaAPI.png'
import SocialMediaApiRoutes from '../assets/SocialMediaAPIRoutes.png'
import Movify from '../assets/Movify.png'
import MovifyMobile from '../assets/MovifyMobile.png'
import WeatherApp from '../assets/WeatherApp.png'

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
    {
        title: "DoomScroller",
        img: DoomScroller,
        img2: DoomScrollerMobile,
        description: "A rebuild of Intsagram's UI! Interactive buttons, and responsive design that makes this site viewable on any device.",
        feature1: "- Implementation of hover effects",
        feature2: "- Realistic mock data",
        tech: ["React", "React-router", "Tailwind"],
        languages: ["TypeScript"],
        git: "https://github.com/Cadhig/Doomscroller",
        deployed: "https://instagram-ui.onrender.com/"
    },
    {
        title: "Wordle",
        img: Wordle,
        img2: WordleMobile,
        description: "This project is a remake of the popular NYT Wordle game. Users interact with a virtual keyboard to guess a hidden word, receiving feedback on their guesses in terms of letter correctness and position.",
        feature1: "- Interactive virtual keyboard for user input",
        feature2: "- Validation of guess length (max 5 characters)",
        feature3: "- Visual feedback on guess accuracy",
        feature4: "- Dictionary API for word validity",
        feature5: "- Game ending conditions based on the correct guess, or guess limit",
        tech: ["Express.js", "Tailwind"],
        languages: ["JavaScript"],
        git: "https://github.com/Cadhig/Wordle",
        deployed: "https://wordleclone.up.railway.app/"
    },
    {
        title: "Social Media API",
        img: SocialMediaApi,
        img2: SocialMediaApiRoutes,
        description: "Skip a step in developing a beginner social media app, and utilize this Social Media API!",
        feature1: "Create, Update, Delete and Retrieve user accounts",
        feature2: "Create, Update, Delete and Retrieve user thoughts (posts)",
        feature3: "Create and Delete 'following'",
        tech: ["Express.js", "MongoDB", "Mongoose"],
        languages: ["JavaScript"],
        git: "https://github.com/Cadhig/Social-Media-Api",
    },
    {
        title: "Spotify UI",
        img: SpotifyUI,
        img2: SpotifyUIMobile,
        description: "Recreation of Spotify's current UI with added interactive hover states and the integration of mock data to simulate real-world usage. The goal is to closely replicate the look and feel of Spotify's existing UI.",
        feature1: "- Implementation of hover effects",
        feature2: "- Realistic mock data",
        tech: ["React", "Tailwind"],
        languages: ["TypeScript"],
        git: "https://github.com/Cadhig/Spotify-UI",
        deployed: "https://spotify-ui.onrender.com/"
    },
    {
        title: "Movify",
        img: Movify,
        img2: MovifyMobile,
        description: "View top movies, search movies, watch trailers and view movie details with Movify! Our interactive website makes searching for your next watch a breeze.",
        feature1: "Utilization of APIs such as TMDB, Kinocheck, and Youtube.",
        feature2: "Data updates daily with top movies and new releases.",
        tech: ["Jquery", "Semantic UI", "TMD, Kinocheck & Youtube API"],
        languages: ["JavaScript"],
        git: "https://github.com/anullator/Movie-Picker",
        deployed: "https://anullator.github.io/Movie-Picker/"
    },
    {
        title: "Weather App",
        img: WeatherApp,
        img2: WeatherApp,
        description: "One of my very first projects, This is a simple single-page website that utilizes the Openweather API, and local storage to store previously searched cities.",
        feature1: "- Daily updated weather data",
        feature2: "- Previous cities are stored and click-able.",
        tech: ["OpenWeather API"],
        languages: ["JavaScript"],
        git: "https://github.com/Cadhig/WeatherApp",
        deployed: "https://cadhig.github.io/WeatherApp/"
    },
]