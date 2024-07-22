import HandWave from '../assets/HandWave.png'

export default function Header() {

    return (
        <div className='flex items-center justify-between m-4 font-bold hover:underline text-lg lg:justify-around'>
            <img src={HandWave} alt="waving hand emoji" className='size-9 object-contain' />
            <p>About Me</p>
            <p>Contact</p>
            <p>Projects</p>
        </div>
    )
}