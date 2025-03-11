"use client"

import Image from "next/image";
import { Box, Heading, HStack, Text, VStack, Image as ChakraImage } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { meditationData } from "@/assets/data/meditationData";
import userImage from "@/assets/images/userImage/user-image.png"
import ActivityBox, { YouTubeVideoData } from "@/components/ActivityBox";

import style from './style.module.css'
import { yogaData } from "@/assets/data/yogaData";
import { positivePhrasesData } from "@/assets/data/positivePhrasesData";
import Title from "@/components/Title";

export default function Home() {

  return (
    <VStack padding="5rem 0 3.5rem 0">

      <HStack w="100%">
        <Image className={style.userImage} src={userImage} alt="foto de perfil"></Image>
        <Title title="Bem vindo, Fulano!" subtitle="Comece sua jornada de bem-estar mental"/>
      </HStack>

      <ActivityBox urls={meditationData} title="Guias para meditação" subtitle="Aprenda técnicas para relaxamento e mindfulness." />
      <ActivityBox urls={yogaData} title="Guias para yoga" subtitle="Pratique posturas e movimentos para equilíbrio e bem-estar." />
      <ActivityBox urls={positivePhrasesData} title="Frases positivas" subtitle="Reprograme sua mente com palavras poderosas." />

      {/* <VStack>
        <Heading>Guias para yoga</Heading>
        <HStack overflowX="auto">
          {meditationData.map((data, index) => (
            <VStack key={index} >
              <Box >
                <iframe src={`https://www.youtube.com/embed/${data.split("watch")[1].replace("?v=", "")}`} />
              </Box>
            </VStack>
          ))}
        </HStack>
      </VStack> */}

      {/* <VStack>
        <Heading>Inspiração diária</Heading>
        <HStack overflowX="auto">
          {positivePhrasesData.map((data, index) => (
            <VStack key={index} >
              <Box >
                <iframe src={`https://www.youtube.com/embed/${data.split("watch")[1].replace("?v=", "")}`} />
              </Box>
            </VStack>
          ))}
        </HStack>
      </VStack> */}

      {/* <VStack>
        <Heading>Humor recente</Heading>
        {moodData.map((mood, index) => (
          <HStack key={index}>
            <Text>{mood.icone}</Text>
            <VStack>
              <Text>{mood.mood}</Text>
              <Text>{mood.message}</Text>
            </VStack>
          </HStack>
        ))}
      </VStack> */}

    </VStack>
  );
}
