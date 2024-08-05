import StackIcon from "tech-stack-icons";

export default function TechStack() {

    return (
        <div className="flex flex-col m-4 gap-4 justify-center items-center defaultFont">
            <h1 className="font-bold text-4xl text-center md:text-6xl md:w-1/2">Tech Stack</h1>
            <h1 className="text-2xl">Proficient</h1>
            <div className="grid grid-rows-4 grid-cols-4 md:grid-rows-2 md:grid-cols-6  gap-4">
                <StackIcon name="js" className="w-16" />
                <StackIcon name="typescript" className="w-16" />
                <StackIcon name="reactjs" className="w-16" />
                <StackIcon name="nodejs" className="w-16" />
                <StackIcon name="git" className="w-16" />
                <StackIcon name="css3" className="w-16" />
                <StackIcon name="html5" className="w-16" />
                <StackIcon name="postgresql" className="w-16" />
                <StackIcon name="mongodb" className="w-16" />
                <StackIcon name="tailwindcss" className="w-16" />
            </div>
            <h1 className="text-2xl">Familiar</h1>
            <div className="grid grid-rows-4 grid-cols-4 md:grid-rows-1 md:grid-cols-6  gap-4">
                <StackIcon name="python" className="w-16" />
                <StackIcon name="flask" className="w-16" />
                <StackIcon name="docker" className="w-16" />
            </div>
        </div>
    )
}