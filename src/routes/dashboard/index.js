import express from 'express';

import { protect } from "../../middlewares/authentication/auth";
import { statistics } from "../../controllers/dashboard/statistics";
import { rateLimiterMiddleware, rateLimiter } from '../../middlewares/requestLimit'

const DashboardRouter = express.Router();

DashboardRouter.use(protect)
DashboardRouter.get('/get', statistics)


export default DashboardRouter;