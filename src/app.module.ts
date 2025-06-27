import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ทำให้ ConfigModule ใช้งานได้ทั่วทั้งแอป
      envFilePath: '.env', // ระบุไฟล์ .env
      validationSchema: Joi.object({ // เพิ่ม validation schema ด้วย Joi
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().default(3000),
      }),
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI), // ใช้ MONGODB_URI จาก .env
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
