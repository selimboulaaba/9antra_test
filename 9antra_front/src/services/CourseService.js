import axios from "axios"

const url = "http://localhost:3000/courses"

export const getCourses = async () => {
    return await axios.get(url)
}

export const getCourse = async (id) => {
    return await axios.get(url + '/' + id)
}

export const createCourse = async (course) => {
    const formData = new FormData();
    formData.append('title', course.title);
    formData.append('price', course.price);
    formData.append('image', course.image);
    return await axios.post(url, course, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const deleteCourses = async (id) => {
    return await axios.delete(url + '/' + id)
}

export const updateCourse = async (course) => {
    const formData = new FormData();
    formData.append('title', course.title);
    formData.append('price', course.price);
    formData.append('image', course.image);
    return await axios.put(url + '/' + course._id, course, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}