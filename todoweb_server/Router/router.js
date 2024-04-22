const userController=require('../Controller/userController.js')
const projectController=require('../Controller/projectController.js')
const express=require('express')
const jwtMiddleware = require('../Middlewares/jwtMiddleware.js')

const router=new express.Router()

// Register
router.post('/register',userController.register)

// login
router.post('/login',userController.login)

// add-project
router.post('/add-project',jwtMiddleware,projectController.addProject)

// export router
module.exports=router 