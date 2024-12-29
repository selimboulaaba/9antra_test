var express = require('express');
var router = express.Router();
const courseController = require('../controllers/course.controller');
const upload = require('../middlewares/upload.middleware');

router.post('/', upload.single('image'), courseController.createCourse);
router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourse);
router.delete('/:id', courseController.deleteCourse)
router.put('/:id', upload.single('image'), courseController.updateCourse);


module.exports = router;
