import StackIcon from "tech-stack-icons";

export default function TechStack() {

    return (
        <div className="flex flex-col m-4 gap-4 justify-center items-center defaultFont">
            <h1 className="font-bold text-4xl text-center md:text-6xl md:w-1/2">Tech Stack</h1>
            <div className="grid grid-rows-2 grid-cols-4 md:grid-rows-2 md:grid-cols-6  gap-4">
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="js" className="w-16" />
                    <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="typescript" className="w-16" />
                    <p>TypeScript</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="python" className="w-16" />
                    <p>Python</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="reactjs" className="w-16" />
                    <p>React</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="nodejs" className="w-16" />
                    <p>Node</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="postgresql" className="w-16" />
                    <p>PostgreSQL</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="mongodb" className="w-16" />
                    <p>MongoDB</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="flask" className="w-16" />
                    <p>Flask</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="html5" className="w-16" />
                    <p>HTML</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="css3" className="w-16" />
                    <p>CSS</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="tailwindcss" className="w-16" />
                    <p>TailwindCSS</p>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <StackIcon name="docker" className="w-16" />
                    <p>Docker</p>
                </div>
            </div>
        </div>
    )
}