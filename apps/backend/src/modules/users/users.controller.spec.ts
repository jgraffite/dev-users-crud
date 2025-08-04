import { Test, TestingModule, MockFactory } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from '../../shared/database/typeorm/user.providers';
import { UsersRepository } from './users.repository';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        ...userProviders,
        {
          provide: 'DATA_SOURCE',
          useValue: {
            getRepository: jest.fn()
          },
        },
        UsersService,
        UsersRepository,
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });
});
