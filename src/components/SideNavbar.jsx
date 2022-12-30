import { Button,Box, VStack, Flex } from "@chakra-ui/react"
import MyIcon from "./MyIcon"
import ProfileBadge from "./ProfileBadge"
import { CONTACT_ICON, HOME_ICON, LOGO, MY_RESUME, PROFILE_ICON, PROJECT_ICON, SKILL_ICON } from "../scripts/config"

 export default function SideNavbar(){


const navbars = [{name:"",icon:LOGO,rounded:true},{name:"Home",icon:HOME_ICON},{name:"About Me",icon:PROFILE_ICON},{name:"Skills",icon:SKILL_ICON},{name:"Project",icon:PROJECT_ICON},{name:"Contact",icon:CONTACT_ICON}]
  let navItems = navbars.map((el,i)=><Button _hover={{bg:el.rounded?"transparent":"#2D3748"}} borderRadius="100px" fontSize={18} fontWeight="bold" padding={6} justifyContent="flex-start" textAlign="left"  leftIcon={<MyIcon src={el.icon} rounded={el.rounded} size={6}></MyIcon>} bg="transparent" color="white" variant='solid'>
  {el.name}
</Button>)





    return  <VStack display={{base:"none",lg:"block"}} height="100%"  width="25%" gap={4} alignItems="flex-start" borderRight="1px solid white" padding="24px">

        <VStack alignItems="flex-start" gap={4}>
            {navItems}
        </VStack>
        <Button
        w="100%"
        fontSize={16}           
             rounded={'full'}
                bg={'blue.400'}
                color={'white'}

                padding={6}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                
                _focus={{
                  bg: 'blue.500',
                  
                }}>
               <a href={MY_RESUME}>Resume</a>
              </Button>

              <ProfileBadge />
    </VStack>
 }