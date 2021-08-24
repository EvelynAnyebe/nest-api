import { Pet } from "src/pet/pet.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class UserOrm{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @OneToMany(type=>Pet, pet=>pet.Owner)
    pets: Pet[]
}