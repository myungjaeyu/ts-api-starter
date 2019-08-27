import { Memo } from '../../../models/Memo'

const create = async (text: string, date: number, userId: number): Promise<Memo | undefined> => {

    const memo: Memo = new Memo({
        text,
        date,
        userId
    })

    await memo.save()

    return memo

}

export default create