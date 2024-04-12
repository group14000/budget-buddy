"use client";
import Image from "next/image";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 py-4 px-8 relative ">
      <div className="flex justify-between items-center">
        <div>
          <Image src={"/logo.svg"} width={150} height={150} alt="logo" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="lg:hidden absolute top-0 right-0 mr-4 mt-4">
            <IoReorderThreeOutline
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          {isMenuOpen ? (
            <ul className="flex flex-col space-y-4">
              <MenuLink href={"/"} text="Dashboard" toggleMenu={toggleMenu} />
              <MenuLink
                href={"#"}
                text="Transactions"
                toggleMenu={toggleMenu}
              />
              <MenuLink href={"#"} text="Add Expense" toggleMenu={toggleMenu}>
                <Plus className="ml-1" />
              </MenuLink>
              <li></li>
              {isSignedIn && <UserButton />}
              {!isSignedIn && (
                <MenuLink
                  href={"/sign-in"}
                  text="Login"
                  toggleMenu={toggleMenu}
                />
              )}
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleMenu}
              >
                Close
              </Button>
            </ul>
          ) : (
            <div className="hidden lg:flex">
              <MenuLink href={"/"} text="Dashboard" />
              <MenuLink href={"#"} text="Transactions" />
              <MenuLink href={"#"} text="Add Expense">
                <Plus className="ml-1" />
              </MenuLink>
              {isSignedIn && (
                <div>
                  <UserButton />
                </div>
              )}
              {!isSignedIn && <MenuLink href={"/sign-in"} text="Login" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MenuLink = ({ href, text, children, toggleMenu }) => (
  <Link href={href}>
    <li className="cursor-pointer flex items-center">
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" // Add margin to each button
        onClick={toggleMenu}
      >
        {text} {children}
      </Button>
    </li>
  </Link>
);

export default Header;
