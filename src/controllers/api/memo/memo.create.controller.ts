import { Controller } from '../http'

import { MemoCreateControllerProps } from '../../../interfaces/memo.interface'

export default class MemoCreateController extends Controller<MemoCreateControllerProps> {

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