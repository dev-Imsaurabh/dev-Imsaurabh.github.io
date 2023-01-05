import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Badge,
    HStack,
    Wrap,
    VStack
  } from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../contexts/ScrollContext';
import { ABOUT_ME, ABOUT_ME_TAB_ID, DOWNLOAD_ICON, EMAIL_ICON, GITHUB_FOLLOWERS_URL, GITHUB_REPO_COUNT, HOME_TAB_ID, LOCATION_ICON, MY_BANNER_PIC, MY_COUNTRY_CODE, MY_EMAIL, MY_LOCATION, MY_NAME, MY_PHONENUMBER, MY_PIC, MY_POSITION, MY_RESUME, MY_RESUME_PDF, MY_RESUME_PDF_FILE_NAME, PHONE_ICON } from '../scripts/config';
import ConatctButtonPanel from './ContactButtonPanel';
import MyIcon from './MyIcon';
import TabHeading from './TabHeading';

const getRepoCount =async()=>{

    const res = await fetch(GITHUB_REPO_COUNT)
    const data = await res.json()
    return data.length

}  
  export default function Profile() {   
    const [repoCount,setRepoCount] = useState(0)
    const {page,handlePage} = useContext(ScrollContext)
    const homeRef = useRef(null)
    const aboutmeRef = useRef(null)

    useEffect(()=>{

        const getdata = async()=>{
            setRepoCount(await getRepoCount())
        }
        getdata()

    },[])

    useEffect(()=>{

      if(page==HOME_TAB_ID){
        homeRef.current.scrollIntoView({ behavior: 'smooth' })
     }else if(page==ABOUT_ME_TAB_ID){
        aboutmeRef.current.scrollIntoView({ behavior: 'smooth' })

     }

    },[page])
    
useEffect(()=>{
  if(page!=null){
    window.addEventListener("scroll",function(){
      handlePage(null)
    })
  }
 
})

    function downloadFile(){
      let link = document.createElement("a");
      link.download = MY_RESUME_PDF_FILE_NAME;
      link.href = MY_RESUME_PDF;
      link.click();
      link.remove()
}

    return (
        <Box
        ref={homeRef}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              MY_BANNER_PIC
            }
            objectFit={'cover'}
          />
          <Flex width={"100%"} mt={-12} justify={"space-between"}>
            <Avatar
              size={'2xl'}
              src={
               MY_PIC
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
                marginLeft:"16px"
              }}
              
            />

            <VStack
            //  display={{base:"block",sm:'block',lg:"none"}}  
             style={{WebkitTapHighlightColor:"transparent"}}
             mt={16} mr={2}>
     <Button
        fontSize={16}           
             rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                onClick={()=>downloadFile()}
                rightIcon={<MyIcon src={DOWNLOAD_ICON} size={4}/>}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                
                _focus={{
                  bg: 'blue.500',
                  
                }}>
                  Resume
              </Button>
              {/* <a ref={download} href={MY_RESUME_PDF } download={MY_RESUME_PDF_FILE_NAME} ></a> */}

              
            </VStack>

       
       
       


          </Flex>


  
          <Box p={6}>
           <Stack>
           <Stack spacing={0} align={'flex-start'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {MY_NAME}
              </Heading>
              <Text color={'gray.500'}>{MY_POSITION}</Text>
            </Stack>

            <Wrap>
              <HStack><MyIcon src={LOCATION_ICON} size={4}/><Text fontSize={"sm"}>{MY_LOCATION}</Text></HStack>
              <HStack><MyIcon src={EMAIL_ICON} size={4}/><Text fontSize={"sm"}>{MY_EMAIL}</Text></HStack>
              <HStack><MyIcon src={PHONE_ICON} size={4}/><Text fontSize={"sm"}>{MY_COUNTRY_CODE+MY_PHONENUMBER}</Text></HStack>
            </Wrap>
         

            <Stack alignItems={'flex-start'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                borderRadius={20}

                color="white"
                bg={useColorModeValue('green', 'green')}
                fontWeight={'400'}>
                MongoDB
              </Badge>
              <Badge
                px={2}
                py={1}
                borderRadius={20}
                color="white"
                bg={useColorModeValue('tomato', 'tomato')}
                fontWeight={'400'}>
                Express
              </Badge>
              <Badge
                px={2}
                py={1}
                borderRadius={20}

                color="white"
                bg={useColorModeValue('deepskyblue', 'deepskyblue')}
                fontWeight={'400'}>
                React
              </Badge>
              <Badge
                px={2}
                py={1}
                color="white"
                borderRadius={20}
                bg={useColorModeValue('yellowgreen', 'yellowgreen')}
                fontWeight={'400'}>

                Node js
              </Badge>
            </Stack>
            
            <Stack ref={aboutmeRef} alignItems={"flex-start"}>
            <TabHeading content={"About Me"} size={"md"}/>

            </Stack>
            <Stack alignItems={"flex-start"}>

            <Text  textAlign={"left"}>{ABOUT_ME}</Text>

            </Stack>

            <Stack alignItems={"flex-start"}>
            <HStack spacing={0} align={'center'} gap={2} mt="8px">
              <Text fontWeight={600}>{repoCount}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                GitHub Repos
              </Text>
            </HStack>

            </Stack>

           </Stack>
          

          </Box>
        </Box>
   
    );
  }