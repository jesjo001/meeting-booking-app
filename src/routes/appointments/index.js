import express from 'express';

import { protect } from "../../middlewares/authentication/auth";
import { createAppointment } from "../../controllers/bookings/create";
import { deleteAppointment } from "../../controllers/bookings/delete";
import { getAll } from "../../controllers/bookings/getAll";
import { getUsersAppointments } from "../../controllers/bookings/getUserAppointments";
import { updateAppointment } from "../../controllers/bookings/updateBookigs";
import { rateLimiterMiddleware, rateLimiter } from '../../middlewares/requestLimit'
import { reqLimiter } from "../../middlewares/liniter"

const AppointmentRouter = express.Router();

AppointmentRouter.use(protect)
AppointmentRouter.post('/create', reqLimiter, createAppointment)
AppointmentRouter.delete('/delete/:id', reqLimiter, deleteAppointment)
AppointmentRouter.get('/all', getAll)
AppointmentRouter.get('/user', reqLimiter, getUsersAppointments)
AppointmentRouter.post('/update', reqLimiter, updateAppointment)

export default AppointmentRouter;