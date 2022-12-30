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
    <Box>
      <Card
        w={"full"}
        borderRadius={0}
        bg="transparent"
        borderTop="1px solid white"
        borderBottom="1px solid white"
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" flexWrap="wrap">
              <Avatar name={MY_NAME} src={LOGO} border="1px solid white" />

              <HStack>
                <Heading textAlign={"left"} size="sm">
                  {MY_USERNAME}
                </Heading>
                <Text fontSize={"md"} color={"gray"}>
                  {"@" + MY_POSITION}
                </Text>
              </HStack>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<MyIcon src={dotMenu} size={4} />}
            />
          </Flex>

          <Heading>{name}</Heading>
        </CardHeader>
        <CardBody>
          <Wrap>
            <Text fontSize={"medium"} fontWeight="bold">Tech Stack:- </Text>
           {tech}
          </Wrap>
          <Text textAlign={"left"}>{desc}</Text>

        </CardBody>
        <VStack>
          <Image  src={preview} w="90%" borderRadius={20} />
        </VStack>

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button
           onClick={()=>{
            window.open(deployedLink,"_blank")
          }}
            gap={4}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            justifyContent={"center"}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={NETLIFY_ICON} size={6} rounded={true} />}
          >
            Netlify
          </Button>
          <Button
           onClick={()=>{
            window.open(githubLink,"_blank")
          }}
            gap={4}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            justifyContent={"center"}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={GITHUB_ICON} size={6} rounded={true} />}
          >
            GitHub
          </Button>
          <Button
           onClick={()=>{
            window.open(video,"_blank")
          }}
            gap={4}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            justifyContent={"center"}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={VIDEO_ICON} size={6} rounded={true} />}
          >
            Video
          </Button>
          <Button
          onClick={()=>{
            window.open()
          }}
            gap={4}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            justifyContent={"center"}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={VIEW_ICON} size={6} rounded={true} />}
          >
            View
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
