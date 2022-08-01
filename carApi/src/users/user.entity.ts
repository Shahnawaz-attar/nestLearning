import {Entity, PrimaryGeneratedColumn, Column, AfterInsert, AfterRemove, BeforeInsert, AfterLoad} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
    
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