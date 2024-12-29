const { deleteImage } = require("../services/course.service");
const courseService = require("../services/course.service");

async function createCourse(req, res, next) {
    try {
        const newCourse = {
            ...req.body,
            image: req.file.path.replace("public\\", "")
        };
        const course = await courseService.createCourse(newCourse);
        res.json(course)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

async function getCourses(req, res, next) {
    try {
        const courses = await courseService.getCourses();
        res.json(courses);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

async function getCourse(req, res, next) {
    try {
        const { id } = req.params;
        const courses = await courseService.getCourse(id);
        res.json(courses);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

async function deleteCourse(req, res, next) {
    try {
        const { id } = req.params
        const course = await courseService.deleteCourse(id);
        res.json(course);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

async function updateCourse(req, res, next) {
    try {
        const { id } = req.params;
        const updatedCourse = {
            ...req.body,
            image: req.file 
                ? req.file.path.replace("public\\", "")
                : req.body.image
        };
        if(req.file) {
            deleteImage(req.body.image)
        }
        const course = await courseService.updateCourse(id, updatedCourse);
        res.json(course)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse,
}; 