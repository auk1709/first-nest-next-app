import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field()
  content: string;
}
