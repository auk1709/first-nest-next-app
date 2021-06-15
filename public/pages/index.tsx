import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ClientOnly from '../components/ClientOnly';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

export default function ClientSide() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo by Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Let's manage tasks!!!</h1>
        <ClientOnly>
          <Todos />
          <AddTodo />
        </ClientOnly>
      </main>

      <footer className={styles.footer}>
        <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
