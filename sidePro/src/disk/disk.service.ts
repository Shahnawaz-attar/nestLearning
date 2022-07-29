import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';


@Injectable()
export class DiskService {

    constructor(private  powerService: PowerService) {}

    getData(): any {
        console.log(`Getting data from power service disc com`); 
        this.powerService.supplyPower(20);
        return "Disk data";
    }

}
