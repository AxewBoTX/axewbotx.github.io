import {
  IconButton,
  Flex,
  Container,
  Link,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { default as RouteLink } from "next/link";
import Logo from "./logo.js";
import ThemeButton from "./themeButton.js";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

function SmallNavbar() {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Logo />
      <Flex display="flex" alignItems="center" gap="10px">
        <ThemeButton />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            border="1px"
            borderColor="gray"
          />
          <MenuList>
            <Link as={RouteLink} href="/">
              <MenuItem>About</MenuItem>
            </Link>
            <Link as={RouteLink} href="/works">
              <MenuItem>Works</MenuItem>
            </Link>
            <Link as={RouteLink} href="/contact">
              <MenuItem>Contact</MenuItem>
            </Link>
            <MenuItem>
              <Link
                as={RouteLink}
                href="https://github.com/AxewBoTX/axewbotx.github.io"
              >
                View Source
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
function BigNavbar() {
  return (
    <Flex align="center" justify="space-between">
      <Flex justify="center" align="baseline" gap="30px">
        <Logo />
        <Stack direction="row" gap="20px" fontSize="20px">
          <Link as={RouteLink} href="/works">
            Works
          </Link>
          <Link as={RouteLink} href="/contact">
            Contact
          </Link>
          <Link
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4px"
            as={RouteLink}
            href="https://github.com/AxewBoTX/axewbotx.github.io"
          >
            <FaGithub />
            Source
          </Link>
        </Stack>
      </Flex>
      <ThemeButton />
    </Flex>
  );
}

function Navbar() {
  const [width, setWidth] = useState();
  useEffect(function () {
    setWidth(window.innerWidth);
  }, []);
  useEffect(function () {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return function () {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <Container maxW="1000px">
      {width >= 1000 ? <BigNavbar /> : <SmallNavbar />}
    </Container>
  );
}

export default Navbar;
