"use client"

import { Button, Textarea, VStack } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

import style from "./style.module.css"
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Consultation(){

  const router = useRouter()
  const [message, setMessage] = useState("")
  const fullMessage = `Olá, gostaria de marcar uma consulta \nMotivo: ${message}`
  const wppLink = `https://wa.me/5598987835523?text=${encodeURIComponent(fullMessage)}`

  return(
    <VStack className={style.containerBox}>
      <Title title="Marque sua consulta"/>
      <Textarea className={style.textarea} placeholder="Qual o motivo da consulta?" value={message} onChange={(e)=>setMessage(e.target.value)} />
        
      <Link href={wppLink} onClick={()=>setMessage('')} target="_blank"><Button>Marcar consulta <FaWhatsapp /></Button></Link>

    </VStack>
  )
}