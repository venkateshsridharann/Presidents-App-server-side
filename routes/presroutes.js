import express from 'express';
import db from '../db/db';
import PresController from '../PresControllers/controller';

const router = express.Router();

router.get('/api/home', PresController.getAllPresidents);
router.get('/api/asc', PresController.getAllPresidentsAsc);
router.get('/api/desc', PresController.getAllPresidentsDesc);

export default router;