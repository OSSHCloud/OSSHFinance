import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ListOfValuesModule } from './list-of-values/list-of-values.module';
import { LovCategoryModule } from './lov-category/lov-category.module';
import { BankModule } from './bank/bank.module';
import { TransactionModule } from './transaction/transaction.module';
import { AccountModule } from './account/account.module';
// import { UserLogModule } from './user-log/user-log.module';
import { OrganizationModule } from './organization/organization.module';
import { PackageModule } from './package/package.module';
import { CountryModule } from './country/country.module';
import { PersonModule } from './people/person.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    ListOfValuesModule,
    LovCategoryModule,
    BankModule,
    TransactionModule,
    AccountModule,
    // UserLogModule,
    OrganizationModule,
    PackageModule,
    CountryModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
