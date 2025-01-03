// import { LovCategory } from 'src/lov-category/entities/lov-category.entity';
import { Country } from 'src/country/entities/country.entity';
import { ListOfValues } from 'src/list-of-values/entities/list-of-values.entity';
import { User } from 'src/user/entities/user.entity';
import { LID_CREATED_ID } from 'src/utils/constants';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'bank' })
export class Bank {
  @PrimaryGeneratedColumn({ name: 'bank_id' })
  bankId: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'code', nullable: true })
  code: string;

  @Column({ name: 'iban_code', nullable: true })
  ibanCode: string;

  // @ManyToOne(() => Country, (x) => x.countryId)
  // @JoinColumn({ name: 'country' })
  @Column({ name: 'country', nullable: true })
  country: number;

  // dml

  @ManyToOne(() => ListOfValues, (x) => x.listOfValuesId)
  @JoinColumn({ name: 'dml_status' })
  @Column({
    name: 'dml_status',
    default: LID_CREATED_ID,
  })
  dmlStatus: number;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'dml_user_id' })
  @Column({ name: 'dml_user_id' })
  dmlUserId: number;

  @Column({ name: 'dml_timestamp', type: 'timestamptz' })
  dmlTimestamp: Date;
}
