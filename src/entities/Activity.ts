import { PrimaryGeneratedColumn, Column, OneToMany, Entity, TableInheritance } from 'typeorm';
import { IsEnum } from 'class-validator';
import { Competition } from './Competition';

export enum ActivityType {
    TEAM = 'team',
    INDIVIDUAL = 'individual',
}

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Activity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name!: string;

    @Column()
    @IsEnum(ActivityType)
    public type!: ActivityType;

    @Column()
    public participantCount!: number;

    @Column({ nullable: true })
    public maxPerTeam!: number;

    @OneToMany(() => Competition, competition => competition.activity)
    public competitions!: Competition[];
}
