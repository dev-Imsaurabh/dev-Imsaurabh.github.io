import logo from './logo.svg';
import './App.css';
import {Box, Button, Flex, useColorMode} from "@chakra-ui/react"
import Nav from './components/Navbar';
import AboutMe from './contents/AboutMe';
import SideNavbar from './components/SideNavbar';
import PostField from './components/PostField';
import GitField from './components/GitField';
import { useEffect } from 'react';




function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  useEffect(()=>{
    if(colorMode=="light"){
      toggleColorMode()
    }

  },[])

  return (
    <Box className="App" >

      {/* <Nav /> */}
      <Flex direction={{base:"column",sm:"row" ,lg:"row"}} w={{base:"100%",lg:"85%"}} top={0} left={0} position={{base:"fixed"}} transform={"translate(calc(50vw - 50%), calc(50vh - 50%))"}  height="100%" >
      <SideNavbar />
      <PostField />
      <GitField />

      {/* <AboutMe /> */}

      </Flex>
      
    </Box>
  );
}

export default App;
