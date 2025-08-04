import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { userProviders } from '../../shared/database/typeorm/user.providers';
import { UsersRepository } from './users.repository';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: UsersRepository;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ...userProviders,
        // {
        //     provide: 'USER_REPOSITORY',
        //     useValue: Repository<User>,
        // },
        {
          provide: 'USER_REPOSITORY',
          useValue: {
            createQueryBuilder: () => ({
              cache: () => ({
                orderBy: () => ({
                  getMany: jest.fn(),
                  getOne: jest.fn(),
                }),
                where: () => ({
                  getOne: jest.fn(),
                })
              })
            }),
            insert: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            getMany: jest.fn(),
            getOne: jest.fn(),
          },
        },
        UsersService,
        UsersRepository,
        Repository<User>
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<UsersRepository>(UsersRepository);
    // repository = module.get('USER_REPOSITORY');
    repository = module.get<Repository<User>>(Repository<User>);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('should call .findAll() method', () => {
    service.findAll();
  });

  it('should call .findOne() method', () => {
    service.findOne(1);
  });

  it('should call .create() method', () => {
    service.create({
      firstName: 'Testing',
      lastName: 'User',
      email: 'testing@user.com',
      password: 'testing',
    });
  });

  it('should call .update() method', () => {
    service.update(1, {
      firstName: 'Testing',
      lastName: 'User',
      email: 'testing@user.com',
      password: 'testing',
    });
  });

  it('should call .remove() method', () => {
    service.remove(1);
  });
});
