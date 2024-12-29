import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import Header from '../components/header'
import Spinner from '../components/Spinner'
import { getCourses } from '../services/CourseService'

function Home() {
    const [courses, setCourses] = useState([])
    const [loading, setLoaading] = useState(true)

    const fetchCourses = async () => {
        await getCourses()
            .then(response => {
                setCourses(response.data)
                setLoaading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchCourses();
    }, [])

    return (
        <>
            <Header />

            <div className="relative h-[50vh] lg:h-screen w-full mt-2 md:mt-4">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('src/assets/home.jpg')`
                    }}
                />
                <div className="relative h-full flex items-center justify-center">
                    <div className="text-center w-[90%] md:w-[70%] lg:w-[50%] mx-auto py-16 bg-white/90">
                        <h1 className="text-md sm:text-2xl lg:text-4xl font-semibold text-gray-800 mb-8">
                            Improve your skills on your own
                            <br />
                            To prepare for a better future
                        </h1>
                        <button className="bg-pink-700 hover:bg-pink-800 text-white font-medium py-3 px-16 rounded-full transition-colors duration-200 text-lg">
                            REGISTER NOW
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-between py-8 lg:py-16 px-[40px] lg:px-[100px] xl:px-36'>
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-gray-800 mb-2 sm:mb-4 xl:mb-8">
                    Discover Our Courses
                </h1>
                <button className="bg-pink-700 hover:bg-pink-800 text-white font-medium py-1 sm:py-2 px-6 sm:px-10 rounded-full transition-colors duration-200 text-md sm:text-lg xl:text-2xl">
                    View More
                </button>
            </div>

            {loading ?
                <div className='flex justify-center'>
                    <Spinner size={20} />
                </div> :
                courses.length ?
                    <div className='grid grid-cols-12 px-20 gap-4'>
                        {courses.map(course =>
                            <div className='col-span-4 transition-transform transform hover:scale-105' key={course._id}>
                                <img src={'http://localhost:3000/' + course.image} alt={course.title} className='hover:cursor-pointer' />
                                <h1 className='font-bold text-center text-3xl mt-4'>{course.title}</h1>
                                <h3 className='font-bold text-pink-700 text-center text-xl mt-1'>{course.price} DT/ Month</h3>
                            </div>
                        )}
                    </div> :
                    <div className='text-center text-xl text-pink-700'>No Courses Available for Now</div>
            }

            <Contact />
        </>
    )
}

export default Home