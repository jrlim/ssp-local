
console.log("!!! SSP project with Express + Sequelize + Typescript !!!");

/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import {Request, Response, NextFunction} from "express";

// import { userRouter } from "./routes/userRouter";
// import { songRouter } from "./routes/songRouter";
// import { scoreRouter } from "./routes/scoreRouter";
import * as sequelize from "./sqlz/models/indexBak";	//방금 만든 sequelize객체를 import해준다.(index.ts에 만들었으므로 폴더명만 입력하면 먼저 자동으로 index.ts를 찾아 그 안에 있는거 import)
import app from "./app"



dotenv.config();
/**
 * App Variables
 */
const PORT:number = parseInt(process.env.PORT as string, 10) || 5000;
const HOST:string = process.env.HOST || 'localhost';

/**
 *  App Configuration   //middleware
 */
app.use((req:Request,res:Response,next:NextFunction) => {
    console.log(`Request Occur! ${req.method}, ${req.url}`);
    next();
})

// 라우터 설정
app.use('/')
// app.use('/users',userRouter);
// app.use('/songs',songRouter);
// app.use('/score',scoreRouter);

/**
 * Server Activation
 */
const server = app.listen(PORT,HOST,async () => {
    console.log(`Server Listening on ${HOST}:${PORT}`);

    // //sequelize-db 연결 테스트
     await sequelize.authenticate()
     .then(async () => {
         console.log("connection success");
     })
     .catch((e) => {
         console.log('TT : ', e);
     })
})

export default server;