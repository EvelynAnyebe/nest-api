import { Module } from '@nestjs/common';
import { UsersOrmService } from './users-orm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersOrmController } from './users-orm.controller';
import { UserOrm } from './user-orm.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserOrm])],
  controllers: [UsersOrmController],
  providers: [UsersOrmService]
})
export class UsersOrmModule {}
