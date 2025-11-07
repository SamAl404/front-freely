import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { UserCircle2Icon, ChevronDown } from "lucide-react";
import Link from "next/link";
const isAuthenticated = false;

export default function Navbar() {
  return (
    <header className="w-full px-6 sm:px-10 py-4 border-b border-border/60 ">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-2 shrink-0 w-32">
          <p className="text-xl font-bold tracking-wide ">
            <span className="text-green-700">F</span>reely
          </p>
        </div>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="hover:text-green-700/80 transition-colors">
                Find talent
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700/80 transition-colors">
                Why us?
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 shrink-0 w-32 justify-end">
          {!isAuthenticated ? (
            <>
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="cursor-pointer border hover:border-green-800 transition-colors  duration-300"
                >
                  Log In
                </Button>
              </Link>

              <Link href="/signup">
                <Button className="cursor-pointer bg-green-700 hover:bg-green-800 ">
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button className="cursor-pointer bg-green-700 hover:bg-green-800 ">
                Dashboard
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer flex items-center gap-2 align-bottom">
                  <Avatar>
                    <UserCircle2Icon className="w-full h-full shrink-0"></UserCircle2Icon>
                  </Avatar>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="cursor-pointer">
                  <DropdownMenuItem>
                    <a href="#">Dashboard</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#">Profile</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600 
                  "
                  >
                    <a href="#">Sign Out</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
