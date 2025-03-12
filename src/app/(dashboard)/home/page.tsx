"use client"

import { Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import Logo from "@/assets/images/homeImage/relax-image.gif"

import style from "./style.module.css"

export default function Page(){
  const userName = (): string =>{
    try{
      const userName = JSON.parse(localStorage.getItem("mentalHealthApp")!).userName
      return userName || "Bem vindo"
    }catch(e){
      return "Bem vindo"
    }
  }
  return (
    <VStack h="100%" w="100%" position="fixed" top="0" >
      <Image className={style.image} src={Logo} alt="Logo do app" /> 
      <VStack position="absolute" top="50%" translate="0 -50%" color="white" w="100%" maxW="30rem" padding="0.7rem" textAlign="center" zIndex="2">
        <Text fontSize="2rem" fontWeight="bold">
          Olá, {userName()}! 👋
        </Text>
        <Text fontSize="1.5rem">Seja bem-vindo ao nosso app de bem-estar!</Text>
        <Text fontSize="1rem">
          Aqui, queremos ajudar você a cultivar uma mente mais leve e equilibrada, 
          por meio de práticas diárias de autocuidado e mentalização. 💙
        </Text>
      </VStack>
    </VStack>
  )
}