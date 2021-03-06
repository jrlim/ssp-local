import dotenv from 'dotenv';
dotenv.config({ path: ".env.development" });

const config = {
    development : {
        username : process.env.DB_USERNAME || 'root',
        password : process.env.DB_PASSWORD,
        database: process.env.DB_DBNAME || 'typescript_test',
        host : process.env.DB_HOST || 'localhost',
        port : process.env.DB_PORT || 3306,
        dialect : 'mysql'
    }
}

export default config