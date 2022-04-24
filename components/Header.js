import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Header = () => {
    const router = useRouter();

    return (
        <header className="px-6 grid grid-cols-[20rem,1fr] gap-4 justify-evenly items-start text-center ">
            {/* <Link href="/">
                <a className="rounded text-5xl font-bold font-display">
                    pin<span className="text-cyan-700">KK</span>a
                </a>
            </Link> */}
            <div>
                <img src="/logo-big.png" width="100%" className="invert" />
            </div>

            <div className="flex items-end gap-4 sm:gap-8 sm:ml-auto font-display">
                <Link href="/">
                    <a
                        className={`${
                            router.pathname === '/' &&
                            'underline underline-offset-2 decoration-cyan-700 decoration-2'
                        } text-2xl `}
                    >
                        Rólam
                    </a>
                </Link>
                <Link href="/products">
                    <a
                        className={`${
                            router.pathname === '/products' &&
                            'underline underline-offset-2 decoration-cyan-700 decoration-2'
                        }  text-2xl `}
                    >
                        Munkáim
                    </a>
                </Link>
                <Link href="/order">
                    <a
                        className={`${
                            router.pathname === '/order' &&
                            'underline underline-offset-2 decoration-cyan-700 decoration-2'
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
