import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import {
  VStack,
  Button,
  Flex,
  IconButton,
  Link,
  Spacer,
  Box,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ImGithub } from "react-icons/im";
import { SiWantedly } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type FormData = {
  email: string;
  text: string;
};

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const colorToggle = useColorModeValue("black", "white");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Head>お仕事依頼フォーム</Head>
      <Box color={colorToggle}>
        <Header />
        <Stack p="100">
          <Text fontSize="xl" color={colorToggle}>
            お仕事依頼フォーム
          </Text>
          <Box>
            <FormControl>
              <FormLabel mt="20px">Email address</FormLabel>
              <Input
                color={colorToggle}
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <Text color={colorToggle}>
                {errors.email && <span>This field is required</span>}
              </Text>

              <FormLabel mt="20px">内容</FormLabel>
              <Input
                color={colorToggle}
                type="text"
                {...register("text", { required: true })}
              />

              <FormHelperText color={colorToggle}>
                We ll never share your email.
              </FormHelperText>
            </FormControl>
          </Box>
          <input type="submit" />
        </Stack>
        <Box mt="auto">
          <Footer />
        </Box>
        <Text fontSize="15px" color={colorToggle}></Text>
      </Box>
    </form>
  );
}
