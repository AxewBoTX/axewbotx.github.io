import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function MainLayout({ children }) {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Axew's Living Room" />
        <meta name="author" content="AxewBoTX" />
        <link rel="apple-touch-icon" href="/profile.png" />
        <link rel="shortcut icon" href="/profile.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Axew's Living Room" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AxewBoTX" />
        <meta name="twitter:creator" content="@AxewBoTX" />
        <meta property="og:site_name" content="Axew's Living Room" />
        <meta name="og:title" content="Axew's Living Room" />
        <meta property="og:type" content="website" />
        <title>Axew&apos;s Living Room</title>
      </Head>
      {children}
    </Box>
  );
}
