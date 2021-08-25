import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersOrmModule } from './users-orm/users-orm.module';
import { PetModule } from './pet/pet.module';
import {configAsync} from './config/ormconfig';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true, }),
    UsersModule,
    TodosModule,
    TypeOrmModule.forRoot(configAsync),
    UsersOrmModule,
    PetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
