"use client"

import { VStack, Spinner } from "@chakra-ui/react";
import Image from "next/image";

import icone from "@/assets/images/footerImages/icon.png"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  useEffect(()=>{
    router.push("/sign-in")
  }, [])  

  return (
    <VStack h="100%" w="100%" top="0" alignItems="center" justifyContent="center">
      <Spinner w="10rem" h="10rem" zIndex="1" color="#5a8078" fontWeight="700"/>
      <Image src={icone} alt="Icone app" style={{position: "fixed", height: "100%", width: "auto", objectFit: "cover"}}/>
    </VStack>
  )
}