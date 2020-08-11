import { Router } from 'express';
import BusinessController from '../controllers/business';

const router = Router();

router.route('/business').get(BusinessController.getBusiness);

export default router;