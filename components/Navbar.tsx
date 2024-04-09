import Link from "next/link";
import React from "react";

import { SiGithub, SiX, SiInstagram } from "react-icons/si";

const socials = [
  {
    name: "Github",
    icon: <SiGithub className="w-6 h-6" />,
    link: "https://github.com/mvirgiawancr",
  },
  {
    name: "Github",
    icon: <SiX className="w-6 h-6" />,
    link: "https://x.com/mvirgiawancr",
  },
  {
    name: "Github",
    icon: <SiInstagram className="w-6 h-6" />,
    link: "https://instagram.com/mvirgiawancr",
  },
];

const Navbar = () => {
  return (
    <nav className="h-[100px]">
      <div className="max-w-[1366px] m-auto p-10 md:p-6 flex justify-between items-center h-full">
        <h1>Moch Virgiawan</h1>
        <div className="flex justify-center items-center gap-3">
          {socials.map((social) => (
            <Link href={social.link} key={social.link}>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
