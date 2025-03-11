"use client"

import { Button, Textarea, VStack } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

import style from "./style.module.css"
import Title from "@/components/Title";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface MessageDataInterface{
  message: string
}

export default function Consultation(){
  const [message, setMessage] = useState("");
  const fullMessage = `Olá, gostaria de marcar uma consulta \nMotivo: ${message}`
  const wppLink = `https://wa.me/5598987835523?text=${encodeURIComponent(fullMessage)}`

  return(
    <VStack as="form" className={style.containerBox}>
      <Title title="Marque sua consulta"/>
      <Textarea className={style.textarea} placeholder="Como podemos te ajudar?" required value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <Link type="submit" href={wppLink} target="_blank"><Button>Marcar consulta <FaWhatsapp /></Button></Link>
    </VStack>
  )
}