import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {
  name?: string;

  dueForecastDate?: Date;
}
