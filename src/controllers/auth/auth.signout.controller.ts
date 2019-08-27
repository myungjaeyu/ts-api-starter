import { Request, Response } from 'express'

const authSignOut = (req: Request, res: Response) => {

    req.logout()

    res.sendStatus(204)

}

export default authSignOut