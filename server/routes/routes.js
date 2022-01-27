import express from 'express';


// controller
import {userRegister,userLogin} from '../controller/user-controller.js'


const router = express.Router();


router.post('/register',userRegister)
router.post('/login', userLogin);

// router.get('/login',)


export default router;