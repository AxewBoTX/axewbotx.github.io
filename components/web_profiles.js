import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FaYoutube, FaTwitch, FaTwitter, FaGithub } from "react-icons/fa";
import Section from "./section.js";

function ProfileButton(props) {
  const fore = useColorModeValue("light", "dark");
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <Button
        bg="none"
        _hover={{
          bg: props.backg,
          color: fore,
          textDecoration: "underline",
        }}
        fontSize="25px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="250px"
        textUnderlineOffset="5px"
      >
        {props.icon}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {props.text}
        </Box>
      </Button>
    </a>
  );
}

function WebProfiles() {
  const yt_bg = useColorModeValue("#e53e3e", "#feb2b2");
  const twitch_bg = useColorModeValue("#8058d5", "#b794f4");
  const twitter_bg = useColorModeValue("#1da1f2", "#a8dcfa");
  const github_bg = useColorModeValue("#385898", "#b7c2da");
  return (
    <Box mt="20px" mb="40px">
      <Section delay={0.1}>
        <Heading variant="section-title" mt="30px">
          Web Profiles
        </Heading>
      </Section>
      <Flex
        justify="center"
        direction="column"
        align="flex-start"
        gap="10px"
        mt="20px"
      >
        <ProfileButton
          link="https://github.com/AxewBoTX"
          backg={github_bg}
          text={"AxewBoTX"}
          icon={<FaGithub size={35} />}
        />
        <ProfileButton
          link="https://twitter.com/AxewBoTX"
          backg={twitter_bg}
          text={"@AxewBoTX"}
          icon={<FaTwitter size={35} />}
        />
        <ProfileButton
          link="https://www.youtube.com/@AxewBoTX"
          backg={yt_bg}
          text={"Axew"}
          icon={<FaYoutube size={35} />}
        />
        <ProfileButton
          link="https://www.twitch.tv/axewbotx"
          backg={twitch_bg}
          text={"@axewbotx"}
          icon={<FaTwitch size={35} />}
        />
      </Flex>
    </Box>
  );
}

export default WebProfiles;
