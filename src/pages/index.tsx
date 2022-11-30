import { Link, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { getAuthorization } from "../utils/authenticate";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createNewUser = async () => {
    const accessToken = await getAuthorization();

    const { data: newUser } = await axios.post(
      "http://localhost:8096/Users/New",
      {
        Name: username,
        Password: password,
      },
      {
        headers: {
          "X-Emby-Token": accessToken,
        },
      }
    );
  };

  return (
    <Stack alignItems="center" justifyContent="center" p={20} minH="100vh">
      <Stack w="30%" rounded="lg" p={4} bgColor="gray.600" gap={4}>
        <Link href="/new">Criar usuário</Link>
        <Link href="/list">Listar usuários</Link>
      </Stack>
    </Stack>
  );
};

export default Index;
