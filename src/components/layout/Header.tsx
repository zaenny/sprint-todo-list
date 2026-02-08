import Image from 'next/image';
import Link from 'next/link';
import logoSm from '@/assets/image/logo-sm.png';
import logoLg from '@/assets/image/logo-lg.png';

const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white px-16">
      <div className="mx-auto flex h-60 items-center md:max-w-1200">
        <Link href="/" className="cursor-pointer">
          <Image
            src={logoSm}
            alt="do it log"
            className="block md:hidden"
            width={71}
            height={40}
            priority
          />
          <Image
            src={logoLg}
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
