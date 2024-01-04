import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import MainLayout from "/lib/main";
import Section from "components/section.js";
import Layout from "lib/layout.js";
import GridItem from "/components/gridItem";

function Works() {
  return (
    <MainLayout>
      <Layout>
        <Box mb="60px">
          <Section delay={0.1}>
            <Heading variant="section-title" textUnderlineOffset="8px">
              My Projects
            </Heading>
          </Section>
          <SimpleGrid columns={[1, 2, 2]} gap="6" mt="50px">
            {/*
				<GridItem
				title="--title--"
				thumbnail="--thumbnail-picture--"
				href="--link--"
				>
				--Name--
				</GridItem>
			*/}
          </SimpleGrid>
        </Box>
      </Layout>
    </MainLayout>
  );
}

export default Works;
