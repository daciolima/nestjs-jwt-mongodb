import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignupDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    password: string
}