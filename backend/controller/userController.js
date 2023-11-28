// const fs = require('fs');

// const createUser = (req, res) => {
//     fs.readFile('users.json', 'utf-8', (err, jsonData) => {
//         if (err)
//             console.log(err)
//         const data = JSON.parse(jsonData)
//         data.users.push(req.body)
//         fs.writeFile('users.json', JSON.stringify(data), (err, data) => {
//             if (err) console.log(err)
//             res.status(201).json({ message: 'user created' })
//         })
//     })
// }

// const loginUser = (req, res) => {
//     fs.readFile('users.json', 'utf-8', (err, jsonData) => {
//         if (err) console.log(err)
//         const data = JSON.parse(jsonData)
//         const users = data.users
//         let userFound = false
//         for (const user of users) {
//             if (req.body.username === user.username && req.body.password === user.password) {
//                 userFound = true
//                 break
//             }
//         }
//         if (userFound) {
//             res.status(201).json({ message: 'Login amjilttai!' })
//         } else {
//             res.status(404).json({ message: "user not found" })
//         }
//     })
// }

// module.exports = { createUser, loginUser }






const express = require("express")

const router = express.Router()

const UserModel = require('../database/schema/userSchema')
const fs = require('fs');


const createUser = async (req, res) => {
    const body = req.body;


    try {
        await UserModel.create(body)
        res.status(200).send("user")
    } catch (err) {
        console.log(err)
    }

}

module.exports = { createUser }















// const createUser = (req, res) => {
//     fs.readFile('users.json', 'utf-8', (err, jsonData) => {
//         if (err)
//             console.log(err)
//         const data = JSON.parse(jsonData)
//         data.users.push(req.body)
//         fs.writeFile('users.json', JSON.stringify(data), (err, data) => {
//             if (err) console.log(err)
//             res.status(201).json({ message: 'user created' })
//         })
//     })
// }