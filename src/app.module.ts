import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { EmployeesModule } from './modules/employees/employees.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(),
    EmployeesModule,
    TasksModule,
    ServicesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
