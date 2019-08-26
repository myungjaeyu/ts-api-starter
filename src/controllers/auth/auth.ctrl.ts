import passport from 'passport'
import { IVerifyOptions } from 'passport-local'

import { Request, Response, NextFunction } from 'express'

import Debug from 'debug'

const debug = Debug('ts-api-starter:controllers:user')

export const signin = (req: Request, res: Response, next: NextFunction) => {

    debug('postLogin', req.body)

    passport.authenticate('local', (err: Error, user: any, info: IVerifyOptions) => {

        if (err)
            return next(err)

        if (!user)
            return res.status(401).json(info)

        req.logIn(user, (err) => {

            if (err)
                return next(err)

            res.json({ user })

        })

    })(req, res, next)

}

export const signout = (req: Request, res: Response) => {

    req.logout()

    res.sendStatus(204)

}

export const getProfile = (req: Request, res: Response) => {

    res.json({ user: req.user })

}