import { Controller } from '../http'

import { MemoDestroyControllerProps } from '../../../interfaces/memo.interface'

export default class MemoDestroyController extends Controller<MemoDestroyControllerProps> {

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
