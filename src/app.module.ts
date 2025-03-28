import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bpm } from './bpm/entities/bpm.entity';
import { GsrModule } from './gsr/gsr.module';
import { Gsr } from './gsr/entities/gsr.entity';
import { BpmModule } from './bpm/bpm.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TempModule } from './temp/temp.module';
import { Temp } from './temp/entities/temp.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bd_emotion',
      entities: [Bpm, Gsr, User, Temp],
      synchronize: true,
      autoLoadEntities: false,
    }),
    GsrModule,
    BpmModule,
    UserModule,
    TempModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
