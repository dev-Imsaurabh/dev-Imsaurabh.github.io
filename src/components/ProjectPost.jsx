import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Flex,
  Avatar,
  Heading,
  Box,
  Text,
  Image,
  Button,
  HStack,
  Grid,
  VStack,
  Badge,
  Wrap,
  Stack,
} from "@chakra-ui/react";
import MyIcon from "./MyIcon";
import dotMenu from "../assets/dotMenu.svg";
import {
  ANDROID_STUDIO_ICON,
  CHAKRA_UI_ICON,
  CODE_PEN,
  CODE_SAND_ICON,
  COMMENT_ICON,
  CSS_ICON,
  EXPRESS_ICON,
  FIREBASE_ICON,
  GITHUB_ICON,
  GIT_ICON,
  HEART_ICON,
  HTML_ICON,
  JAVASCRIPT_ICON,
  JAVA_ICON,
  KOTLIN_ICON,
  LOGO,
  MONGO_ICON,
  MYSQL_ICON,
  MY_NAME,
  MY_POSITION,
  MY_POSITION_ID,
  MY_USERNAME,
  NETLIFY_ICON,
  NODE_ICON,
  PHP_ICON,
  REACT_ICON,
  REDUX_ICON,
  RENDER_ICON,
  REPLIT_ICON,
  RETWEET_ICON,
  SHARE_ICON,
  SUBLIME_ICON,
  TYPESCRIPT_ICON,
  VERCEL_ICON,
  VIDEO_ICON,
  VIEW_ICON,
  VSCODE_ICON,
} from "../scripts/config";
import SkillCard from "./SkillCard";
import PhotoDrawer from "./PhotoDrawer";
import ButtonPanel from "./ButtonPanel";
import ResizeableText from "./ResizableText";

export default function ProjectPost({
  name,
  desc,
  image,
  preview,
  techStack,
  githubLink,
  deployedLink,
  projectType,
  video,
}) {

  const tech = techStack.map((el)=> <Badge colorScheme="green">{el}</Badge>)


  return (
    <Box _hover={{bg:"#002D3748"}}>
      <Card
        w={"full"}
        borderRadius={0}
        bg="transparent"
        borderTop="0.4px solid gray"
        borderBottom="0.4px solid gray"
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" flexWrap="wrap">
              <Avatar name={MY_NAME} src={LOGO} border="1px solid white" />

              <VStack alignItems={"flex-start"}>
                <Heading textAlign={"left"} size="sm">
                  {MY_USERNAME}
                </Heading>
                <Text fontSize={"md"} color={"gray"}>
                  {MY_POSITION_ID}
                </Text>
              </VStack>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<MyIcon src={dotMenu} size={4} />}
            />
          </Flex>

          <Stack alignItems={"flex-start"}>
          <Heading>{name}</Heading>
          </Stack>
        </CardHeader>
        <CardBody>
          <Wrap>
            <Text fontSize={"medium"} fontWeight="bold">Tech Stack:- </Text>
           {tech}
          </Wrap>
          {/* <Text textAlign={"left"}>{desc}</Text> */}
          <ResizeableText text={desc}/>

        </CardBody>
        <VStack>
          <Image  src={preview} w="90%" style={{boxShadow:"0px 3px 6px 6px rgba(180,234,255,0.16),0px 3px 6px 0px rgba(0,0,0,0.23)"}} borderRadius={20} />
        </VStack>

        <CardFooter
          justify="space-between"
          gap={1}
          sx={{
            "& > button": {
              minW: "80px",
            },
          }}
        >
          <Button
           onClick={()=>{
            window.open(deployedLink,"_blank")
          }}
            gap={0}
            fontSize={"sm"}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}

            justifyContent={"center"}
            style={{WebkitTapHighlightColor:"transparent"}}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={NETLIFY_ICON} size={4} rounded={true} />}
          >
            Netlify
          </Button>
          <Button
           onClick={()=>{
            window.open(githubLink,"_blank")
          }}
          fontSize={"sm"}

            gap={0}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            style={{WebkitTapHighlightColor:"transparent"}}

            justifyContent={"center"}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={GITHUB_ICON} size={4} rounded={true} />}
          >
            GitHub
          </Button>
          <Button
           onClick={()=>{
            window.open(video,"_blank")
          }}
            gap={0}
            fontSize={"sm"}

            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            style={{WebkitTapHighlightColor:"transparent"}}

            justifyContent={"center"}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={VIDEO_ICON} size={4} rounded={true} />}
          >
            Video
          </Button>
         
         <PhotoDrawer images={image} />


        </CardFooter>
        <ButtonPanel />

      </Card>
    </Box>
  );
}
