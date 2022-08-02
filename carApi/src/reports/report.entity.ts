import { User } from "src/users/user.entity";
import { Entity,Column, PrimaryGeneratedColumn , ManyToOne } from "typeorm";


@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default:false})
    approved: boolean;



    @Column()
    price: number;   // price of the vehicle

    @Column()
    make: string; //company name

    @Column()
    year : number; //year of the vehicle manufacture

    @Column()
    model: string; //model of the vehicle

    @Column()
    lon : number; //longitude of the vehicle

    @Column()
    lat : number; //latitude of the vehicle

    @Column()
    mileage : number; //mileage of the vehicle

    @ManyToOne(type => User, user => user.reports)
    user: User

    



}