import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()

  return (
    <header className="shadow bg-blue-100">
      <nav className="px-6 lg:w-9/12 lg:mx-auto flex items-center gap-12">
        <Link href="/">
          <a className="rounded text-7xl font-bold font-accent-1">PinKKa</a>
        </Link>
        <Link href="/">
          <a
            className={`${
              router.pathname === "/" ? "text-black" : "text-blue-900"
            } ml-auto text-2xl font-bold`}
          >
            Rólam
          </a>
        </Link>
        <Link href="/portfolio">
          <a
            className={`${
              router.pathname === "/portfolio" ? "text-black" : "text-blue-900"
            } text-2xl font-bold`}
          >
            Munkáim
          </a>
        </Link>
        <Link href="/order">
          <a
            className={`${
              router.pathname === "/order" ? "text-black" : "text-blue-900"
            } text-2xl font-bold`}
          >
            Rendelés
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
