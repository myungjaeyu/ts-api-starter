import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import { Application } from 'express'

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

        const user: Object = {
            id,
            username: 'u4bi'
        }

        done(null, user)

    })

    /* https://github.com/jaredhanson/passport#strategies
        - LocalStrategy
    */
    passport.use(new LocalStrategy((username: string, password: string, done: Function) => {

        debug('LocalStrategy', username, password)

        if (username !== 'u4bi')
            return done(undefined, false, { message: `Username ${username} not found.` })
        else {

            const user: Object = {
                id: 1,
                username: 'u4bi'
            }

            return done(null, user)

        }

    }))


    app.use(passport.initialize())
    app.use(passport.session())

}