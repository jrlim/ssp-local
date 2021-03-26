import { Request, Response } from 'express'
import { CodesDAO } from '../../dao/index'

export function list(req: Request, res: Response) {
  return CodesDAO
    .findAll()
    .then(codeGroups => res.status(200).send(codeGroups))
    .catch(error => res.boom.badRequest(error))
}