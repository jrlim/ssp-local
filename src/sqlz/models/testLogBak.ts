'use strict';
import { ModelAttributes, ModelOptions, DataTypes } from 'sequelize';
import { GDModel, GDModelContainer, GDModelTools } from '@gdf_core/interface';

export class TestLog extends GDModel {
  public constructor() {
    super('test_log');
  }

  getAttributes(modelTools: GDModelTools): ModelAttributes {
    return {
      seq: { type: DataTypes.INTEGER, comment: '시퀀스'},
      title: { type: DataTypes.STRING, comment: '작업명' },
      request: { type: DataTypes.JSON, comment: '요청' },
      code: { type: DataTypes.STRING, comment: '결과코드' },
      message: { type: DataTypes.STRING, comment: '결과 메시지' }
    };
  }

  getModelOptions(): ModelOptions {
    return {
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      comment: '테스트 로그',
    };
  }

  associate(modelContainer: GDModelContainer): void {}
}
