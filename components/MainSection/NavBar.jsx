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
import Image from "next/image";
import Logo from "@/app/assets/nextway_logo_transparent_4k.png";

const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#Services", label: "Services" },
  { href: "/#Autocars", label: "Autocars" },
  { href: "/#Destinations", label: "Destinations" },
  // { href: "/#DemanderUnDevis", label: "Demander un devis" },
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
                        className="py-1.5 hover:underline"
                        href={link.href}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  <div className="flex flex-col-reverse gap-2 mt-2">
                    <Link href="/contact-us">
                      <button className="relative inline-flex h-8 active:scale-95 transition overflow-hidden rounded-md p-[1px] focus:outline-none whitespace-nowrap">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>

                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 text-xs font-medium text-black backdrop-blur-3xl gap-1">
                          Contactez-nous
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                            height="0.8em"
                            width="0.8em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <a className="text-primary hover:text-primary/90" href="#">
            <div className="flex gap-2">
              <Image src={Logo} alt="logo" priority className="h-20 w-auto" />
              {/* <span className="text-xl font-bold tracking-wider text-black">
                NEXT WAY TRANSPORT
              </span> */}
            </div>
          </a>

          {/* Desktop Navigation menu */}
          <NavigationMenu className="max-md:hidden ml-auto">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={link.active}
                    className={`py-1.5 px-3 font-medium transition-all hover:underline rounded-md hover:bg-transparent cursor-pointer ${
                      link.active
                        ? "text-black bg-[#5226ff] shadow-[0_0_20px_rgba(186,252,12,0.6)]"
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
                className="group relative px-4 py-3 bg-blue-700 text-black font-bold rounded  hover:text-black hover:bg-[#5226ff] transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
                size="sm"
                variant="ghost"
              >
                <Link href="/contact-us">  Contactez-nous</Link>
              </Button> */}
              <Link href="/contact-us">
                <button className="relative inline-flex h-10 active:scale-95 transition overflow-hidden cursor-pointer rounded-lg p-[1px] focus:outline-none">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                    Demander un devis
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                    </svg>
                  </span>
                </button>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
