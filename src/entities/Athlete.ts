import { ChildEntity, ManyToOne } from 'typeorm';
import { Participant } from './Paticipant';
import { Team } from './Team';

ChildEntity()
export class Athlete extends Participant {
    @ManyToOne(() => Team, team => team.athletes, { nullable: true })
    public team!: Team;
}
