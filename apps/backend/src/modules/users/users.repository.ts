import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { dataSource } from 'src/shared/database/typeorm/data-source';

const cacheTTL = 30 * 1000;
const getOneCacheKey = (id: number) => `users:getOne-${id}`;
const getAllCacheKey = 'users:getAll';

@Injectable()
export class UsersRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private repository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.create({
      ...createUserDto,
    });
  }

  async findOne(id: number) {
    
    return await this.repository
      .createQueryBuilder()
      .cache(getOneCacheKey(id), cacheTTL)
      .where("id = :id", { id })
      .getOne();
  }

  async findAll() {
    return await this.repository
      .createQueryBuilder()
      .cache(getAllCacheKey, cacheTTL)
      .getMany();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await dataSource.queryResultCache?.remove([getOneCacheKey(id), getAllCacheKey]); 
    return this.repository.update(id, {
      ...updateUserDto,
    });
  }

  async remove(id: number) {
    await dataSource.queryResultCache?.remove([getOneCacheKey(id), getAllCacheKey]); 
    return this.repository.delete(id);
  }
}
