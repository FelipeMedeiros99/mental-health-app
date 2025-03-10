"use client"

import Image from "next/image";
import { Box, Heading, HStack, Text, VStack, Image as ChakraImage } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { meditationData } from "@/assets/data/meditationData";
import navbarData from "@/assets/data/navbarData";
import { moodData } from "@/assets/data/humorData";
import { positivePhrasesData } from "@/assets/data/positivePhrasesData";
import style from './style.module.css'

import userImage from "@/assets/images/userImage/user-image.png"


interface YouTubeVideoData {
  url: string;
  thumbnail_height: number;
  version: string;
  author_url: string;
  thumbnail_url: string;
  author_name: string;
  title: string;
  height: number;
  provider_url: string;
  type: string;
  html: string;
  thumbnail_width: number;
  width: number;
  provider_name: string;
}


export default function Home() {
  const [meditationMetadata, setMeditationMetadata] = useState<YouTubeVideoData[]>([])

  console.log(meditationMetadata)

  useEffect(() => {
    (async () => {
      try {
        const videosData = meditationData.map(url => axios.get<YouTubeVideoData>(`https://noembed.com/embed?url=${url}`))
        const responses = await Promise.all(videosData);
        const result: YouTubeVideoData[] = responses.map(response => response.data);
        setMeditationMetadata(result)
      } catch (e) {
        alert("Erro ao carregar videos")
      }
    })()
  }, [])


  return (
    <VStack padding="5rem 0 3.5rem 0">

      <HStack>
        <Image className={style.userImage} src={userImage} alt="foto de perfil"></Image>
        <VStack alignItems="flex-start">
          <Heading>Bem vindo [Fulano]!</Heading>
          <Text>Comece sua jornada de bem-estar mental</Text>
        </VStack>
      </HStack>


      <VStack w="100%">
        <Heading>Guias para meditação</Heading>
        <Text>Descubra maneiras de melhorar seu bem-estar</Text>
        <HStack className={style.containerLinks}>
          {meditationMetadata.map((data, index) => (
            <Link key={index} className={style.boxLink} href={data.url} target="_blank">
              <VStack className={style.imageBox}>
                <ChakraImage className={style.image} src={data.thumbnail_url} alt={data.title} />
              </VStack>
              <Text padding="0 1rem 0 1rem">{data.title.substring(0, 1).toLocaleUpperCase()}{data.title.substring(1, 40).toLocaleLowerCase()}...</Text>
            </Link>
          ))}
        </HStack>
      </VStack>

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
