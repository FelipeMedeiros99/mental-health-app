import ContainerBox from "@/components/ContainerBox";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import { VStack } from "@chakra-ui/react";

export default function SignIn(){
  return(
    <VStack h="100%" w="100%" alignItems="center" justifyContent="center">
      <Title title="Olá, seja bem vindo! 😀" subtitle="Se apresente para nós" alignItems="center"/>
      <Footer/>
    </VStack>
  )
}