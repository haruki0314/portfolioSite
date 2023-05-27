import Head from "next/head";
import {
  Button,
  Flex,
  IconButton,
  Link,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import { Box, Heading, Stack } from "@chakra-ui/react";
import { ImGithub } from "react-icons/im";
import { SiWantedly } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const colorToggle = useColorModeValue("black", "white");
  return (
    <Box>
      <Head>harukis portfolio site</Head>
      <VStack p="5">
        <Flex w="100%">
          <Heading color="green.500" ml="8" fontWeight="semibold" size="md">
            Haruki Oba
          </Heading>
          <Spacer />
          <IconButton
            icon={<ImGithub />}
            color={colorToggle}
            size="md"
            isRound={true}
            aria-label={""}
            onClick={() => {
              window.open("https://github.com/haruki0314");
            }}
          />
          <IconButton
            icon={<SiWantedly />}
            size="md"
            ml={2}
            color={colorToggle}
            isRound={true}
            aria-label={""}
            onClick={() => {
              window.open("https://www.wantedly.com/id/haruki_oba");
            }}
          />
          <IconButton
            icon={<BsInstagram />}
            size="md"
            ml={2}
            color={colorToggle}
            isRound={true}
            aria-label={""}
            onClick={() => {
              window.open("https://www.instagram.com/haruki_1403/");
            }}
          />
          <IconButton
            icon={isDark ? <FaSun /> : <FaMoon />}
            color={colorToggle}
            size="md"
            ml={8}
            isRound={true}
            aria-label={""}
            onClick={toggleColorMode}
          />
        </Flex>
        <Header />

        {/* <Heading as="h2" size="xl" noOfLines={1}>
          技術スタック
        </Heading>
        <Stack>
          <Text fontSize="xl">React.js/Next.js</Text>
        </Stack>
        <Heading as="h2" size="xl" noOfLines={1}>
          経歴
        </Heading>
        <Stack>
          <Text fontSize="xl">
            2021年に株式会社メンバーズに新卒で入社し2023年5月に退職、現在はフリーランスとして活躍中
          </Text>
        </Stack>
        <Heading as="h2" size="xl" noOfLines={1}>
          趣味
        </Heading>
        <Stack>
          <Text fontSize="xl">外食が好きです🍜</Text>
        </Stack> */}
        {/* <Heading my={500} as="h2" size="xl" noOfLines={1}>
          連絡先
        </Heading>
        <Stack>
          <Text fontSize="xl">
            こちらにご連絡ください：2021renraku@gmail.com
          </Text>
        </Stack>
        <Heading as="h2" size="xl" noOfLines={1}>
          リンク
        </Heading>
        <Link href="https://chakra-ui.com" isExternal>
          Chakra Design system <ExternalLinkIcon mx="2px" />
        </Link> */}
        {/* </Vstack> */}
        {/* <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`red.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {profile.about}
          </Text>
        </Stack>
      </Container> */}
      </VStack>

      <Box mt="auto">
        <Footer />
      </Box>
    </Box>
  );
}
