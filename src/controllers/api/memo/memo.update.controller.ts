import { Controller } from '../http'

import { MemoUpdateControllerProps } from '../../../interfaces/memo.interface'

export default class MemoUpdateController extends Controller<MemoUpdateControllerProps> {

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