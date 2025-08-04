import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from 'src/shared/database/typeorm/user.providers';
import { DatabaseModule } from 'src/shared/database/typeorm/database.module';
import { UsersRepository } from './users.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProviders, UsersService, UsersRepository],
})
export class UsersModule {}
