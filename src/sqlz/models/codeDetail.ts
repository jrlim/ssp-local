'use strict';
import { ModelAttributes, ModelOptions, STRING, BOOLEAN, INTEGER, DATE } from 'sequelize';
import { GDModel, GDModelContainer } from '@gdf_core/interface';

export class CodeDetail extends GDModel {
  public constructor() {
    super('code_detail');
  }

  getAttributes(): ModelAttributes {
    return {
      codeKey: {
        type: STRING,
        unique: true,
        allowNull: false,
        comment: '코드 키',
      },

      codeLabel: {
        type: STRING,
        comment: '코드라벨',
      },

      codeDesc: {
        type: STRING,
        comment: '코드설명',
      },

      attribute1: {
        type: STRING,
        comment: '속성1',
      },

      attribute2: {
        type: STRING,
        comment: '속성2',
      },

      attribute3: {
        type: STRING,
        comment: '속성3',
      },

      attribute4: {
        type: STRING,
        comment: '속성4',
      },

      attribute5: {
        type: STRING,
        comment: '속성5',
      },

      codeDisabled: {
        type: BOOLEAN,
        defaultValue: false,
        comment: '사용여부',
      },

      codeOrderSeq: {
        type: INTEGER,
        comment: '정렬순서',
      },

      createdBy: {
        type: INTEGER,
        comment: '생성자',
      },

      updatedBy: {
        type: INTEGER,
        comment: '수정자',
      },

      createdAt: {
        type: DATE,
        comment: '생성일시',
      },

      updatedAt: {
        type: DATE,
        comment: '수정일시',
      },
    };
  }

  getModelOptions(): ModelOptions {
    return {
      recordOwner: true,
      freezeTableName: true,
      underscored: true,
      comment: '코드 상세',
    };
  }

  associate(modelContainer: GDModelContainer): void {
    // client < code_detail (1:n)
    modelContainer.get('ssp_client', 'client').hasMany(modelContainer.get(null, 'code_detail'), {
      onDelete: 'restrict',
      foreignKey: {
        name: 'clientId',
        allowNull: false,
      },
    });
    modelContainer.get(null, 'code_detail').belongsTo(modelContainer.get('ssp_client', 'client'), {
      onDelete: 'restrict',
      foreignKey: {
        name: 'clientId',
        allowNull: false,
      },
    });

    // code_group < code_detail (1:n)
    modelContainer.get(null, 'code_group').hasMany(modelContainer.get(null, 'code_detail'), {
      onDelete: 'restrict',
      foreignKey: {
        name: 'codeGroupId',
        allowNull: false,
      },
    });
    modelContainer.get(null, 'code_detail').belongsTo(modelContainer.get(null, 'code_group'), {
      onDelete: 'restrict',
      foreignKey: {
        name: 'codeGroupId',
        allowNull: false,
      },
    });

    // user < code_detail (1:n)
    modelContainer.get(null, 'user').hasMany(modelContainer.get(null, 'code_detail'), {
      as: 'code_detail_updaters',
      onDelete: 'restrict',
      foreignKey: {
        name: 'updaterUserId',
      },
    });
    modelContainer.get(null, 'code_detail').belongsTo(modelContainer.get(null, 'user'), {
      as: 'code_detail_updater',
      onDelete: 'restrict',
      foreignKey: {
        name: 'updaterUserId',
      },
    });
  }
}
