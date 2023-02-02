import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import hero_bg from "../assets/hero_bg.jpg";
import small1 from "../assets/small1.jpg";
import small2 from "../assets/small2.jpg";
import working_png from "../assets/working_png.png";
import Lottie from "react-lottie";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "./cstyle.css";
import hero_me from "../assets/hero_me.png"
export default function HeroBackground() {
  const [visible, setVisible] = useState(true);
  function config(url) {
    return {
      loop: true,
      autoplay: true,
      path: url,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }

  return (
    <Grid
      // overflow={"hidden"}
      placeItems={"center"}
      position={"absolute"}
      zIndex={1000}
      opacity={visible ? 1 : 0}
      transition={"visibility 0s 0.5s, opacity 0.5s linear;"}
      visibility={visible ? "visible" : "hidden"}
      style={{}}
      width={"100%"}
      height={"100vh"}
    >
      {/*  */}

      {/* <Lottie
        style={{ position: "fixed", top: -20, zIndex: 200 }}
        options={config(
          "https://assets7.lottiefiles.com/packages/lf20_96bovdur.json"
        )}
        height={400}
        width={400}
      /> */}

      <Image style={{ position: "fixed", top: -20, zIndex: 200 }} src={hero_me}></Image>
      <Image
        textShadow={
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
        }
        position={"fixed"}
        top={"50%"}
        zIndex={200}
        src={
          "https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&width=700&height=100&lines=Hi%F0%9F%91%8B+I+am+Saurabh+Kumar;I+am+interested+in+Web+development;Welcome+to+my+portfolio+!;&color=FFFFFF&center=true&vCenter=true"
        }
      ></Image>
      <Heading
        textShadow={
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
        }
        size={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        position={"fixed"}
        top={"60%"}
        zIndex={200}
        opacity={1}
      >
        {"<"}FULL STACK WEB
        <br />
        DEVELOPER{"/>"}
      </Heading>
      <Grid pointerEvents={"none"} style={{ WebkitTapHighlightColor: "transparent" }}  w={"100%"} h={"100vh"} position={"fixed"} placeItems={"center"}>
        <Image
          w={"100%"}
          h={"100%"}
          filter="blur(4px);"
          src={small2}
          opacity={"0.8"}
        ></Image>
      </Grid>

      <Grid
        style={{ WebkitTapHighlightColor: "transparent" }}
        placeItems={"center"}
        border={"1px solid red"}
        onClick={() => setVisible((prev) => !prev)}
      >
        <Lottie
          style={{ position: "fixed", bottom: -60, zIndex: 200 }}
          options={config(
            "https://assets10.lottiefiles.com/datafiles/ft3xlpduRes83XO/data.json"
          )}
          height={300}
          width={300}
        />
      </Grid>
    </Grid>
  );
}
