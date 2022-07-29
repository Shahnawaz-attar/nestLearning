import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {

    constructor(private cpuService: CpuService, private DiskService: DiskService) {}

    @Get()
    run(){
        return [
            console.log("Computer com"),
            this.cpuService.compute( 1, 2),
            this.DiskService.getData(),
        ]
    }


}
