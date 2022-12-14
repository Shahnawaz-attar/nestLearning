import { User } from "src/users/user.entity";
export declare class Report {
    id: number;
    approved: boolean;
    price: number;
    make: string;
    year: number;
    model: string;
    lon: number;
    lat: number;
    mileage: number;
    user: User;
}
