import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Task } from 'src/modules/tasks/entities/task.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Service extends BaseEntity {
  @Column()
  name: string;

  @Column()
  dueForecastDate: Date;

  @ManyToMany(() => Task, (tasks) => tasks.services, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  tasks: Task[];
}
