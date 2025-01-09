import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';

export class CreateDataPayloadDto {
  @IsOptional()
  @IsNumber()
  fromAccountId: number;

  @IsOptional()
  @IsNumber()
  toAccountId: number;

  @IsOptional()
  @IsNumber()
  amountTransfered: number;

  @IsOptional()
  @IsNumber()
  serviceCharges: number;

  @IsOptional()
  @IsNumber()
  taxCharges: number;

  @IsOptional()
  @IsNumber()
  totalAmount: number;
}

export class CreateDto {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateDataPayloadDto)
  @IsArray()
  data: CreateDataPayloadDto[];
}
