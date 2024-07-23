import HandWave from '../assets/HandWave.png'

export default function Header() {

    return (
        <div className='flex items-center justify-between m-4 font-bold text-lg lg:justify-around' id='top'>
            <img src={HandWave} alt="waving hand emoji" className='size-9 object-contain' />
            <div className='flex items-center gap-4 md:text-xl'>
                <a href='#about' className='hover:underline cursor-pointer flex-shrink-0'>About Me</a>
                <p className='hover:underline cursor-pointer'>Contact</p>
                <div className='relative flex flex-col w-full md:w-32'>
                    <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                    <a href="#projects" className='cursor-pointer relative bg-green-custom text-grey-custom p-1 flex items-center justify-center gap-2 rounded border-2 border-grey-custom transition duration-150 ease-in-out hover:-translate-y-1'>Projects</a>
                </div>
            </div>
        </div>
    )
}