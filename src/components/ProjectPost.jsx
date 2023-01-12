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
  VStack,
  Badge,
  Wrap,
  Stack,
} from "@chakra-ui/react";
import MyIcon from "./MyIcon";
import {
  GITHUB_ICON,
  LOGO,
  MY_NAME,
  MY_POSITION_ID,
  MY_USERNAME,
  VIDEO_ICON,
  VIEW_ICON_SVG,
  WEB_ICON,
} from "../scripts/config";
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
  const tech = techStack.map((el) => <Badge colorScheme="green">{el}</Badge>);

  return (
    <Box _hover={{ bg: "#002D3748" }}>
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
              style={{ WebkitTapHighlightColor: "transparent" }}
              onClick={() => window.open(deployedLink)}
              aria-label="See menu"
              icon={<MyIcon src={VIEW_ICON_SVG} size={6} />}
            />
          </Flex>

          <Stack mt={"8px"} alignItems={"flex-start"}>
            <Heading
              size={"md"}
              cursor={"pointer"}
              onClick={() => window.open(deployedLink)}
            >
              {name}
              <span>
                <Badge colorScheme={"blue"} ml="8px">
                  {projectType}
                </Badge>
              </span>
            </Heading>
          </Stack>
        </CardHeader>
        <CardBody mt={"-32px"}>
          <Wrap>
            <Text fontSize={"medium"} fontWeight="bold">
              Tech Stack:-{" "}
            </Text>
            {tech}
          </Wrap>
          {/* <Text textAlign={"left"}>{desc}</Text> */}
          <ResizeableText text={desc} />
        </CardBody>
        <VStack>
          <Image
            cursor={"pointer"}
            onClick={() => window.open(deployedLink)}
            src={preview}
            w="90%"
            style={{
              boxShadow:
                "0px 3px 6px 6px rgba(180,234,255,0.16),0px 3px 6px 0px rgba(0,0,0,0.23)",
            }}
            borderRadius={20}
          />
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
            onClick={() => {
              window.open(deployedLink, "_blank");
            }}
            gap={0}
            fontSize={"sm"}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            justifyContent={"center"}
            style={{ WebkitTapHighlightColor: "transparent" }}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={WEB_ICON} size={4} rounded={true} />}
          >
            Live
          </Button>
          <Button
            onClick={() => {
              window.open(githubLink, "_blank");
            }}
            fontSize={"sm"}
            gap={0}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            style={{ WebkitTapHighlightColor: "transparent" }}
            justifyContent={"center"}
            flex="1"
            variant="ghost"
            leftIcon={<MyIcon src={GITHUB_ICON} size={4} rounded={true} />}
          >
            GitHub
          </Button>
          <Button
            onClick={() => {
              window.open(video, "_blank");
            }}
            gap={0}
            fontSize={"sm"}
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
            style={{ WebkitTapHighlightColor: "transparent" }}
            justifyContent={"center"}
            display={video==""?"none":"block"}
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
