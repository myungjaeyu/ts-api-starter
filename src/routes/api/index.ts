import { Router } from 'express'
import memoRouter from './memo'

const apiRouter = Router()

apiRouter.use('/memos', memoRouter)

export default apiRouter