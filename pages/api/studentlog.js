// import { NextApiRequest,NextApiResponse } from "next";
// const db = require('../../config/db')
// const req = NextApiRequest
// const res = NextApiResponse
// const bcrypt = require('bcrypt')

// export default async function getStudentReg(req,res){
//     let {usernameRef,emailRef,PasswordRef} = req.body
    
//     console.log(hashpass)
//     if(req.method === 'POST'){
//         const student = await db.get(
//             `SELECT * FROM student_data WHERE student_email = ?`,[emailRef])
//     res.json(newStudent.rows[0])
//     bcrypt.compare(PasswordRef, student_email.passwordRef,10)
//             if(!err && result){
//                 res.json({message:"successs"})
//             }else{
//                 res.json({message:'Ups, something went wrong!'})
//             }
//     } else {
//         res.status(405).json({message:'Invalid Credential'})
//     }

// }