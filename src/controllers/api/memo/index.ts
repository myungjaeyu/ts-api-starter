import { Router } from 'express'

import MemoQueryController from './memo.query.controller'
import MemoShowController from './memo.show.controller'
import MemoCreateController from './memo.create.controller'
import MemoUpdateController from './memo.update.controller'
import MemoDestroyController from './memo.destroy.controller'

import http from '../http'

import memoService from '../../../services/api/memo'

const memoRouter: Router = Router()

memoRouter.get('/', http(new MemoQueryController({ memoService })))
memoRouter.get('/:id', http(new MemoShowController({ memoService })))
memoRouter.post('/', http(new MemoCreateController({ memoService })))
memoRouter.put('/:id', http(new MemoUpdateController({ memoService })))
memoRouter.delete('/:id', http(new MemoDestroyController({ memoService })))

export default memoRouter