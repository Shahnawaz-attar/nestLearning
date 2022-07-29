import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {

    constructor(private  powerService: PowerService) {}

    compute(a: number , b:number): any {
        console.log(`Computing ${a} + ${b}  cpu..` );
        this.powerService.supplyPower(10);
        return a + b;
    }

}
