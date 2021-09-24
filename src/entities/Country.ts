import { PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Participant } from './Paticipant';
import { User } from './User';

export class Country {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name!: string;

    @OneToMany(() => User, user => user.country)
    public users!: User[];

    @OneToMany(() => Participant, participant => participant.country)
    public participants!: Participant[];
}
