import { UserOrm } from "src/users-orm/user-orm.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @ManyToOne(type=>UserOrm, userOrm=>userOrm.pets)
    Owner: UserOrm

}