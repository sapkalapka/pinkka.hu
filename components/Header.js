import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Header = () => {
    const router = useRouter();

    return (
        <header className="px-6 xl:w-10/12 xl:mx-auto grid gap-4 justify-evenly text-center sm:flex">
            <Link href="/">
                <a className="rounded text-5xl font-bold font-display">
                    pin<span className="text-sky-400">KK</span>a
                </a>
            </Link>
            <div className="flex items-end gap-4 sm:gap-8 sm:ml-auto font-display">
                <Link href="/">
                    <a
                        className={`${
                            router.pathname === '/' &&
                            'underline underline-offset-2 decoration-sky-400 decoration-2'
                        } text-2xl `}
                    >
                        Rólam
                    </a>
                </Link>
                <Link href="/products">
                    <a
                        className={`${
                            router.pathname === '/products' &&
                            'underline underline-offset-2 decoration-sky-400 decoration-2'
                        }  text-2xl `}
                    >
                        Munkáim
                    </a>
                </Link>
                <Link href="/order">
                    <a
                        className={`${
                            router.pathname === '/order' &&
                            'underline underline-offset-2 decoration-sky-400 decoration-2'
                        } text-2xl `}
                    >
                        Rendelés
                    </a>
                </Link>
            </div>
        </header>
    );
};

export default Header;
