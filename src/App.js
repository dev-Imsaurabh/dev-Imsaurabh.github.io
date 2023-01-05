import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Nav from "./components/Navbar";
import AboutMe from "./contents/AboutMe";
import SideNavbar from "./components/SideNavbar";
import PostField from "./components/PostField";
import GitField from "./components/GitField";
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "./contexts/ScrollContext";
import MyIcon from "./components/MyIcon";
import { HOME_TAB_ID } from "./scripts/config";
import "../src/components/cstyle.css"

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {page,handlePage}=useContext(ScrollContext)
  const mainBoxRef = useRef(null);

  // useEffect(()=>{
  //   if(page==HOME_TAB_ID){
  //     mainBoxRef.current.scrollIntoView({ behavior: 'smooth' })
  //   }
  // },[page])

  useEffect(() => {
    if (colorMode == "light") {
      toggleColorMode();
    }
  }, []);
  
  useEffect(()=>{
    //reset page onScroll
    const computedStyle = getComputedStyle(mainBoxRef.current);
    const position = computedStyle.getPropertyValue("position");
if(position=="relative"){
  window.addEventListener("scroll",function(){
    if(page!==null){
      handlePage(null)
    }
  })
}else{
  mainBoxRef.current.addEventListener("scroll",function(){
    if(page!==null){
      handlePage(null)
    }
  })
}
  
  },[])

  return (
    <Box className="App">
      <Flex
        ref={mainBoxRef}
        direction={{ base: "column", sm: "row", lg: "row" }}
        w={{ base: "100%", sm: "100%", lg: "85%" }}
        top={0}
        left={0}
        position={{ base: "relative", lg: "fixed" }}
        transform={{ lg: "translate(calc(50vw - 50%), calc(50vh - 50%))" }}
        height="100%"
      >
        <SideNavbar />
        <PostField />
        <GitField />

        {/* <AboutMe /> */}
      </Flex>
      <Nav />
      <Box
        position={"fixed"}
        w={"50px"}
        h={"50px"}
        style={{WebkitTapHighlightColor:"transparent"}}
        className="gotoTop"
        onClick={() => {
          const computedStyle = getComputedStyle(mainBoxRef.current);
          const position = computedStyle.getPropertyValue("position");

          if (position == "relative") {
            handlePage(HOME_TAB_ID)
            console.log("yes")

          }else {
            handlePage(HOME_TAB_ID)
          }
        }}
        cursor={"pointer"}
        bg={"blue.400"}
        borderRadius={50}
        // display={{lg:"none"}}
        bottom={150}
        left={7}
      >
        <Image
          borderRadius={50}
          style={{WebkitTapHighlightColor:"transparent"}}
          transform={"rotate(-90deg)"}
          src={"https://i.giphy.com/media/nVE8OaIGkUhf7rkieR/giphy.webp"}
          w="100%"
          h="100%"
        
        />
      </Box>
    </Box>
  );
}

export default App;
