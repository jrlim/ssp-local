import * as uuid from 'uuid'
import winston from 'winston'
import moment from 'moment'
import { TestLog } from '../sqlz/models/testLog'

export function findAll(): Promise<any> {
  return TestLog
    .findAll({ include: [{ all: true }] })
}

export function createTestLog(req: any): Promise<any> {

      // 1. 로그 등록
    //============================================
    let insertList = []
  
    for (let i = 0; i < 100000; i++) {
      req.seq = i;
      req.title = 'test';
      req.request = ''; // JSON.stringify(req);
      req.code = '200'
      req.message = 'success'
      try {
        // winston.log('CreateTestDumy start........');
        //  TestLog
        //   .create(req)
        //   .then((v) => {
        //     if (i === 99999) {
        //       winston.log('1) log insert 10000 done ', moment().format('YYYYMMDD HH:mm:ss'));
        //       return Promise.resolve({ code: '200', message: '성공', data: v });
        //     }
        //   })
        //   .catch((err) => {
        //     return Promise.reject({
        //       data: { code: '400', message: '실패' },
        //       error: { code: '400', message: '해지 등록을 실패하였습니다.' },
        //     });
        //   });
        insertList.push(req)
      } catch (err) {
        winston.log(err);
        let resReturn = { code: '200', message: '등록 실패 : ' + i, data: {} };
        return Promise.resolve(resReturn)
      }
  } // end for
  
  winston.log('1) log insert start ', moment().format('YYYYMMDD HH:mm:ss'));
  
  return TestLog.bulkCreate(insertList)

    // let resReturn = { code: '200', message: '등록 성공 : 10,0000', data: {} };
    // return Promise.resolve(resReturn);
  
}