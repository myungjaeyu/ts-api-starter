import { Memo } from '@models/Memo'
import { Order } from 'sequelize/types'

const query = async (limit: number, offset: number, order: Order = [['date', 'DESC']]): Promise<Memo[] | undefined>  => {

    return await Memo.findAll({
        limit,
        offset,
        order,
    })

}

export default query