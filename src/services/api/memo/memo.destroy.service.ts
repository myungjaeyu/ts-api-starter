import { Memo } from '@models/Memo'

const destroy = async (id: number): Promise<void> => {

    await Memo.destroy({ where: { id }})

    return

}

export default destroy