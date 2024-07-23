import { useState } from "react"
import { Project } from "../data/data"
import { X, Github, Earth } from "lucide-react"

interface ModalProps extends Project {
    setModal: (modal: boolean) => void,
    modal: boolean
}
export default function Projects(props: Project) {
    const [modal, setModal] = useState<boolean>(false)
    let showOrHideModal = modal ? 'inline' : 'hidden'

    return (
        <div className='relative defaultFont' onClick={() => setModal(true)}>
            <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
            <div className="flex flex-col p-2 items-center text-xl bg-green-custom border border-grey-custom rounded relative text-grey-custom transition duration-150 ease-in-out hover:-translate-y-1">
                <img src={props.img} alt={props.title} className="border border-grey-custom rounded h-52 w-full object-cover" />
                <h1>{props.title}</h1>
            </div>
            <div className={showOrHideModal}>
                <ProjectModal {...props} setModal={setModal} modal={modal} />
            </div>
        </div>
    )
}

function ProjectModal(props: ModalProps) {

    return (
        <div className="fixed left-0 top-0 size-full overflow-auto bg-grey-custom/20 flex items-center justify-center defaultFont">
            <div className="bg-green-custom sticky rounded flex flex-col  items-center size-3/4 border border-grey-custom shadow-lg text-grey-custom defaultFont">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold">{props.title}</h1>
                    <X onClick={() => {
                        console.log('X clicked');
                        props.setModal(!props.modal);
                        console.log(props.modal)
                    }} />
                </div>
                <div className="flex size-full">
                    <div className="flex items-center w-1/2 mx-4 justify-center">
                        <img src={props.img2} alt={props.title} className="h-3/4 border border-grey-custom rounded" />
                    </div>
                    <div className="flex flex-col gap-4 items-center w-1/2 mx-4 justify-center">
                        <div>
                            <h2 className="text-2xl text-center font-bold">Description</h2>
                            <p>{props.description}</p>
                        </div>
                        <div className="w-full">
                            <h2 className="text-2xl text-center font-bold">Features</h2>
                            <ul>
                                <li>{props.feature1}</li>
                                <li>{props.feature2}</li>
                                <li>{props.feature3}</li>
                                <li>{props.feature4}</li>
                                <li>{props.feature5}</li>
                            </ul>
                        </div>
                        <div className="flex w-full gap-4">
                            <p className="font-bold">Tech Used:</p>
                            <div className="flex gap-4 items-center">
                                {props.tech.map((props: String, index: number) => {
                                    return <TechBlob text={props} key={index} />
                                })}
                            </div>
                        </div>
                        <div className="flex w-full gap-3">
                            <p className="font-bold">Languages:</p>
                            <div className="flex gap-4 items-center">
                                {props.languages.map((props: String, index: number) => {
                                    return <LanguageBlob text={props} key={index} />
                                })}
                            </div>
                        </div>
                        <div className="flex gap-4 w-full">
                            <div className='relative flex flex-col w-full md:w-1/2'>
                                <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                                <a href={props.git} target="_blank" className="relative bg-blue-custom rounded flex p-2 items-center gap-4 border border-grey-custom text-xl transition duration-150 ease-in-out hover:-translate-y-1"><Github />View Repo</a>
                            </div>
                            <div className='relative flex flex-col w-full md:w-1/2'>
                                <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                                <a href={props.deployed} target="_blank" className="relative bg-red-custom rounded flex p-2 items-center gap-4 border border-grey-custom text-xl transition duration-150 ease-in-out hover:-translate-y-1"><Earth />View in Browser</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TechBlob(props: any) {

    return (
        <div className="bg-blue-custom rounded px-4 py-1 text-grey-custom defaultFont">{props.text}</div>
    )
}

function LanguageBlob(props: any) {

    return (
        <div className="bg-red-custom rounded px-4 py-1 text-grey-custom defaultFont">
            {props.text}
        </div>
    )
}