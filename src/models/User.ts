import {Table, Model, PrimaryKey, AutoIncrement, Column} from 'sequelize-typescript'

@Table
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    name: string
}