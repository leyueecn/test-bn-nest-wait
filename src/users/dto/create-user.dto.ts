import { IsString, IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export enum UserRole {
    USER = "user",
    ADMIN = "admin"
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsEnum(UserRole)
    readonly role: UserRole;

    @IsOptional()
    @IsString()
    readonly description?: string;
}
