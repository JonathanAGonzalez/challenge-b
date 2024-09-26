import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  @IsNotEmpty()
  readonly url: string;

  @IsOptional()
  @IsString()
  readonly password?: string;
}
