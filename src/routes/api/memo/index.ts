import { Router } from 'express'

import { MemoQueryController, MemoShowController, MemoCreateController, MemoUpdateController, MemoDestroyController } from '@controllers/api/memo'

import http from '../http'

import memoService from '@services/api/memo'

const memoRouter: Router = Router()

memoRouter.get('/', http(new MemoQueryController({ memoService })))
memoRouter.get('/:id', http(new MemoShowController({ memoService })))
memoRouter.post('/', http(new MemoCreateController({ memoService })))
memoRouter.put('/:id', http(new MemoUpdateController({ memoService })))
memoRouter.delete('/:id', http(new MemoDestroyController({ memoService })))

export default memoRouter