import { Memo } from '@models/Memo'
import { Controller } from '@routes/api/http'

import { MemoShowControllerProps } from '@interfaces/memo.interface'

export default class MemoShowController extends Controller<MemoShowControllerProps> {

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