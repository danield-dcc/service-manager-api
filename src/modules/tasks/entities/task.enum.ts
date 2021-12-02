import { registerEnumType } from '@nestjs/graphql';

export enum TaskEnum {
  OPEN = 'Aberta',
  INPROGRESS = 'Em progresso',
  END = 'Finalizada',
}

registerEnumType(TaskEnum, {
  name: 'TaskEnum',
});
