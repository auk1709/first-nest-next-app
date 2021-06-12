import { useQuery, gql } from '@apollo/client';
import styles from '../styles/Home.module.css';

type Todo = {
  id: number;
  content: string;
};

const QUERY = gql`
  query {
    todos: getAllTodos {
      id
      content
    }
  }
`;

export default function Todos() {
  const { data, loading, error, refetch, networkStatus } = useQuery(QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === networkStatus.refetch) return 'Refetching!';
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const todos: Todo[] = data.todos;
  return (
    <div className={styles.grid}>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.card}>
          <p>{todo.content}</p>
        </div>
      ))}
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}
