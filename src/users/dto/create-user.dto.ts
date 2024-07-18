import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;
  @IsString()
  @IsOptional()
  name: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  
  password: string;
}
