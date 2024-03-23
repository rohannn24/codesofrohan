import express from 'express';
import { addtodos, deleteTodos, getSingleData, getdata, update } from '../controller/todos.controller.js';
import { verifyToken } from '../verifyToken.js';
const router = express.Router();
 
router.post('/update',verifyToken, update); 
router.delete('/deleteTodos/:id',verifyToken, deleteTodos);
router.post('/addtodos',verifyToken, addtodos);  
router.get('/getdata',verifyToken, getdata);
router.get('/singletodo',verifyToken, getSingleData); 
 
export default router;   