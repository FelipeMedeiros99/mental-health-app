"use client"

import { VStack } from "@chakra-ui/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import style from "./style.module.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <VStack className={style.fullScreen}>
      <Header />
      <VStack padding="6rem 0.7rem 4.5rem 0.7rem" as="main" minH="100%" w="100%">
        {children}
      </VStack>
      <Footer />
    </VStack>
  );
}
