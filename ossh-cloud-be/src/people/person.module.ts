import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PersonHistory } from './entities/person-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person, PersonHistory])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
