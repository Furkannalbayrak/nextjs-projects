import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

function Headers() {
    return (
        <div>
            <div className='bg-blue-400 dark:bg-gray-700'>
                <div className='container mx-auto flex items-center justify-between px-4 py-3'>
                    <Link className='text-xl font-poppins text-white' href={'/'}>NextMovies 🎬</Link>
                    <nav className='flex sm:gap-10 gap-4 items-center'>
                        <Link className='text-white font-bold' href={'https://github.com/Furkannalbayrak'}>GitHub</Link>
                        <Link className='text-white font-bold' href={'https://www.linkedin.com/in/furkanalbayrakdev/'}>LinkedIn</Link>
                        <ModeToggle/>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Headers