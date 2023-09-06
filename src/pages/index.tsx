import Head from "next/head";
import { Heading, Icon } from "@chakra-ui/react";
import {
  Button,
  Flex,
  IconButton,
  Link,
  Spacer,
  VStack,
  Box,
  Stack,
  Text,
  Circle,
  Container,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Card } from "@/components/molecules/Card";

import { Header } from "../components/Header";
import { Image } from "@chakra-ui/image";
import { Footer } from "../components/Footer";
import { ReactElement } from "react";

import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

export default function App() {
  const displayCircle = useBreakpointValue({ base: "none", md: "block" });
  const boxSize = useBreakpointValue({ base: "15rem", md: "20rem" }); // 例: Boxのサイズを変更
  const boxMargin = useBreakpointValue({ base: "1rem", md: "3rem" }); // 例: Boxのマージンを変更
  const boxMarginTop = useBreakpointValue({ base: "2", md: "3" }); // 例: Boxのマージンを変更
  const boxPlace = useBreakpointValue({ base: "", md: "center" });
  const buttonAlignment = useBreakpointValue({
    base: "flex-end",
    md: "flex-start",
  });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" }) as
    | "column"
    | "row"
    | undefined;
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const colorToggle = useColorModeValue("black", "white");

  return (
    <Box>
      <Head>harukis portfolio site</Head>
      <Header />
      <Stack>
        {/* <Circle
          position="absolute"
          bg="green.100"
          opacity="0.1"
          size="310px"
          alignSelf="flex-start"
          display={displayCircle}
        /> */}
        <Flex
          direction={flexDirection}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            alignSelf="center"
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="300px"
            m={boxMargin}
            zIndex={1}
            src="https://avatars.githubusercontent.com/u/46438353?v=4"
            alt=""
          />
          <Box m={boxMargin} maxW={boxSize} alignSelf="flex-middle">
            <Text fontSize="4xl" fontWeight="bold" color={colorToggle}>
              Haruki oba
            </Text>
            <Text color={colorToggle}>
              I am a Back-End web developer. I am interested in finance and IT.
            </Text>
            <Flex justifyContent={buttonAlignment} mt="2">
              <Button
                color={colorToggle}
                // onClick={() => {
                //   window.open("/contactForm");
                // }}
              >
                Hire Me
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Stack>

      <Box p={4} color={colorToggle}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            What I Can Do
          </Heading>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={"FrontEnd"}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                "HTML, CSS (SCSS), JavaScript, React,Next.jsなどのフロントエンド技術にも精通しており、ウェブサイトやアプリケーションのUI部分を作成するスキル"
              }
              href={"#"}
            />
            <Card
              heading={"BackEnd"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                "Java (SpringBoot2)・NestJSをはじめとするWeb開発技術"
              }
              href={"#"}
            />
            <Card
              heading={"DataBase"}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={" MySQLやFirebaseなどのデータベースの技術"}
              href={"#"}
            />
          </Flex>
        </Container>
      </Box>

      <Box mt="auto">
        <Footer />
      </Box>
    </Box>
  );
}

{
  /* <Heading as="h2" size="xl" noOfLines={1}>
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
        </Stack> */
}
{
  /* <Heading my={500} as="h2" size="xl" noOfLines={1}>
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
        </Link> */
}
{
  /* </Vstack> */
}
{
  /* <Container maxW={"3xl"} id="about">
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
      </Container> */
}
