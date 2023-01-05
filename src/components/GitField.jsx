import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import { BOTTOM_LINE, CONTACT_TAB_ID, GITHUB_STATS_1, GITHUB_STATS_2, GITHUB_STATS_3, GITHUB_STATS_4, GITHUB_USERNAME, MY_PIC } from "../scripts/config";
import "./cstyle.css"
import TabHeading from "./TabHeading";
import { useContext, useEffect, useRef } from "react";
import GitHubCalendar from 'react-github-calendar';
import "./cstyle.css"
import ContactForm from "./ContactForm";
import ContactFormMobile from "./ContactFormMobile";
import StatsPostMobile from "./StatsPostMobile";
import { ScrollContext } from "../contexts/ScrollContext";

export default function GitField(){
    
    let contactRef = useRef(null)
let {page,handlePage} = useContext(ScrollContext)
    useEffect(()=>{
        if(page==CONTACT_TAB_ID){
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    },[page])

  

    return <Flex w={{base:"100%",lg:"30%"}}  overflow="scroll" direction="column" className="postField" >
         <Stack display={{lg:"none",sm:"none",base:"-webkit-inline-flex"}} alignItems={"flex-start"} margin="8px"><TabHeading  content={"Statistics"}  size={"2xl"}/></Stack>
       <StatsPostMobile />
       <VStack padding={4} position={{lg:"relative",sm:"fixed"}} >
        <TabHeading content={"#Trending on my GitHub"} size={"md"} />
       <Image src={GITHUB_STATS_1} width="100%" borderRadius={10} bg={"gray"}/>
       <Image src={GITHUB_STATS_2} width="100%" borderRadius={10} bg={"gray"}/>
       <Image src={GITHUB_STATS_3} width="100%" borderRadius={10} bg={"gray"}/>
       <GitHubCalendar username={GITHUB_USERNAME} />
       <Image display={{base:"block",sm:"none",lg:"block"}} src={GITHUB_STATS_4} width="100%" borderRadius={10} bg={"gray"}/>
      


       </VStack>


       <Stack display={{lg:"none",sm:"none",base:"-webkit-inline-flex"}}  ref={contactRef} alignItems={"flex-start"} margin="8px"><TabHeading  content={"Contact"}  size={"2xl"}/></Stack>
       <Stack display={{lg:"none",sm:"none",base:"-webkit-inline-flex"}} ><TabHeading size={"md"} content={BOTTOM_LINE} /></Stack>
       <ContactFormMobile />
        
       <Box h={"90px"} width="100%"></Box>

    </Flex>
}