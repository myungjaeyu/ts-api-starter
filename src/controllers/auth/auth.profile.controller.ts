import { Request, Response } from 'express'

const authGetProfile = (req: Request, res: Response) => {

    res.json({ user: req.user })

}

export default authGetProfile