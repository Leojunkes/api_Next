import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState(1);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskEmail, setNewTaskEmail] = useState('');

  // function teste(e){
  //   e.preventDefault();
  //   axios.post('/api/hello',{name})
  // }

  function hadleCreateTask(e) {
    e.preventDefault();
    const newTask = {
      id: Math.random().toFixed(1),
      name: newTaskName,
      email: newTaskEmail,
    };
    if (!newTaskName) {
      return;
    }
    if (!newTaskEmail) {
      return;
    }
    setUsers((oldstate) => [...oldstate, newTask]);

    alert('salvo com sucesso!');

    localStorage.setItem('users', JSON.stringify(users));
    setNewTaskName('.');
    setNewTaskEmail('.');
  }
  function removeTasks(id) {
    const deleteTasks = users.filter((task) => task.id !== id);
    setUsers(deleteTasks);
  }
  function handleGetUsers() {
    const localStorageTasks = JSON.parse(localStorage.getItem('users'));
    const tasks =
      localStorage.getItem('users') !== null ? localStorageTasks : [];
    console.log(tasks);

    setUsers([...tasks]);
    // setUsers((users) => [...users, tasks])!==null?tasks:[];
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column" as="form" onSubmit={hadleCreateTask}>
        <Input
          placeholder="Nome"
          value={newTaskName}
          type="text"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={newTaskEmail}
          type="text"
          onChange={(e) => setNewTaskEmail(e.target.value)}
        />
        <Button colorScheme="pink" size="md" type="submit">
          submit
        </Button>

        <Button
          onClick={handleGetUsers}
          colorScheme="red"
          size="md"
          type="button"
        >
          Buscar dados
        </Button>
        <Table>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>

          {users.map((u, key) => (
            <Tbody key={key}>
              <Tr>
                <Td>{u.name}</Td>
                <Td>{u.email}</Td>
                <Td>
                  <Button
                    type="button"
                    border="none"
                    w="16"
                    size="sm"
                    colorScheme="red"
                    onClick={() => removeTasks(u.id)}
                    ml="1"
                  >
                    Excluir
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Flex>
    </div>
  );
}