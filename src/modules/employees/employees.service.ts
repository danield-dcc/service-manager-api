import { QueryService } from "@nestjs-query/core";
import { TypeOrmQueryService } from "@nestjs-query/query-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";

@QueryService(Employee)
export class EmployeesService extends TypeOrmQueryService<Employee> {
  constructor(
    @InjectRepository(Employee)
    private repository: Repository<Employee>,
  ) {
    super(repository, { useSoftDelete: true })
  }
}