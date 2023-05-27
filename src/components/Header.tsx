import React from "react";
import { Button } from "@chakra-ui/button";
import {
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";

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
      <Stack>
        <Circle
          position="absolute"
          bg="green.100"
          opacity="0.1"
          size="310px"
          alignSelf="flex-start"
          display={displayCircle}
        />
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
              I am a freelance engineer. I mainly participate in both front-end
              and back-end work
            </Text>
            <Flex justifyContent={buttonAlignment}>
              <Button
                mt={boxMarginTop}
                color={colorToggle}
                onClick={() => window.open("https://github.com/haruki0314")}
              >
                Hire Me
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </div>
  );
};
