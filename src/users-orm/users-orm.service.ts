import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserOrm } from './user-orm.entity';

@Injectable()
export class UsersOrmService {
    constructor(@InjectRepository(UserOrm) private usersRepository: Repository<UserOrm>){

    }

    getAll(): Promise<UserOrm[]> {
        return this.usersRepository.find({
            relations: ['pets']
        }); // SELECT * FROM user-orm JOIN WITH pet
    }

    async getOneById(id: number): Promise<UserOrm>{
        try{
            const user = await this.usersRepository.findOneOrFail(id);
            return user;
        }catch(err){
            throw err;
        }
    }

    createUser(name: string, address: string): Promise<UserOrm>{
        const newUser = this.usersRepository.create({name,address});
        return this.usersRepository.save(newUser);
    }

    async updateUser(id: number, name: string): Promise<UserOrm>{
        const user = await this.usersRepository.findOneOrFail(id);
        user.name=name;
        return this.usersRepository.save(user);
    }

    async deleteUser(id: number): Promise<UserOrm>{
        const user = await this.usersRepository.findOneOrFail(id);
       
        return this.usersRepository.remove(user);

    }
}
