"use client"

import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./index.css"
import { Theme, VStack } from "@chakra-ui/react";

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
            <Theme appearance="light">
              <Header/>
              <VStack padding="6rem 0 3.5rem 0" as="main">
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
