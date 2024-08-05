import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-900/40 p-2 m-2 rounded-sm border-b-2 border-cyan-400">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map(({ path, text }) => (
        <ActiveLink key={path} path={path} text={text} />
      ))}
    </nav>
  );
};
