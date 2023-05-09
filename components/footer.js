import { Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex align="center" justify="center" color="grey" mt="20px">
      &copy; {new Date().getFullYear()} AxewBoTX. All Rights Reserved.
    </Flex>
  );
}

export default Footer;
