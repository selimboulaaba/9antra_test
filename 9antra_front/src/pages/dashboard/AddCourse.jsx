import React, { useState } from 'react'
import { createCourse } from '../../services/CourseService';
import Header from '../../components/header';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddCourse() {
    const [course, setCourse] = useState({
        title: '',
        price: 0,
        image: null,
        imagePreview: null
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({
            ...course,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setCourse({
            ...course,
            image: file,
            imagePreview: URL.createObjectURL(file)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!course.title || !course.price || !course.image) {
            toast.warning('Invalid Input!');
            return;
        }

        await createCourse(course)
            .then(response => {
                toast.success('Course Created!');
                navigate('/admin')
            })
    };

    return (
        <div className="w-[70%] mt-24 mx-auto p-6 bg-orange-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-700">Add New Course</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input type="text" id="title" name="title" placeholder="Enter course title"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input type="number" id="price" name="price" placeholder="Enter course price" min={0}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image
                    </label>
                    <input type="file" id="image" name="image" accept="image/*"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm"
                        onChange={handleImageChange}
                    />
                </div>
                {course.imagePreview && (
                    <div className="mb-4">
                        <img src={course.imagePreview} alt="Preview" className="w-full h-64 object-cover rounded-md" />
                    </div>
                )}
                <button type="submit" className="bg-orange-400 text-white font-bold py-2 px-4 rounded hover:bg-orange-500 focus:outline-none">
                    Add Course
                </button>
            </form>
        </div>
    )
}

export default AddCourse