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
    // <Navbar
    //   isBordered
    //   isMenuOpen={isMenuOpen}
    //   onMenuOpenChange={setIsMenuOpen}
    //   className=""
    // >
    //   <NavbarContent className="sm:hidden" justify="start">
    //     <NavbarMenuToggle
    //       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //     />
    //   </NavbarContent>

    //   <NavbarContent className="sm:hidden pr-3">
    //     <NavbarBrand>
    //       <img src="img/Logo.png" alt="Logo" />
    //     </NavbarBrand>
    //   </NavbarContent>

    //   <NavbarContent className="hidden sm:flex gap-4 bg-slate-400">
    //     <NavbarBrand>
    //       <img src="img/Logo.png" alt="Logo" />
    //     </NavbarBrand>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Features
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link href="#" aria-current="page">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Integrations
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <Link href="#">Login</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button as={Link} color="warning" href="#" variant="flat">
    //         Sign Up
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarMenu>
    //     {menuItems.map((item, index) => (
    //       <NavbarMenuItem key={`${item}-${index}`}>
    //         <Link
    //           className="w-full"
    //           color={
    //             index === 2
    //               ? "warning"
    //               : index === menuItems.length - 1
    //               ? "danger"
    //               : "foreground"
    //           }
    //           href="#"
    //           size="lg"
    //         >
    //           {item}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>
    <Navbar
      isBordered
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="bg-transparent lg:py-2"
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
              className="text-white px-4 py-[6px] transition duration-75 hover:text-primary hover:scale-105"
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
