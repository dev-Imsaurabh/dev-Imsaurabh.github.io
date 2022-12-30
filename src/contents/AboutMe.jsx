import { Card, CardHeader,HStack, CardBody,CardFooter } from '@chakra-ui/react'
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    VStack,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

export default function AboutMe(){

//     return <Card
//     direction={{ base: "column", sm: "row" }}
//     overflow="hidden"
//     variant="outline"
//   >
//     <Image
//       objectFit="cover"
//       maxW={{ base: "100%", sm: "200px" }}
//       src="https://media.licdn.com/dms/image/D4D03AQGWQPwfnrQH3w/profile-displayphoto-shrink_400_400/0/1672306627471?e=1677715200&v=beta&t=mHkWKes7J_9_mn7LJxWzZY4YgSG_SMxDQT0Hiuh-1fE"
//       alt="Caffe Latte"
//     />
  
//     <Stack>
//       <CardBody>
//         <Heading size="md">
         
//           <HStack> 
//             <Text> Hi there{" "}</Text>
//             <Image
          
//             src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
//             width="28px"
//           />
//           <Text>I'm Saurabh Kumar 💻</Text></HStack>
         
//         </Heading>
  
//         <Image src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Hi%F0%9F%91%8B+I+am+Saurabh+Kumar;I+am+interested+in+Web+development;Follow+me+on+GitHub;Catch+up+my+latest+repos" />
//       </CardBody>
  
//       <CardFooter>
//         <Button variant="solid" colorScheme="blue">
//           Resume
//         </Button>
//       </CardFooter>
//     </Stack>
//   </Card>;
  
return <Flex gap={7}>
        <Stack
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'transparent')}
          padding={4}>
            
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://media.licdn.com/dms/image/D4D03AQGWQPwfnrQH3w/profile-displayphoto-shrink_400_400/0/1672306627471?e=1677715200&v=beta&t=mHkWKes7J_9_mn7LJxWzZY4YgSG_SMxDQT0Hiuh-1fE'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Saurabh Kumar
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              <a href="https://www.linkedin.com/in/dev-saurabh-kumar/">@LinkedIn</a>
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              FullStack Web Developer
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                borderRadius={20}

                color="white"
                bg={useColorModeValue('green', 'green')}
                fontWeight={'400'}>
                #MongoDB
              </Badge>
              <Badge
                px={2}
                py={1}
                borderRadius={20}
                color="white"
                bg={useColorModeValue('tomato', 'tomato')}
                fontWeight={'400'}>
                #Express
              </Badge>
              <Badge
                px={2}
                py={1}
                borderRadius={20}

                color="white"
                bg={useColorModeValue('deepskyblue', 'deepskyblue')}
                fontWeight={'400'}>
                #React
              </Badge>
              <Badge
                px={2}
                py={1}
                color="white"
                borderRadius={20}
                bg={useColorModeValue('yellowgreen', 'yellowgreen')}
                fontWeight={'400'}>

                #Node js
              </Badge>
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Contact
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
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
            </Stack>
          </Stack>
        </Stack>
        <VStack w="50%" padding={6} paddingTop="40px" spacing="2" alignItems="flex-start" borderLeft="1px solid" borderColor={useColorModeValue("gray.900","white")}>
        <Heading as="h2">About Me</Heading>
        <Text as="p" fontSize="lg" textAlign="left">
        Hi there, my name is Saurabh Kumar and I am a passionate FullStack web developer. I am constantly learning and striving to improve my skills in order to deliver the best solutions for my clients. With a strong foundation in both front-end and back-end development, I am comfortable working on projects of all sizes and complexities. Whether you need a new website or want to update your existing online presence, I am here to help bring your vision to life. Thank you for visiting my website, I look forward to working with you! 
        </Text>
       
      </VStack>
      </Flex>
}
