import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import MainLayout from "/lib/main";
import Section from "components/section.js";
import Layout from "lib/layout.js";

function Works() {
  return (
    <MainLayout>
      <Layout>
        <Box>
          <Section delay={0.1}>
            <Heading variant="section-title" textUnderlineOffset="8px">
              My Projects
            </Heading>
          </Section>
          <SimpleGrid columns={[1, 2, 2]} gap="6" mt="50px"></SimpleGrid>
        </Box>
      </Layout>
    </MainLayout>
  );
}

export default Works;
