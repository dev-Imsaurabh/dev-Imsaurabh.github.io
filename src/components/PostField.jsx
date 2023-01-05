import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import "./cstyle.css"
import SkillPost from "./SkillPost";
import Profile from "./Profile";
import TabHeading from "./TabHeading";
import ProjectPost from "./ProjectPost";
import db from "../db.json"
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../contexts/ScrollContext";
import { BOTTOM_LINE, CONTACT_TAB_ID, HOME_TAB_ID, PROJECTS_TAB_ID, SKILLS_TAB_ID } from "../scripts/config";
import ConatctButtonPanel from "./ContactButtonPanel";
import ContactForm from "./ContactForm";
import StatsPost from "./StatsPost";

export default function PostField(){

   const {page,handlePage} = useContext(ScrollContext)
   const projectRef = useRef(null)
   const skillsRef = useRef(null)
   const contactRef = useRef(null)
   const postFieldRef=useRef(null)
    let projects = db.projects.map((el)=><ProjectPost {...el} />)

    useEffect(()=>{
      //reset page onScroll
         postFieldRef.current.addEventListener("scroll",function(){
            handlePage(null)
          })
      
    
    },[])

    useEffect(()=>{

     if(page==PROJECTS_TAB_ID){
        projectRef.current.scrollIntoView({ behavior: 'smooth'})
     }else if(page==SKILLS_TAB_ID){
        skillsRef.current.scrollIntoView({ behavior: 'smooth' })

     }else if(page==CONTACT_TAB_ID){
      contactRef.current.scrollIntoView({ behavior: 'smooth' })

     }else if(page==HOME_TAB_ID){

     }
        
    },[page])

    console.log(page)
    return <Flex ref={postFieldRef} w={{base:"100%",lg:"45%"}} overflow="scroll" className="postField"  direction="column" borderRight={{base:"",lg:"0.4px solid gray",sm:"0.4px solid gray"}} borderLeft={{base:"",lg:"0.4px solid gray",sm:"0.2px solid gray"}}>

        <Profile/>
        <Stack ref={skillsRef} alignItems={"flex-start"} margin="8px"><TabHeading content={"Technical Skills"}  size={"2xl"}/></Stack>
        <SkillPost />
        <Stack ref={projectRef} alignItems={"flex-start"} margin="8px"><TabHeading  content={"Projects"}  size={"2xl"}/></Stack>
        {projects}       
        <VStack position={"fixed"} display={{base:"block",sm:'block',lg:"none"}} zIndex={100}  right={0} bottom={100} >
         <ConatctButtonPanel direction={"column"}  size={7}/>

        </VStack>
        <Stack display={{lg:"-webkit-inline-flex",sm:"-webkit-inline-flex",base:"none"}} style={{display:""}} ref={contactRef} alignItems={"flex-start"} margin="8px"><TabHeading  content={"Statistics"}  size={"2xl"}/></Stack>
        <StatsPost />
        <Stack display={{lg:"-webkit-inline-flex",sm:"-webkit-inline-flex",base:"none"}}  ref={contactRef} alignItems={"flex-start"} margin="8px"><TabHeading  content={"Contact"}  size={"2xl"}/></Stack>
        <ContactForm />
        <Stack display={{lg:"-webkit-inline-flex",sm:"-webkit-inline-flex",base:"none"}} ><TabHeading size={"md"} content={BOTTOM_LINE} /></Stack>
        
        <Box mt={"50px"}></Box>
        


    </Flex>



}