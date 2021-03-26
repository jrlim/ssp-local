import { Express } from 'express'
import { TestLogController } from '../endpoints/index'

export function routes(app: Express) {
  app.get('/api/testLogs', TestLogController.TestLogGet.list)
  app.post('/api/createTestLog', TestLogController.TestLogGet.create)
}
