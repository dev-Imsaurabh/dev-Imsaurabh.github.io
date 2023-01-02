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
    HStack
  } from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { ScrollContext } from '../contexts/ScrollContext';
import { ABOUT_ME, ABOUT_ME_TAB_ID, GITHUB_FOLLOWERS_URL, GITHUB_REPO_COUNT, HOME_TAB_ID, MY_BANNER_PIC, MY_NAME, MY_PIC, MY_POSITION, MY_RESUME } from '../scripts/config';
import TabHeading from './TabHeading';

const getRepoCount =async()=>{
    const res = await fetch(GITHUB_REPO_COUNT)
    const data = await res.json()
    return data.length

}  
  export default function Profile() {   
    const [repoCount,setRepoCount] = useState(0)
    const {page} = useContext(ScrollContext)
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
            <Button
        fontSize={16}           
             rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                display={{base:"block",sm:'block',lg:"none"}}
               
                style={{WebkitTapHighlightColor:"transparent"}}
                mt={16} mr={2}
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
       


          </Flex>


  
          <Box p={6}>
           <Stack>
           <Stack spacing={0} align={'flex-start'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {MY_NAME}
              </Heading>
              <Text color={'gray.500'}>{MY_POSITION}</Text>
            </Stack>

         

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