'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { NAV_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import logo from '@/public/assets/images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container flex justify-between items-center py-8">
        <Link href="/" className="relative h-auto w-[60px]">
          <Image src={logo} alt="logo" />
        </Link>

        <nav className="hidden">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu md:hidden mr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className={cn(
                'origin-left transition',
                isOpen && 'rotate-45 -translate-y-1',
              )}
            ></line>
            {/* <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className={cn('transition', isOpen && 'opacity-0')}
            ></line> */}
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className={cn(
                'origin-left transition',
                isOpen && '-rotate-45 translate-y-1',
              )}
            ></line>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
