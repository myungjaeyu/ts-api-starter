import { Router } from 'express'

import MemoQueryController from '@controllers/api/memo/memo.query.controller'
import MemoShowController from '@controllers/api/memo/memo.show.controller'
import MemoCreateController from '@controllers/api/memo/memo.create.controller'
import MemoUpdateController from '@controllers/api/memo/memo.update.controller'
import MemoDestroyController from '@controllers/api/memo/memo.destroy.controller'

import http from '../http'

import memoService from '@services/api/memo'

const memoRouter: Router = Router()

memoRouter.get('/', http(new MemoQueryController({ memoService })))
memoRouter.get('/:id', http(new MemoShowController({ memoService })))
memoRouter.post('/', http(new MemoCreateController({ memoService })))
memoRouter.put('/:id', http(new MemoUpdateController({ memoService })))
memoRouter.delete('/:id', http(new MemoDestroyController({ memoService })))

export default memoRouter