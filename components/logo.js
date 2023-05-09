import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function Logo() {
  return (
    <Box as="button">
      <Link
        as={NextLink}
        href="/"
        fontSize="35px"
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
      >
        Axew
      </Link>
    </Box>
  );
}

export default Logo;
