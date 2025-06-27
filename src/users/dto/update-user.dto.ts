import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsNotEmpty()
    username?: string;

    @IsEmail()
    email?: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    description?: string;
}
