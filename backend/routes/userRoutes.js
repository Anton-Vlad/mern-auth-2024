import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js'; //dont forget the file extension

router.post('/auth', authUser)

export default router;