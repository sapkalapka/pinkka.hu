import { BsShieldFillCheck, BsFacebook } from "react-icons/bs"
import { MdPayments, MdLocationPin, MdEmail, MdBackpack } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"
import { FaTruck } from "react-icons/fa"
import Link from "next/link"
const Footer = () => {
  let handleCopy = (e) => {
    navigator.clipboard.writeText(e.target.textContent)
    alert(`Email cím kimásolva!`)
  }

  return (
    <footer>
      <p className="font-accent-2 text-center text-4xl py-2 font-bold bg-white border-b-2 border-black my-1">
        Szeretettel öltve!
      </p>
      <div className="border-t-2 border-dashed border-black">
        <div className="lg:w-4/6 mx-auto grid md:grid-cols-2 px-6 md:gap-32">
          <div className="grid md:justify-end">
            <p className="font-bold mt-6 mb-1">Információk</p>
            <Link href="/warranty">
              <a>
                <BsShieldFillCheck className="inline-block mr-2" />
                <span>Termékgarancia</span>
              </a>
            </Link>
            <Link href="/shipping">
              <a>
                <FaTruck className="inline-block mr-2" />
                <span>Szállítási információk</span>
              </a>
            </Link>
            <Link href="/payment">
              <a>
                <MdPayments className="inline-block mr-2" />
                <span>Fizetési információk</span>
              </a>
            </Link>
          </div>
          <div className="grid">
            <p className="font-bold mt-6 mb-1">Kapcsolat</p>
            <div>
              <MdLocationPin className="inline-block mr-2" />
              <span>Esztergom</span>
            </div>
            <div className="cursor-pointer" onClick={(e) => handleCopy(e)}>
              <MdEmail className="inline-block mr-2" />
              <span>krisztina_karasz@yahoo.com</span>
            </div>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/krisztina.jaszberenyinekarasz">
              <BsFacebook className="inline-block mr-2" />
              <span>krisztina.jaszberenyinekarasz</span>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/krisztina.karasz">
              <AiFillInstagram className="inline-block mr-2" />
              <span>krisztina.karasz</span>
            </a>
          </div>
        </div>

        <p className="text-center text-sm font-medium my-6">© 2022 - pinkka.hu - Minden jog fenntartva.</p>
      </div>
    </footer>
  )
}

export default Footer
