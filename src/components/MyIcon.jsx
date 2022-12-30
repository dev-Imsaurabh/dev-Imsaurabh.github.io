import { Image } from "@chakra-ui/react";

export default function MyIcon({src,size,rounded}){

    return <Image cursor={"pointer"} _hover={{ transform:"rotate(90deg)"}} _active={{transform:"scale(1.98)"}} color="white" borderRadius={rounded?"100px":"0px"} transform={rounded?"scale(2)":""}border={rounded?"1px solid white":""} src={src} w={size} h={size}></Image>

}