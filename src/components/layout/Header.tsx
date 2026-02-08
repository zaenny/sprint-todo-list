import Image from 'next/image';

const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white px-16">
      <div className="mx-auto flex h-60 items-center md:max-w-1200">
        <a href="/" className="cursor-pointer">
          <Image
            src="/image/logo-sm.png"
            alt="do it log"
            className="block md:hidden"
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
        </a>
      </div>
    </header>
  );
};

export default Header;
