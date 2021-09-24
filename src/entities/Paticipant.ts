import { Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { Country } from "./Country";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Participant {
    @PrimaryGeneratedColumn()
    public id!: number;

    @ManyToOne(() => Country, country => country.participants)
    public country!: Country;
}