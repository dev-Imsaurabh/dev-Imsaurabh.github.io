import { Card, CardBody, Text, VStack } from "@chakra-ui/react";
import MyIcon from "./MyIcon";

export default function SkillCard({name,link}){

    return  <Card bg="transparent">
        <CardBody>
            <VStack>
            <MyIcon src ={link} size={8} />
            <Text  fontSize={"sm"} noOfLines={1}>{name}</Text>
            </VStack>
        </CardBody>
    </Card>
}