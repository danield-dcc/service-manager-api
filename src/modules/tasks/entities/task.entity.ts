import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Employee } from 'src/modules/employees/entities/employee.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { TaskEnum } from './task.enum';

@Entity()
export class Task extends BaseEntity {
  @Column()
  name: string;

  @Column()
  dueDate: Date;

  @Column()
  dueForecastDate: Date;

  @Column()
  status: TaskEnum;

  @ManyToOne(() => Employee, (employee) => employee.employeeTasks, {nullable:true, eager: true})
  responsible: Employee;

  @Column()
  responsibleId: string
}
