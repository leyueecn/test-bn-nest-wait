import { IsString, IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export enum UserRole {
    USER = "user",
    ADMIN = "admin"
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(UserRole)
    @IsOptional()
    role?: UserRole;

    @IsOptional()
    @IsString()
    description?: string;
}
