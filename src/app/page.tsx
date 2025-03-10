"use client"

import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

import { meditationData } from "@/assets/data/meditationData";
import navbarData from "@/assets/data/navbarData";
import Link from "next/link";
import { moodData } from "@/assets/data/humorData";
import { positivePhrasesData } from "@/assets/data/positivePhrasesData";

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
  const [linksData, setLinksData] = useState<YouTubeVideoData[]>([])

  useEffect(() => {
    (async () => {
      try {
        const videosData = meditationData.map(url => axios.get<YouTubeVideoData>(`https://noembed.com/embed?url=${url}`))
        const responses = await Promise.all(videosData);
        const result: YouTubeVideoData[] = responses.map(response => response.data);
        setLinksData(result)
      } catch (e) {
        alert("Erro ao carregar videos")
      }
    })()
  }, [])

  return (
    <VStack>
      <HStack>
        {/* <Image/> */}
        <VStack>
          <Heading>Bem vindo [Fulano]!</Heading>
          <Text>Comece sua jornada de bem-estar mental</Text>
        </VStack>
      </HStack>


      <VStack>
        <Heading>Guias para meditação</Heading>
        <Text>Descubra maneiras de melhorar seu bem-estar</Text>
        <HStack overflowX="auto">
          {linksData.map((data, index) => (
            <VStack key={index} >
              <Box >
                <iframe src={`https://www.youtube.com/embed/${data.url.split("watch")[1].replace("?v=", "")}`} />
              </Box>
              <Text>{data.title}</Text>
            </VStack>
          ))}
        </HStack>
      </VStack>

      <VStack>
        <Heading>Guias para yoga</Heading>
        <HStack overflowX="auto">
          {linksData.map((data, index) => (
            <VStack key={index} >
              <Box >
                <iframe src={`https://www.youtube.com/embed/${data.url.split("watch")[1].replace("?v=", "")}`} />
              </Box>
              <Text>{data.title}</Text>
            </VStack>
          ))}
        </HStack>
      </VStack>

      <VStack>
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
      </VStack>

      <VStack>
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
      </VStack>

    </VStack>
  );
}
