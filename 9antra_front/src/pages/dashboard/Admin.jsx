import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Admin() {
    return (
        <div className='flex'>
            <div className="w-[500px]">
                <div className='h-screen bg-gray-100 flex flex-col text-center text-xl'>
                    <Link to="/" className="mx-auto mt-6 flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/src/assets/LogoBridge.png" className="h-10 md:h-16 lg:h-20" alt="9antra Logo" />
                    </Link>
                    <Link to="/home" className='mt-24 border-b py-4 hover:bg-gray-200'>Home</Link>
                    <Link to="/admin" className='border-b py-4 hover:bg-pink-200'>Courses</Link>
                    <Link to="addCourse" className='py-4 hover:bg-orange-200'>Add Course</Link>
                </div>
            </div>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin