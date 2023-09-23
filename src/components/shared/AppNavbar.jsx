"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem,NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { AppLogo } from "./AppLogo";
import { useState } from "react";
import Button from "./Button";

export const AppNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        "Home",
        "Upcoming",
        "Bacome a Partner"
    ];

    return (
        <Navbar maxWidth="xl" className="shadow-sm" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AppLogo margin_b="mb-0"/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="#" color="foreground">
                        Upcoming
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Become a Partner
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login">
                        <Button variant="primary">Sign In</Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 1 ? "primary" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}