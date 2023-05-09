import {
  Container,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "./footer.js";
import WebProfiles from "./web_profiles.js";
import Section from "./section.js";

function About() {
  return (
    <Container maxW="600px" mt="80px" p="0">
      <Section delay={0.1}>
        <Heading variant="section-title">About</Heading>
      </Section>
      <Text lineHeight="30px" textAlign="justify" textIndent="1em">
        Helloo there! My name is Axew, atleast you can call me that. I&apos;m a
        high school student with a passion for coding, gaming, and making
        YouTube videos. My ultimate goal is to start my own startup one day,
        where I can turn my hobbies into a successful business.
      </Text>
      <Section delay={0.1}>
        <Heading
          display="flex"
          alignItems="base-line"
          variant="section-title"
          mt="30px"
        >
          I♥
        </Heading>
      </Section>
      <Text lineHeight="30px" textAlign="justify" textIndent="1em">
        As a tech enthusiast, I spend my free time coding, gaming, and producing
        videos that showcase my love for cutting-edge technology and innovation.
        I&apos;m always on the lookout for exciting new ways to expand my
        knowledge and skills.
      </Text>
      <WebProfiles />
      <Footer />
    </Container>
  );
}

export default About;
