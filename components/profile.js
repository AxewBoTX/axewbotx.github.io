import { Flex, Image, Text } from "@chakra-ui/react";

function Profile() {
  return (
    <Flex align="center" justify="center" gap="1%">
      <Flex direction="column">
        <Text fontSize="40px" lineHeight="50px" fontWeight="900">
          AxewBoTX
        </Text>
        <Text maxW="210px">Just a random guy who loves coding</Text>
      </Flex>
      <Image
        alt="Axew's Profile Picture"
        boxSize="120px"
        borderRadius="full"
        border="2px"
        borderColor={"gray"}
        src="/profile.png"
      />
    </Flex>
  );
}

export default Profile;
