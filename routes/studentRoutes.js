const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/studentController');

// GET all students
router.get('/', ctrl.getStudents);

// GET a student by ID
router.get('/:id', ctrl.getStudentById);

// CREATE a new student
router.post('/', ctrl.createStudent);

// UPDATE a student by ID
router.put('/:id', ctrl.updateStudent);

// DELETE a student by ID
router.delete('/:id', ctrl.deleteStudent);

module.exports = router;
