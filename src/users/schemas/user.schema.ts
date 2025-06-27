import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole } from '../dto/create-user.dto';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: UserRole.USER, enum: Object.values(UserRole) })
    role: UserRole;

    @Prop()
    description?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
