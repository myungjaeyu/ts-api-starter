import { Router } from 'express'

import { QueryCtrl, ShowCtrl, CreateCtrl, UpdateCtrl, DestroyCtrl } from './memo.controller'

import http from '../http'

import memoService from '../../../services/api/memo'

const memoRouter: Router = Router()

memoRouter.get('/', http(new QueryCtrl({ memoService })))
memoRouter.get('/:id', http(new ShowCtrl({ memoService })))
memoRouter.post('/', http(new CreateCtrl({ memoService })))
memoRouter.put('/:id', http(new UpdateCtrl({ memoService })))
memoRouter.delete('/:id', http(new DestroyCtrl({ memoService })))

export default memoRouter