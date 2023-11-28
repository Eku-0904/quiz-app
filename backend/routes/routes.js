const { Router } = require('express');
const router = Router()
const getQuiz = require('../controller/quizControlller');
const { createUser, loginUser } = require('../controller/userController');
const UserModel = require('../database/schema/userSchema')

const validateEmailAddress = async (req, res, next) => {
    const body = req.body;
    const user = await UserModel.findOne({ email: req.body.email })
    if (user) {
        res.status(404).send("Email is already used")
    } else {
        next();
    }
}

// router.get('/quiz', getQuiz)
router.post('/signup', validateEmailAddress, createUser)
// router.post('/login', loginUser)

module.exports = router         