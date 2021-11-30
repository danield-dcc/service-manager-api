import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  name: string;
  cpf: string;
}
