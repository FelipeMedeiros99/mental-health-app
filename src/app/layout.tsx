"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Theme } from "@chakra-ui/react"

import "./index.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ChakraProvider value={defaultSystem}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
