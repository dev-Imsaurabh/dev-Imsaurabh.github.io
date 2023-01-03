import { Button, Flex, HStack } from "@chakra-ui/react";
import { ANALYTICS_ICON, COMMENT_ICON, HEART_ICON, RETWEET_ICON, SHARE_ICON } from "../scripts/config";
import MyIcon from "./MyIcon";

export default function ButtonPanel(){


    return <Flex m="auto" >
    <Button _hover={{bg:"transparent"}} _active={{bg:"transparent"}} justifyContent={"center"}  flex='1' variant='ghost' leftIcon={<MyIcon src={ANALYTICS_ICON} size={6}  />} ></Button>
    <Button _hover={{bg:"transparent"}} _active={{bg:"transparent"}} justifyContent={"center"}  flex='1' variant='ghost' leftIcon={<MyIcon src={COMMENT_ICON} size={6}  />} >
        
        </Button>
        <Button  _hover={{bg:"transparent"}} _active={{bg:"transparent"}} justifyContent={"center"} flex='1' variant='ghost' leftIcon={<MyIcon src={RETWEET_ICON} size={6} />} >
          
        </Button>
        <Button  _hover={{bg:"transparent"}} _active={{bg:"transparent"}} justifyContent={"center"} flex='1' variant='ghost' leftIcon={<MyIcon src={HEART_ICON
        } size={6} />} >
          
        </Button>
        <Button  _hover={{bg:"transparent"}} _active={{bg:"transparent"}} justifyContent={"center"} flex='1' variant='ghost' leftIcon={<MyIcon src={SHARE_ICON} size={6} />}>
          
        </Button>
    
    </Flex>
}