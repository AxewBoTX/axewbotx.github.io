import {Box} from "@chakra-ui/react";
import MainLayout from '/lib/main.js';
import Profile from '/components/profile.js';
import About from '/components/about.js';
import Layout from '/lib/layout.js'

export default function Home() {
  return (
	  <MainLayout>
	  <Layout>
	  <Box>
	  <Profile/>
	  <About/>
	  </Box>
	  </Layout>
	  </MainLayout>
  )
}
