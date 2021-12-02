import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { TaskDTO } from 'src/modules/tasks/dto/task.dto';

@ObjectType('Employee')
@FilterableOffsetConnection('employeeTasks', () => TaskDTO, { nullable: true })
export class EmployeeDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  cpf: string;
}
