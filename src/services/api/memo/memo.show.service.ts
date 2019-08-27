import { Memo } from '@models/Memo'

const show = async (id: number): Promise<Memo | null> => {

    return await Memo.findOne({
        where: { id }
    })

}

export default show