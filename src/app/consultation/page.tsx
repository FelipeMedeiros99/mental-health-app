"use client"

import { Button, Textarea, Theme, VStack } from "@chakra-ui/react";

import style from "./style.module.css"
import Title from "@/components/Title";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";


interface SubmitDataInterface{
  text: string;
}

export default function Consultation(){

  const router = useRouter()
  const {register, handleSubmit, reset} = useForm<SubmitDataInterface>()
  const [message, setMessage] = useState("")
  const wppLink = `https://wa.me/5598987835523?text=${encodeURIComponent(message)}`

  const openChat = (data: SubmitDataInterface)=>{
    console.log("called")
    reset()
    router.push("/")
  }


  return(
    <VStack className={style.containerBox}>
      <Title title="Marque sua consulta"/>
      <Textarea className={style.textarea} placeholder="Qual o motivo da consulta?" value={message} onChange={(e)=>setMessage(e.target.value)} />
        
      <Link href={wppLink} target="_blank"><Button>Marcar consulta</Button></Link>

    </VStack>
  )
}