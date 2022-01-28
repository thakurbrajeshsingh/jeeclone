import express from 'express';


// controller
import {userRegister} from '../controller/user-controller.js'
import {userEducation} from '../controller/userEdu-controller.js'


const router = express.Router();


router.post('/register',userRegister)
router.post('/education', userEducation);




export default router;