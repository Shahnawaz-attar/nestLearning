import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ReportsModule } from "./reports/reports.module";
import { ConfigModule,ConfigService } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users/user.entity";
import { Report } from "./reports/report.entity";

// folder 14 and video 3


@Module({
    imports: [ReportsModule, UsersModule,
        
    //     TypeOrmModule.forRoot({
    //     type: 'sqlite',
    //     database: './db.sqlite',
    //     entities: [User, Report],
    //     synchronize: true,


    // }),
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: `.env.${process.env.NODE_ENV}`,
    }),

    TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            type: 'sqlite',
            database: configService.get('DB_NAME'),
            entities: [User, Report],
            synchronize: true,

        })
    })
    


    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule { }