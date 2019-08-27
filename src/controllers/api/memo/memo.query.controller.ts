import { Controller } from '@routes/api/http'

import { MemoQueryControllerProps } from '@interfaces/memo.interface'

export default class MemoQueryController extends Controller<MemoQueryControllerProps> {

    constructor(props: MemoQueryControllerProps) {

        super(props)

    }

    async run(options: any) {

        const limit = parseInt(options.limit || '20', 10)
        const offset = parseInt(options.offset || '0', 10)

        const { memoService } = this.services

        return await memoService.query(limit, offset)

    }

}