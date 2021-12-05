// import { NextApiRequest,NextApiResponse } from "next";
// const pool = require('../../config/db')

// const bcrypt = require('bcrypt')

// export default async function getStudentReg(req,res){
//     // let {username,email,passowrd} = req.body
    
//     // if(req.method === 'POST'){
//     //     let hashpass = await hash(passowrd,10)
//     //        console.log(hashpass)
//     //     const newStudent = await db.query(
//     //         `INSER INTO student_data(student_name,student_email,student_password) 
//     // VALUES ($1,$2,$3)`,[username,email,hashpass])
//     // res.json(newStudent.rows[0])
//     // } else {
//     //     res.status(405).json({message:'Invalid Credential'})
//     // }
//     let errors=[]
//    try{
//     const {username,email,password} = req.body
//     if (password == null){
//         errors.push({message:"fill the password field"})
//     } else {
//         let hassPassword = await bcrypt.hash(password,10)
//         console.log(hassPassword)
//         pool.query(`SELECT * FROM student_data (student_password) = $1`)
//     const newStudent = await pool.query(
//         `INSERT INTO student_data (student_name,student_email,student_password) 
//         VALUES ($1,$2,$3)`,
//         [username,email,hassPassword])
//         res.json(newStudent.rows[0])
       
//     }
    
        
//    }catch(err){
//     console.error(err.message)
//    }

// }