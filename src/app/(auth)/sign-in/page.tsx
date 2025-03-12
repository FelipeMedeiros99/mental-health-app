"use client"

import { Button, Field, Input, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import ContainerBox from "@/components/ContainerBox";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import icone from "@/assets/images/footerImages/icon.png"
import { useRouter } from "next/navigation";

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
    <VStack h="100%" w="100%" alignItems="center" justifyContent="center" padding="1rem" backgroundImage={"./icon.png"}>
      <Image src={icone} alt="Icone app" style={{position: "fixed", height: "100%", width: "auto", objectFit: "cover"}}/>
      <ContainerBox zIndex="2">
        <Title
          textAlign="center"
          title="Seja muito bem-vindo! 😊"
          subtitle="Estamos felizes em te receber. Como podemos te chamar?"
          alignItems="center"
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
      </ContainerBox>
      <Footer />
    </VStack>
  );
}
