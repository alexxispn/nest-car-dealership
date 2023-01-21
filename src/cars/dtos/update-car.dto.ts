import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  @IsUUID()
  readonly id?: string;

  @IsString({ message: 'Make is required and must be a string.' })
  @IsOptional()
  readonly make?: string;

  @IsString({ message: 'Model is required and must be a string.' })
  @MinLength(2, { message: 'Model must be at least 2 characters long.' })
  @IsOptional()
  readonly model?: string;
}
