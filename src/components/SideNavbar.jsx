import { Button, Box, VStack, Flex, Text, Stack } from "@chakra-ui/react";
import MyIcon from "./MyIcon";
import ProfileBadge from "./ProfileBadge";
import {
  ABOUT_ME,
  ABOUT_ME_TAB,
  CONTACT_ICON,
  CONTACT_TAB,
  HOME_ICON,
  HOME_TAB,
  LOGO,
  MY_RESUME,
  PROFILE_ICON,
  PROJECTS_TAB,
  PROJECT_ICON,
  SKILLS_TAB,
  SKILL_ICON,
} from "../scripts/config";
import { useContext, useState } from "react";
import { ScrollContext } from "../contexts/ScrollContext";
import ConatctButtonPanel from "./ContactButtonPanel";
import TabHeading from "./TabHeading";

export default function SideNavbar() {
  let { page, handlePage } = useContext(ScrollContext);

  const handleClick = (e) => {
    handlePage(e.target.id);
  };
  const navbars = [
    { name: "", icon: LOGO, rounded: true, rounded1: true },
    { name: HOME_TAB, icon: HOME_ICON },
    { name: ABOUT_ME_TAB, icon: PROFILE_ICON },
    { name: SKILLS_TAB, icon: SKILL_ICON },
    { name: PROJECTS_TAB, icon: PROJECT_ICON },
    { name: CONTACT_TAB, icon: CONTACT_ICON },
  ];
  let navItems = navbars.map((el, i) => (
    <Button
      onClick={handleClick}
      id={el.name.toLowerCase().replace(" ", "")}
      _active={{ bg: i == 0 ? "transparent" : "#2D3748" }}
      _hover={{ bg: i == 0 ? "transparent" : "#2D3748" }}
      borderRadius="100px"
      fontSize={18}
      fontWeight="bold"
      padding={6}
      justifyContent="flex-start"
      textAlign="left"
      leftIcon={
        <MyIcon
          src={el.icon}
          rounded={el.rounded}
          rounded1={el.rounded1}
          size={6}
        ></MyIcon>
      }
      bg="transparent"
      color="white"
      variant="solid"
    >
      {el.name}
    </Button>

    
  ));

  const [toggle,setToggle] = useState("50px")

  return (<Flex 
     display={{ base: "none", lg: "block" }}
  padding="24px"
  height="100%"
  width="25%" direction={"column"}>

    <VStack
      alignItems="flex-start"
      width={"100%"}
    >
      <VStack mb="16px" alignItems="flex-start" gap={4}>
        {navItems}
      </VStack>
    
    </VStack>

    <VStack m={"auto"} gap={4}>

    <Button
        w="100%"
        fontSize={16}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        padding={6}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
      >
        <a href={MY_RESUME}>Resume</a>
      </Button>
   
      <ConatctButtonPanel />
      <ProfileBadge />
     
    </VStack>


    </Flex>

  );
}
