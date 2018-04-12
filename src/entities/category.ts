import {Entity, PrimaryGeneratedColumn, Column} from "typeorm/browser";

@Entity('category')
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
