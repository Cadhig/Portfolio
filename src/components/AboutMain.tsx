import Cadence from '../assets/Cadence.jpg'
import { Linkedin, FileDown } from 'lucide-react'
import CadenceHigginsResume from '../assets/CadenceHigginsResume.pdf'
export default function AboutMain() {

    return (
        <div className='flex m-4 items-center'>
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex justify-around items-center w-full'>
                    <div className='flex flex-col'>
                        <p>A little about me</p>
                        <h1 className='font-bold text-4xl w-1/2'>Cadence Higgins</h1>
                    </div>
                    <div className='relative'>
                        <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                        <img src={Cadence} alt="Cadence Higgins" className='relative object-cover transition duration-150 ease-in-out size-36 rounded hover:-translate-y-1 hover:scale-110 border-2 border-grey-custom' />

                    </div>
                </div>
                <p>A passionate Full-Stack Developer from Houston, Texas, dedicated to transforming my ideas into real projects! My journey encompasses web and software development, with a growing interest in AI and machine learning.</p>
                <div className='flex flex-col gap-4'>
                    <Linkedin />
                    <div className='relative flex flex-col'>
                        <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                        <a href={CadenceHigginsResume} download className='relative bg-green-custom text-grey-custom p-4 text-2xl flex items-center justify-center gap-2 rounded border-2 border-grey-custom'>
                            <span className='relative'>Download Resume</span>
                            <FileDown className='relative' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}