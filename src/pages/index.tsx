import { Flex, Input, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Input
          name="email"
          type="email"
          focusBorderColor="pink.500"
      />

        <Input
          name="password"
          type="password"
          focusBorderColor="pink.500" 
      />

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
      >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
