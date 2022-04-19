import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className='px-6 xl:w-9/12 xl:mx-auto flex items-center gap-12 font-display'>
      <Link href='/'>
        <a className='rounded text-5xl font-bold'>PinKKa</a>
      </Link>
      <Link href='/'>
        <a
          className={`${
            router.pathname === '/' &&
            'underline underline-offset-2 decoration-sky-300 decoration-2'
          } ml-auto text-2xl `}
        >
          Rólam
        </a>
      </Link>
      <Link href='/portfolio'>
        <a
          className={`${
            router.pathname === '/portfolio' &&
            'underline underline-offset-2 decoration-sky-300 decoration-2'
          }  text-2xl `}
        >
          Munkáim
        </a>
      </Link>
      <Link href='/order'>
        <a
          className={`${
            router.pathname === '/order' &&
            'underline underline-offset-2 decoration-sky-300 decoration-2'
          } text-2xl `}
        >
          Rendelés
        </a>
      </Link>
    </header>
  );
};

export default Header;
