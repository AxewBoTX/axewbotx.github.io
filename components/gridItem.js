import { Box, Text, LinkBox, LinkOverlay, Image } from "@chakra-ui/react";

function GridItem({ children, href, thumbnail, title }) {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          alt={title}
          height="150px"
          placeholder="blue"
          loading="lazy"
          borderRadius="12px"
          src={thumbnail}
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontSize="22">
            {children}
          </Text>
        </LinkOverlay>
        <Text>{title}</Text>
      </LinkBox>
    </Box>
  );
}

export default GridItem;
