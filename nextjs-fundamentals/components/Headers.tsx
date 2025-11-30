import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { SheetDemo } from './SheetDemo'

function Headers() {
    return (
        <div>
            <div className='bg-blue-400 dark:bg-gray-700'>
                <div className='max-w-6xl mx-auto flex items-center justify-between md:px-10 px-5 md:py-3 py-4'>
                    <Link className='text-xl font-poppins text-white' href={'/'}>NextMovies 🎬</Link>
                    <nav className='hidden md:flex sm:gap-8 gap-4 items-center'>
                        <Link className='text-white font-bold' href={'https://github.com/Furkannalbayrak'}>GitHub</Link>
                        <Link className='text-white font-bold' href={'https://www.linkedin.com/in/furkanalbayrakdev/'}>LinkedIn</Link>
                        <ModeToggle />
                    </nav>
                    <div className='flex md:hidden'>
                        <SheetDemo/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers