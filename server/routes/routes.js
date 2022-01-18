import express from 'express';


// controller
import {userRegister} from '../controller/user-controller.js'


const router = express.Router();


router.post('/register',userRegister)

// router.get('/login',)


export default router;