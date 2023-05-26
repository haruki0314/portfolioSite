import Head from "next/head";

import { Box, Heading, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function App() {
  return (
    <>
      <Head>harukis portfolio site</Head>
      <Box maxW="960" mx="auto">
        <Heading m={5} textAlign={["center"]} as="h1" size="2xl" noOfLines={1}>
          Harukis Portfolio
        </Heading>
        <Box m="20px">
          <Tabs>
            <TabList>
              <Tab>名前</Tab>
              <Tab>技術スタック</Tab>
              <Tab>経歴</Tab>
              <Tab>趣味</Tab>
              <Tab>連絡先</Tab>
            </TabList>
          </Tabs>
        </Box>
        <Heading as="h2" size="xl" noOfLines={1}>
          名前
        </Heading>
        <Stack>
          <Text fontSize="xl">大場 春希</Text>
        </Stack>
        <Heading as="h2" size="xl" noOfLines={1}>
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
        </Stack>
        <Heading as="h2" size="xl" noOfLines={1}>
          連絡先
        </Heading>
        <Stack>
          <Text fontSize="xl">
            こちらにご連絡ください：2021renraku@gmail.com
          </Text>
        </Stack>
      </Box>
    </>
  );
}
