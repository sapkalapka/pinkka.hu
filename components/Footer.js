const Footer = () => {
  return (
    <footer>
      <p className='font-accent-2 text-center text-4xl py-2 font-bold bg-white border-b-2 border-black my-1'>
        Szeretettel öltve!
      </p>
      <div className='border-t-2 border-dashed h-32 border-black'>
        <div className='footer-menu px-6 lg:px-0 lg:w-4/6 mx-auto grid lg:grid-cols-3'>
          <div>
            <p className='font-bold  mt-6 mb-1'>Információk</p>
            <p>Termékgarancia</p>
            <p>Szállítási információk</p>
            <p>Fizetési információk</p>
          </div>
          <div>
            <p className='font-bold mt-6 mb-1'>Kapcsolat</p>
            <p>Esztergom</p>
            <p>krisztina_karasz@yahoo.com</p>
            <a href='https://facebook.com'>Facebook</a> <br />
            <a href='https://instagram.com'>Instagram</a>
          </div>
          <div>
            <p className='font-bold  mt-6 mb-1'>Termékekről bővebben</p>
            <p>Táskák, hátizsákok</p>
            <p>Kozmetikai neszesszerek </p>
            <p>Könyvtokok</p>
            <p>Apróságok</p>
          </div>
        </div>

        <p className='text-center font-medium mt-8'>
          © 2022 - pinkka.hu - Minden jog fenntartva.
        </p>
      </div>
    </footer>
  )
}

export default Footer
