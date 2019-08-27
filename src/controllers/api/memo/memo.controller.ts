import { Memo } from '../../../models/memo'
import memoService from '../../../services/memo.service'
import { Controller } from '../http'

interface QueryCtrlProps {
    memoService: typeof memoService
}

export class QueryCtrl extends Controller<QueryCtrlProps> {

    constructor(services: QueryCtrlProps) {

        super(services)

    }

    async run(options: any) {

        const limit = parseInt(options.limit || '20', 10)
        const offset = parseInt(options.offset || '0', 10)

        const { memoService } = this.services

        return await memoService.query(limit, offset)

    }

}

interface ShowCtrlProps {
    memoService: typeof memoService
}

export class ShowCtrl extends Controller<ShowCtrlProps> {

    constructor(props: ShowCtrlProps) {

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

interface CreateCtrlProps {
    memoService: typeof memoService
}

export class CreateCtrl extends Controller<CreateCtrlProps> {

    constructor(props: CreateCtrlProps) {
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

interface UpdateCtrlProps {
    memoService: typeof memoService
}

export class UpdateCtrl extends Controller<UpdateCtrlProps> {

    constructor(props: UpdateCtrlProps) {
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

interface DestroyCtrlProps {
    memoService: typeof memoService
}

export class DestroyCtrl extends Controller<DestroyCtrlProps> {

    constructor(props: DestroyCtrlProps) {
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
