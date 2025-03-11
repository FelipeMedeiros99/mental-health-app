"use client"

import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { Theme, VStack } from "@chakra-ui/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./index.css"
import style from "./style.module.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ColorModeProvider forcedTheme="light">
          <Provider>
            <Theme className={style.fullScreen} appearance="light">
              <Header/>
              <VStack padding="6rem 0.7rem 3.5rem 0.7rem" as="main" h="100%" w="100%">
                {children}
              </VStack>
              <Footer />
            </Theme>
          </Provider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
