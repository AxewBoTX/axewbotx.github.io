import { Container, Text, Stack, Heading } from "@chakra-ui/react";
import {
  FaYoutube,
  FaTwitter,
  FaTwitch,
  FaGithub,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";
import SocialButton from "components/socialButton.js";
import MainLayout from "/lib/main.js";
import Section from "/components/section.js";
import Layout from "/lib/layout.js";

function Contact() {
  return (
    <MainLayout>
      <Layout>
        <Container maxW="container.sm" mt="120px" maxH="792px" mb="50px">
          <Section delay={0.1}>
            <Heading variant="section-title">Contact</Heading>
          </Section>
          <Text fontSize="25px" maxW="580px" align="center" mt="50px">
            You can find me on most social media platforms. Feel free to join
            our Discord or tweet at me!
          </Text>
          <Stack direction="column" align="center" gap="18px" mt="80px">
            <SocialButton
              text="YouTube"
              icon={<FaYoutube />}
              href="https://www.youtube.com/channel/UCrs-_MTVpZB3hAcMu3PCW2w"
              colorScheme="red"
            />
            <SocialButton
              text="Twitter"
              icon={<FaTwitter />}
              href="https://twitter.com/AxewBoTX"
              colorScheme="twitter"
            />
            <SocialButton
              text="Twitch"
              icon={<FaTwitch />}
              href="https://www.twitch.tv/axewbotx"
              colorScheme="purple"
            />
            <SocialButton
              text="GitHub"
              icon={<FaGithub />}
              href="https://github.com/AxewBoTX"
              colorScheme="gray"
            />
            <SocialButton
              text="Discord"
              icon={<FaDiscord />}
              href="https://discord.com/invite/pTzFSvCYp2"
              colorScheme="blue"
            />
          </Stack>
        </Container>
      </Layout>
    </MainLayout>
  );
}

export default Contact;
