import { useMutation, gql } from '@apollo/client';
import { FC } from 'react';
import { Todo } from '../types';
import { css } from '@emotion/react';

const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

const DelTodoBtn: FC<{ id: number }> = ({ id }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    update(cache) {
      cache.modify({
        fields: {
          getAllTodos(existingTodos: Todo[], { readField }) {
            console.log(existingTodos);
            return existingTodos.filter(
              (todoRef) => id !== readField('id', todoRef)
            );
          },
        },
      });
    },
  });
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        deleteTodo({ variables: { id: Number(id) } });
      }}
      css={btn}
    >
      Done
    </button>
  );
};

export default DelTodoBtn;

const btn = css`
  display: inline-block;
  padding: 1rem;
  background: #fff;
  border: 2px solid #1da1f2;
  color: #1da1f2;
  border-radius: 2rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #1da1f2;
    color: #fff;
  }
`;
