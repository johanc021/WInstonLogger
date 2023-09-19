import { Router } from 'express'
import userController from '../../controllers/user.controller.js'
import { authenticate } from '../../config/middlewareAuth/authAuthenticate/authenticate.js';

class userRouter {
    constructor() {
        this.inicioUser = Router();
        this.inicioUser.get('/', authenticate, userController.getAllUsers)
        this.inicioUser.get('/byEmail/:email', userController.getUserByEmail)
        this.inicioUser.get('/:uid', userController.getUserById)
        this.inicioUser.post('/', userController.createUser)
        this.inicioUser.put('/:uid', userController.updateUser)
        this.inicioUser.delete('/:uid', userController.deleteUser)
        //this.getRouter = this.getRouter.bind(this)
    }

    getRouter() {
        return this.inicioUser
    }
}

export default userRouter

