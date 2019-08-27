import path from 'path'
import express from 'express'
import morgan from 'morgan'
import session from 'express-session'

import * as passport from './config/passport'
import * as sequelize from './config/sequelize'

import authRouter from './controllers/auth'
import apiRouter from './controllers/api'

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
sequelize.run(sequelize.init(), { force: false })

app.use('/auth', authRouter)
app.use('/api', passport.isAuthenticated, apiRouter)

export default app