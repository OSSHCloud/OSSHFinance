import { Injectable } from '@nestjs/common';
import { isNumber, isEmpty } from 'lodash';
import { Not, Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { PersonHistory } from './entities/person-history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDataPayloadDto } from './dto/create.dto';
import {
  LID_DELETE_ID,
  RECORD_EXISTS,
  TRY_AGAIN_LATER,
} from 'src/utils/constants';
import { RestResponse } from 'src/utils/restResponse';
import { FindAllDataPayloadDto } from './dto/find-all.dto';
import { paginationDto } from 'src/utils/commonDtos.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly mainRepository: Repository<Person>,
    @InjectRepository(PersonHistory)
    private readonly historyRepositry: Repository<PersonHistory>,
  ) {}

  async create(params: CreateDataPayloadDto) {
    // check if record exists
    // const ifRecordExists = await this.mainRepository.findOne({
    //   where: [
    //     {
    //       title: params.title,
    //       dmlStatus: Not(LID_DELETE_ID),
    //     },
    //   ],
    // });
    // if (ifRecordExists) {
    //   return RestResponse.notFound(params, RECORD_EXISTS);
    // }
    // create a new record
    const res = await this.mainRepository.save({ ...params });
    // create history record
    await this.historyRepositry.save({ ...res });
    if (res) {
      return [res];
    } else {
      // If creation fails, throw a BadRequestException.
      return RestResponse.error(params, TRY_AGAIN_LATER);
    }
  }

  async findAll(params: FindAllDataPayloadDto, pagination: paginationDto) {
    let sql = '';
    // Construct SQL query based on provided filter parameters.
    if (isNumber(params?.personId)) {
      sql += `r.personId=${params?.personId} AND `;
    }
    if (!isEmpty(params?.firstName)) {
      sql += `r.firstName ilike '%${params?.firstName}%' AND `;
    }
    if (!isEmpty(params?.middleName)) {
      sql += `r.middleName ilike '%${params?.middleName}%' AND `;
    }
    if (!isEmpty(params?.lastName)) {
      sql += `r.lastName ilike '%${params?.lastName}%' AND `;
    }
    if (!isEmpty(params?.dateOfBirth)) {
      sql += `r.dateOfBirth ilike '%${params?.dateOfBirth}%'  AND `;
    }
    if (!isEmpty(params?.lovGenderTypeId)) {
      sql += `r.lovGenderTypeId=${params?.lovGenderTypeId} AND `;
    }
    // if (!isEmpty(params?.userId)) {
    //   sql += `r.userId=${params?.userId} AND `;
    // }
    // if (!isEmpty(params?.createdById)) {
    //   sql += `r.createdById=${params?.createdById} AND `;
    // }

    sql += `r.createdById=${params?.['dmlUserId']} AND r.dmlStatus != ${LID_DELETE_ID} ORDER BY 1 ASC`;

    // Count the total number of records based on the constructed SQL query.
    const count = await this.mainRepository
      .createQueryBuilder('r')
      .where(sql)
      .getCount();
    // Apply pagination if provided and return the filtered and paginated records.
    if (
      !isEmpty(pagination) &&
      pagination?.pageNo >= 0 &&
      pagination?.itemsPerPage > 0
    ) {
      sql += ` OFFSET ${
        pagination?.pageNo * pagination?.itemsPerPage
      } ROWS FETCH NEXT ${pagination?.itemsPerPage} ROWS ONLY`;
    }

    const query = count
      ? await this.mainRepository.createQueryBuilder('r').where(sql).getMany()
      : [];
    return count ? [query, count] : [];
  }

  // async findOne(params: FindOneDataPayloadDto) {
  //   const res = await this.mainRepository.findOne({
  //     where: {
  //       listOfValuesId: params?.listOfValuesId,
  //       dmlStatus: Not(LID_DELETE_ID),
  //     },
  //   });

  //   return res;
  // }

  // async update(params: UpdateDataPayloadDto) {
  //   // check if record exists
  //   const ifRecordExists = await this.mainRepository.findOne({
  //     where: [
  //       {
  //         title: params.title,
  //         dmlStatus: Not(LID_DELETE_ID),
  //         lovCategoryId: params.lovCategoryId,
  //         listOfValuesId: Not(params.listOfValuesId),
  //       },
  //     ],
  //   });

  //   if (ifRecordExists) {
  //     return RestResponse.error(params, RECORD_EXISTS);
  //   }

  //   const obj = await this.findOne({
  //     listOfValuesId: params.listOfValuesId,
  //   });

  //   // If the record to update does not exist, throw a NotFoundException.
  //   if (!obj) {
  //     return RestResponse.notFound(params);
  //   }

  //   const res = await this.mainRepository.save({
  //     ...params,
  //   });
  //   await this.historyRepositry.save({ ...res });
  //   if (!res) {
  //     return [res];
  //   } else {
  //     // If creation fails, throw a BadRequestException.
  //     return RestResponse.error(params, TRY_AGAIN_LATER);
  //   }
  // }

  // async delete(params: DeleteDataPayloadDto) {
  //   const obj = await this.findOne({
  //     listOfValuesId: params.listOfValuesId,
  //   });

  //   // If the record to update does not exist, throw a NotFoundException.
  //   if (!obj) {
  //     return RestResponse.notFound(params);
  //   }
  //   obj.dmlStatus = params['dmlStatus'];
  //   obj.dmlTimestamp = params['dmlTimestamp'];
  //   const res = await this.mainRepository.save({
  //     ...obj,
  //   });
  //   await this.historyRepositry.save({ ...res });
  //   if (res) {
  //     return [res];
  //   } else {
  //     // If creation fails, throw a BadRequestException.
  //     return RestResponse.error(params, TRY_AGAIN_LATER);
  //   }
  // }
}
