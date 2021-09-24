import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { IsDate, IsEnum } from 'class-validator';
import { Activity } from './Activity';
import { User } from './User';

export enum CompetitionCategory {
    MEN = 'men',
    WOMEN = 'women'
}

export enum CompetitionType {
    TEAM = 'team',
    INDIVIDUAL = 'individual',
} 

export enum Arenas {
    TOKYO_AQUATICS_CENTRE = "Tokyo Aquatics Centre",
    SAPPORO_ODORI_PARK = "Sapporo Odori Park",
    OLYMPIC_STADIUM = "Olympic Stadium",
    SAITAMA_SUPER_ARENA = "Saitama Super Arena"
}

@Entity()
export class Competition {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    @IsEnum(CompetitionCategory)
    public category!: CompetitionCategory;

    @Column()
    public participantCount!: number;

    @Column({ nullable: true })
    public maxPerTeam!: number;

    @Column()
    @IsDate()
    public startsAt!: Date;

    @Column()
    @IsDate()
    public endsAt!: Date;

    @ManyToOne(() => Activity, activity => activity.competitions)
    public activity!: Activity;

    @ManyToOne(() => User, user => user.competitions)
    public delegate!: User;
}
