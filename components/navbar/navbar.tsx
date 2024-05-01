import React from 'react';
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';

export default function Navbar() {
  return (
    <NextUiNavbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>First Nav</NavbarItem>
        <NavbarItem isActive>Second Nav</NavbarItem>
        <NavbarItem>Third Nav</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">Nav Action 1</NavbarItem>
        <NavbarItem>Nav Action 2</NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  );
}
