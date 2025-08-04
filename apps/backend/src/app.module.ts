import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-ioredis-yet';
@Module({
  imports: [
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: 'localhost',
    //   port: 27017,
    //   username: 'admin',
    //   password: 'admin',
    //   database: 'app',
    //   // entities: ['src/resources/**/*.entity.ts'],
    //   synchronize: true,
    // }),
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
          const _redisStore = await redisStore({
          host: '127.0.0.1',
          port: 6379,
      });
      return {
          store: _redisStore,
      };
  },
}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
