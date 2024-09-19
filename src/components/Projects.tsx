import { useState } from "react"
import { Project } from "../data/data"
import { Github, Earth } from "lucide-react"

interface ModalProps extends Project {
    setModal: (modal: boolean) => void,
    modal: boolean
}
export default function Projects(props: Project) {
    const [modal, setModal] = useState<boolean>(false)
    let showOrHideModal = modal ? 'inline z-50' : 'hidden'

    return (
        <div>
            <div className={`fixed inset-0 z-50 ${showOrHideModal}`}>
                <ProjectModal {...props} setModal={setModal} modal={modal} />
            </div>
            <div className='relative defaultFont z-0 cursor-pointer' onClick={() => setModal(true)}>
                <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                <div className=" flex flex-col gap-1 p-2 items-center text-xl bg-green-custom border border-grey-custom rounded relative text-grey-custom transition duration-150 ease-in-out hover:-translate-y-1">
                    <img src={props.img} alt={props.title} className="border border-grey-custom rounded h-52 w-full object-cover" />
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>

    )
}

function ProjectModal(props: ModalProps) {

    return (
        <div className="fixed left-0 top-0 bottom-0 right-0 size-full overflow-auto bg-grey-custom/20 flex items-center justify-center defaultFont" onClick={(e) => {
            e.stopPropagation()
            props.setModal(false)
        }}>
            <div className="bg-green-custom m-4 md:size-3/4 lg:h-3/4 lg:w-1/2 p-4 z-auto gap-2 rounded flex flex-col overflow-y-auto overflow-x-hidden md:overflow-hidden items-center  border border-grey-custom text-grey-custom defaultFont">
                <h1 className="text-4xl font-bold">{props.title}</h1>
                <img src={props.img} alt={props.title} className="rounded h-1/2" />
                <p className="text-center">{props.description}</p>
                <h1 className="text-xl font-bold">Features</h1>
                <div className="flex flex-col gap-2">
                    <p>{props.feature1}</p>
                    <p>{props.feature2}</p>
                    <p>{props.feature3}</p>
                    <p>{props.feature4}</p>
                    <p>{props.feature5}</p>
                </div>
                <div className="flex gap-2">
                    <div className='relative flex flex-col w-full md:w-1/2'>
                        <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                        <a href={props.git} target="_blank" className="relative bg-blue-custom rounded flex p-2 items-center gap-4 border w-32 md:w-60 border-grey-custom text-xl transition duration-150 ease-in-out hover:-translate-y-1"><Github />View Repo</a>
                    </div>
                    <div className='relative flex flex-col w-full md:w-1/2'>
                        <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                        <a href={props.deployed} target="_blank" className="relative bg-red-custom rounded flex p-2 items-center gap-4 border w-32 md:w-60 border-grey-custom text-xl transition duration-150 ease-in-out hover:-translate-y-1"><Earth />View Website</a>
                    </div>
                </div>
            </div>
        </div>
    )

}