import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserOrm } from './user-orm.entity';
import { UsersOrmService } from './users-orm.service';

@ApiTags('Users With Type ORM')
@Controller('users-orm')
export class UsersOrmController {
    constructor(private readonly UsersOrmService: UsersOrmService){}

    @Post()
    async createUser(): Promise<UserOrm>{
        return this.UsersOrmService.createUser("Evelyn", "Area 1 Abuja");
    }

    @Get()
    getAllUsers(): Promise<UserOrm[]>{
        return this.UsersOrmService.getAll();
    }

}
