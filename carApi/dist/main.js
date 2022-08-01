"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const { ValidationPipe } = require('@nestjs/common');
const cookieSession = require('cookie-session');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true
    }));
    app.use(cookieSession({
        name: 'session',
        keys: ['user', 'all is well']
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map