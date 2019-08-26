import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import { Request, Response, NextFunction, Application } from 'express'

import { User } from '../models/User'

import Debug from 'debug'

const debug = Debug('ts-api-starter:passport')

export const init = (app: Application) => {

    debug('init')

    /* https://github.com/jaredhanson/passport#sessions
        - serializeUser
        - deserializeUser
    */
    passport.serializeUser<any, any>((user, done) => {

        debug('serializeUser', user)

        done(null, user.id)

    })

    passport.deserializeUser((id: number, done) => {

        debug('deserializeUser', id)

        User.findByPk(id).then((user: User | null) => {

            done(null, user)

        }).catch((err: any) => {

            done(err)

        })

    })

    /* https://github.com/jaredhanson/passport#strategies
        - LocalStrategy
    */
    passport.use(new LocalStrategy((username: string, password: string, done: Function) => {

        debug('LocalStrategy', username, password)

        User.findOne({ where: { name: username }})
            .then((user: User | null) => {

                if (!user)
                    return done(undefined, false, { message: `Username ${ username } not found.` })

                if (user.name === username)
                    return done(null, user)

                done(null, false)

            })
            .catch((err: any) => {

                done(err)

            })

    }))


    app.use(passport.initialize())
    app.use(passport.session())

}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    debug('isAuthenticated', req.isAuthenticated())

    if (req.isAuthenticated())
        return next()

    res.sendStatus(401)

}
