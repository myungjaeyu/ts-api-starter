import { Request, Response } from 'express'

export const authSignOut = (req: Request, res: Response) => {

    req.logout()

    res.sendStatus(204)

}