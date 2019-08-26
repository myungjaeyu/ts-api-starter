import path from 'path'
import express from 'express'
import morgan from 'morgan'

const app: express.Application = express()

const env: string = process.env.NODE_ENV || 'development'

const pkg = require(path.resolve(__dirname, '../package.json'))

if (env === 'development') app.use(morgan('dev'))

app.use('/static', express.static(path.join(__dirname, pkg.assetPath)))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app