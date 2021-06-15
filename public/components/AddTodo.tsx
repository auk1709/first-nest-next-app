import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { css } from '@emotion/react';

const ADD_TODO = gql`
  mutation AddTodo($content: String!) {
    addTodo(newTodo: { content: $content }) {
      id
      content
    }
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      cache.modify({
        fields: {
          getAllTodos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: addTodo,
              fragment: gql`
                fragment NewTodo on Todo {
                  id
                  content
                }
              `,
            });
            return [...existingTodos, newTodoRef];
          },
        },
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { content: input } });
          setInput('');
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          css={styles.input}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;

const styles = {
  input: css`
    padding: 0.5rem 1rem;
    border: 1px solid #808080;
    font-size: 1rem;
  `,
};
