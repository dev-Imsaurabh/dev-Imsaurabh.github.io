import { Flex, Image, Stack, VStack } from "@chakra-ui/react";
import "./cstyle.css"
import SkillPost from "./SkillPost";
import Profile from "./Profile";
import TabHeading from "./TabHeading";
import ProjectPost from "./ProjectPost";
import db from "../db.json"
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../contexts/ScrollContext";
import { PROJECTS_TAB_ID, SKILLS_TAB_ID } from "../scripts/config";
import ConatctButtonPanel from "./ContactButtonPanel";
import ContactForm from "./ContactForm";

export default function PostField(){

   const {page} = useContext(ScrollContext)
   const projectRef = useRef(null)
   const skillsRef = useRef(null)
    let projects = db.projects.map((el)=><ProjectPost {...el} />)

    useEffect(()=>{

     if(page==PROJECTS_TAB_ID){
        projectRef.current.scrollIntoView({ behavior: 'smooth'})
     }else if(page==SKILLS_TAB_ID){
        skillsRef.current.scrollIntoView({ behavior: 'smooth' })

     }
        
    },[page])

    console.log(page)
    return <Flex w={{base:"100%",lg:"45%"}} overflow="scroll" className="postField"  direction="column" borderRight={{base:"",lg:"0.4px solid gray",sm:"0.4px solid gray"}} borderLeft={{base:"",lg:"0.4px solid gray",sm:"0.2px solid gray"}}>

        <Profile/>
        <Stack ref={skillsRef} alignItems={"flex-start"} margin="8px"><TabHeading content={"Skills"}  size={"2xl"}/></Stack>
        <SkillPost />
        <Stack ref={projectRef} alignItems={"flex-start"} margin="8px"><TabHeading  content={"Projects"}  size={"2xl"}/></Stack>
        {projects}       
        <VStack position={"fixed"} display={{base:"block",sm:'block',lg:"none"}} zIndex={100}  right={0} bottom={100} >
         <ConatctButtonPanel direction={"column"}  size={7}/>

        </VStack>

        <ContactForm />


    </Flex>


}