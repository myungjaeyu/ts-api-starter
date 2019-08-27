import { Router } from 'express'

import authSignIn from '@controllers/auth/auth.signin.controller'
import authSignOut from '@controllers/auth/auth.signout.controller'
import authGetProfile from '@controllers/auth/auth.profile.controller'

import { isAuthenticated } from '@config/passport'

const authRouter = Router()

authRouter.post('/signin', authSignIn)

authRouter.post('/signout', isAuthenticated, authSignOut)

authRouter.get('/profile', isAuthenticated, authGetProfile)

export default authRouter