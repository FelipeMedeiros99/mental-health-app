"use client"

import Title from "@/components/Title";
import { Button, For, Heading, HStack, Image, MenuContent, MenuItem, MenuRoot, MenuTrigger, Text, Textarea, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

import { moodsIconsData, MoodsIconsDataInterface } from "@/assets/data/moodsIconsData";

import style from "./style.module.css"

interface MoodSubmitInterface {
  text: string
}

interface LocalStorageMoodData {
  createdAt: string;
  mood: string;
  text: string;
  icone: string;
}

export default function Mood() {
  const [mood, setMood] = useState<MoodsIconsDataInterface>({ mood: "", icone: "" })
  const [localStorageMoods, setLocalStorageMoods] = useState<LocalStorageMoodData[]>([])
  const { register, handleSubmit, reset } = useForm<MoodSubmitInterface>()
  const onSubmit: SubmitHandler<MoodSubmitInterface> = (data) => saveData(data)

  const saveData = useCallback((data: MoodSubmitInterface) => {
    if (mood.mood && data) {
      const date = new Date()
      const localStorageData = JSON.parse(localStorage.getItem("mentalHealthApp")!)
      localStorageData.unshift({ ...mood, text: data.text, createdAt: date })
      console.log(localStorageData)
      localStorage.setItem("mentalHealthApp", JSON.stringify(localStorageData))
      reset()
      setMood({ mood: "", icone: "" })
    } else {
      if (!mood.mood) {
        alert("Selecione a emoção que te representa")
      } if (!data) {
        alert("Insira uma mensagem de como está se sentindo")
      }
    }
  }, [mood])

  useEffect(() => {
    try {
      console.log("chamado")
      const dataLocalStorage = localStorage.getItem("mentalHealthApp")
      if (dataLocalStorage) setLocalStorageMoods(JSON.parse(dataLocalStorage));
      else localStorage.setItem("mentalHealthApp", JSON.stringify([]))
    } catch (e) {
      console.log(e)
    }
  }, [mood])

  return (
    <>
      <VStack as="form" className={style.containerBox} onSubmit={handleSubmit(onSubmit)} >
        <Title title="Monitor de humor" />
        <Textarea className={style.textarea} required {...register("text")} placeholder="Como está se sentindo agora?" />
        <HStack >
          <Text>Qual emoção te representa mais nesse momento?</Text>
          <MenuRoot>
            <MenuTrigger asChild>
              <Button>
                Selecionar
              </Button>
            </MenuTrigger>
            <MenuContent className={style.menuContentIcons}>
              <For each={moodsIconsData}>
                {(mood, index) => (
                  <MenuItem value={mood.mood} key={index} onClick={() => setMood({ mood: mood.mood, icone: mood.icone })}>
                    {mood.icone} - {mood.mood}
                  </MenuItem>
                )}
              </For>
            </MenuContent>
          </MenuRoot>
        </HStack>
          {mood.mood && <Text>{mood.icone} - {mood.mood}</Text>}
        <Button type="submit" w="100%">Salvar</Button>
      </VStack>

      <VStack className={style.containerBox}>
        <Title title="Humor recente" />
        <For each={localStorageMoods}>
          {(data, index) => (
            <HStack w="100%" key={index} boxShadow="0 0.1rem 0.1rem #e1e1e1" padding="0.5rem 0" position="relative">
              <VStack borderRadius="5rem" padding="0.5rem" bgColor="#e4e4e4" h="3rem" w="3rem" justifyContent="center">
                <Text className={style.moodIcon}>{data.icone}</Text>
              </VStack>
              <VStack alignItems="flex-start" overflowX="hidden">
                <Text fontWeight="500">{data.mood}</Text>
                <Text color="#888888" whiteSpace="nowrap" overflowX="hidden" textOverflow="ellipsis" width="100%">{data.text}</Text>
              </VStack>
            </HStack>
          )}
        </For>
      </VStack>

      <VStack className={style.modal}>
      </VStack>
    </>
  )
}