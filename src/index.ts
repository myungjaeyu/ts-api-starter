import path from 'path'
import express from 'express'
import morgan from 'morgan'
import session from 'express-session'

import * as passport from './config/passport'

import authRouter from './controllers/auth'

const app: express.Application = express()

const env: string = process.env.NODE_ENV || 'development'

const pkg = require(path.resolve(__dirname, '../package.json'))

if (env === 'development') app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({ 
    secret: 'myungjaeyu123@!',
    resave: true,
    saveUninitialized: true
}))

passport.init(app)

app.use('/auth', authRouter)

export default app