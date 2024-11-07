import Cadence from '../assets/Cadence.jpg'
import { Linkedin, FileDown, Instagram, Github, Twitter } from 'lucide-react'
import CadenceHigginsResume from '../assets/CadenceHigginsResume.pdf'
export default function AboutMain() {

    return (
        <div className='flex m-4 items-center defaultFont'>
            <div className='flex flex-col gap-6 w-full'>
                <div className='flex justify-around items-center w-full md:justify-between'>
                    <div className='flex flex-col md:flex-row justify-around items-center w-full md:justify-center md:gap-6'>
                        <div className='flex flex-col md:w-1/4 gap-4' id='about'>
                            <h1 className='font-bold text-4xl md:text-5xl md:w-1/2'>Cadence Higgins</h1>
                            <p className='md:mt-4 md:text-lg'>Full-Stack Developer based in Houston, Texas, dedicated to transforming my ideas into real projects! My journey encompasses web and software development, with a growing interest in AI and machine learning.</p>
                        </div>
                        <div className='relative'>
                            <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                            <img src={Cadence} alt="Cadence Higgins" className='flex-shrink-0 relative object-cover transition duration-150 ease-in-out size-32 md:size-60 rounded hover:-translate-y-1 hover:scale-110 border-2 border-grey-custom' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 items-center'>
                    <div className='flex gap-6'>
                        <a href="https://www.linkedin.com/in/cadencehiggins/" target="_blank"><Linkedin size={28} className='transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer' /></a>
                        <a href="https://github.com/Cadhig" target="_blank"><Github size={28} className='transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer' /></a>
                        <a href="https://x.com/Cosmiqzz" target="_blank"><Twitter size={28} className='transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer' /></a>
                        <a href="https://www.instagram.com/cosmiqz/" target="_blank"><Instagram size={28} className='transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer' /></a>
                    </div>
                    <div className='relative flex flex-col items-center gap-6 w-full md:w-1/2'>
                        <div className='relative flex flex-col w-full md:w-1/2'>
                            <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                            <a href={CadenceHigginsResume} download className='relative bg-green-custom text-grey-custom p-4 text-2xl flex items-center justify-center gap-2 rounded border-2 border-grey-custom transition duration-150 ease-in-out hover:-translate-y-1'>
                                <span className='relative'>Download Resume</span>
                                <FileDown className='relative' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}