import Projects from "./Projects";
import { Project, projects } from "../data/data"

export default function ProjectsMain() {

    return (
        <div className="flex flex-col justify-center items-center gap-4" id="projects">
            <h1 className="font-bold text-4xl text-center md:text-6xl md:w-1/2">Projects</h1>
            <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-4 m-4">
                {projects.map((props: Project, index: number) => {
                    return <Projects key={index} {...props} />
                })}
            </div>
        </div>
    )
}