import {Table, Model, PrimaryKey, AutoIncrement, Column, HasMany} from 'sequelize-typescript'

import { Memo } from './Memo'

@Table
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    name: string

    @HasMany(() => Memo)
    memos: Memo[]
}