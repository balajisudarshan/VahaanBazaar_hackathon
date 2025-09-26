const router = require("express").Router();
const User = require("../models/User.model");
const {register,verifyOtp,login} = require('../controller/userAuth')
router.post('/register',register)
router.post('/verifyOtp',verifyOtp)
router.post('/login',login)

module.exports = router