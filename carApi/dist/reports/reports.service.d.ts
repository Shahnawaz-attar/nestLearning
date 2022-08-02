import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/create.report.dto';
import { User } from 'src/users/user.entity';
export declare class ReportsService {
    private reportRepository;
    constructor(reportRepository: Repository<Report>);
    create(report: CreateReportDto, user: User): Promise<Report>;
    approveReport(id: number, approved: boolean): Promise<Report>;
    getEstimate(query: CreateReportDto): Promise<any[]>;
}
