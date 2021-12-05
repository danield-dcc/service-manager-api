import {
  FilterableField,
  FilterableOffsetConnection,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { EmployeeDTO } from 'src/modules/employees/dto/employee.dto';
import { ServiceDTO } from 'src/modules/services/dto/service.dto';
import { TaskEnum } from '../entities/task.enum';

@ObjectType('Task')
@FilterableRelation('responsible', () => EmployeeDTO, { nullable: true })
@FilterableOffsetConnection('services', () => ServiceDTO, { nullable: true })
export class TaskDTO extends BaseDTO {
  @FilterableField({ nullable: true })
  name: string;

  @FilterableField({ nullable: true })
  dueDate: Date;

  @FilterableField({ nullable: true })
  dueForecastDate: Date;

  @FilterableField(() => TaskEnum, { nullable: true })
  status: TaskEnum;
}
