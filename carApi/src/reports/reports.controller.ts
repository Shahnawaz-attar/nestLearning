import { Controller ,
    Post,
    Get,
    Param,
    Body,
    Delete,
    Put,
    UseGuards,
    Patch,
    Query,

} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateReportDto } from './dto/create.report.dto';
import { ReportsService } from './reports.service';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import {Report_dto} from './dto/report_dto';
import {Serialize}  from '../Interceptors/serialise.interceptors';
import { ApproveReportDto } from './dto/approve.report.dto';
import { AdminGuard } from '../auth/admin.guard';

@Controller('reports')
export class ReportsController {

    constructor(private  reportsService: ReportsService) {}


    @Get()
    getEstimate(@Query() query: any) {
        return this.reportsService.getEstimate(query);
    }

    

    @UseGuards(AuthGuard)
    @Post('create')
    @Serialize(Report_dto)
    createReport(@Body() report: CreateReportDto , @CurrentUser() user: User ){
        return  this.reportsService.create(report , user);
    }

    


   

    @Patch('/approve/:id')
    approveReport(@Param('id') id: number , @Body() body: ApproveReportDto) {
        return this.reportsService.approveReport(id , body.approved);
    }

}
