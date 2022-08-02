import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/create.report.dto';
import { User } from 'src/users/user.entity';


@Injectable()
export class ReportsService {

    constructor( @InjectRepository(Report) private  reportRepository: Repository<Report>) { }


    //create
    async create(report: CreateReportDto , user: User) {
        const reportEntity = this.reportRepository.create(report);
        reportEntity.user = user;
        return await this.reportRepository.save(reportEntity);
    }

    //approveReport
    async approveReport(id: number , approved: boolean) {
        const reportEntity = await this.reportRepository.findOneBy({id});
        if (!reportEntity) {
            throw new NotFoundException('Report not found');
        }
        reportEntity.approved = approved;
        return await this.reportRepository.save(reportEntity);
        

    }

    //getEstimate
    async getEstimate(query: CreateReportDto) {
        return await this.reportRepository.createQueryBuilder()
        .select('*')
        .where('make=:make', {make: query.make})
        .andWhere('lon - :lon BETWEEN -5 AND 15', {lon: query.lon})
        .andWhere('lat - :lat BETWEEN -5 AND 5', {lat: query.lat})
        .andWhere('year - :year BETWEEN -3 AND 3', {year: query.year})
        .orderBy('mileage - :mileage' , 'DESC').setParameters({mileage: query.mileage})
        .getRawMany();
        
    }
        
}
