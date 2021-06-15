import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

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
  const [addTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { content: input } });
          setInput('');
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
