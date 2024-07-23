
export default function Footer() {

    return (
        <div className="flex items-center justify-center defaultFont">
            <div className='relative flex flex-col'>
                <div className="absolute inset-0 bg-grey-custom z-0 rounded" style={{ transform: 'translate(5px, 5px)' }}></div>
                <a href="#top" className='relative bg-green-custom text-grey-custom p-2 flex items-center justify-center gap-2 rounded border-2 border-grey-custom transition duration-150 ease-in-out hover:-translate-y-1'>back to top</a>
            </div>
        </div>
    )
}