import {
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get("/api/users");

      setUsers(data.data);

      console.log(data.data);
    };
    getUsers();
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center" p={20} minH="100vh">
      <Stack w="30%" rounded="lg" p={4} bgColor="gray.600" gap={4}>
        <Heading textAlign="center">Lista de usuários</Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Senha</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user._id}>
                <Td>
                  <Text>{user.Name}</Text>
                </Td>
                <Td>
                  <Text>{user.Password}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Link href="/">Voltar</Link>
      </Stack>
    </Stack>
  );
};

export default ListUsers;
