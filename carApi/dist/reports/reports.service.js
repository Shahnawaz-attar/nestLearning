"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const report_entity_1 = require("./report.entity");
let ReportsService = class ReportsService {
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    async create(report, user) {
        const reportEntity = this.reportRepository.create(report);
        reportEntity.user = user;
        return await this.reportRepository.save(reportEntity);
    }
    async approveReport(id, approved) {
        const reportEntity = await this.reportRepository.findOneBy({ id });
        if (!reportEntity) {
            throw new common_1.NotFoundException('Report not found');
        }
        reportEntity.approved = approved;
        return await this.reportRepository.save(reportEntity);
    }
    async getEstimate(query) {
        return await this.reportRepository.createQueryBuilder()
            .select('*')
            .where('make=:make', { make: query.make })
            .andWhere('lon - :lon BETWEEN -5 AND 15', { lon: query.lon })
            .andWhere('lat - :lat BETWEEN -5 AND 5', { lat: query.lat })
            .andWhere('year - :year BETWEEN -3 AND 3', { year: query.year })
            .orderBy('mileage - :mileage', 'DESC').setParameters({ mileage: query.mileage })
            .getRawMany();
    }
};
ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(report_entity_1.Report)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map