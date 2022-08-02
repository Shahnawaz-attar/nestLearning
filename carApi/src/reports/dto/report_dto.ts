import {Expose, Transform} from 'class-transformer';
import { User } from 'src/users/user.entity';


export class Report_dto {
    @Expose()
    id:number;

    @Expose()
    price:number;

    @Expose()
    make:string;

    @Expose()
    year:number;

    @Expose()
    model:string;

    @Expose()
    lon:number;

    @Expose()
    lat:number;

    @Expose()
    mileage:number;

    @Expose()
    approved:boolean;

    @Transform(({obj}) => obj.user.id)
    @Expose()
    userId:number;
    
    


}