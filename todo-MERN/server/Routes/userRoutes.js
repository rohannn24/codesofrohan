import express from 'express';
import { deleteUser, getUserData, login, register, updateUser } from '../controller/user.controller.js';
import { verifyToken } from '../verifyToken.js';
const router = express.Router();

router.post('/register', register); 
router.post('/login', login);
router.post('/deleteUser/:id',verifyToken, deleteUser);
router.post('/updateuser/:username',verifyToken,updateUser);
router.get('/userData',verifyToken, getUserData);

export default router; 