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
    <html lang="pt-br" style={{width: "100%", minHeight: "100%"}}>
      <body style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100%", height: "auto"}}>
        <ColorModeProvider forcedTheme="light">
          <Provider>
            <Theme className={style.fullScreen} appearance="light">
              <Header/>
              <VStack padding="6rem 0.7rem 4.5rem 0.7rem" as="main" h="100%" w="100%" bgColor="#f6f6f6">
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
