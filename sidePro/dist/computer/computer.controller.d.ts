import { CpuService } from '../cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
export declare class ComputerController {
    private cpuService;
    private DiskService;
    constructor(cpuService: CpuService, DiskService: DiskService);
    run(): any[];
}
