import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Header = () => {
    const router = useRouter();

    return (
        <header className="grid grid-cols-2 xl:w-9/12 xl:mx-auto p-6 justify-between items-center border-b">
            <Link href="/">
                <a className="text-cyan-600 text-6xl font-display">pinkka</a>
            </Link>
            <div className="flex justify-end gap-4">
                <Link href="/">
                    <a
                        className={`${
                            router.pathname === '/' && 'font-bold'
                        } text-xl `}
                    >
                        Rólam
                    </a>
                </Link>
                <Link href="/products">
                    <a
                        className={`${
                            router.pathname === '/products' && 'font-bold'
                        }  text-xl `}
                    >
                        Munkáim
                    </a>
                </Link>
                <Link href="/order">
                    <a
                        className={`${
                            router.pathname === '/order' && 'font-bold'
                        } text-xl `}
                    >
                        Rendelés
                    </a>
                </Link>
            </div>
        </header>
    );
};

export default Header;
