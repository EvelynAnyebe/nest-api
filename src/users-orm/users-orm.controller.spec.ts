import { Test, TestingModule } from '@nestjs/testing';
import { UsersOrmController } from './users-orm.controller';

describe('UsersOrmController', () => {
  let controller: UsersOrmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersOrmController],
    }).compile();

    controller = module.get<UsersOrmController>(UsersOrmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
