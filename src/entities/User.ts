import { ChildEntity, Column, ManyToOne, OneToMany } from 'typeorm';
import { IsEnum } from 'class-validator';

export enum UserRole {
    BASIC = 'basic',
    AGENT = 'agent',
    ADMIN = 'administrator'
}

export enum UserStatus {
    PENDING = 'pending',
    REGISTERED = 'registered'
}

export class User {
    @Column()
    public password?: string;

    @Column({ nullable: true })
    public firstName!: string;

    @Column({ nullable: true })
    public lastName!: string;

    @Column()
    @IsEnum(UserRole)
    public role!: UserRole;

    @Column()
    @IsEnum(UserStatus)
    public status!: UserStatus;

    @Column()
    public profilePicture!: string;
}
