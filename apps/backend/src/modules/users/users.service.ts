import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UsersRepository,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create({
      ...createUserDto,
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, {
      ...updateUserDto,
    });
  }

  remove(id: number) {
    return this.userRepository.remove(id);
  }
}
