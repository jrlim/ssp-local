'use strict';
import { Model, ModelAttributes, ModelOptions, STRING, DATE, JSON, INTEGER } from 'sequelize';
import { GDModel, GDModelContainer } from '@gdf_core/interface';
import sequelize from './index'

export class TestLog extends Model {
}

TestLog.init({
  // Model attributes are defined here
  seq: { type: INTEGER, comment: '시퀀스'},
  title: { type: STRING, comment: '작업명' },
  request: { type: JSON, comment: '요청' },
  code: { type: STRING, comment: '결과코드' },
  message: { type: STRING, comment: '결과 메시지' }
}, {
    sequelize, modelName: 'ssp_productXtest_log', recordOwner: true, freezeTableName: true, underscored: true, comment: '상품 로그 테스트'
})
