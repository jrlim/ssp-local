import * as uuid from 'uuid'
import { CodeDetailModel } from './types/CodeDetailModel'
import { CodeGroup } from '../sqlz/models/codeGroup'

export function findAll(): Promise<any> {
  return CodeGroup
    .findAll({ include: [{ all: true }] })
}
