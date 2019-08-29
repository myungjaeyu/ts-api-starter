import { Request, Response } from 'express'

export const authGetProfile = (req: Request, res: Response) => {

    res.json({ user: req.user })

}