import { PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { IsEnum } from 'class-validator';
import { Country } from './Country';
import { Competition } from './Competition';

export enum UserRole {
    ORGANIZER = 'organizer',
    DELEGATE = 'delegate',
    DELEGATE_LEAD = 'delegate_lead'
}

export enum UserStatus {
    PENDING = 'pending',
    REGISTERED = 'registered'
}

export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public username!: string;

    @Column()
    public password?: string;

    @Column()
    public firstName!: string;

    @Column()
    public lastName!: string;

    @Column()
    @IsEnum(UserRole)
    public role!: UserRole;

    @Column()
    @IsEnum(UserStatus)
    public status!: UserStatus;

    @ManyToOne(() => Country, country => country.users)
    public country!: Country;

    @OneToMany(() => Competition, competition => competition.delegate)
    public competitions!: Competition;
}
