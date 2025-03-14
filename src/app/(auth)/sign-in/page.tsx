"use client"

import { Button, Field, HStack, Input, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import ContainerBox from "@/components/ContainerBox";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import icone from "@/assets/images/logo.png"
import facebook from "@/assets/images/loginImages/facebook.png"
import google from "@/assets/images/loginImages/google.png"


interface Name{
  name: string
}

export interface MentalHeathDataInterface{
  userName: string;
  moods: {
    createdAt: string;
    mood: string;
    text: string;
    icone: string;
    userName: string;
  }[]
}

export default function SignIn() {
  const {register, handleSubmit} = useForm<Name>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Name> = (data) => {
    let mentalHeathData: MentalHeathDataInterface = {userName: data.name.trim(), moods: []};
    let localStorageData = localStorage.getItem("mentalHealthApp");

    if(!localStorageData){
      localStorage.setItem("mentalHealthApp", JSON.stringify(mentalHeathData));
    }else{
      const localStorageParsed: MentalHeathDataInterface = JSON.parse(localStorageData);

      if(!localStorageParsed.userName || !localStorageParsed.moods){
        localStorage.setItem("mentalHealthApp", JSON.stringify(mentalHeathData));
      }else{
        localStorage.setItem("mentalHealthApp", JSON.stringify({...localStorageParsed, userName: mentalHeathData.userName}))
      }
    }

    router.push("/home")
  }


  return (
    <VStack h="100%" w="100%" padding="1rem">
      <Image src={icone} alt="Icone app" style={{width: "10rem", maxWidth: "100%", objectFit: "cover"}}/>

        <Title
          textAlign="center"
          title="Seja bem-vindo! 😊"
          subtitle="Efetue seu login"
          alignItems="center"
          fontSize="1rem"
        />

        <VStack as="form" w="100%" alignItems="flex-start" onSubmit={handleSubmit(onSubmit)}>
          <Field.Root>
            <Field.Label>
              Digite seu nome abaixo:
            </Field.Label>
            <Input required placeholder="Seu nome aqui..." {...register("name")}/>
          </Field.Root>
          <Button type="submit" w="100%">Entrar</Button>
        </VStack>

        <HStack w="10rem" justifyContent="space-between" marginTop="3rem">
          <Image src={facebook} alt="login com o facebook" style={{width: "2rem", padding: "0.2rem", backgroundColor: "white", borderRadius: "5rem"}}/>
          <Image src={google} alt="login com o gmail" style={{width: "2rem", padding: "0.2rem", backgroundColor: "white", borderRadius: "5rem"}}/>
        </HStack>

      <Footer />
    </VStack>
  );
}
