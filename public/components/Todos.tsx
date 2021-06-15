import { useQuery, gql, NetworkStatus, useMutation } from '@apollo/client';
import styles from '../styles/Home.module.css';
import DelTodoBtn from './DeleteTodo';

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
    <div className={styles.grid}>
      {todos.map(({ id, content }) => (
        <div key={id} className={styles.card}>
          <p>{content}</p>
          <DelTodoBtn id={id} />
        </div>
      ))}
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}
