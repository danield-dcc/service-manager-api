import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Employee } from 'src/modules/employees/entities/employee.entity';
import { Service } from 'src/modules/services/entities/service.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
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

  @ManyToOne(() => Employee, (employee) => employee.employeeTasks, {
    nullable: true,
    eager: true,
  })
  responsible: Employee;

  @Column()
  responsibleId: string;

  @ManyToMany(() => Service, (services) => services.tasks, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  services: Service[];
}
