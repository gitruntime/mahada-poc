import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, title = '' }) {
    return (
        <>
            <header>
                <title>{title}</title>
                <Navbar />
            </header>
            <main className='min-h-screen'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
