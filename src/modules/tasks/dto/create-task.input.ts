import { InputType } from '@nestjs/graphql';
import { Employee } from 'src/modules/employees/entities/employee.entity';
import { TaskEnum } from '../entities/task.enum';

@InputType()
export class CreateTaskInput {
  name?: string;

  dueDate?: Date;

  dueForecastDate?: Date;

  status?: TaskEnum;

  responsibleId?: string
  
}
