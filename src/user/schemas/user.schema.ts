import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    toObject(): { [x: string]: any; password: any; } {
      throw new Error('Method not implemented.');
    }
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string; // ใน production ควร hash password ด้วย bcrypt ก่อนบันทึกลง database

    @Prop()
    description?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);