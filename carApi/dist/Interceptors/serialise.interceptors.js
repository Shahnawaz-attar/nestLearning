"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serialize = exports.SerialiseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
class SerialiseInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)(data => (0, class_transformer_1.plainToInstance)(this.dto, data, { excludeExtraneousValues: true })));
    }
}
exports.SerialiseInterceptor = SerialiseInterceptor;
const Serialize = (dto) => {
    return (0, common_1.UseInterceptors)(new SerialiseInterceptor(dto));
};
exports.Serialize = Serialize;
//# sourceMappingURL=serialise.interceptors.js.map