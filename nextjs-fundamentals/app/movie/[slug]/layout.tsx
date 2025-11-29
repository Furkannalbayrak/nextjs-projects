import Footer from '@/components/Footer';
import React from 'react'

interface MovieLayoutProps {
    children: React.ReactNode;
}

function MovieLayout({ children }: MovieLayoutProps) {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    )
}

export default MovieLayout