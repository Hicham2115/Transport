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
function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#Services" },
    { name: "Autocars", href: "/#AboutUs" },
    { name: "Destinations", href: "/#Destinations" },
    { name: "Demander un devis", href: "/contact-us" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "123 Rue Mohammed V, Casablanca" },
    { icon: Phone, text: "+212 6 00 00 00 00" },
    { icon: Mail, text: "contact@demoname.ma" },
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
                DEMO <span className="text-[#8164f3]">NAME</span>
              </span>
              <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-xs">
                Voyagez en toute sérénité. Transport premium, destinations
                inoubliables.
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
          <p className="text-xs text-white/30">
            &copy; {currentYear} DEMO NAME. Tous droits réservés.
          </p>

          <div className="flex gap-5">
            {["Services", "Autocars", "Destinations"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
