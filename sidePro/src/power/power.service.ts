import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {


    supplyPower(watts: number): any {
        console.log(`Powering up ${watts} watts power component`);
    }
}
