import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full">
      <div className="container mx-auto flex h-60 items-center md:max-w-1200">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/image/logo-sm.png"
            alt="do it log"
            className="bolock md:hidden"
            width={71}
            height={40}
            priority
          />
          <Image
            src="/image/logo-lg.png"
            alt="do it log"
            className="hidden md:block"
            width={151}
            height={40}
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
