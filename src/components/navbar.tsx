import { Button } from "@/components/ui/button";

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
          <Button
            variant="ghost"
            className="cursor-pointer border hover:border-green-800 transition-colors  duration-300"
          >
            Log In
          </Button>
          <Button className="cursor-pointer bg-green-700 hover:bg-green-800 ">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
