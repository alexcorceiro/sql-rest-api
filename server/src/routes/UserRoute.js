const express = require('express');
const { getStudent, getStudentById, addStudent, removeStudent, updateStudent } = require('../controllers/UserController');
const router = express.Router()




router.get("/", getStudent);
router.post("/", addStudent)
router.get("/:id", getStudentById);
router.put("/:id", updateStudent)
router.delete("/:id", removeStudent)









module.exports = router; 