import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.APP_MYSQL_HOST,
  port: parseInt(process.env.APP_MYSQL_PORT || '3306'),
  username: process.env.APP_MYSQL_USERNAME,
  password: process.env.APP_MYSQL_PASSWORD,
  database: process.env.APP_MYSQL_DATABASE,
  entities: [
    'dist/**/*.entity{.ts,.js}',
  ],
  migrations: ['dist/database/migrations/*.js'],
  extra: {
    trustServerCertificate: true,
  },
  synchronize: true,
  cache: {
    type: 'redis',
    options: {
        host: process.env.APP_REDIS_HOST,
        port: process.env.APP_REDIS_PORT,
        username: process.env.APP_REDIS_USER,
        password: process.env.APP_REDIS_PASSWORD,
    },
},
};

export const dataSource = new DataSource(dataSourceOptions);