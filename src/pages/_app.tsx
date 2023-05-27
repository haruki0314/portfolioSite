import {
  ThemeOverride,
  extendTheme,
  Box,
  ChakraProvider,
  Theme,
} from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme: ThemeOverride = extendTheme({
    styles: {
      global: {
        body: {
          // bgColor: "rgb(26, 32, 44)",
          color: "white",
        },
        html: {
          height: "100%",
          // bgColor: "rgb(26, 32, 44)",
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        {/* <Nav />*/}
        <Box /*bg="rgb(26, 32, 44)"*/>
          <Component {...pageProps} />
        </Box>
      </RecoilRoot>
    </ChakraProvider>
  );
}
