import { Model, STRING, UUID } from 'sequelize'
import sequelize from './index'
import { AppUser } from './appuser'

export class Language extends Model {
}

export class LanguageModel {
  id: string
  label: string
  name: string
  createdAt: Date
  updatedAt: Date
}

Language.init(
  {
    label: STRING(255),
    name: STRING(50)
  },
  { sequelize, modelName: 'Language' }
)


