import { CreateReportDto } from './dto/create.report.dto';
import { ReportsService } from './reports.service';
import { User } from '../users/user.entity';
import { ApproveReportDto } from './dto/approve.report.dto';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    getEstimate(query: any): Promise<any[]>;
    createReport(report: CreateReportDto, user: User): Promise<import("./report.entity").Report>;
    approveReport(id: number, body: ApproveReportDto): Promise<import("./report.entity").Report>;
}
