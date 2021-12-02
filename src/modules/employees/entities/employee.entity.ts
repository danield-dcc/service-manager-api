import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Task } from 'src/modules/tasks/entities/task.entity';
import {Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Employee extends BaseEntity{
  @Column()
  name: string;

  @Column()
  cpf: string;

  @OneToMany(() => Task, (tasks) => tasks.responsible)
  employeeTasks: Task[]
}
