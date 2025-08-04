import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'app',
  password: 'app',
  database: 'app',
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
        host: '127.0.0.1',
        port: 6379,
        username: '',
        password: '',
    },
},
};

export const dataSource = new DataSource(dataSourceOptions);