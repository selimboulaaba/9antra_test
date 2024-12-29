const path = require("path")
const coursesModel = require("../models/course.model")
const fs = require('fs');

exports.createCourse = async (newCourse) => {
    const course = await coursesModel.create(newCourse)
    return course
}

exports.getCourses = async () => {
    const courses = await coursesModel.find()
    return courses
}

exports.getCourse = async (id) => {
    const course = await coursesModel.findById(id)
    return course
}

exports.deleteCourse = async (id) => {
    await this.deleteImageById(id)
    const course = await coursesModel.deleteOne({ _id: id })
    return course
}

exports.updateCourse = async (id, course) => {
    const updatedCourse = await coursesModel.findOneAndUpdate(
        { _id: id },
        { $set: course },
        { new: true }
    );
    return updatedCourse
}

exports.deleteImageById = async (id) => {
    const course = await this.getCourse(id)
    console.log(course.image)
    const oldImagePath = path.join(__dirname, '..', 'public', course.image);
    if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
    }
}
