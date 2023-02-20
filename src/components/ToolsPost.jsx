import { Card, CardHeader, CardBody, CardFooter,IconButton ,Flex,Avatar,Heading,Box,Text,Image,Button, HStack, Grid, VStack, Wrap} from '@chakra-ui/react'
import MyIcon from './MyIcon'
import dotMenu from "../assets/dotMenu.svg"
import {  ANDROID_STUDIO_ICON, CHAKRA_UI_ICON, CODE_PEN, CODE_SAND_ICON, COMMENT_ICON, CSS_ICON, EXPRESS_ICON, FIREBASE_ICON, GIT_ICON, HEART_ICON, HTML_ICON, JAVASCRIPT_ICON, JAVA_ICON, KOTLIN_ICON, LOGO, MONGO_ICON, MYSQL_ICON, MY_NAME, MY_POSITION, MY_POSITION_ID, MY_USERNAME, NETLIFY_ICON, NODE_ICON, PHP_ICON, REACT_ICON, REDUX_ICON, RENDER_ICON, REPLIT_ICON, RETWEET_ICON, SHARE_ICON, SKILL_CAPTION, SKILL_CAPTION_HASHTAG, SUBLIME_ICON, TYPESCRIPT_ICON, VERCEL_ICON, VIEW_ICON, VIEW_ICON_SVG, VSCODE_ICON } from '../scripts/config'
import SkillCard from './SkillCard'
import ButtonPanel from './ButtonPanel'
import ResizeableText from './ResizableText'


export default function ToolsPost(){

    const toolsList=[
    {name:"Git",link:GIT_ICON},
    {name:"Vercel",link:VERCEL_ICON},
    {name:"Netlify",link:NETLIFY_ICON},
    {name:"Render",link:RENDER_ICON},
    {name:"Android Studio",link:ANDROID_STUDIO_ICON},
    {name:"VS Code",link:VSCODE_ICON},
    {name:"Sublime",link:SUBLIME_ICON},
    {name:"CodeSandBox",link:CODE_SAND_ICON},
    {name:"CodePen",link:CODE_PEN},
    {name:"Replit",link:REPLIT_ICON},

]


let allSkill = toolsList.map((el)=><SkillCard {...el}/>)


    return <Box  _hover={{bg:"#002D3748"}}>
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
      <ResizeableText text ={"I have unlocked my potential with these ultimate tool set for mastering new skills!"}/>
    </CardBody>
    <Grid m="auto"  borderRadius={20} width={"90%"} style={{boxShadow:"0px 3px 6px 6px rgba(180,234,255,0.16),0px 3px 6px 0px rgba(0,0,0,0.23)"}} templateColumns={{base:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap={2} padding={2}>
        {allSkill}

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