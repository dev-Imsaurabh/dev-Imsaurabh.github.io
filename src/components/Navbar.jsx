import { ReactNode } from 'react';
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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from "../assets/SK.svg"
import darkLogo from "../assets/darkLogo.svg"



export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbars = ["Home","About Me","Skills","Project","Contact"]
  let navItems = navbars.map((el)=> <Heading cursor="pointer" as='h4' size='md' _hover={{color:"red"}}>
  {el}
</Heading>)

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Image src={colorMode=="light"?darkLogo:logo} w="60px"/></Box>

          <Flex alignItems={'center'} gap={7}>
            {navItems}
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

          </Flex>
        </Flex>
      </Box>
    </>
  );
}