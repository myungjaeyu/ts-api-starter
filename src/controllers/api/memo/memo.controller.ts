import { Memo } from '../../../models/memo'
import { Controller } from '../http'

import { MemoQueryControllerProps, MemoShowControllerProps, MemoCreateControllerProps, MemoUpdateControllerProps, MemoDestroyControllerProps } from '../../../interfaces/memo.interface'

export class QueryCtrl extends Controller<MemoQueryControllerProps> {

    constructor(services: MemoQueryControllerProps) {

        super(services)

    }

    async run(options: any) {

        const limit = parseInt(options.limit || '20', 10)
        const offset = parseInt(options.offset || '0', 10)

        const { memoService } = this.services

        return await memoService.query(limit, offset)

    }

}

export class ShowCtrl extends Controller<MemoShowControllerProps> {

    constructor(props: MemoShowControllerProps) {

        super(props)

    }

    async run(options: any) {

        const { memoService } = this.services

        const id = parseInt(options.id || '0', 10)

        if (!id || isNaN(id)) 
            throw {status: 400}

        const memo: Memo | null = await memoService.show(id)

        if (!memo) 
            throw { status: 404 }

        return memo

    }

}

export class CreateCtrl extends Controller<MemoCreateControllerProps> {

    constructor(props: MemoCreateControllerProps) {
        super(props)
    }

    async run(options: any) {

        const { text } = options

        if (!text)
            throw {status: 400}

        const { memoService } = this.services

        const memo = await memoService.create(text, Date.now(), 1)

        return memo

    }

}

export class UpdateCtrl extends Controller<MemoUpdateControllerProps> {

    constructor(props: MemoUpdateControllerProps) {
        super(props)
    }

    async run(options: any) {

        const { id } = options

        if(!id) 
            throw {status: 404}

        const { text, date } = options

        const {memoService} = this.services

        const memo = await memoService.update(id, text, date)

        return memo
    }

}

export class DestroyCtrl extends Controller<MemoDestroyControllerProps> {

    constructor(props: MemoDestroyControllerProps) {
        super(props)
    }

    async run(options: any) {

        const { id } = options

        if(!id) 
            throw {status: 404}

        const {memoService} = this.services

        await memoService.destroy(id)

        return { status: 204 }
    }

}
