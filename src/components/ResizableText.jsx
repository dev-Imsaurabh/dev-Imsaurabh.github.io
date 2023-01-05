import { HStack, Text, Wrap } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { SKILL_CAPTION_HASHTAG } from "../scripts/config";


export default function ResizeableText({text}){
    const [state,setState] = useState("Read Less")
    const [isTruncate, setIsTruncate] = useState(false)

const handleRead= ()=>{
   if(state=="Read More"){
    setState("Read Less")
    setIsTruncate(false)
   }else{
    setState("Read More")
    setIsTruncate(true)
   }
}
   
    return <Wrap><Text isTruncated={isTruncate} textAlign={"left"} >{text}<Text style={{color:"deepskyblue"}}>{SKILL_CAPTION_HASHTAG}</Text></Text> <Text cursor={"pointer"} fontWeight={"bold"}
    onClick={handleRead}>{state}</Text>
    
    </Wrap>
}