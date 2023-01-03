import logo from './logo.svg';
import './App.css';
import {Box, Button, Flex, useColorMode, useColorModeValue} from "@chakra-ui/react"
import Nav from './components/Navbar';
import AboutMe from './contents/AboutMe';
import SideNavbar from './components/SideNavbar';
import PostField from './components/PostField';
import GitField from './components/GitField';
import { useContext, useEffect } from 'react';
import { ScrollContext } from './contexts/ScrollContext';




function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  useEffect(()=>{
    if(colorMode=="light"){
      toggleColorMode()
    }

  },[])

  return (
    <Box className="App" >

      <Flex direction={{base:"column",sm:"row" ,lg:"row"}} w={{base:"100%",lg:"85%"}} top={0} left={0} position={{base:"relative",lg:"fixed"}} transform={{lg:"translate(calc(50vw - 50%), calc(50vh - 50%))"}}  height="100%" >
      <SideNavbar />
      <PostField />
      <GitField />


      {/* <AboutMe /> */}

      </Flex>
      <Nav />

    </Box>
  );
}

export default App;
