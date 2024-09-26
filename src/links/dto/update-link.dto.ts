import { PartialType } from '@nestjs/mapped-types';
import { CreateLinkDto } from './create-link.dto';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateLinkDto extends PartialType(CreateLinkDto) {
  @IsBoolean()
  @IsNotEmpty({
    message: 'isDisabled should not be empty',
  })
  isDisabled: boolean;

  @IsOptional()
  @IsDateString()
  readonly expirationDate?: string;

  @IsOptional()
  @IsString()
  readonly password?: string;
}
