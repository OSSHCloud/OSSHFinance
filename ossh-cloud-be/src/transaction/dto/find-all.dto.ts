import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { paginationDto } from 'src/utils/commonDtos.dto';

export class FindAllDataPayloadDto {
  @IsOptional()
  @IsNumber()
  accountId: number;

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

export class FindAllDto {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => FindAllDataPayloadDto)
  @IsArray()
  data: FindAllDataPayloadDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => paginationDto)
  pagination: paginationDto;
}
