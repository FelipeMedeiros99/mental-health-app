"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Theme } from "@chakra-ui/react"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <Header/>
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
