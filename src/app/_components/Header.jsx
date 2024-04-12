"use client";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="bg-gray-100 py-4 px-8">
      <div className="flex justify-between items-center">
        <div>
          <Image src={"/logo.svg"} width={150} height={150} alt="logo" />
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <Link href={"/"}>
              <li className="cursor-pointer">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  DashBoard
                </Button>
              </li>
            </Link>
            <Link href={"#"}>
              <li className="cursor-pointer">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Transactions
                </Button>
              </li>
            </Link>
            <Link href={"#"}>
              <li className="cursor-pointer flex items-center">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Expense <Plus className="ml-1" />
                </Button>
              </li>
            </Link>
          </ul>

          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link href={"/sign-in"}>
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                variant="outline"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
