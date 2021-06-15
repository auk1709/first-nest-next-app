/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import ClientOnly from '../components/ClientOnly';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import { css } from '@emotion/react';

export default function ClientSide() {
  return (
    <div>
      <Head>
        <title>Todo by Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main css={styles.container}>
        <h1 css={styles.title}>Let's manage tasks!!!</h1>
        <ClientOnly>
          <AddTodo />
          <Todos />
        </ClientOnly>
      </main>
    </div>
  );
}

const styles = {
  container: css`
    max-width: 800px;
    margin: auto;
    padding: 1rem;
  `,
  title: css`
    text-align: center;
  `,
};
