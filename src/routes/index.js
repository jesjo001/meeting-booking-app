import express from 'express';
import UserRouter from './userRoute/index';
import AppointmentRouter from './appointments/index';
import DashboardRouter from './dashboard/index';

const Router = express.Router();

Router.use('/user', UserRouter);
Router.use('/bookings', AppointmentRouter);
Router.use('/dashboard', DashboardRouter);

export default Router;