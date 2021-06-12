import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';
import { TodoInput } from './todo.input';

@Resolver()
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query((returns) => [Todo])
  async getAllTodos(): Promise<Todo[]> {
    return await this.todosService.findAll();
  }

  @Query((returns) => Todo)
  async getTodoById(@Args('id', { type: () => Int }) id: number) {
    return await this.todosService.findOne(id);
  }

  @Mutation((returns) => Todo)
  async addTodo(@Args('newTodo') newTodo: TodoInput) {
    return await this.todosService.create(newTodo);
  }

  @Mutation((returns) => Todo, { nullable: true })
  async deleteTodo(@Args('id', { type: () => Int }) id: number) {
    return await this.todosService.remove(id);
  }
}
