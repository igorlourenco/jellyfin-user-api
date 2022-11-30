import {
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAuthorization } from "../utils/authenticate";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const router = useRouter();

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

    const { data } = await axios.post("/api/users", {
      Name: username,
      Password: password,
    });

    toast({
      title: "Usuário criado com sucesso",
      description: `O usuário ${newUser.Name} foi criado com sucesso`,
      status: "success",
    });

    router.push("/");
  };

  return (
    <Stack alignItems="center" justifyContent="center" p={20} minH="100vh">
      <Stack w="30%" rounded="lg" p={4} bgColor="gray.600" gap={4}>
        <Heading textAlign="center">Criar novo usuário</Heading>
        <Stack>
          <Text>Nome (apenas letras e números)</Text>
          <Input
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
            placeholder="zeca_urubu"
          />
        </Stack>
        <Stack>
          <Text>Senha</Text>
          <Input
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder="******"
            type="password"
          />
        </Stack>
        <Button onClick={createNewUser} colorScheme="blue">
          Criar
        </Button>
      </Stack>
    </Stack>
  );
};

export default NewUser;
