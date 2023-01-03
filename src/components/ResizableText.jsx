import { HStack, Text, Wrap } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";


export default function ResizeableText({text}){
    const [state,setState] = useState("Read More")
    const [isTruncate, setIsTruncate] = useState(true)

const handleRead= ()=>{
   if(state=="Read More"){
    setState("Read Less")
    setIsTruncate(false)
   }else{
    setState("Read More")
    setIsTruncate(true)
   }
}
   
    return <Wrap><Text isTruncated={isTruncate} textAlign={"left"} >{text}</Text> <Text cursor={"pointer"} fontWeight={"bold"}
    onClick={handleRead}>{state}</Text></Wrap>
}