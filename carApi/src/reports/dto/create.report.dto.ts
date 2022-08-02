import { Transform } from 'class-transformer';
import {
    IsString,
    IsNumber,
    Min , Max,
    IsDate,
    IsLongitude , IsLatitude,
    IsNotEmpty,

} from 'class-validator';


export class CreateReportDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100000)
    price: number;

    @IsNotEmpty()
    @IsString()
    make: string;

    @IsNotEmpty()
    @IsString()
    model: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1900)
    @Max(2025)
    year: number;

    @Transform(({value}) => parseFloat(value))
    @IsNotEmpty()
    @IsNumber()
    lon: number;


    @Transform(({value}) => parseFloat(value))
    @IsNotEmpty()
    @IsNumber()
    lat: number;

    @Transform(({value}) => parseInt(value))
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(999999)
    mileage: number;
}