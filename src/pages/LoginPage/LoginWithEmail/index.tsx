import { Button, Input } from "@chakra-ui/react";
import { FormEvent } from "react";
import { Form } from "react-router-dom";

import { useUserStore } from "entities/user/model";

const LoginWithEmail = () => {
  const setToken = useUserStore((state) => state.setToken);
  const setName = useUserStore((state) => state.setName);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // const formData = new FormData(event.target)

    console.log(event);
    // const email

    // await logInWithEmailAndPassword(email, password, setName, setToken)}
  };

  return (
    <Form onSubmit={(event) => handleSubmit}>
      <Button>Log in with email</Button>
      <Input />
      <Button type="button">Log in with email</Button>
    </Form>
  );
};