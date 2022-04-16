import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const Header = () => {
  return (
    <header>
      <div id="logo" className="flex justify-center">
        <Link href="/">
          <a className="text-7xl font-bold font-accent-1 hover:grayscale transition-all">PinKKa</a>
          {/* <Image src={'/logo.png'} objectFit='contain' layout='fill' /> */}
        </Link>
      </div>
      <nav className="grid grid-cols-3 content-center text-center py-2 bg-background text-white font-accent-2 shadow">
        <Link href="/">
          <a className="text-5xl font-bold transition-all uppercase hover:text-black">Rólam</a>
        </Link>
        <Link href="/portfolio">
          <a className="text-5xl font-bold transition-all uppercase hover:text-black">Munkáim</a>
        </Link>
        <Link href="/order">
          <a className="text-5xl font-bold transition-all uppercase hover:text-black">Megrendelés</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
