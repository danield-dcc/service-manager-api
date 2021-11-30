import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { EmployeeDTO } from './dto/employee.dto';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Employee])],
      services: [EmployeesService],
      resolvers: [
        {
          DTOClass: EmployeeDTO,
          ServiceClass: EmployeesService,
          EntityClass: Employee,
          CreateDTOClass: CreateEmployeeInput,
          UpdateDTOClass: UpdateEmployeeInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [EmployeesService],
})
export class EmployeesModule {}
