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
      <body style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100%"}}>
        <ColorModeProvider forcedTheme="light">
          <Provider>
            <Theme className={style.fullScreen} appearance="light">
              {children}
            </Theme>
          </Provider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
