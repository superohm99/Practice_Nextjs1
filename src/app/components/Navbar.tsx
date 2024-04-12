import React from 'react'
import Link from 'next/link'
import '../styles/navbar.css'

function Navbar() {
return (
    <nav className='navbar'>
        <div className='container'>
            <div className="nav-con">
                <div>
                    <Link href="/">Blog Story</Link>
                </div>
            <ul className='navbar-ul'>
                <li><Link href="/login">Sign In</Link></li>
                <li><Link href="/register">Sign Up</Link></li>
            </ul>
            </div>
        </div>
    </nav>
)
}

export default Navbar
 