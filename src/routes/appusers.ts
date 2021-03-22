import { Express } from 'express'
import { AppUserController } from '../endpoints/index'

export function routes(app: Express) {

  app.get('/api/codeDetails', AppUserController.AppUserGet.list)
  app.get('/api/appUsers', AppUserController.AppUserGet.list)
  // app.post('/api/appUsers', AppUserController.AppUserPost.create)
  // app.post('/api/appUsers/login', AppUserController.AppUserPost.login)

}
