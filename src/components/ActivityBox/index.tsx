"use client"

import { HStack, Text, VStack, Image } from "@chakra-ui/react";
import Link from "next/link";

import style from "./style.module.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title";

export interface YouTubeVideoData {
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

interface ActivityBoxInterface {
  urls: string[];
  title: string;
  subtitle: string;
}

export default function ActivityBox({ urls, title, subtitle }: ActivityBoxInterface) {
  const [youtubeMetadata, setYoutubeMetadata] = useState<YouTubeVideoData[]>([])
  const [isDataLoading, setIsDataLoading] = useState(true)
  useEffect(() => {
    (async () => {
      setIsDataLoading(true)
      try {
        const videosData = urls.map(url => axios.get<YouTubeVideoData>(`https://noembed.com/embed?url=${url}`))
        const responses = await Promise.all(videosData);
        const result: YouTubeVideoData[] = responses.map(response => response.data);
        setYoutubeMetadata(result)
      } catch (e) {
        alert("Erro ao carregar videos")
        console.log(e)
      } finally {
        setIsDataLoading(false)
      }
    })()
  }, [urls])

  return (
    <>
    { !isDataLoading &&
    <VStack className={style.mainContainer} w="100%" paddingLeft="0.7rem">
      <Title title={title} subtitle={subtitle}/>
      <HStack className={style.containerLinks}>
        {youtubeMetadata.map((data, index) => (
          <Link key={index} className={style.boxLink} href={data.url} target="_blank">
            <VStack className={style.imageBox}>
              <Image className={style.image} src={data.thumbnail_url} alt={data.title} />
            </VStack>
            <Text padding="0 1rem 0 1rem">{data.title.substring(0, 1).toLocaleUpperCase()}{data.title.substring(1, 40).toLocaleLowerCase()}...</Text>
          </Link>
        ))}
      </HStack>
    </VStack>
  }
  </>
  )
}