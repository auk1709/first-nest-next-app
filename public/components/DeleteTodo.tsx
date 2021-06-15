import { useMutation, gql } from '@apollo/client';
import { FC } from 'react';

const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

const DelTodoBtn: FC<{ id: number }> = ({ id }) => {
  const [deleteTodo] = useMutation(DELETE_TODO);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        deleteTodo({ variables: { id: Number(id) } });
      }}
    >
      Done
    </button>
  );
};

export default DelTodoBtn;
