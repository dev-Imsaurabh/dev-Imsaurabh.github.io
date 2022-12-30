import { Flex, Image, Stack } from "@chakra-ui/react";
import "./cstyle.css"
import SkillPost from "./SkillPost";
import Profile from "./Profile";
import TabHeading from "./TabHeading";
import ProjectPost from "./ProjectPost";
import db from "../db.json"

export default function PostField(){

    let projects = db.projects.map((el)=><ProjectPost {...el} />)


    return <Flex w={{base:"100%",lg:"45%"}} overflow="scroll" className="postField"  direction="column" borderRight="1px solid white" borderLeft="1px solid white" gap={8}>

        <Profile />
        <Stack alignItems={"flex-start"} margin="8px"><TabHeading content={"Skills"}  size={"2xl"}/></Stack>
        <SkillPost />
        <Stack alignItems={"flex-start"} margin="8px"><TabHeading content={"Projects"}  size={"2xl"}/></Stack>
        {projects}       

    </Flex>


}