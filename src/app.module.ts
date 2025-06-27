import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://root:1234@cluster0.i0mkofw.mongodb.net/mydb'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
