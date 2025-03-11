"use client"

import { VStack, Spinner } from "@chakra-ui/react";

export default function Page() {
  return (
    <VStack h="100%" w="100%" position="fixed" top="0" >
      <Spinner />
    </VStack>
  )
}