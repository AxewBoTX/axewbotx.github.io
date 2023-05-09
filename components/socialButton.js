import { Button, Link } from "@chakra-ui/react";

function SocialButton({ href, colorScheme, icon, text }) {
  return (
    <Button
      as={Link}
      href={href}
      target="_blank"
      rel="noreferrer"
      size={"lg"}
      height={"50px"}
      width={"80%"}
      maxW={"400px"}
      fontSize={"25px"}
      colorScheme={colorScheme}
      leftIcon={icon}
    >
      {text}
    </Button>
  );
}

export default SocialButton;
