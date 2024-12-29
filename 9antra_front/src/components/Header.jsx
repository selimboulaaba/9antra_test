import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="bg-white border-gray-200">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="src/assets/LogoBridge.png" className="h-10 md:h-16 lg:h-20" alt="9antra Logo" />
                </Link>
                <Link to='/admin' className='text-pink-700 hover:text-pink-800 hover:underline mr-3 font-medium rounded-full transition-colors duration-200 text-lg'>
                    Admin Dashboard
                </Link>
            </div>
        </nav>
    )
}

export default Header