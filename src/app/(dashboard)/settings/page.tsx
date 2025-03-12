"use client"

import { Button, Heading, VStack } from "@chakra-ui/react";

import ContainerBox from "@/components/ContainerBox";
import { useRouter } from "next/navigation";
import Title from "@/components/Title";

export default function Comunity() {
  const router = useRouter()
  return (
    <VStack w="100%" h="100%">
      <ContainerBox >
        <Title title="Configurações"/>
        <Button marginTop="4rem" onClick={()=>router.push("sign-in")} w="100%">Logout</Button>
      </ContainerBox>
    </VStack>
  )
} 