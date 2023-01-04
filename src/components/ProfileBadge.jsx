import { Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import MyIcon from "./MyIcon";
import dotMenu from "../assets/dotMenu.svg";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  Button,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { GITHUB_PROFILE_LINK, LINKEDIN, LOGO, MY_RESUME_PDF, MY_RESUME_PDF_FILE_NAME } from "../scripts/config";

export default function ProfileBadge() {
  return (
    <Flex w="100%"  justify="space-between" gap={4} alignItems="center">
      <HStack gap={4}>
        <MyIcon src={LOGO} size={6} rounded={true} rounded1={true} />
        <VStack alignItems="flex-start">
          <Text fontSize="lg" fontWeight="bold">
            Saurabh Kumar
          </Text>
          <Text fontSize="lg" color={"gray"}>
            <a href={LINKEDIN} target="_blank">
              @LinkedIn
            </a>
          </Text>
        </VStack>
      </HStack>

      <Menu>
        <MenuButton
          width="10px"
          bg="transparent"
          as={IconButton}
          icon={<MyIcon src={dotMenu} size={4} />}
        ></MenuButton>
        <MenuList>
          <MenuItem onClick={()=>window.open(GITHUB_PROFILE_LINK)}>Github</MenuItem>
          <MenuItem><a href={MY_RESUME_PDF} download={MY_RESUME_PDF_FILE_NAME}>Download Resume</a></MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
