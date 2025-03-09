import navbarData from "@/assets/data/navbarData";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image";

export default function Home() {
  return (
   <VStack>
     
     <HStack>
      {/* <Image/> */}
      <VStack>
        <Heading>Bem vindo [Fulano]!</Heading>
        <Text>Comece sua jornada de bem-estar mental</Text>
      </VStack>
      
      <HStack>
        {navbarData.map((data, index) => (
          <VStack key={index}>
            <VStack>
              <Image src={data.image} alt={data.title}/>
            </VStack>
            <Text>{data.title}</Text>
          </VStack>
        ))}
      </HStack>
     </HStack>
   </VStack>
  );
}
