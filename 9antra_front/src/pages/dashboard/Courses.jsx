import React, { useEffect, useState } from 'react'
import { deleteCourses, getCourses } from '../../services/CourseService'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function Courses() {
    const [courses, setCourses] = useState([])
    const [loading, setLoaading] = useState(true)

    const fetchCourses = async () => {
        setLoaading(true)
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

    const handleDelete = async (id) => {
        await deleteCourses(id)
            .then(response => {
                toast.success('Delete Successfully');
                fetchCourses();
            })
    }

    return (
        <table className='w-[90%] mt-24 mx-auto'>
            <thead className='bg-pink-600'>
                <tr className='text-white text-lg'>
                    <th className='text-left px-7 py-4 border-r rounded-tl-xl' width="40%">Course Name</th>
                    <th className='text-left px-7 border-r' width="40%">Price</th>
                    <th className='text-center rounded-tr-xl'>Action</th>
                </tr>
            </thead>
            <tbody>
                {loading ?
                    <tr>
                        <td colSpan="3" className='bg-pink-100'>
                            <div className='flex justify-center py-5'>
                                <Spinner size={10} />
                            </div></td>
                    </tr> :
                    courses.length ?
                        courses.map(course =>
                            <tr key={course._id} className='bg-pink-100 border-b border-white transition-transform transform hover:scale-105'>
                                <td scope="row" className='px-6 py-4 border-r border-white'>{course.title}</td>
                                <td className="px-6 py-4 border-r border-white">{course.price} DT/ Month</td>
                                <td className="px-6 py-4 flex justify-between">
                                    <Link to={course._id} className='text-pink-700 hover:text-pink-900 hover:underline hover:font-semibold'>Edit</Link>
                                    <button onClick={() => handleDelete(course._id)} className='text-pink-700 hover:text-pink-900 hover:underline hover:font-semibold'>Delete</button>
                                </td>
                            </tr>
                        ) :
                        <tr className='bg-pink-100'>
                            <td colSpan="3" className='text-center text-xl text-pink-700 py-3'>No Courses Available for Now</td>
                        </tr>
                }
            </tbody>
        </table>
    )
}

export default Courses