const pool = require('../../db')
const { getStudents, getStudentByIds, addStudents, checkEmail, removeStudents, updateStudents } = require('../Querires')

exports.getStudent = (req, res) => {
    pool.query(getStudents, (error, result) => {
        if(error) throw error;
        res.status(200).json(result.rows)
    })
}

exports.getStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(getStudentByIds, [id], (error, result) => {
    if(error) throw error;
    res.status(200).json(result.rows)
})
}

exports.addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    pool.query(checkEmail, [email], (error, result) =>{
        if(result.rows.length) {
            res.send("email exists")
        }

    pool.query(addStudents, [name, email, age, dob], (error, result) => {
        if(error) throw error;
        res.status(200).send("student sucess")
      })    
    });
}

exports.removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(removeStudents,[id], (error,result) => {
        const noStudentFound = !result.rows.length;
        if(noStudentFound){
            res.send("student deleted")
        }
    })
}

exports.updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

   

    pool.query(updateStudents,[name, id], (error, result) => {
        if(error) throw error;
        res.status(200).send('student updated')
    })
   
}