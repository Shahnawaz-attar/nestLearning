import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { ReportsModule } from "./reports/reports.module";
import {UsersModule} from "./users/users.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/user.entity";


@Module({ 
    imports: [ReportsModule, UsersModule,TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './db.sqlite',
        entities: [User],
        synchronize: true,
  
    
    })
    ],
    controllers: [AppController ],
    providers: [],
})
export class AppModule {}