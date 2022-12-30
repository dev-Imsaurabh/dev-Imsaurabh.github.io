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
import { useEffect, useState } from 'react';
import { ABOUT_ME, GITHUB_FOLLOWERS_URL, GITHUB_REPO_COUNT, MY_BANNER_PIC, MY_NAME, MY_PIC, MY_POSITION } from '../scripts/config';
import TabHeading from './TabHeading';

const getRepoCount =async()=>{
    const res = await fetch(GITHUB_REPO_COUNT)
    const data = await res.json()
    return data.length

}  
  export default function Profile() {   
    const [repoCount,setRepoCount] = useState(0)

    useEffect(()=>{

        const getdata = async()=>{
            setRepoCount(await getRepoCount())
        }
        getdata()

    },[])

    return (
        <Box
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
          <Flex mt={-12}>
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
            
            <Stack alignItems={"flex-start"}>
            <TabHeading content={"About Me"} size={"md"}/>

            </Stack>
            <Stack alignItems={"flex-start"}>

            <Text textAlign={"left"}>{ABOUT_ME}</Text>

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