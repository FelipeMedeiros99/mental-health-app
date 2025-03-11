"use client"

import { Button, Textarea, VStack } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

import style from "./style.module.css"
import Title from "@/components/Title";
import Link from "next/link";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface MessageDataInterface{
  message: string
}

export default function Consultation(){
  const [message, setMessage] = useState("");
  
  const wppLink = useMemo(()=>{
    const fullMessage =message?`Olá, gostaria de marcar uma consulta! \nMotivo: ${message}`:"Olá, gostaria de marcar uma consulta!"
    return `https://wa.me/5598987835523?text=${encodeURIComponent(fullMessage)}`
  }, [message])

  return(
    <VStack className={style.containerBox}>
      <Title title="Marque sua consulta"/>
      <Textarea className={style.textarea} placeholder="Como podemos te ajudar?" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <Link type="submit" href={wppLink} target="_blank" style={{marginTop: "1rem"}}><Button bgColor="#43EB61" color="white" fontWeight="700">Marcar consulta < FaWhatsapp/></Button></Link>
    </VStack>
  )
}