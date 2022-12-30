import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import { GITHUB_STATS_1, GITHUB_STATS_2, GITHUB_STATS_3, GITHUB_STATS_4, GITHUB_USERNAME, MY_PIC } from "../scripts/config";
import "./cstyle.css"
import TabHeading from "./TabHeading";
import { useEffect } from "react";
import GitHubCalendar from 'react-github-calendar';
import "./cstyle.css"

export default function GitField(){
    

  

    return <Flex w={{base:"100%",lg:"30%"}}  overflow="scroll" direction="column" className="postField" padding={4}>
       <VStack>
        <TabHeading content={"#Trending on my GitHub"} size={"md"} />
       <Image src={GITHUB_STATS_1} width="100%" borderRadius={10} bg={"gray"}/>
       <Image src={GITHUB_STATS_2} width="100%" borderRadius={10} bg={"gray"}/>
       <Image src={GITHUB_STATS_3} width="100%" borderRadius={10} bg={"gray"}/>
       <GitHubCalendar username={GITHUB_USERNAME} />
       <Image src={GITHUB_STATS_4} width="100%" borderRadius={10} bg={"gray"}/>

       </VStack>


    </Flex>
}