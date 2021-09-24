import { ChildEntity, ManyToOne } from 'typeorm';
import { Activity } from './Activity';
import { Sport } from './Sport';

ChildEntity()
export class Discipline extends Activity {
    @ManyToOne(() => Sport, sport => sport.disciplines)
    public sport!: Sport;
}
