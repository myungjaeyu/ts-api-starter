import { Memo } from '@models/Memo'

const update = async (id: number, text: string, date: number): Promise<any> => {

    const memo =  await Memo.update({
        text,
        date
    }, { where: { id } })

    return memo

}

export default update