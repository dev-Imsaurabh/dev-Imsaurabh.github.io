import { ReactNode, useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
  Center,
  Wrap,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from "../assets/SK.svg"
import darkLogo from "../assets/darkLogo.svg"
import { ABOUT_ME, ABOUT_ME_TAB_ID, CONTACT_ICON, CONTACT_TAB, CONTACT_TAB_ID, HOME_ICON, HOME_TAB_ID, MY_RESUME, MY_RESUME_PDF, MY_RESUME_PDF_FILE_NAME, PROFILE_ICON, PROJECTS_TAB, PROJECTS_TAB_ID, PROJECT_ICON, RESUME_ICON, RESUME_TAB_ID, SKILLS_TAB, SKILLS_TAB_ID, SKILL_ICON } from '../scripts/config';
import MyIcon from './MyIcon';
import { ScrollContext } from '../contexts/ScrollContext';



export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {handlePage} = useContext(ScrollContext)
  const navbars = [HOME_ICON,PROFILE_ICON,SKILL_ICON,PROJECT_ICON,CONTACT_ICON,RESUME_ICON]
  const navState = [HOME_TAB_ID,ABOUT_ME_TAB_ID,SKILLS_TAB_ID,PROJECTS_TAB_ID,CONTACT_TAB_ID,RESUME_TAB_ID]
  let navItems = navbars.map((el,i)=> <Wrap onClick={()=>{
    if(i==navbars.length-1){
      window.open(MY_RESUME)
    }else{
      handlePage(navState[i])

    }
  }}><MyIcon src={el} size={6}>
  </MyIcon></Wrap>)

// function downloadFile(url, fileName) {
//   fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
//     .then(res => res.blob())
//     .then(res => {
//       const aElement = document.createElement('a');
//       aElement.setAttribute('download', fileName);
//       const href = URL.createObjectURL(res);
//       aElement.href = href;
//       aElement.setAttribute('target', '_blank');
//       aElement.click();
//       URL.revokeObjectURL(href);
//     });
// };

  return (
    <>
      <Flex padding={2}  width={"90%"}  borderRadius={20} border={"0.5px solid white"} justifyContent={"center"} display={{base:"block",sm:'block',lg:"none"}} alignItems={"center"} transform="translate(-50%,-50%)" position={"fixed"} bottom={"-5"} left="50%" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        

          <Flex alignItems={'center'} justify={"space-between"} gap={2} padding={4}>
            {navItems}
          </Flex>
      </Flex>
    </>
  );
}