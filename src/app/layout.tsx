"use client"

import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./index.css"
import { Theme } from "@chakra-ui/react";

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
              {children}
              <Footer />
            </Theme>
          </Provider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
