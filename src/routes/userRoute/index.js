import express from 'express';
import { userValidationRules, validate } from '../../middlewares/validation/validator'

import { userLogin } from "../../controllers/user/userLogin"
import { registerUser } from "../../controllers/user/useRegister"
import { registerAdmin } from "../../controllers/user/adminRegister"
import { approveRequest } from "../../controllers/user/approveReuest"
import { rejectRequest } from "../../controllers/user/rejectRequest"
import { sendRequest } from "../../controllers/user/sendFriendReq"
import { getRequests } from "../../controllers/user/getUserRequests"
import { protect } from "../../middlewares/authentication/auth"
import { reqLimiter } from "../../middlewares/liniter"

const UserRouter = express.Router();

UserRouter.post('/login', userLogin)
UserRouter.post('/register', userValidationRules(), validate, reqLimiter, registerUser)
UserRouter.post('/admin/register', userValidationRules(), validate, reqLimiter, registerAdmin)

UserRouter.use(protect)
UserRouter.post('/approve/:id', approveRequest)
UserRouter.post('/request/:id', sendRequest);
UserRouter.post('/reject/:id', rejectRequest);
UserRouter.get('/getrequests/', getRequests)

export default UserRouter;