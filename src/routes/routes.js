import {Router} from "express";
import UserController from "../controllers/user-controller.js";
import DialogController from "../controllers/dialog-controller.js";
import {checkAuth} from "../utils/checkAuth.js";
import MessageController from "../controllers/message-controller.js";


//  /auth/:route
export const routerAuth = new Router()

routerAuth.post('/register',UserController.register)
routerAuth.post('/login',UserController.login)
routerAuth.get('/users',UserController.getUsers)
routerAuth.get('/me',checkAuth,UserController.getMe)
routerAuth.get('/:id',checkAuth,UserController.getUserById)



export const routerDialog = new Router()

//  /dialog/:route
routerDialog.post('/createDialog',checkAuth,DialogController.create)
routerDialog.post('/createMessage',checkAuth,MessageController.create)
routerDialog.get('/getDialogsUser',checkAuth,DialogController.getDialogsByUser)