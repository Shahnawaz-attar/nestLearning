import { Report } from 'src/reports/report.entity';
import {Entity, PrimaryGeneratedColumn, Column, AfterInsert, AfterRemove, BeforeInsert, AfterLoad , OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({default:true})
    admin: boolean;

    @OneToMany(type => Report, report => report.user)
    reports: Report[];
    
    
    @AfterInsert()
    logInsert() {
        console.log('Inserted user: ' + this.email);
    } 

    @AfterRemove()
    logRemove() {
        console.log('Removed user: ' + this.email);
    }

    @BeforeInsert()
    logBeforeInsert() {
        console.log('Before insert user: ' + this.email);
    }

    @AfterLoad()
    logAfterLoad() {
        console.log('After load user: ' + this.email);
    }


 
}