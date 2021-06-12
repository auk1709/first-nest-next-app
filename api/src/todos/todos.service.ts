import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoInput } from './todo.input';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.todosRepository.findOne(id);
  }

  async create(data: TodoInput): Promise<Todo> {
    return this.todosRepository.save(data);
  }

  async remove(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
