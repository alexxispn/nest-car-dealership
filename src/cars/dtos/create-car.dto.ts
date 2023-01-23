import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Brand is required and must be a string.' })
  readonly brand: string;
  @IsString({ message: 'Model is required and must be a string.' })
  @MinLength(2, { message: 'Model must be at least 2 characters long.' })
  readonly model: string;
}
