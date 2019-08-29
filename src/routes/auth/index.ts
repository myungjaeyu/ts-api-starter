import { Router } from 'express'

import { authSignIn, authSignOut, authGetProfile } from '@controllers/auth'

import { isAuthenticated } from '@config/passport'

const authRouter = Router()

authRouter.post('/signin', authSignIn)

authRouter.post('/signout', isAuthenticated, authSignOut)

authRouter.get('/profile', isAuthenticated, authGetProfile)

export default authRouter