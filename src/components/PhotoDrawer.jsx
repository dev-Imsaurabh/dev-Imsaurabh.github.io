import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Button,Input,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Grid,
    Image,
  } from '@chakra-ui/react'
import React from 'react'
import { VIEW_ICON } from '../scripts/config'
import Carousel from './Carousel'
import MyIcon from './MyIcon'
  
export default function PhotoDrawer({images}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
       <Button
         
          ref={btnRef}

            gap={0}
            onClick={onOpen}
            fontSize={"sm"}

            _active={{ bg: "transparent" }}
            style={{WebkitTapHighlightColor:"transparent"}}
            _hover={{ bg: "transparent" }}
            justifyContent={"center"}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={VIEW_ICON} size={4} rounded={true} />}
          >
            View
          </Button>
       
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          allowPinchZoom
          size={"full"}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Project Details</DrawerHeader>
  
            <DrawerBody>
              
              <Grid gap={4}  templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}}>
                {images.map((el)=><Image borderRadius={10} src={el} />)}
              </Grid>

            </DrawerBody>
  
            <DrawerFooter>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }