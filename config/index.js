import * as path from 'path';
import dotenv from 'dotenv';

const _envFilePath = (process.env.NODE_ENV == 'development' ? '.env.development' : '.env');
const join = path.join;
const __dirname = path.resolve();

dotenv.config(
  {
    path: join(__dirname, `./${_envFilePath}`)
  }
);
console.log(process.env)
const config = {
  port:process.env.PORT || 8000,
  dbHost:process.env.DB_HOST,
  dbName:process.env.DB_NAME,
  dbUser:process.env.DB_USER,
  dbPassword:process.env.DB_PWD,
  dbPort:process.env.DB_PORT,
  dbDialect:process.env.DB_DIALECT
};


export { config };


