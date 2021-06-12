import { Module } from '@nestjs/common';
import { TodosModule } from './todos.module';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';

@Module({
  imports: [TodosModule],
  providers: [TodosService, TodosResolver],
})
export class TodoHttpModule {}
