import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import TabHeading from './TabHeading';
import { CONTACT_HEADLINE, CONTACT_SUBLINE, FORMSPREE_API, PHONE_ICON } from '../scripts/config';
import MyIcon from './MyIcon';

export default function ContactFormMobile(){

    return <WrapItem  m="auto" padding={4}  display={{base:"block",sm:"none",lg:"none"}} width={"95%"} >
    <Box bg="transparent" mt="16px" width={"100%"} style={{boxShadow:"0px 3px 6px 6px rgba(180,234,255,0.16),0px 3px 6px 0px rgba(0,0,0,0.23)"}} borderRadius="lg">
      <Box m={8} color="white">
        <form width={"100%"} action={FORMSPREE_API} method='POST'>
        <VStack width={"100%"} padding={4} spacing={5}>
            <TabHeading content={CONTACT_HEADLINE} size={"lg"} />
            <Button bg={"transparent"} _hover={{bg:"transparent"}} _active={{bg:"transparent"}} leftIcon={<MyIcon src={PHONE_ICON} size={4}></MyIcon>}>+91 6393567935</Button>
            <TabHeading content={CONTACT_SUBLINE} size={"sm"} />
          <FormControl id="name">
            <FormLabel>Your Name</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                
                children={<BsPerson color="gray.800" />}
              />
              <Input type="text" name='name' size="md" placeholder='name' />
            </InputGroup>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Mail</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineEmail color="gray.800" />}
              />
              <Input type="email" name='email' size="md"  id="email"  placeholder='email'/>
            </InputGroup>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor="gray.300"
              id="message"
              name="message"
              _hover={{
                borderRadius: 'gray.300',
              }}
              placeholder="message"
            />
          </FormControl>
          <FormControl id="name" float="right">
            <Button
              variant="solid"
              bg="blue.500"
              type='submit'
              color="white"
              _hover={{}}>
              Send Message
            </Button>
          </FormControl>
        </VStack>

        </form>
       
      </Box>
    </Box>
  </WrapItem>
}