import { gql } from '@apollo/client';

export const GET_TODO = gql`
  query {
    todos: getAllTodos {
      id
      content
    }
  }
`;
