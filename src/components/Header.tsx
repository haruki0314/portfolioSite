import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Spacer,
  VStack,
  Heading,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ImGithub } from "react-icons/im";
import { SiWantedly } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
export const Header = () => {
  const colorToggle = useColorModeValue("black", "white");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
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

  return (
    <div>
      <VStack p="5">
        <Flex w="100%">
          <Heading color="green.500" ml="8" fontWeight="semibold" size="md">
            Haruki Oba
          </Heading>
          <Spacer />

          <Box>
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
          </Box>
        </Flex>
      </VStack>
    </div>
  );
};
