import { Card, CardHeader, CardBody, CardFooter,IconButton ,Flex,Avatar,Heading,Box,Text,Image,Button, HStack, Grid, VStack, Wrap, Stat, StatLabel, StatNumber, useColorModeValue} from '@chakra-ui/react'
import MyIcon from './MyIcon'
import dotMenu from "../assets/dotMenu.svg"
import {  ANDROID_STUDIO_ICON, CHAKRA_UI_ICON, CODE_PEN, CODE_SAND_ICON, COMMENT_ICON, CSS_ICON, EXPRESS_ICON, FIREBASE_ICON, GIT_ICON, HEART_ICON, HTML_ICON, JAVASCRIPT_ICON, JAVA_ICON, KOTLIN_ICON, LOGO, MONGO_ICON, MYSQL_ICON, MY_NAME, MY_POSITION, MY_POSITION_ID, MY_USERNAME, NETLIFY_ICON, NODE_ICON, PHP_ICON, REACT_ICON, REDUX_ICON, RENDER_ICON, REPLIT_ICON, RETWEET_ICON, SHARE_ICON, SKILL_CAPTION, SKILL_CAPTION_HASHTAG, STATS_CAPTION, SUBLIME_ICON, TYPESCRIPT_ICON, VERCEL_ICON, VIEW_ICON, VIEW_ICON_SVG, VSCODE_ICON } from '../scripts/config'
import SkillCard from './SkillCard'
import ButtonPanel from './ButtonPanel'
import ResizeableText from './ResizableText'


export default function StatsPost(){


    return <Box display={{base:'none',sm:"block",lg:"block"}}  _hover={{bg:"#002D3748"}}>
        <Card w={"full"} borderRadius={0}  bg="transparent" borderTop="0.4px solid gray" borderBottom="0.4px solid gray">
    <CardHeader>
      <Flex spacing='4'>
        <Flex flex='1' gap='4'  flexWrap='wrap'>
          <Avatar name='Saurabh Kumar' src={LOGO} border="1px solid white"/>
  
          <VStack alignItems={"flex-start"}>
            <Heading textAlign={"left"} size='sm'>{MY_USERNAME}</Heading>
            <Text fontSize={"md"} color={"gray"}>{MY_POSITION_ID}</Text>
          </VStack>
        </Flex>
        {/* <IconButton
          variant='ghost'

          colorScheme='gray'
          aria-label='See menu'
          onClick={()=>window.open}
          icon={<MyIcon src={VIEW_ICON_SVG} size={4}/> }

        /> */}
      </Flex>
    </CardHeader>
    <CardBody>
      <ResizeableText text ={STATS_CAPTION}/>
    </CardBody>
    <Grid m="auto"  borderRadius={20} width={"90%"} style={{boxShadow:"0px 3px 6px 6px rgba(180,234,255,0.16),0px 3px 6px 0px rgba(0,0,0,0.23)"}} templateColumns={{base:"repeat(2,1fr)",sm:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} gap={2} padding={2}>

    <StatsCard title={'Coding'} stat={'1200+ hrs'} />
    <StatsCard title={'DSA'} stat={'600+ Que'} />
    <StatsCard title={'Soft Skills'} stat={'100+ hrs'} />
    <StatsCard title={'Git Commits'} stat={'300+'} />
    <StatsCard title={'Collaborative Projects'} stat={'2+'} />
    <StatsCard title={'Individual Projects'} stat={'2+'} />



    </Grid>
      
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '13px',
        },
      }}
    >
      <ButtonPanel />
    </CardFooter>
  </Card>
    </Box>
}

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
    </Stat>
  );
}