import { useQuery, NetworkStatus } from '@apollo/client';
import DelTodoBtn from './DeleteTodo';
import { GET_TODO } from '../queries';
import { Todo } from '../types';
import { css } from '@emotion/react';

export default function Todos() {
  const { data, loading, error, refetch, networkStatus } = useQuery(GET_TODO, {
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === NetworkStatus.refetch) return <h2>Refetching!</h2>;
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const todos: Todo[] = data.todos;
  return (
    <div>
      {todos.map(({ id, content }) => (
        <div key={id} css={styles.todo}>
          <p>{content}</p>
          <DelTodoBtn id={id} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  todo: css`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid #c0c0c0;
  `,
};
