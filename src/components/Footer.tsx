import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export const Footer = () => {
  const footerBg = useColorModeValue("green.400", "green.400");
  const footerColor = useColorModeValue("black", "white");

  return (
    <Box bg={footerBg} color={footerColor} py="3">
      <Flex
        justify="space-between"
        alignItems="center"
        maxW="1200px"
        margin="0 auto"
        px={4}
      >
        {/* <Text>&copy; {new Date().getFullYear()} Your Company Name</Text> */}
        {/* <Flex>
          <Link href="#" mx={3}>
            Link 1
          </Link>
          <Link href="#" mx={3}>
            Link 2
          </Link>
          <Link href="#" mx={3}>
            Link 3
          </Link>
        </Flex> */}
      </Flex>
    </Box>
  );
};
