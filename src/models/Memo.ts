import {Table, Model, Column, BelongsTo, ForeignKey, AllowNull, Default, DataType } from 'sequelize-typescript'

import { User } from './User'
  
@Table
export class Memo extends Model<Memo> {

    @AllowNull(false)
    @Column
    text: string;

    @AllowNull(false)
    @Default(DataType.NOW)
    @Column
    date: Date;

    @ForeignKey(()=> User)
    @Column
    userId: number;

    @BelongsTo(()=> User)
    user: User
}