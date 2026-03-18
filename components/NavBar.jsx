import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import UniCorne from "@/assets/unicorn.png";
import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Services" },
  { href: "/", label: "Autocars" },
  { href: "/", label: "Autocars" },
  { href: "/", label: "Destinations" },
  { href: "/", label: "Blog" },
  { href: "/", label: "Avis" },
  { href: "/", label: "Demander un devis" },
];

export default function Component() {
  return (
    <header className="px-4 md:px-6 sticky top-0 z-50 backdrop-blur-lg text-white">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side  */}
        <div className="flex items-center gap-2 flex-1">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                size="icon"
                variant="ghost"
              >
                <svg
                  className="pointer-events-none"
                  fill="none"
                  height={16}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    d="M4 12L20 12"
                  />
                  <path
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    d="M4 12H20"
                  />
                  <path
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    d="M4 12H20"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, _index) => (
                    <NavigationMenuItem className="w-full" key={link.href}>
                      <NavigationMenuLink
                        active={link.active}
                        className="py-1.5"
                        href={link.href}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  <div className="flex flex-col-reverse gap-2 mt-2">
                    {/* <Button
                      asChild
                      className="text-sm bg-[#65891c]  text-white! hover:bg-[#65891c] transition-all hover:shadow-[0_0_20px_rgba(186,252,12,0.6)]"
                      size="sm"
                      variant="ghost"
                    >
                      <Link to="/about-us">About Us</Link>
                    </Button> */}
                    <Button
                      asChild
                className="group relative px-4 py-3 bg-blue-700 text-white font-bold rounded-md hover:text-white hover:bg-[#5226ff] transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
                      size="sm"
                      variant="ghost"
                    >
                      <Link href="/contact-us">Contact Us</Link>
                    </Button>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <a className="text-primary hover:text-primary/90" href="#">
            <div className="flex gap-2">
              {/* <img src={UniCorne} alt="logo" width="26px" /> */}
              <span className="text-xl font-bold tracking-wider text-white">
                DEMO NAME
                {/* <span className="text-[#5226ff]">ADVERTISING</span> */}
              </span>
            </div>
          </a>

          {/* Desktop Navigation menu */}
          <NavigationMenu className="max-md:hidden ml-auto">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={link.active}
                    className={`py-1.5 px-3 font-medium transition-all rounded-md hover:bg-transparent ${
                      link.active
                        ? "text-white bg-[#5226ff] shadow-[0_0_20px_rgba(186,252,12,0.6)]"
                        : "hover:text-[#5226ff]"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* <Button
                asChild
                className="group relative px-4 py-3 bg-[#65891c] text-white font-bold rounded-xl border-2 border-[#65891c] hover:bg-[#65891c] hover:text-white transition-all duration-300 shadow-lg hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
                size="sm"
                variant="ghost"
              >
                <Link href="/about-us">About Us</Link>
              </Button> */}
              <Button
                asChild
                className="group relative px-4 py-3 bg-blue-700 text-white font-bold rounded  hover:text-white hover:bg-[#5226ff] transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
                size="sm"
                variant="ghost"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
