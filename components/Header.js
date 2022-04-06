import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const Header = () => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap'
          rel='stylesheet'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap'
          rel='stylesheet'></link>
      </Head>
      <header>
        <div id='logo' className='flex justify-center py-6'>
          <Link href='/'>
            <a className='text-8xl font-bold font-accent-1 hover:grayscale transition-all'>
              PinKKa
            </a>
            {/* <Image src={'/logo.png'} objectFit='contain' layout='fill' /> */}
          </Link>
        </div>
        <nav className='grid grid-cols-3 content-center text-center py-2 bg-background text-white font-accent-2 shadow'>
          <Link href='/about'>
            <a className='text-5xl font-bold transition-all uppercase hover:text-black'>
              Rólam
            </a>
          </Link>
          <Link href='/portfolio'>
            <a className='text-5xl font-bold transition-all uppercase hover:text-black'>
              Munkáim
            </a>
          </Link>
          <Link href='/order'>
            <a className='text-5xl font-bold transition-all uppercase hover:text-black'>
              Megrendelés
            </a>
          </Link>
        </nav>
      </header>
    </>
  )
}

export default Header
