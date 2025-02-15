import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function MyNavbar() {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          
        </NavbarItem>
        <NavbarItem>
<ThemeSwitcher/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}