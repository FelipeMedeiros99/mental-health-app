"use client"

import Image from "next/image";
import { HStack, VStack} from "@chakra-ui/react"

import { meditationData } from "@/assets/data/meditationData";
import userImage from "@/assets/images/userImage/user-image.png"
import ActivityBox from "@/components/ActivityBox";
import { yogaData } from "@/assets/data/yogaData";
import { positivePhrasesData } from "@/assets/data/positivePhrasesData";
import Title from "@/components/Title";

import style from './style.module.css'

export default function Relax() {

  const welcome = (): string =>{
    try{
      const userName = JSON.parse(localStorage.getItem("mentalHealthApp")!).userName
      return userName?`Bem vindo, ${userName}!`: "Bem vindo!"
    }catch(e){
      return "Bem vindo!"
    }
  }

  return (
    <>
      <HStack w="100%">
        <Image className={style.userImage} src={userImage} alt="foto de perfil"></Image>
        <Title title={welcome()} subtitle="Comece sua jornada de bem-estar mental"/>
      </HStack>
      <ActivityBox urls={meditationData} title="Guias para meditação" subtitle="Aprenda técnicas para relaxamento e mindfulness." />
      <ActivityBox urls={yogaData} title="Guias para yoga" subtitle="Pratique posturas e movimentos para equilíbrio e bem-estar." />
      <ActivityBox urls={positivePhrasesData} title="Frases positivas" subtitle="Reprograme sua mente com palavras poderosas." />
    </>
  );
}
