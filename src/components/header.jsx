import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Button from "./common/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "About Us", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Customers", href: "#" },
    { title: "Solutions", href: "#" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="bg-transparent lg:py-2 border-b border-white/25"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <img src="img/Logo.png" alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden md:flex gap-1 lg:gap-4">
        {menuItems.map(({ title, href }, i) => (
          <NavbarItem key={i}>
            <Link
              href={href}
              className="text-white font-workSans px-4 py-[6px] transition duration-75 hover:text-primary hover:scale-105"
            >
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex lg:gap-3">
        <NavbarItem>
          <Button>Book a Demo</Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="border bg-transparent text-white">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden text-white" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="p-1.5">
        {menuItems.map(({ title, href }, i) => (
          <NavbarMenuItem key={i}>
            <Link
              href={href}
              size="lg"
              className="w-full bg-gray-600 p-2 rounded-md transition duration-200 hover:bg-primary hover:text-black"
            >
              {title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
