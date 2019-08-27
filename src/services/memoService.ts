import { Memo } from '../models/Memo'
import { Order } from 'sequelize/types'

const memoService = {

    async query (limit: number, offset: number, order: Order = [['date', 'DESC']]): Promise<Memo[] | undefined> {
        return await Memo.findAll({
            limit,
            offset,
            order,
        })
    },


    async show (id: number): Promise<Memo | null> {
        return await Memo.findOne({
            where: { id }
        })
    },


    async create (text: string, date: number, userId: number): Promise<Memo | undefined> {

        const memo: Memo = new Memo({
            text,
            date,
            userId
        })

        await memo.save()

        return memo

    },


    async update(id: number, text: string, date: number): Promise<any> {

        const memo =  await Memo.update({
            text,
            date
        }, { where: { id } })

        return memo

    },


    async destroy(id: number): Promise<void> {

        await Memo.destroy({ where: { id }})

        return

    }
}

export default memoService
