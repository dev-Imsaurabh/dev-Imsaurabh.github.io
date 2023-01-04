import { Button, Flex } from "@chakra-ui/react";
import { EMAIL_COLOR_ICON, EMAIL_ICON, GITHUB_COLOR_ICON, GITHUB_PROFILE_LINK, LINKEDIN, LINKEDIN_COLOR_ICON, MY_EMAIL, MY_PHONENUMBER, PHONE_COLOR_ICON } from "../scripts/config";
import MyIcon from "./MyIcon";

export default function ConatctButtonPanel({size,mt,direction}){

    let Contacts = [
        {icon:GITHUB_COLOR_ICON,link:GITHUB_PROFILE_LINK,isLink:true,name:"GitHub"},
        {icon:LINKEDIN_COLOR_ICON,link:LINKEDIN,isLink:true,name:"LinkedIn"},
        {icon:EMAIL_COLOR_ICON,link:"mailto:"+MY_EMAIL,isLink:true,name:"Email"},
        {icon:PHONE_COLOR_ICON,link:"tel:639356735",isLink:true,name:"Phone"},
    ] 


    const handleClick=(link ,isLink,name)=>{
        if(isLink){
            window.open(link)
        }else{

        }

    }

    return <Flex width={"100%"} direction={direction} mt={mt}>

        {Contacts.map(({icon,link,isLink,name})=><Button style={{WebkitTapHighlightColor:"transparent"}} _hover={{bg:"transparent"}} _active={{bg:"transparent"}} bg={"transparent"} onClick={()=>handleClick(link,isLink,name)} leftIcon={<MyIcon src={icon} size={size} />}></Button>)}

    </Flex>
}