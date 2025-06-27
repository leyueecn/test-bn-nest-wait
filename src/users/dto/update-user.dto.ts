import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsNotEmpty()
    readonly username?: string;

    @IsEmail()
    readonly email?: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    readonly description?: string;
}
