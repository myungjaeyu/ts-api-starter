import express from 'express'
import morgan from 'morgan'

const app: express.Application = express()

const env: string = process.env.NODE_ENV || 'development'

if (env === 'development') app.use(morgan('dev'))

export default app