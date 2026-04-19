import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import Logo from "@/app/assets/nextway_logo_transparent_4k.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#Services" },
    { name: "Autocars", href: "/#Autocars" },
    { name: "Destinations", href: "/#Destinations" },
    { name: "Demander un devis", href: "/#DemanderUnDevis" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Paris France" },
    { icon: Phone, text: "+33 6 28 64 80 16" },
    { icon: Mail, text: "contact@nextway-transport.com" },
  ];

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-[#0e1114] text-white relative overflow-hidden mt-20">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#5226ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8164f3]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8164f3]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-2xl font-bold tracking-tight">
                NEXT WAY <span className="text-[#8164f3]">TRANSPORT</span>
              </span>
              <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-xs">
                Un coordinateur de transport spécialiste pour les entreprises et les agences, partout en France et en Europe.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#8164f3] hover:border-[#8164f3]/50 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8164f3] mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[#8164f3] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8164f3] mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-7 h-7 rounded-md bg-[#8164f3]/10 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-[#8164f3]" />
                  </div>
                  <span className="text-sm text-white/50 leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white text-sm text-center md:text-left">
            &copy; {currentYear} – Designed & developed by{" "}
            <a
              className="underline"
              href="https://www.stallionadvertising.ma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stallion Advertising
            </a>
            .
          </p>

          {/* <div className="flex gap-5">
            {["Services", "Autocars", "Destinations"].map((item) => (
              <a
                key={item}
                href={`/#${item}`}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
