import { Bank } from 'src/bank/entities/bank.entity';
import { ListOfValues } from 'src/list-of-values/entities/list-of-values.entity';
import { Person } from 'src/people/entities/person.entity';
import { User } from 'src/user/entities/user.entity';
import { LID_CREATED_ID } from 'src/utils/constants';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'account' })
export class Account {
  @PrimaryGeneratedColumn({ name: 'account_id' })
  accountId: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @ManyToOne(() => Person, (x) => x.personId)
  @JoinColumn({ name: 'person_id' })
  @Column({
    name: 'person_id',
  })
  personId: number;

  @ManyToOne(() => Bank, (x) => x.bankId)
  @JoinColumn({ name: 'bank_id' })
  @Column({
    name: 'bank_id',
  })
  bankId: number;

  @Column({ name: 'iban', nullable: true })
  iban: string;

  // @Column({ name: 'description', nullable: true })
  // description: string;

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
