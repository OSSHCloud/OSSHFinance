import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateDataPayloadDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  phoneCode: number;

  @IsNotEmpty()
  @IsString()
  iso2Code: string;

  @IsOptional()
  @IsString()
  iso3Code: string;
}

export class CreateDto {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateDataPayloadDto)
  @IsArray()
  data: CreateDataPayloadDto[];
}
