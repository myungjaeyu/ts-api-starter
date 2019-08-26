import { Router } from 'express'
import * as authCtrl from './auth.ctrl'

import { isAuthenticated } from '../../config/passport'

const authRouter = Router()

authRouter.post('/signin', authCtrl.signin)

authRouter.post('/signout', isAuthenticated, authCtrl.signout)

authRouter.get('/profile', isAuthenticated, authCtrl.getProfile)

export default authRouter