import express from 'express';
const router = express.Router();
import { aboutpage, homepage } from '../Controllers/user.controller.js';


router.get('/', homepage);
router.get('/about', aboutpage);

export default router;