"use client"

import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { Theme } from "@chakra-ui/react";

import style from "./style.module.css"

import "./index.css"


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
            <Theme className={style.fullScreen} appearance="light" style={{backgroundColor: "#f6f6f6"}}>
              {children}
            </Theme>
          </Provider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
