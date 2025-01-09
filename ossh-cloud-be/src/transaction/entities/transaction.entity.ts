import { Account } from 'src/account/entities/account.entity';
import { ListOfValues } from 'src/list-of-values/entities/list-of-values.entity';
import { LovCategory } from 'src/lov-category/entities/lov-category.entity';
import { User } from 'src/user/entities/user.entity';
import { LID_ACTIVE_ID, LID_CREATED_ID } from 'src/utils/constants';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'transaction' })
export class Transaction {
  @PrimaryGeneratedColumn({ name: 'transaction_id' })
  transactionId: number;

  @ManyToOne(() => Account, (x) => x.accountId)
  @JoinColumn({ name: 'from_account' })
  @Column({ name: 'from_account', nullable: true })
  fromAccountId: number;

  @ManyToOne(() => Account, (x) => x.accountId)
  @JoinColumn({ name: 'to_account' })
  @Column({ name: 'to_account', nullable: true })
  toAccountId: number;

  @Column({ name: 'amount_transfered', nullable: true })
  amountTransfered: number;

  @Column({ name: 'service_charges', nullable: true })
  serviceCharges: number;

  @Column({ name: 'tax_charges', nullable: true })
  taxCharges: number;

  @Column({ name: 'total_amount', nullable: true })
  totalAmount: number;

  // @ManyToOne(() => LovCategory, (LovCategory) => LovCategory.lovCategoryId)
  // @JoinColumn({ name: 'lov_category_id' })
  // @Column({ name: 'lov_category_id' })
  // lovCategoryId: number;

  // @ManyToOne(() => ListOfValues, (Lov) => Lov.listOfValuesId)
  // @JoinColumn({ name: 'lov_status_id' })
  // @Column({
  //   name: 'lov_status_id',
  //   default: LID_ACTIVE_ID,
  // })
  // lovStatusId: number;

  // dml

  @ManyToOne(() => ListOfValues, (lov) => lov.listOfValuesId)
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
