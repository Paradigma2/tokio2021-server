import { ChildEntity, OneToMany } from 'typeorm';
import { Activity } from './Activity';
import { Discipline } from './Discipline';

ChildEntity()
export class Sport extends Activity {
    @OneToMany(() => Discipline, discipline => discipline.sport)
    public disciplines!: Discipline[];
}
