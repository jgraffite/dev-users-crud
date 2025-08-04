import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-ioredis-yet';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        const _redisStore = await redisStore({
        host: process.env.APP_REDIS_HOST,
        port: process.env.APP_REDIS_PORT,
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
