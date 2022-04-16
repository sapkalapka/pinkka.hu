import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()

  return (
    <header className="bg-[url('/bg.jpg')] bg-contain">
      <nav className="flex gap-4 px-4 py-2 justify-center items-center text-center font-accent-2">
        <Link href="/">
          <a className="rounded shadow-xl bg-white px-4 text-7xl font-bold font-accent-1 transition-all">
            PinKKa
          </a>
        </Link>
        <Link href="/">
          <a
            className={`${
              router.pathname === "/" ? "text-black" : "text-main"
            } ml-auto bg-white max-w-fit px-5 py-1 rounded shadow-xl text-5xl font-bold transition-all`}
          >
            Rólam
          </a>
        </Link>
        <Link href="/portfolio">
          <a
            className={`${
              router.pathname === "/portfolio" ? "text-black" : "text-main"
            } bg-white max-w-fit px-5 py-1 rounded shadow-xl text-5xl font-bold transition-all`}
          >
            Munkáim
          </a>
        </Link>
        <Link href="/order">
          <a
            className={`${
              router.pathname === "/order" ? "text-black" : "text-main"
            } bg-white max-w-fit px-5 py-1 rounded shadow-xl text-5xl font-bold transition-all`}
          >
            Rendelés
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
