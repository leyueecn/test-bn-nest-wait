import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Import ValidationPipe
import * as mongoose from 'mongoose'; // Import mongoose library

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable ValidationPipe globally
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // ลบคุณสมบัติที่ไม่รู้จักออกจาก payload
    forbidNonWhitelisted: true, // ถ้ามีคุณสมบัติที่ไม่รู้จัก จะโยน Error
    transform: true, // แปลง payload ให้เป็น instance ของ DTO class
    transformOptions: {
      enableImplicitConversion: true, // ช่วยแปลงประเภทข้อมูล เช่น string เป็น number
    },
  }));

  // ตรวจสอบสถานะการเชื่อมต่อ MongoDB
  mongoose.connection.on('connected', () => {
    console.log('MongoDB connection successful!');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected.');
  });

  await app.listen(process.env.PORT ?? 5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
