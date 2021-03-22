import { Express } from 'express'
import { CodesController } from '../endpoints/index'

export function routes(app: Express) {

  app.get('/api/codeGroups', CodesController.CodesGet.list)

}
