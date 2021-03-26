import { Request, Response } from 'express'
import winston from 'winston'
import moment from 'moment'
import { TestLogDAO } from '../../dao/index'

export function list(req: Request, res: Response) {
  return TestLogDAO
    .findAll()
    .then(testLogs => res.status(200).send(testLogs))
    .catch(error => res.boom.badRequest(error))
}

export function create(req: Request, res: Response) {
  return TestLogDAO
    .createTestLog(req)
    .then(result => {
      winston.log('2) log insert 100000 done ', moment().format('YYYYMMDD HH:mm:ss'));
      res.status(200).send(result)
    })
    .catch(error => res.boom.badRequest(error))
}