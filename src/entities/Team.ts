import { ChildEntity, OneToMany } from 'typeorm';
import { Athlete } from './Athlete';
import { Participant } from './Paticipant';

ChildEntity()
export class Team extends Participant {
    @OneToMany(() => Athlete, athlete => athlete.team)
    public athletes!: Athlete[];
}
