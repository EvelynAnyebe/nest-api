import { Test, TestingModule } from '@nestjs/testing';
import { UsersOrmService } from './users-orm.service';

describe('UsersOrmService', () => {
  let service: UsersOrmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersOrmService],
    }).compile();

    service = module.get<UsersOrmService>(UsersOrmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
