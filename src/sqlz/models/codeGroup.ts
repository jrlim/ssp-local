'use strict';
import { Model, ModelAttributes, ModelOptions, STRING, DATE, INTEGER } from 'sequelize';
import { GDModel, GDModelContainer } from '@gdf_core/interface';
import sequelize from './index'

export class CodeGroup extends Model {
  // public constructor() {
  //   super('code_group');
  // }
}

CodeGroup.init({
  // Model attributes are defined here
  codeGroupKey: {
    type: STRING,
    unique: true,
    allowNull: false,
    comment: '코드 그룹 키',
  },
  codeGroupLabel: {
    type: STRING,
    comment: '코드 그룹 라벨',
  },
  codeGroupDesc: {
    type: STRING,
    comment: '코드 그룹 설명',
  },
  attributeLabel1: {
    type: STRING,
    comment: '속성 라벨1',
  },
  attributeLabel2: {
    type: STRING,
    comment: '속성 라벨2',
  },
  attributeLabel3: {
    type: STRING,
    comment: '속성 라벨3',
  },
  attributeLabel4: {
    type: STRING,
    comment: '속성 라벨4',
  },
  attributeLabel5: {
    type: STRING,
    comment: '속성 라벨5',
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
  }
}, {
    sequelize, modelName: 'ssp_codeXcode_group', recordOwner: true, freezeTableName: true, underscored: true, comment: '코드 그룹'
})

console.log(CodeGroup === sequelize.models.CodeGroup);

//   getModelOptions(): ModelOptions {
//     return {
//       recordOwner: true,
//       freezeTableName: true,
//       underscored: true,
//       comment: '코드 그룹',
//     };
//   }

//   associate(modelContainer: GDModelContainer): void {
//     // client < code_group (1:n)
//     modelContainer.get('ssp_client', 'client').hasMany(modelContainer.get(null, 'code_group'), {
//       onDelete: 'restrict',
//       foreignKey: {
//         name: 'clientId',
//         allowNull: false,
//       },
//     });
//     modelContainer.get(null, 'code_group').belongsTo(modelContainer.get('ssp_client', 'client'), {
//       onDelete: 'restrict',
//       foreignKey: {
//         name: 'clientId',
//         allowNull: false,
//       },
//     });
//   }
// }
